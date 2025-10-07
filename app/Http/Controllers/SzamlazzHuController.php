<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use SzamlaAgent\SzamlaAgentAPI;
use SzamlaAgent\Buyer;
use SzamlaAgent\Item\InvoiceItem;
use SzamlaAgent\Document\Invoice\Invoice;
use App\Models\CvPurchase;

class SzamlazzHuController extends Controller
{
    protected $agent;

    public function __construct()
    {
        $this->agent = SzamlaAgentAPI::create(env('SZAMLAZZ_AGENT_KEY'));
    }

    public function createInvoice(Request $request)
    {
        $request->validate([
            'cv_purchase_id' => 'required|exists:cv_purchases,id',
        ]);

        $purchase = CvPurchase::findOrFail($request->cv_purchase_id);
        $user = $purchase->personalData;

        $invoice = new Invoice(Invoice::INVOICE_TYPE_E_INVOICE);
        $invoice->getHeader()
                ->setInvoiceNumber('INV-' . time())
                ->setInvoiceDate(now()->format('Y-m-d'))
                ->setDueDate(now()->format('Y-m-d'))
                ->setCurrency('HUF')
                ->setLanguage('hu');

        $buyer = new Buyer();
        $buyer->setName($user->first_name . ' ' . $user->last_name)
            ->setZip($user->zip ?? '0000')
            ->setCity($user->city ?? 'Budapest')
            ->setAddress($user->address ?? 'Unknown')
            ->setEmail($user->email);

        $invoice->setBuyer($buyer);

        $item = new InvoiceItem();
        $item->setName('CV Service')
             ->setUnit('db')
             ->setQuantity(1)
             ->setUnitPrice(2599)
             ->setVat(27)
             ->setNetAmount(round(2599 / 1.27, 2))
             ->setGrossAmount(2599);

        $invoice->addItem($item);

        $response = $this->agent->createInvoice($invoice);

        if ($response->isSuccess()) {
            // Save invoice number in CvPurchase
            $purchase->update(['invoice_number' => $response->getDocumentNumber()]);

            return response()->json([
                'success' => true,
                'invoice_number' => $response->getDocumentNumber(),
            ]);
        } else {
            return response()->json([
                'success' => false,
                'error' => $response->getErrorMessage(),
            ], 500);
        }
    }
}
