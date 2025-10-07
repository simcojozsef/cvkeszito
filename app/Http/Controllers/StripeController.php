<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Stripe\Stripe;
use Stripe\Checkout\Session;
use App\Models\CvPurchase;
use App\Models\User;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Str;
use Illuminate\Support\Facades\Hash;
use Inertia\Inertia;
use Mail;
use App\Mail\CvPurchaseMail;
use App\Mail\NewUserCredentialsMail;

class StripeController extends Controller
{
    // Create Stripe session
    public function createSession(Request $request)
    {
        $pdfUrl = $request->input('pdfUrl');

        // Set your secret key
        Stripe::setApiKey(env('STRIPE_SECRET_KEY'));

        $session = Session::create([
            'payment_method_types' => ['card'],
            'mode' => 'payment',
            'line_items' => [[
                'price_data' => [
                    'currency' => 'huf',
                    'product_data' => [
                        'name' => 'Önéletrajz Letöltés',
                    ],
                    'unit_amount' => 259900,
                ],
                'quantity' => 1,
            ]],
            'success_url' => 'https://cvkeszito.hu/success?pdfUrl=' . urlencode($pdfUrl) . '&session_id={CHECKOUT_SESSION_ID}',
            'cancel_url' => 'https://cvkeszito.hu/cancel',
        ]);

        return response()->json(['id' => $session->id]);
    }

    // Handle successful payment
public function handleSuccess(Request $request)
{
    $pdfUrl = $request->query('pdfUrl');
    $stripeSessionId = $request->query('session_id');

    if ($stripeSessionId) {
        // Retrieve session from Stripe
        $session = Session::retrieve($stripeSessionId);

        if ($session->payment_status === 'paid') {

            // Determine the user
            if (Auth::check()) {
                $user = Auth::user();
            } else {
                $email = $session->customer_details->email ?? null;
                if (!$email) {
                    return response()->json(['error' => 'Email not found in Stripe session'], 400);
                }

                $password = Str::random(12);
                $user = User::firstOrCreate(
                    ['email' => $email],
                    [
                        'name' => $email,
                        'password' => Hash::make($password),
                    ]
                );

                if ($user->wasRecentlyCreated) {
                    Mail::to($user->email)->send(new NewUserCredentialsMail($user->email, $password, $pdfUrl));
                }
            }

            // Store the purchase in CvPurchase
            $purchase = CvPurchase::updateOrCreate(
                ['stripe_session_id' => $stripeSessionId],
                [
                    'personal_data_id' => $user->personalData->id ?? null, // link to PersonalData
                    'pdf_url' => $pdfUrl,
                    'template' => $request->query('template') ?? null,
                ]
            );

            // Generate invoice via SzamlazzHuController
            $szamlazzController = new \App\Http\Controllers\SzamlazzHuController();
            $invoiceResponse = $szamlazzController->createInvoice(new \Illuminate\Http\Request([
                'cv_purchase_id' => $purchase->id
            ]));

            if ($invoiceResponse->getData()->success) {
                $invoiceNumber = $invoiceResponse->getData()->invoice_number;
                // Optional: log or store somewhere if needed
            } else {
                // Handle failed invoice creation
                \Log::error('Invoice creation failed', ['purchase_id' => $purchase->id]);
            }

            // Send CV link email
            Mail::to($user->email)->send(new CvPurchaseMail($pdfUrl));
        }
    }

    // Render React PaymentSuccess page
    return Inertia::render('PaymentSuccess', [
        'pdfUrl' => $pdfUrl,
    ]);
}
}
