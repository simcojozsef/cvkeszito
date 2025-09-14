<!DOCTYPE html>
<html>
    <head>
        <meta charset="UTF-8">
        <title>CV - {{ $personalData->first_name }} {{ $personalData->last_name }}</title>
        <!-- Nunito and Open Sans -->
        <link href="https://fonts.googleapis.com/css2?family=Nunito:wght@300;400;500;600;700&family=Open+Sans:wght@300;400;500;600;700&display=swap" rel="stylesheet">
        <style>
            @page {
                margin: 0;
            }

            body {
                margin: 0;
                padding: 0;
            }
        </style>
        </head>
        <body>

  <div data-layer="Rectangle 398" class="Rectangle398" style="width: 794px; height: 1123px; left: 0px; top: 0px; position: absolute; background: white"></div>
  
@php
    $max_items = 3;

    // Base positions
    $base_experience_top = 342;
    $base_education_top = 342;

    // Spacing between items
    $experience_spacing = 180; 
    $education_spacing = 180; 
@endphp

<!-- EXPERIENCE -->
@foreach($experiences->take($max_items) as $index => $exp)
<div data-layer="Experience" class="Experience" 
     style="width: 322px; left: 34px; top: {{ $base_experience_top + ($index * $experience_spacing) }}px; position: absolute; flex-direction: column; justify-content: flex-start; align-items: flex-start; gap: 8px; display: inline-flex">
  <div class="Header" style="align-self: stretch; flex-direction: column; gap: 6px; display: flex">
    <div class="ExperienceSubtitle" style="color: #1E1E1E; font-size: 12px; font-family: Open Sans; font-weight: 700;">
      {{ $exp->company }}
    </div>
    <div class="ExperiencePosition" style="color: #670197; font-size: 12px; font-family: Open Sans; font-weight: 500;">
      {{ $exp->position }}
    </div>
    <div class="ExperienceDate" style="color: #474747; font-size: 10px; font-family: Open Sans; font-weight: 400; line-height: 15px;">
      {{ $exp->start_date }} - {{ $exp->end_date ?? 'Jelenleg' }}
    </div>
  </div>
  <div class="ExperienceDescription" style="color: #5F5F5F; font-size: 10px; font-family: Open Sans; font-weight: 400; line-height: 15px;">
    {{ $exp->description }}
  </div>
</div>
@endforeach

<!-- EDUCATION -->
@foreach($educations->take($max_items) as $index => $edu)
<div data-layer="Education" class="Education" 
     style="width: 317px; left: 437px; top: {{ $base_education_top + ($index * $education_spacing) }}px; position: absolute; flex-direction: column; justify-content: flex-start; align-items: flex-start; gap: 8px; display: inline-flex">
  <div class="Header" style="align-self: stretch; flex-direction: column; gap: 6px; display: flex">
    <div class="EducationSubtitle" style="color: #1E1E1E; font-size: 12px; font-family: Open Sans; font-weight: 700;">
      {{ $edu->school }}
    </div>
    <div class="EducationPosition" style="color: #670197; font-size: 12px; font-family: Open Sans; font-weight: 500;">
      {{ $edu->field_of_study }}
    </div>
    <div class="EducationDate" style="color: #474747; font-size: 10px; font-family: Open Sans; font-weight: 400; line-height: 15px;">
      {{ $edu->start_date }} - {{ $edu->end_date ?? 'Jelenleg' }}
    </div>
  </div>
  <div class="EducationDescription" style="color: #5F5F5F; font-size: 10px; font-family: Open Sans; font-weight: 400; line-height: 15px;">
    {{ $edu->description }}
  </div>
</div>
@endforeach



  <!-- HEADER -->
  <div data-layer="Header" class="Header" style="width: 477px; height: 167px; left: 253px; top: 45px; position: absolute; justify-content: flex-start; align-items: flex-start; gap: 17px; display: inline-flex">
    <div data-layer="Content" class="Content" style="flex: 1 1 0; flex-direction: column; justify-content: flex-start; align-items: flex-start; gap: 8px; display: inline-flex">
      <div data-layer="Name and Title" class="NameAndTitle" style="align-self: stretch; flex-direction: column; justify-content: flex-start; align-items: flex-start; display: flex">
        <div data-layer="CONTACT_NAME" class="ContactName" style="align-self: stretch; justify-content: center; display: flex; flex-direction: column; color: #232323; font-size: 32px; font-family: Abhaya Libre ExtraBold; font-weight: 800; text-transform: uppercase; word-wrap: break-word">{{ $personalData->first_name }} {{ $personalData->last_name }}</div>
      </div>
      <div data-layer="CONTACT_INTRODUCTION" class="ContactIntroduction" style="align-self: stretch; justify-content: center; display: flex; flex-direction: column; color: #6A6A6A; font-size: 10px; font-family: Open Sans; font-weight: 400; line-height: 15px; word-wrap: break-word">{{ $personalData->introduction }}</div>
      <div data-layer="Contact" class="Contact" style="justify-content: flex-start; gap: 2px; display: inline-flex">
        <div data-layer="CONTACT_PHONE" class="ContactPhone" style="text-align: left; color: rgba(0, 0, 0, 0.60); font-size: 12px; font-family: Nunito; font-weight: 500; word-wrap: break-word">{{ $personalData->phone }}</div>
        <div data-layer="CONTACT_EMAIL" class="ContactEmail" style="text-align: left; color: rgba(0, 0, 0, 0.60); font-size: 12px; font-family: Nunito; font-weight: 500; word-wrap: break-word">{{ $personalData->email }}</div>
        <div data-layer="CONTACT_ADDRESS" class="ContactAddress" style="text-align: left; color: rgba(0, 0, 0, 0.60); font-size: 12px; font-family: Nunito; font-weight: 500; word-wrap: break-word">{{ $personalData->address }}</div>
      </div>
    </div>
  </div>

  <div data-layer="EXPERIENCE_TITLE" class="ExperienceTitle" style="width: 322px; left: 34px; top: 280px; position: absolute; justify-content: center; display: flex; flex-direction: column; color: #232323; font-size: 26px; font-family: Abhaya Libre ExtraBold; font-weight: 800; text-transform: uppercase; word-wrap: break-word">TAPASZTALATOK</div>
  <div data-layer="EDUCATION_TITLE" class="EducationTitle" style="width: 317px; left: 436px; top: 280px; position: absolute; justify-content: center; display: flex; flex-direction: column; color: #232323; font-size: 26px; font-family: Abhaya Libre ExtraBold; font-weight: 800; text-transform: uppercase; word-wrap: break-word">TANULMÁNYOK</div>
  <div data-layer="Rectangle 399" class="Rectangle399" style="width: 3px; height: 843px; left: 397px; top: 280px; position: absolute; background: #670197"></div>

 <!-- Profile Picture -->
@if(!empty($personalData->profile_picture) && file_exists(public_path('storage/' . $personalData->profile_picture)))
    @php
        $imagePath = public_path('storage/' . $personalData->profile_picture);
        $imageData = base64_encode(file_get_contents($imagePath));
        $imageExt = pathinfo($imagePath, PATHINFO_EXTENSION);
    @endphp
    <img src="data:image/{{ $imageExt }};base64,{{ $imageData }}" 
         alt="Profile Picture" 
         style="width: 200px; height: 200px; left: 44px; top: 51px; position: absolute; object-fit: cover; border-radius: 14px;" />
@else
    <!-- Optional fallback placeholder -->
    <div style="width: 200px; height: 200px; left: 44px; top: 51px; position: absolute; background: #D9D9D9; border-radius: 14px;"></div>
@endif


          </body>
</html>
