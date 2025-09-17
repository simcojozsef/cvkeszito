
<!DOCTYPE html>
<html>
    <head>
        <meta charset="UTF-8">
        <title>CV - {{ $personalData->first_name }} {{ $personalData->last_name }}</title>

        <!-- Montserrat with latin-ext (Hungarian support) -->
        <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;700&display=swap&subset=latin-ext" rel="stylesheet">

    <style>
        @page { margin: 0; }

        body { margin: 0; padding: 0; }

        @font-face {
            font-family: 'Montserrat';
            src: url('{{ public_path('fonts/Montserrat/static/Montserrat-Regular.ttf') }}') format('truetype');
            font-weight: 400;
            font-style: normal;
        }

        @font-face {
            font-family: 'Montserrat';
            src: url('{{ public_path('fonts/Montserrat/static/Montserrat-Bold.ttf') }}') format('truetype');
            font-weight: 700;
            font-style: normal;
        }

        body {
            font-family: 'Montserrat', sans-serif;
        }
    </style>

    </head>
    <body>
    
  <div data-layer="BACKGROUND" class="Background" style="width: 794px; height: 1123px; left: 0px; top: 0px; position: absolute; background: white"></div>
  <div data-layer="CONTACT_INTRODUCTION" class="SocialMedia" style="width: 183.47px; height: 49.63px; left: 46px; top: 316px; position: absolute; justify-content: center; display: flex; flex-direction: column; color: #202020; font-size: 16px; font-family: Montserrat; font-weight: 500; text-transform: uppercase; letter-spacing: 0.48px; word-wrap: break-word">BEMUTATKOZÓ</div>
  
  <!-- Introduction -->
    <div data-layer="EXPERIENCE_TIME_INSTITUTION_POSITION" 
        class="ExperienceTimeInstitutionPosition" 
        style="width: 163px; height: 17px; left: 46.5px; top: 350px; position: absolute; justify-content: center; display: flex; flex-direction: column; color: #202020; font-size: 12px; font-family: Montserrat; font-weight: 400; line-height: 20px; letter-spacing: 0.12px; word-wrap: break-word">
        {{ $personalData->introduction ?? '' }}
    </div>
  
    @php
    $max_items = 3;
    $experience_count = min(count($experiences), $max_items);
    $education_count = min(count($educations), $max_items);

    $experience_spacing = 100; // same increment used for each experience
    $base_experience_top = 365; // the top of the first experience entry
    $education_spacing_after_experience = 50; // extra spacing between last experience and education
    $education_base_top = $base_experience_top + ($experience_count * $experience_spacing) + $education_spacing_after_experience;
@endphp

<!-- EXPERIENCE SECTION -->
<div data-layer="EXPERIENCE_TITLE" class="ExperienceTitle"
     style="width: 157.40px; height: 49.63px; left: 258.54px; right:30px; top: 321.5px; position: absolute;
            justify-content: center; display: flex; flex-direction: column; color: #202020;
            font-size: 16px; font-family: Montserrat; font-weight: 500; text-transform: uppercase;
            line-height: 12px; letter-spacing: 0.48px; word-wrap: break-word">
    TAPASZTALATOK
</div>

@foreach($experiences->take($max_items) as $index => $exp)
    <div class="ExperienceTimeInstitutionPosition"
         style="width: 550px; height: 19.25px; left: 259.54px;
                top: {{ $base_experience_top + ($index * $experience_spacing) }}px;
                position: absolute; display: flex; flex-direction: column;
                color: #202020; font-size: 12px; font-family: Montserrat;
                font-weight: 500; text-transform: uppercase; line-height: 12px;
                letter-spacing: 0.36px; word-wrap: break-word">
        {{ $exp->start_date }} - {{ $exp->end_date ?? 'Jelenleg' }} - {{ $exp->company }} - {{ $exp->position }}
    </div>

    <div class="ExperienceDescription"
         style="width: 489px; height: 69px; left: 258px;
                top: {{ $base_experience_top + 22 + ($index * $experience_spacing) }}px;
                position: absolute; color: #202020; font-size: 12px; font-family: Montserrat;
                font-weight: 400; line-height: 20px; letter-spacing: 0.12px; word-wrap: break-word">
        {{ $exp->description }}
    </div>
@endforeach

<!-- EDUCATION SECTION -->
<div data-layer="EDUCATION_TITLE" class="EducationTitle"
     style="width: 157.40px; height: 49.63px; left: 256.54px; right: 30px; top: {{ $education_base_top }}px;
            position: absolute; justify-content: center; display: flex; flex-direction: column;
            color: #202020; font-size: 16px; font-family: Montserrat; font-weight: 500;
            text-transform: uppercase; letter-spacing: 0.48px; word-wrap: break-word">
    TANULMÁNYOK
</div>

