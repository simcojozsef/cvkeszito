<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Education extends Model
{
    use HasFactory;

    protected $table = 'educations'; 
    protected $fillable = [
        'personal_data_id',
        'school',
        'degree',
        'field_of_study',
        'start_date',
        'end_date',
        'description',
    ];

    public function personalData()
    {
        return $this->belongsTo(PersonalData::class);
    }
}
