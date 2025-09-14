<?php

namespace App\Mail;

use Illuminate\Bus\Queueable;
use Illuminate\Mail\Mailable;
use Illuminate\Queue\SerializesModels;

class CvMail extends Mailable
{
    use Queueable, SerializesModels;

    public $firstName;
    public $lastName;
    public $pdfPath;

    public function __construct($firstName, $lastName, $pdfPath)
    {
        $this->firstName = $firstName;
        $this->lastName = $lastName;
        $this->pdfPath = $pdfPath;
    }

    public function build()
    {
        return $this->from(config('mail.from.address'), config('mail.from.name'))
                    ->subject('Önéletrajzod')
                    ->markdown('emails.cv')
                    ->attach($this->pdfPath, [
                        'as' => "CV_{$this->firstName}_{$this->lastName}.pdf",
                        'mime' => 'application/pdf',
                    ]);
    }
}
