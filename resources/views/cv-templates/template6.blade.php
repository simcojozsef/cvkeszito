<!DOCTYPE html>
<html>
    <head>
        <meta charset="UTF-8">
        <title>CV - {{ $personalData->first_name }} {{ $personalData->last_name }}</title>
        <!-- Prata with latin-ext -->
        <link href="https://fonts.googleapis.com/css2?family=Prata&display=swap&subset=latin-ext" rel="stylesheet">


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

  <div data-layer="Rectangle 405" class="Rectangle405" style="width: 749px; height: 1123px; left: 0px; top: 0px; position: absolute;"></div>
  <div data-svg-wrapper data-layer="background" class="Background" style="left: 0px; top: 2px; position: absolute">
    <svg width="749" height="271" viewBox="0 0 749 271" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M0 0H749V233.06C749 233.06 693.612 211.38 573.394 211.38C431.147 211.38 295.194 271 174.662 271C54.1294 271 0 238.48 0 238.48V0Z" fill="#FBF2E4" fill-opacity="0.5"/>
    </svg>
  </div>
  <div data-layer="CONTACT_ADDRESS" class="ContactAddress" style="width: 199px; height: 12px; left: 524px; top: 125px; position: absolute; color: black; font-size: 10px; font-family: Prata; font-weight: 400; line-height: 14px; word-wrap: break-word">{{ $personalData->address }}</div>
  <div data-layer="CONTACT_PHONE" class="ContactPhone" style="width: 199px; height: 11px; left: 524px; top: 92px; position: absolute; color: black; font-size: 10px; font-family: Prata; font-weight: 400; line-height: 14px; word-wrap: break-word">{{ $personalData->phone }}</div>
  <div data-layer="CONTACT_EMAIL" class="ContactEmail" style="width: 199px; height: 10px; left: 524px; top: 60px; position: absolute; color: black; font-size: 10px; font-family: Prata; font-weight: 400; line-height: 14px; word-wrap: break-word">{{ $personalData->email }}</div>
  <div data-layer="LinkedIN_black" class="LinkedinBlack" style="width: 15.11px; height: 16.26px; left: 501.01px; top: 89.36px; position: absolute"></div>
  <div data-layer="Mail_black" class="MailBlack" style="width: 15.11px; height: 16.26px; left: 501.01px; top: 59.55px; position: absolute"></div>
  <div data-layer="CONTACT_NAME" class="ContactName" style="width: 256px; height: 97px; left: 192px; top: 80px; position: absolute; color: black; font-size: 35px; font-family: Prata; font-weight: 400; line-height: 42px; word-wrap: break-word">{{ ucfirst($personalData->first_name) }} {{ ucfirst($personalData->last_name) }}</div>
  <div data-layer="CONTACT_PROFILE" class="ContactProfile" style="width: 140px; height: 140px; left: 29px; top: 48px; position: absolute; background: #D9D9D9; border-radius: 9999px">
      @if(!empty($personalData->profile_picture) && file_exists(public_path('storage/' . $personalData->profile_picture)))
          @php
              $imagePath = public_path('storage/' . $personalData->profile_picture);
              $imageData = base64_encode(file_get_contents($imagePath));
              $imageExt = pathinfo($imagePath, PATHINFO_EXTENSION);
          @endphp
          <img src="data:image/{{ $imageExt }};base64,{{ $imageData }}" 
              alt="Profile Picture" 
              style="width: 140px; height: 140px; object-fit: cover; border-radius: 9999px;" />
      @endif
  </div>
  <div data-layer="EDUCATION_TITLE" class="EducationTitle" style="left: 410px; top: 442px; position: absolute; color: #CA6D18; font-size: 14px; font-family: Prata; font-weight: 400; line-height: 20px; word-wrap: break-word">Tanulmányok</div>
  <div data-layer="EXPERIENCE_TITLE" class="ExperienceTitle" style="left: 98px; top: 442px; position: absolute; color: #CA6D18; font-size: 14px; font-family: Prata; font-weight: 400; line-height: 20px; word-wrap: break-word">Tapasztalatok</div>
  <div data-layer="INTRODUCTION_TITLE" class="IntroductionTitle" style="left: 99px; top: 304px; position: absolute; color: #CA6D18; font-size: 14px; font-family: Prata; font-weight: 400; line-height: 20px; word-wrap: break-word">Bemutatkozó</div>

  <!-- INTRODUCTION -->
  <div data-layer="INTRODUCTION_DESCRIPTION" class="IntroductionDescription" style="width: 565px; height: 93px; left: 99px; top: 336px; position: absolute; color: black; font-size: 10px; font-family: Poppins; font-weight: 400; line-height: 14px; word-wrap: break-word">{{ $personalData->introduction }}</div>

  <!-- EXPERIENCES -->
