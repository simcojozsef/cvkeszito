<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\PersonalData;

class PersonalDataController extends Controller
{
    public function store(Request $request)
    {
        $validated = $request->validate([
            'first_name' => 'required|string|max:255',
            'last_name' => 'required|string|max:255',
            'email' => 'required|email|unique:personal_data,email',
            'phone' => 'nullable|string|max:20',
            'address' => 'nullable|string|max:255',
            'profile_picture' => 'nullable|image|mimes:jpg,jpeg,png|max:2048',
            'introduction' => 'nullable|string|max:1000',
        ]);

        if ($request->hasFile('profile_picture')) {
        $path = $request->file('profile_picture')->store('profile_pictures', 'public');
        $validated['profile_picture'] = $path;
    }

        $personalData = PersonalData::create($validated);

        return response()->json([
            'message' => 'Personal data saved successfully!',
            'data'    => [
                'id' => $personalData->id,
                'first_name' => $personalData->first_name,
                'last_name' => $personalData->last_name,
                'email' => $personalData->email,
                'phone' => $personalData->phone,
                'address' => $personalData->address,
                'introduction' => $personalData->introduction,
                'profile_picture' => $personalData->profile_picture 
                    ? asset('storage/' . $personalData->profile_picture) 
                    : null,
            ]
        ]);
    }
}


