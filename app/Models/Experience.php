<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Experience extends Model
{
    use HasFactory;

    protected $fillable = [
        'personal_data_id',
        'company',
        'position',
        'start_date',
        'end_date',
        'description',
    ];

    public function personalData()
    {
        return $this->belongsTo(PersonalData::class);
    }
}
