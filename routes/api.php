<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\PersonalDataController;
use App\Http\Controllers\ExperienceController;
use App\Http\Controllers\EducationController;
use App\Http\Controllers\ContactController;
use App\Http\Controllers\StripeController;
use Illuminate\Support\Facades\Mail;
use App\Mail\CvMail;

Route::post('/contact', [ContactController::class, 'send']);

Route::post('/create-stripe-session', [StripeController::class, 'createSession']);


// Route::post('/contact', [ContactController::class, 'send']);
Route::post('/personal-data', [PersonalDataController::class, 'store']);

Route::get('/experiences/{personal_data_id}', [ExperienceController::class, 'index']);
Route::post('/experiences', [ExperienceController::class, 'store']);
Route::put('/experiences/{experience}', [ExperienceController::class, 'update']);
Route::delete('/experiences/{experience}', [ExperienceController::class, 'destroy']);

Route::get('/educations/{personal_data_id}', [EducationController::class, 'index']);
Route::post('/educations', [EducationController::class, 'store']);
Route::put('/educations/{education}', [EducationController::class, 'update']);
Route::delete('/educations/{education}', [EducationController::class, 'destroy']);





Route::post('/send-cv-email', function (\Illuminate\Http\Request $request) {
    $request->validate([
        'email' => 'required|email',
        'firstName' => 'required|string',
        'lastName' => 'required|string',
        'userId' => 'required|integer',
        'templateId' => 'required|string',
    ]);

    $personalData = \App\Models\PersonalData::with(['experiences','educations'])->findOrFail($request->userId);

    // Generate PDF using DomPDF
    $pdf = \Barryvdh\DomPDF\Facade\Pdf::loadView("cv-templates.{$request->templateId}", [
        'personalData' => $personalData,
        'experiences' => $personalData->experiences,
        'educations' => $personalData->educations,
        'defaultFont' => 'Montserrat',
    ]);

    // ✅ Add this here — save PDF to disk
    if (!file_exists(storage_path('app/cv/pdf'))) {
        mkdir(storage_path('app/cv/pdf'), 0777, true);
    }
    $pdfPath = storage_path("app/cv/pdf/{$request->userId}_{$request->templateId}.pdf");
    file_put_contents($pdfPath, $pdf->output());

    // Then attach to email
    try {
        \Illuminate\Support\Facades\Mail::to($request->email)
            ->send(new \App\Mail\CvMail($request->firstName, $request->lastName, $pdfPath));

        return response()->json(['success' => true]);
    } catch (\Exception $e) {
        return response()->json(['success' => false, 'message' => $e->getMessage()], 500);
    }
});
