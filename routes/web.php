<?php
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use Barryvdh\DomPDF\Facade\Pdf;
use App\Models\PersonalData;
use App\Http\Controllers\BlogController;

// Home route
Route::get('/', function () {
    return Inertia::render('Welcome', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
    ]);
});

// Dashboard
Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

// Auth routes

/*
Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});
*/

require __DIR__.'/auth.php';


// Menu routes
Route::get('/', function () {
    return Inertia::render('Welcome');
});

Route::get('/oneletrajz-keszitese', function () {
    return Inertia::render('OneletrajzKeszitese');
})->name('oneletrajz.keszitese');

Route::get('/oneletrajz-sablonok', function () {
    return Inertia::render('OneletrajzSablonok');
})->name('oneletrajz.sablonok');

Route::get('/blog', function () {
    return Inertia::render('Blog');
})->name('blog');

Route::get('/arazas', function () {
    return Inertia::render('Arazas');
})->name('arazas');

Route::get('/kapcsolat', function () {
    return Inertia::render('Kapcsolat');
})->name('kapcsolat');




/*Legal*/

Route::get('/privacy-policy', function () {
    return Inertia::render('Adatvedelem');
})->name('adatvedelem');

Route::get('/cookie-policy', function () {
    return Inertia::render('SutiTajekoztato');
})->name('suti.tajekoztato');

Route::get('/terms-and-conditions', function () {
    return Inertia::render('AltalanosSzerzodesiFeltetelek'); 
})->name('altalanos.szerzodesi.feltetelek');



/*Form routes*/
Route::get('/createcv/personal-data', function () {
    return Inertia::render('CreateCvPersonal');
})->name('createcv.personal');

Route::get('/createcv/experience', function () {
    return Inertia::render('CreateCvExperience');
})->name('createcv.experience');

Route::get('/createcv/education', function () {
    return Inertia::render('CreateCvEducation');
})->name('createcv.education');

Route::get('/createcv/template', function () {
    return Inertia::render('CreateCvTemplate');
})->name('createcv.template');






/* template routes */


Route::get('/cv/pdf/{id}/{template}', function ($id, $template) {
    $personalData = PersonalData::with(['experiences', 'educations'])->findOrFail($id);

    $availableTemplates = ['template1','template2','template3','template4','template5','template6', 'template7','template8','template9'];
    if (!in_array($template, $availableTemplates)) {
        abort(404, 'A sablont nem találtuk.');
    }

    $fonts = [
        'template1' => 'Montserrat',
        'template2' => 'Poppins',
        'template3' => 'Poppins',
        'template4' => 'Poppins',
        'template5' => 'Source Sans Pro',
        'template6' => 'Prata',
        'template7' => 'Montserrat',
        'template8' => 'Montserrat',
        'template9' => 'Montserrat',
    ];

    $defaultFont = $fonts[$template] ?? 'Montserrat';

    $pdf = Pdf::loadView("cv-templates.$template", [
        'personalData' => $personalData,
        'experiences' => $personalData->experiences,
        'educations' => $personalData->educations,
        'defaultFont' => $defaultFont,
    ]);

    $pdf->setOptions([
        'defaultFont' => $defaultFont,
        'isRemoteEnabled' => true,
    ]);

    $pdf->setPaper('a4', 'portrait');

    return response($pdf->output(), 200)
        ->header('Content-Type', 'application/pdf')
        ->header('Content-Disposition', 'inline; filename="cv-'.$template.'.pdf"')
        ->header('Access-Control-Allow-Origin', '*'); 
});



/* Create route for pdf generation*/
Route::get('/cv/pdf/{id}', function ($id) {
    $personalData = PersonalData::with(['experiences', 'educations'])->findOrFail($id);

    $pdf = Pdf::loadView('cv-template', [
        'personalData' => $personalData,
        'experiences' => $personalData->experiences,
        'educations' => $personalData->educations,
        'defaultFont' => 'Montserrat',
    ]);

    return $pdf->stream('cv.pdf'); 
});




// html routes
Route::get('/cv/html/{id}/{template}', function ($id, $template) {
    $personalData = PersonalData::with(['experiences', 'educations'])->findOrFail($id);

    $availableTemplates = ['template1','template2','template3','template4','template5','template6', 'template7','template8','template9'];
    if (!in_array($template, $availableTemplates)) {
        abort(404, 'A sablont nem találtuk.');
    }

    // Return the Blade template directly in the browser
    return view("cv-templates.$template", [
        'personalData' => $personalData,
        'experiences' => $personalData->experiences,
        'educations' => $personalData->educations,
    ]);
});


/*test*/

Route::get('/cv/view/{personalDataId}', function($personalDataId){
    $personalData = \App\Models\PersonalData::findOrFail($personalDataId);
    $experiences = $personalData->experiences;
    $educations = $personalData->educations;

    return view('cv-templates.template1.index', compact('personalData', 'experiences', 'educations'));
});



// Blog lista
Route::get('/blog', function () {
    return Inertia::render('Blog');
});

// Blog cikk
Route::get('/blog/{slug}', function ($slug) {
    return Inertia::render('PostPage', [
        'slug' => $slug, // ha akarod átadni React-nek
    ]);
})->where('slug', '[A-Za-z0-9\-]+');


// Stripe redirect to success page
Route::get('/success', function () {
    return view('app'); 
});

Route::get('/success', function () {
    return Inertia::render('PaymentSuccess'); 
});

Route::get('/cancel', function () {
    return redirect('https://cvkeszito.hu/createcv/template');
});

