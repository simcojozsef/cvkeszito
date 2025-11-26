<!DOCTYPE html>
<html>
    <head>
        <meta charset="UTF-8">
        <title>CV - {{ $personalData->first_name }} {{ $personalData->last_name }}</title>
        <!-- Poppins with latin-ext (Hungarian support) -->
        <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap&subset=latin-ext" rel="stylesheet">
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
  <div data-layer="BACKGROUND" class="Background" style="width: 794px; height: 1123px; left: 0px; top: 0px; position: absolute; background: #F7F7FC">
    <div data-layer="LINE_AROUND" class="LineAround" style="width: 744px; height: 1070px; left: 22px; top: 27px; position: absolute; border-radius: 19px; border: 4px #E8E8E8 solid"></div>
    
    <!-- Profile Picture -->
    <div data-layer="CONTACT_PROFILE" class="ContactProfile" style="width: 231px; height: 222px; left: 44px; top: 51px; position: absolute; background: #7A61B4; border-radius: 14px; overflow: hidden; display: flex; justify-content: center; align-items: center;">
         @if(!empty($personalData->profile_picture) && file_exists(public_path('storage/' . $personalData->profile_picture)))
            @php
                $imagePath = public_path('storage/' . $personalData->profile_picture);
                $imageData = base64_encode(file_get_contents($imagePath));
                $imageExt = pathinfo($imagePath, PATHINFO_EXTENSION);
            @endphp
            <img src="data:image/{{ $imageExt }};base64,{{ $imageData }}" 
                 alt="Profile Picture" 
                 style="width: 100%; height: 100%; object-fit: cover; border-radius: 14px;" />
        @endif
    </div>

    <div data-layer="CONTACT_NAME" class="ContactName" style="left: 349px; top: 51px; position: absolute">
        <span style="color: #545454; font-size: 26px; font-family: Poppins; font-weight: 700; text-transform: uppercase; letter-spacing: 0.13px; word-wrap: break-word">
            {{ $personalData->first_name }}
        </span>
        <span style="color: #545454; font-size: 26px; font-family: Poppins; font-weight: 700; text-transform: uppercase; letter-spacing: 0.13px; word-wrap: break-word">
            {{ $personalData->last_name }}
        </span>
    </div>

    <div data-layer="INTRODUCTION_TITLE" class="IntroductionTitle" style="left: 44px; top: 301px; position: absolute; color: #545454; font-size: 16px; font-family: Poppins; font-weight: 700; letter-spacing: 0.11px; word-wrap: break-word">BEMUTATKOZÁS</div>
    <div data-layer="EXPERIENCE_TITLE" class="ExperienceTitle" style="left: 349px; top: 301px; position: absolute; color: #545454; font-size: 16px; font-family: Poppins; font-weight: 700; letter-spacing: 0.11px; word-wrap: break-word">TAPASZTALATOK</div>
    <!--
    <div data-layer="EDUCATION_TITLE" class="EducationTitle" style="left: 349px; top: 680px; position: absolute; color: #545454; font-size: 16px; font-family: Poppins; font-weight: 700; letter-spacing: 0.11px; word-wrap: break-word">TANULMÁNYOK</div>
    -->
    <div data-layer="CONTACT_INTRODUCTION" class="ContactIntroduction" style="width: 231px; height: 702px; left: 44px; top: 353px; position: absolute; color: #6D6D6D; font-size: 12px; font-family: Poppins; font-weight: 400;">
        {{ $personalData->introduction }}
    </div>

    @php
    $max_items = 3;
    $experience_spacing = 110; // korábban 80, most nagyobb, hogy több hely legyen
    $experience_description_offset = 50; // description offset az előző subtitle-hoz képest
    $base_experience_top = 335;

    $education_spacing_after_experience = 50; // extra távolság a tapasztalatok és a tanulmányok között
    $education_base_top = $base_experience_top + (count($experiences->take($max_items)) * $experience_spacing) + $education_spacing_after_experience;
    $education_description_offset = 50; // description offset az edu subtitle-hoz képest
@endphp

<!-- EXPERIENCE SECTION -->
@foreach($experiences->take($max_items) as $index => $exp)
    <div data-layer="EXPERIENCE_SUBTITLE" class="ExperienceSubtitle"
         style="left: 349px; top: {{ $base_experience_top + ($index * $experience_spacing) }}px; position: absolute; color: #6D6D6D; font-size: 12px; font-family: Poppins; font-weight: 600; letter-spacing: 0.07px; word-wrap: break-word">
        {{ $exp->company }} - {{ $exp->position }}
    </div>
    <div data-layer="EXPERIENCE_DESCRIPTION" class="ExperienceDescription"
         style="width: 381px; height: 80px; left: 349px; top: {{ $base_experience_top + $experience_description_offset + ($index * $experience_spacing) }}px; position: absolute; color: #6D6D6D; font-size: 10px; font-family: Roboto; font-weight: 400; letter-spacing: 0.36px; word-wrap: break-word">
        {{ $exp->start_date }} - {{ $exp->end_date ?? 'Jelenleg' }} <br>
        {{ $exp->description }}
    </div>
