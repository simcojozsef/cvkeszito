<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Experience;

class ExperienceController extends Controller
{
    public function store(Request $request)
    {
        $validated = $request->validate([
            'personal_data_id' => 'required|exists:personal_data,id',
            'company' => 'required|string|max:255',
            'position' => 'required|string|max:255',
            'start_date' => 'required|date',
            'end_date' => 'nullable|date|after_or_equal:start_date',
            'description' => 'nullable|string',
        ]);

        $experience = Experience::create($validated);

        return response()->json([
            'message' => 'Experience saved successfully!',
            'data' => $experience,
        ]);
    }

    public function update(Request $request, Experience $experience)
    {
        $validated = $request->validate([
            'company' => 'required|string|max:255',
            'position' => 'required|string|max:255',
            'start_date' => 'required|date',
            'end_date' => 'nullable|date|after_or_equal:start_date',
            'description' => 'nullable|string',
        ]);

        $experience->update($validated);

        return response()->json(['message' => 'Experience updated!', 'data' => $experience]);
    }

    public function destroy(Experience $experience)
    {
        $experience->delete();
        return response()->json(['message' => 'Experience deleted!']);
    }

    public function index($personal_data_id)
    {
        $experiences = Experience::where('personal_data_id', $personal_data_id)->get();
        return response()->json($experiences);
    }
}
