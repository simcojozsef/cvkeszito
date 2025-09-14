<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Mail;
use App\Mail\ContactFormMail;

class ContactController extends Controller
{

    public function send(Request $request)
{
    $data = $request->validate([
        'vezeteknev' => 'required|string|max:100',
        'keresztnev' => 'required|string|max:100',
        'email'      => 'required|email',
        'telefon'    => 'nullable|string|max:30',
        'uzenet'     => 'required|string',
    ]);

    try {
        Mail::to('simcojozsef@gmail.com')->send(new ContactFormMail($data));

        return response()->json(['message' => 'Üzenet sikeresen elküldve!']);
    } catch (\Exception $e) {
        \Log::error('Contact form error: '.$e->getMessage());
        return response()->json([
            'message' => 'Hiba történt az üzenet küldésekor.'
        ], 500);
    }
}

}