@endforeach

<!-- EDUCATION TITLE -->
<div data-layer="EDUCATION_TITLE" class="EducationTitle"
     style="left: 349px; top: {{ $education_base_top - 30 }}px; position: absolute; color: #545454; font-size: 16px; font-family: Poppins; font-weight: 700; letter-spacing: 0.11px; word-wrap: break-word">
    TANULMÁNYOK
</div>

<!-- EDUCATION SECTION -->
@foreach($educations->take($max_items) as $index => $edu)
    <div data-layer="EDUCATION_SUBTITLE" class="EducationSubtitle"
         style="left: 349px; top: {{ $education_base_top + ($index * $experience_spacing) }}px; position: absolute; 
                color: #6D6D6D; font-size: 12px; right: 30px; font-family: Poppins; 
                font-weight: 600; letter-spacing: 0.07px; word-wrap: break-word">
        {{ $edu->school }} - {{ $edu->field_of_study }}
    </div>
    <div data-layer="EDUCATION_DESCRIPTION" class="EducationDescription"
         style="width: 396px; height: 80px; left: 349px; 
                top: {{ $education_base_top + $education_description_offset + ($index * $experience_spacing) }}px; 
                position: absolute; color: #6D6D6D; font-size: 10px; 
                font-family: Roboto; font-weight: 400; letter-spacing: 0.36px; 
                word-wrap: break-word">
        {{ $edu->start_date }} - {{ $edu->end_date ?? 'Jelenleg' }} <br>
        {{ $edu->description }}
    </div>
@endforeach


    <!-- CONTACT INFO -->
    <!-- Image paths -->
    @php
    $iconsPath = base_path('resources/images/');
    $mailIcon = $iconsPath . 'MAIL_ICON.png';
    $phoneIcon = $iconsPath . 'PHONE_ICON.png';
    $mapIcon = $iconsPath . 'MAP_ICON.png';
    @endphp

        <div data-layer="CONTACT_EMAIL" class="ContactEmail" style="left: 350px; top: 113px; position: absolute; color: #6D6D6D; font-size: 10px; font-family: Poppins; font-weight: 400; line-height: 23.80px; letter-spacing: 0.42px; word-wrap: break-word">
            <div style="display:flex; align-items:flex-start; justify-content:center; width:250px; height:22px; background-color:white; border-radius:50px; padding:8px;">
                <img src="{{ $mailIcon }}" alt="Email:" style="width:30px; height:30px; margin-top:-1px;">
                <div style="margin-top:-57px; margin-left:42px;">{{ $personalData->email }}</div>
            </div>
        </div>

        <div data-layer="CONTACT_PHONE" class="ContactPhone" style="left: 350px; top: 160px; position: absolute; color: #6D6D6D; font-size: 10px; font-family: Poppins; font-weight: 400; line-height: 23.80px; letter-spacing: 0.42px; word-wrap: break-word">
            <div style="display:flex; align-items:flex-start; justify-content:center; width:250px; height:22px; background-color:white; border-radius:50px; padding:8px;">
                <img src="{{ $phoneIcon }}" alt="Tel:" style="width:30px; height:30px; margin-top:-1px;">
                <div style="margin-top:-57px; margin-left:42px;">{{ $personalData->phone }}</div>
            </div>
        </div>

        <div data-layer="CONTACT_ADDRESS" class="ContactAddress" style="left: 350px; top: 208px; position: absolute; color: #6D6D6D; font-size: 10px; font-family: Poppins; font-weight: 400; line-height: 23.80px; letter-spacing: 0.42px; word-wrap: break-word">
            <div style="display:flex; align-items:flex-start; justify-content:center; width:250px; height:22px; background-color:white; border-radius:50px; padding:8px;">
                <img src="{{ $mapIcon }}" alt="Cím:" style="width:30px; height:30px; margin-top:-1px;">
                <div style="margin-top:-57px; margin-left:42px;">{{ $personalData->address }}</div>
            </div>
        </div>
    <div data-layer="MIDDLE_LINE" class="MiddleLine" style="width: 5px; height: 1070px; left: 296px; top: 27px; position: absolute; background: #E8E8E8"></div>
  </div>
  </body>
</html>