@foreach($experiences as $index => $exp)
    @php
        $exp_top = 472 + ($index * 200);
    @endphp
    <div class="ExperienceBlock">
        <div data-layer="EXPERIENCE_SUBTITLE" class="ExperienceSubtitle" style="left: 99px; right: 360px; top: {{ $exp_top }}px; position: absolute; color: black; font-size: 14px; font-family: Prata; font-weight: 400; line-height: 20px; word-wrap: break-word">{{ $exp->company }} - {{ $exp->position }}</div>
        <div data-layer="EXPERIENCE_DATE" class="ExperienceDate" style="left: 99px; top: {{ $exp_top + 60 }}px; position: absolute; color: #797979; font-size: 11px; font-family: Prata; font-weight: 400; line-height: 16px; word-wrap: break-word">{{ $exp->start_date }} - {{ $exp->end_date ?? 'Jelenleg' }}</div>
        <div data-layer="EXPERIENCE_DESCRIPTION" class="ExperienceDescription" style="width: 254px; left: 99px; top: {{ $exp_top + 80 }}px; position: absolute; color: black; font-size: 10px; font-family: Poppins; font-weight: 400; line-height: 14px; word-wrap: break-word">{{ $exp->description }}</div>
    </div>
@endforeach

<!-- EDUCATIONS -->
@foreach($educations as $index => $edu)
    @php
        $edu_top = 472 + ($index * 200); // 120px spacing between each block
    @endphp
    <div class="EducationBlock">
        <div data-layer="EDUCATION_SUBTITLE" class="EducationSubtitle" style="left: 410px; right: 40px; top: {{ $edu_top }}px; position: absolute; color: black; font-size: 14px; font-family: Prata; font-weight: 400; line-height: 20px; word-wrap: break-word">{{ $edu->school }} - {{ $edu->field_of_study }}</div>
        <div data-layer="EDUCATION_DATE" class="EducationDate" style="left: 410px; top: {{ $edu_top + 60 }}px; position: absolute; color: #797979; font-size: 11px; font-family: Prata; font-weight: 400; line-height: 16px; word-wrap: break-word">{{ $edu->start_date }} - {{ $edu->end_date ?? 'Jelenleg' }}</div>
        <div data-layer="EDUCATION_DESCRIPTION" class="EducationDescription" style="width: 254px; left: 410px; top: {{ $edu_top + 80 }}px; position: absolute; color: black; font-size: 10px; font-family: Poppins; font-weight: 400; line-height: 14px; word-wrap: break-word">{{ $edu->description }}</div>
    </div>
@endforeach


<!-- Background -->
@php
    $bgPath = public_path('images/cv-templates/background.png');
    $bgData = base64_encode(file_get_contents($bgPath));
    $bgExt = pathinfo($bgPath, PATHINFO_EXTENSION);
@endphp

<!-- Background should be FIRST -->
  <div class="Background" 
       style="width: 820px; height: 271px; position: absolute; top: 0; left: 0;
              background: url('data:image/{{ $bgExt }};base64,{{ $bgData }}') no-repeat center;
              background-size: cover; z-index: 0;">
  </div>
    </body>
</html>
