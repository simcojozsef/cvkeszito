<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class CvPurchase extends Model
{
    use HasFactory;

    protected $fillable = [
        'personal_data_id',
        'pdf_url',
        'stripe_session_id',
        'invoice_number',
        'template',
    ];

    public function personalData()
    {
        return $this->belongsTo(PersonalData::class);
    }
}
