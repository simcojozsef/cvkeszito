<!DOCTYPE html>
<html>
    <head>
        <meta charset="UTF-8">
        <title>CV - {{ $personalData->first_name }} {{ $personalData->last_name }}</title>
        <!-- Lato with latin-ext -->
        <link href="https://fonts.googleapis.com/css2?family=Lato:wght@300;400;700;900&display=swap&subset=latin-ext" rel="stylesheet">

        <!-- Source Sans Pro with latin-ext -->
        <link href="https://fonts.googleapis.com/css2?family=Source+Sans+Pro:wght@300;400;600;700&display=swap&subset=latin-ext" rel="stylesheet">

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


  <div data-svg-wrapper data-layer="Vector 8" class="Vector8" style="left: -83.37px; top: -112.39px; position: absolute">
    <svg width="296" height="294" viewBox="0 0 296 294" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M-13.5373 293.105C-4.68042 257.235 112.23 197.009 150.314 175.752C188.399 154.496 276.524 103.569 289.366 36.7001C302.209 -30.169 252.287 -112.387 252.287 -112.387" stroke="url(#paint0_linear_50_9811)" stroke-width="7.21199"/>
    <path d="M-13.5373 293.105C-4.68042 257.235 112.23 197.009 150.314 175.752C188.399 154.496 276.524 103.569 289.366 36.7001C302.209 -30.169 252.287 -112.387 252.287 -112.387" stroke="url(#paint1_linear_50_9811)" stroke-width="7.21199"/>
    <defs>
    <linearGradient id="paint0_linear_50_9811" x1="307.301" y1="-76.8888" x2="-38.1151" y2="268.97" gradientUnits="userSpaceOnUse">
    <stop offset="0.341368" stop-color="#FCDED1"/>
    </linearGradient>
    <linearGradient id="paint1_linear_50_9811" x1="198.405" y1="155.867" x2="97.948" y2="55.4102" gradientUnits="userSpaceOnUse">
    <stop stop-color="white"/>
    <stop offset="1" stop-color="white" stop-opacity="0"/>
    </linearGradient>
    </defs>
    </svg>
  </div>
  <div data-layer="Rectangle 10" class="Rectangle10" style="width: 677px; height: 1020px; left: 55px; top: 52px; position: absolute; background: #F4F4F4; box-shadow: 14.423982620239258px 12.01998519897461px 0px #FFE975; border-radius: 24.04px"></div>
  <div data-layer="Avatar" class="Avatar" style="width: 200px; height: 200px; left: 505px; top: 78px; position: absolute">
    <div data-layer="Rectangle 404" class="Rectangle404" style="width: 180px; height: 182.80px; left: 12px; top: 7.20px; position: absolute; border-radius: 7.20px"></div>
    <div data-layer="CONTACT_PROFILE" class="ContactProfile" style="width: 180px; height: 182.80px; left: 0px; top: -6px; position: absolute; background: #D9D9D9; border-radius: 7.21px">
        @if(!empty($personalData->profile_picture) && file_exists(public_path('storage/' . $personalData->profile_picture)))
            @php
                $imagePath = public_path('storage/' . $personalData->profile_picture);
                $imageData = base64_encode(file_get_contents($imagePath));
                $imageExt = pathinfo($imagePath, PATHINFO_EXTENSION);
            @endphp
            <img src="data:image/{{ $imageExt }};base64,{{ $imageData }}" 
                alt="Profile Picture" 
                style="width: 180px; height: 182.80px; object-fit: cover; border-radius: 7.21px;" />
        @endif
    </div>
  </div>
  <div data-layer="CONTACT_NAME" class="ContactName" style="width: 216.96px; height: 54.09px; left: 112px; top: 78px; position: absolute; color: black; font-size: 21.64px; font-family: Lato; font-weight: 900; line-height: 30.29px; word-wrap: break-word">{{ ucfirst($personalData->first_name) }} {{ ucfirst($personalData->last_name) }}</div>
  <div data-layer="EXPERIENCE_TITLE" class="ExperienceTitle" style="width: 233.77px; height: 23.04px; left: 105.28px; top: 333.38px; position: absolute; justify-content: center; display: flex; flex-direction: column; color: #0B0B0B; font-size: 13.22px; font-family: Lato; font-weight: 700; word-wrap: break-word">TAPASZTALATOK</div>
  <div data-layer="INTRODUCTION_TITLE" class="IntroductionTitle" style="width: 233.77px; height: 23.04px; left: 111.52px; top: 204px; position: absolute; justify-content: center; display: flex; flex-direction: column; color: #0B0B0B; font-size: 13.22px; font-family: Lato; font-weight: 700; word-wrap: break-word">BEMUTATKOZÓ</div>
  <div data-layer="INTRODUCTION_DESCRIPTION" class="IntroductionDescription" style="width: 380px; height: 104px; left: 112px; top: 233px; position: absolute; color: #595959; font-size: 10px; font-family: Source Sans Pro; font-weight: 400; word-wrap: break-word">{{ $personalData->introduction }}</div>
  <div data-layer="EDUCATION_TITLE" class="EducationTitle" style="width: 292.93px; height: 13.62px; left: 419px; top: 338px; position: absolute; justify-content: center; display: flex; flex-direction: column; color: #0B0B0B; font-size: 13.22px; font-family: Lato; font-weight: 700; word-wrap: break-word">TANULMÁNYOK</div>
  <div data-layer="CONTACT_PHONE" class="ContactPhone" style="width: 158.66px; height: 16.83px; left: 112.01px; top: 134px; position: absolute; color: #0B0B0B; font-size: 12px; font-family: Lato; font-weight: 500; line-height: 18px; word-wrap: break-word">{{ $personalData->phone }}</div>
  <div data-layer="CONTACT_ADDRESS" class="ContactAddress" style="width: 374.89px; height: 16.83px; left: 112.01px; top: 163px; position: absolute; color: #0B0B0B; font-size: 12px; font-family: Lato; font-weight: 500; line-height: 18px; word-wrap: break-word">{{ $personalData->address }}</div>
  <div data-layer="CONTACT_EMAIL" class="ContactEmail" style="width: 200px; height: 17px; left: 287px; top: 134px; position: absolute; color: #0B0B0B; font-size: 12px; font-family: Lato; font-weight: 500; line-height: 18px; word-wrap: break-word">{{ $personalData->email }}</div>
  <div data-layer="Rectangle 402" class="Rectangle402" style="width: 284px; height: 176px; left: 113px; top: 394px; position: absolute; border-radius: 7.21px"></div>
  <!-- EXPERIENCE BLOCKS -->
@php
    $experience_bg_colors = ['#ffffffff', '#ffffffff', '#ffffffff']; // lighter pastel greens
@endphp

@foreach($experiences as $index => $exp)
    @php
        $bg_color = $experience_bg_colors[$index % count($experience_bg_colors)];
        $top_offset = 386 + ($index * 200); // increased spacing between each block
    @endphp
    <div class="ExperienceBlock" 
         style="width: 284px; height: 176px; left: 103px; top: {{ $top_offset }}px; position: absolute; background: {{ $bg_color }}; border-radius: 7.21px; box-shadow: 9px 9px 0px #3DC39B; outline: 0.6px black solid; outline-offset: -0.3px; padding: 10px;">
        <div class="Date" style="color: #595959; font-size: 10px; font-family: Source Sans Pro; font-weight: 400; line-height: 14px;">
            {{ $exp->start_date }} - {{ $exp->end_date ?? 'Jelenleg' }}
        </div>
        <div class="CompanyName" style="color: black; font-size: 10px; font-family: Lato; font-weight: 800; line-height: 12px; margin-top: 6px;">
            {{ $exp->company }} - {{ $exp->position }}
        </div>
        <div class="Description" style="color: #595959; font-size: 10px; font-family: Source Sans Pro; font-weight: 400; word-wrap: break-word; margin-top: 6px;">
            {{ $exp->description }}
        </div>
    </div>
@endforeach

<!-- EDUCATION BLOCKS -->
@php
    $education_bg_colors = ['#ffffffff', '#ffffffff', '#ffffffff']; // lighter pastel purples
@endphp

@foreach($educations as $index => $edu)
    @php
        $bg_color = $education_bg_colors[$index % count($education_bg_colors)];
        $top_offset = 385 + ($index * 200); // increased spacing between each block
    @endphp
    <div class="EducationBlock" 
         style="width: 286px; height: 176px; left: 416px; top: {{ $top_offset }}px; position: absolute; background: {{ $bg_color }}; border-radius: 7.21px; outline: 0.6px black solid; outline-offset: -0.3px; padding: 10px;">
        <div class="EducationDate" style="color: #595959; font-size: 10px; font-family: Source Sans Pro; font-weight: 400; line-height: 14px;">
            {{ $edu->start_date }} - {{ $edu->end_date ?? 'Jelenleg' }}
        </div>
        <div class="EducationName" style="color: black; font-size: 10px; font-family: Lato; font-weight: 800; line-height: 12px; margin-top: 6px;">
            {{ $edu->school }} - {{ $edu->field_of_study }}
        </div>
        <div class="EducationDescription" style="color: #595959; font-size: 10px; font-family: Source Sans Pro; font-weight: 400; word-wrap: break-word; margin-top: 6px;">
            {{ $edu->description }}
        </div>
    </div>
@endforeach


  </div>

          </body>
</html>
