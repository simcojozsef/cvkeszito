<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Education;

class EducationController extends Controller
{
    public function index($personal_data_id)
    {
        $educations = Education::where('personal_data_id', $personal_data_id)->get();
        return response()->json($educations);
    }

    public function store(Request $request)
    {
        $validated = $request->validate([
            'personal_data_id' => 'required|exists:personal_data,id',
            'school' => 'required|string|max:255',
            'degree' => 'nullable|string|max:255',
            'field_of_study' => 'nullable|string|max:255',
            'start_date' => 'required|date',
            'end_date' => 'nullable|date|after_or_equal:start_date',
            'description' => 'nullable|string',
        ]);

        $education = Education::create($validated);

        return response()->json([
            'message' => 'Education saved successfully!',
            'data' => $education,
        ]);
    }

    public function update(Request $request, Education $education)
    {
        $validated = $request->validate([
            'school' => 'required|string|max:255',
            'degree' => 'nullable|string|max:255',
            'field_of_study' => 'nullable|string|max:255',
            'start_date' => 'required|date',
            'end_date' => 'nullable|date|after_or_equal:start_date',
            'description' => 'nullable|string',
        ]);

        $education->update($validated);

        return response()->json(['message' => 'Education updated!', 'data' => $education]);
    }

    public function destroy(Education $education)
    {
        $education->delete();
        return response()->json(['message' => 'Education deleted!']);
    }
}