@foreach($educations->take($max_items) as $index => $edu)
    <div class="EducationTimeInstitutionStudy"
         style="width: 500px; height: 19.25px; left: 255.54px;
                top: {{ $education_base_top + 49 + ($index * 100) }}px;
                position: absolute; display: flex; flex-direction: column;
                color: #202020; font-size: 12px; font-family: Montserrat;
                font-weight: 500; text-transform: uppercase; line-height: 12px;
                letter-spacing: 0.36px; word-wrap: break-word">
        {{ $edu->start_date }} - {{ $edu->end_date ?? 'Jelenleg' }} - {{ $edu->school }} - {{ $edu->field_of_study }}
    </div>

    <div class="EducationDescription"
         style="width: 489px; height: 69px; left: 256px;
                top: {{ $education_base_top + 71 + ($index * 100) }}px;
                position: absolute; color: #202020; font-size: 12px; font-family: Montserrat;
                font-weight: 400; line-height: 20px; letter-spacing: 0.12px; word-wrap: break-word">
        {{ $edu->description }}
    </div>
@endforeach








  <div data-layer="SVG_2" class="Svg2" style="width: 2px; height: 769px; left: 234px; top: 1099px; position: absolute; transform: rotate(180deg); transform-origin: top left; background: #E8E8E8"></div>
    <!-- Profile picture -->
    <div data-layer="PROFILE_PICTURE" class="ProfilePicture" style="width: 150px; height: 150px; left: 322px; top: 50px; position: absolute; border-radius: 9999px; overflow: hidden; background: #766951; display: flex; justify-content: center; align-items: center;">
        @if(!empty($personalData->profile_picture) && file_exists(public_path('storage/' . $personalData->profile_picture)))
            @php
                $imagePath = public_path('storage/' . $personalData->profile_picture);
                $imageData = base64_encode(file_get_contents($imagePath));
                $imageExt = pathinfo($imagePath, PATHINFO_EXTENSION);
            @endphp
            <img src="data:image/{{ $imageExt }};base64,{{ $imageData }}" 
                alt="Profile Picture" 
                style="width: 100%; height: 100%; object-fit: cover; border-radius: 9999px;" />
        @endif
    </div>
    <!-- Contact name -->  
    <div data-layer="CONTACT_NAME" class="ContactName" style="width: 318px; height: 85px; left: 238px; top: 220px; position: absolute; text-align: center; justify-content: center; display: flex; flex-direction: column; color: black; font-size: 20px; font-family: Montserrat; font-weight: 400; text-transform: uppercase; word-wrap: break-word">{{ $personalData->first_name }} {{ $personalData->last_name }} </div>
    <!-- Contact address --> 
    <div data-layer="CONTACT_ADDRESS" class="ContactAddress" style="width: 180px; height: 54px; left: 569.98px; top: 276px; position: absolute; text-align: center; justify-content: center; display: flex; flex-direction: column; color: #202020; font-size: 10px; font-family: Montserrat; font-weight: 300; word-wrap: break-word">
        {{ $personalData->address }}
    </div>
    <!-- Contact phone --> 
    <div data-layer="CONTACT_PHONE" class="ContactPhone" style="width: 145px; height: 54px; left: 321.14px; top: 276px; position: absolute; text-align: center; justify-content: center; display: flex; flex-direction: column; color: #202020; font-size: 10px; font-family: Montserrat; font-weight: 300; word-wrap: break-word">
        {{ $personalData->phone }}
    </div>

    <!-- Contact email -->  
    <div data-layer="CONTACT_EMAIL" class="ContactEmail" style="width: 145px; height: 54px; left: 72.30px; top: 276px; position: absolute; text-align: center; justify-content: center; display: flex; flex-direction: column; color: #202020; font-size: 10px; font-family: Montserrat; font-weight: 300; word-wrap: break-word">
        {{ $personalData->email }}
    </div>

  <div data-svg-wrapper data-layer="4" style="left: 505.70px; top: 283.59px; position: absolute">
    <svg width="3" height="32" viewBox="0 0 3 32" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="0.695312" y="0.593216" width="1.6851" height="31.2735" fill="#E8E8E8"/>
    </svg>
  </div>
  <div data-svg-wrapper data-layer="3" style="left: 257.65px; top: 283.59px; position: absolute">
    <svg width="3" height="32" viewBox="0 0 3 32" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="2.35913" height="31.2281" transform="matrix(-1 0 0 1 3.00781 0.593216)" fill="#E8E8E8"/>
    </svg>
  </div>
  <div data-layer="2" style="width: 701px; height: 1.03px; left: 46px; top: 300px; position: absolute; background: #E8E8E8"></div>
  <div data-layer="1" style="width: 701px; height: 1.03px; left: 46px; top: 267.60px; position: absolute; background: #E8E8E8"></div>
  <div data-svg-wrapper data-layer="Ellipse 2" class="Ellipse2" style="left: 46px; top: 371px; position: absolute">
    <svg width="5" height="5" viewBox="0 0 5 5" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="2.5" cy="2.5" r="2.5" fill="black"/>
    </svg>
  </div>


</body>
</html>
