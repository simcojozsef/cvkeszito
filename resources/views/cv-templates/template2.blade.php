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

        <div data-layer="Rectangle 1" class="Rectangle1" style="width: 794px; height: 1123px; left: 0px; top: 0px; position: absolute; background: white"></div>

        <!-- EXPERIENCE SECTION -->
        <div data-layer="Education" class="Education" style="width: 287px; height: 44px; left: 507px; top: 87px; position: absolute; background: #232323"></div>
        <div data-layer="EXPERIENCE_TITLE" class="ExperienceTitle" style="width: 256px; height: 44px; left: 507px; top: 63px; position: absolute; text-align: right; color: white; font-size: 22px; font-family: Poppins; font-weight: 700; line-height: 40px; word-wrap: break-word">Tapasztalatok</div>

        @php
            $max_items = 3;

            $experience_spacing = 140; // minden tapasztalat közötti függőleges távolság
            $base_experience_top = 148; // az első tapasztalat kezdő pozíciója

            $education_spacing_after_experience = 50; // távolság a tapasztalatok és a tanulmányok cím között
            $education_base_top = $base_experience_top + (count($experiences->take($max_items)) * $experience_spacing) + $education_spacing_after_experience;
        @endphp

        @foreach($experiences->take($max_items) as $index => $exp)
            <div data-layer="EXPERIENCE_SUBTITLE" class="ExperienceSubtitle" style="width: 416px; height: 47px; left: 347px; top: {{ $base_experience_top + ($index * $experience_spacing) }}px; position: absolute; text-align: right; color: black; font-size: 14px; font-family: Poppins; font-weight: 500; word-wrap: break-word">
                {{ $exp->start_date }} - {{ $exp->end_date ?? 'Jelenleg' }}<br/>
                {{ $exp->company }} – {{ $exp->position }}
            </div>
            <div data-layer="EXPERIENCE_DESCRIPTION" class="ExperienceDescription" style="width: 416px; height: 57px; left: 347px; top: {{ $base_experience_top + 54 + ($index * $experience_spacing) }}px; position: absolute; text-align: right; color: black; font-size: 10px; font-family: Poppins; font-weight: 300; word-wrap: break-word">
                {{ $exp->description }}
            </div>
        @endforeach

        <!-- EDUCATION SECTION -->
        <div data-layer="EDUCATION_BACKGROUND" class="EducationBackground" style="width: 287px; height: 44px; left: 507px; top: {{ $education_base_top }}px; position: absolute; background: #232323; overflow: hidden">
            <div data-layer="EDUCATION_TITLE" class="EducationTitle" style="width: 256px; height: 44px; left: 0px; top: -24px; position: absolute; text-align: right; color: white; font-size: 22px; font-family: Poppins; font-weight: 700; line-height: 40px; word-wrap: break-word">Tanulmányok</div>
        </div>

        @foreach($educations->take($max_items) as $index => $edu)
            <div data-layer="EDUCATION_SUBTITLE" class="EducationSubtitle" style="width: 416px; height: 47px; left: 353px; top: {{ $education_base_top + 68 + ($index * $experience_spacing) }}px; position: absolute; text-align: right; color: black; font-size: 14px; font-family: Poppins; font-weight: 500; word-wrap: break-word">
                {{ $edu->start_date }} - {{ $edu->end_date ?? 'Jelenleg' }}<br/>
                {{ $edu->school }} – {{ $edu->field_of_study }}
            </div>
            <div data-layer="EDUCATION_DESCRIPTION" class="EducationDescription" style="width: 416px; height: 57px; left: 353px; top: {{ $education_base_top + 120 + ($index * $experience_spacing) }}px; position: absolute; text-align: right; color: black; font-size: 10px; font-family: Poppins; font-weight: 300; word-wrap: break-word">
                {{ $edu->description }}
            </div>
        @endforeach


        <!-- LEFT BACKGROUND -->
        <div data-layer="LEFT_BACKGROUND" class="LeftBackground" style="width: 316px; height: 933px; left: 0px; top: 190px; position: absolute; background: #232323"></div>

        <!-- PROFILE PICTURE -->
        <div data-layer="CONTACT_PROFILE" class="ContactProfile" style="width: 200px; height: 200px; left: 55px; top: 90px; position: absolute; background: #31847D; border-radius: 9999px; overflow: hidden; display: flex; justify-content: center; align-items: center;">
             @if(!empty($personalData->profile_picture) && file_exists(public_path('storage/' . $personalData->profile_picture)))
                @php
                    $imagePath = public_path('storage/' . $personalData->profile_picture);
                    $imageData = base64_encode(file_get_contents($imagePath));
                    $imageExt = pathinfo($imagePath, PATHINFO_EXTENSION);
                @endphp
                <img src="data:image/{{ $imageExt }};base64,{{ $imageData }}" alt="Profile Picture" style="width: 100%; height: 100%; object-fit: cover; border-radius: 9999px;" />
            @endif
        </div>

        <!-- CONTACT INFO -->
        <div data-layer="CONTACT_NAME" class="ContactName" style="width: 248px; height: 42px; left: 34px; top: 330px; position: absolute; text-align: center; color: white; font-size: 24px; font-family: Poppins; font-weight: 700; word-wrap: break-word">
            {{ $personalData->first_name }} {{ $personalData->last_name }}
        </div>

        <div data-layer="CONTACT_INTRODUCTION" class="ContactIntroduction" style="width: 249px; height: 326px; left: 33px; top: 468px; position: absolute; text-align: center; color: white; font-size: 12px; font-family: Poppins; font-weight: 500; word-wrap: break-word">
            {{ $personalData->introduction }}
        </div>

        <div data-layer="CONTACT_PHONE" class="ContactPhone" style="width: 249px; height: 23px; left: 30px; top: 897px; position: absolute; text-align: center; color: white; font-size: 12px; font-family: Poppins; font-weight: 600; word-wrap: break-word">
            {{ $personalData->phone }}
        </div>

        <div data-layer="CONTACT_ADDRESS" class="ContactAddress" style="width: 249px; height: 23px; left: 30px; top: 968px; position: absolute; text-align: center; color: white; font-size: 12px; font-family: Poppins; font-weight: 600; word-wrap: break-word">
            {{ $personalData->address }}
        </div>

        <div data-layer="CONTACT_EMAIL" class="ContactEmail" style="width: 249px; height: 23px; left: 30px; top: 1037px; position: absolute; text-align: center; color: white; font-size: 12px; font-family: Poppins; font-weight: 600; word-wrap: break-word">
            {{ $personalData->email }}
        </div>

        <!-- STATIC LABELS -->
        <div data-layer="INTRODUCTION_LABEL" class="IntroductionLabel" style="width: 202px; height: 32px; left: 57px; top: 414px; position: absolute; text-align: center; color: white; font-size: 26px; font-family: Poppins; font-weight: 600; word-wrap: break-word">Rólam</div>

        <div data-layer="CONTACT_LABEL" class="ContactLabel" style="width: 202px; height: 32px; left: 57px; top: 809px; position: absolute; text-align: center; color: white; font-size: 26px; font-family: Poppins; font-weight: 600; word-wrap: break-word">Kapcsolat</div>

        <div data-layer="PHONE_LABEL" class="PhoneLabel" style="width: 244px; height: 23px; left: 33px; top: 867px; position: absolute; text-align: center; color: white; font-size: 16px; font-family: Poppins; font-weight: 600; word-wrap: break-word">Telefonszám</div>

        <div data-layer="ADDRESS_LABEL" class="AddressLabel" style="width: 244px; height: 23px; left: 33px; top: 938px; position: absolute; text-align: center; color: white; font-size: 16px; font-family: Poppins; font-weight: 600; word-wrap: break-word">Cím</div>

        <div data-layer="EMAIL_LABEL" class="EmailLabel" style="width: 244px; height: 23px; left: 33px; top: 1007px; position: absolute; text-align: center; color: white; font-size: 16px; font-family: Poppins; font-weight: 600; word-wrap: break-word">Email</div>

    </head>
</html>
