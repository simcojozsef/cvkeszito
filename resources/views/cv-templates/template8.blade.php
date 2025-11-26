<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <title>CV - {{ $personalData->first_name }} {{ $personalData->last_name }}</title>
    <!-- Poppins with latin-ext (Hungarian support) -->
    <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap&subset=latin-ext" rel="stylesheet">
    <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;500&display=swap" rel="stylesheet">
    <style>
        @page { margin: 0; }
        body { margin: 0; padding: 0; }
    </style>
</head>
<body>

<div data-layer="Group 22" class="Group22" style="width: 794px; height: 1123px; position: relative">
    <div data-layer="Rectangle 1" class="Rectangle1" style="width: 794px; height: 1123px; left: 0px; top: 0px; position: absolute; background: #F6F8FD"></div>

    <!-- Profile Picture -->
    <div data-layer="PROFILE_PICTURE" class="ProfilePicture" style="width: 200px; height: 200px; left: 528px; top: 31px; position: absolute; background: #E4E4E4; border-radius: 250px; overflow: hidden;">
        @if(!empty($personalData->profile_picture) && file_exists(public_path('storage/' . $personalData->profile_picture)))
            @php
                $imagePath = public_path('storage/' . $personalData->profile_picture);
                $imageData = base64_encode(file_get_contents($imagePath));
                $imageExt = pathinfo($imagePath, PATHINFO_EXTENSION);
            @endphp
            <img src="data:image/{{ $imageExt }};base64,{{ $imageData }}" alt="Profile Picture" style="width: 100%; height: 100%; object-fit: cover; border-radius: 250px;">
        @endif
    </div>

    <!-- Contact Info -->
    <div data-layer="CONTACT_NAME" class="ContactName" style="left: 50px; top: 56px; position: absolute; color: #00356B; font-size: 32px; font-family: Poppins; font-weight: 700; text-transform: capitalize; line-height: 45px; word-wrap: break-word">
        {{ $personalData->first_name }} {{ $personalData->last_name }}
    </div>
    <div data-layer="CONTACT_EMAIL" class="ContactEmail" style="left: 202px; top: 131px; position: absolute; color: rgba(0, 53, 107, 0.70); font-size: 14px; font-family: Roboto; font-weight: 500; text-decoration: underline; line-height: 20px; letter-spacing: 0.10px; word-wrap: break-word">
        {{ $personalData->email }}
    </div>
    <div data-layer="CONTACT_PHONE" class="ContactPhone" style="left: 50px; top: 131px; position: absolute; color: rgba(0, 53, 107, 0.70); font-size: 14px; font-family: Roboto; font-weight: 500; line-height: 20px; letter-spacing: 0.10px; word-wrap: break-word">
        {{ $personalData->phone }}
    </div>
    <div data-layer="CONTACT_INTRODUCTION" class="ContactIntroduction" style="width: 310px; left: 50px; top: 181px; position: absolute; color: rgba(0, 0, 0, 0.70); font-size: 11px; font-family: Poppins; font-weight: 600; word-wrap: break-word">
        {{ $personalData->introduction }}
    </div>

    @php
        $max_items = 3;
        $experience_spacing = 50;
        $base_experience_top = 309; // first experience top
        $education_base_top = 622; // first education top
    @endphp

    <!-- EXPERIENCE TITLE -->
    <div data-layer="EXPERIENCE_TITLE" class="ExperienceTitle" style="left: 50px; top: 271px; position: absolute; color: rgba(0, 53, 107, 0.70); font-size: 15px; font-family: Poppins; font-weight: 700; text-transform: capitalize; letter-spacing: 0.30px; word-wrap: break-word">
        Tapasztalatok
    </div>

    @foreach($experiences->take($max_items) as $index => $exp)
        <div data-layer="EXPERIENCE_COMPANY" class="ExperienceCompany" style="left: 50px; top: {{ $base_experience_top + ($index * $experience_spacing) }}px; position: absolute; color: black; font-size: 10px; font-family: Poppins; font-weight: 700; letter-spacing: 0.20px; word-wrap: break-word">
            {{ $exp->company }}
        </div>
        <div data-layer="EXPERIENCE_POSITION" class="ExperiencePosition" style="left: 50px; top: {{ $base_experience_top + 15 + ($index * $experience_spacing) }}px; position: absolute; color: black; font-size: 9px; font-family: Poppins; font-weight: 400; letter-spacing: 0.09px; word-wrap: break-word">
            {{ $exp->position }}
        </div>
        <div data-layer="EXPERIENCE_DATE" class="ExperienceDate" style="left: 50px; top: {{ $base_experience_top + 30 + ($index * $experience_spacing) }}px; position: absolute; color: rgba(0, 0, 0, 0.70); font-size: 9px; font-family: Poppins; font-weight: 400; letter-spacing: 0.09px; word-wrap: break-word">
            {{ $exp->start_date }} - {{ $exp->end_date ?? 'Jelenleg' }}
        </div>
        <div data-layer="EXPERIENCE_DESCRIPTION" class="ExperienceDescription" style="width: 683px; left: 50px; top: {{ $base_experience_top + 45 + ($index * $experience_spacing) }}px; position: absolute; color: rgba(0, 0, 0, 0.70); font-size: 9px; font-family: Poppins; font-weight: 400; line-height: 13px; word-wrap: break-word">
            {!! nl2br(e($exp->description)) !!}
        </div>
    @endforeach

    <!-- EDUCATION TITLE -->
    <div data-layer="EDUCATION_TITLE" class="EducationTitle" style="left: 50px; top: 584px; position: absolute; color: rgba(0, 53, 107, 0.70); font-size: 15px; font-family: Poppins; font-weight: 700; text-transform: capitalize; letter-spacing: 0.30px; word-wrap: break-word">
        Tanulmányok
    </div>

    @foreach($educations->take($max_items) as $index => $edu)
        <div data-layer="EDUCATION_SCHOOL" class="EducationSchool" style="left: 50px; top: {{ $education_base_top + ($index * $experience_spacing) }}px; position: absolute; color: black; font-size: 10px; font-family: Poppins; font-weight: 700; letter-spacing: 0.20px; word-wrap: break-word">
            {{ $edu->school }}
        </div>
        <div data-layer="EDUCATION_FIELD_OF_STUDY" class="EducationFieldOfStudy" style="left: 50px; top: {{ $education_base_top + 15 + ($index * $experience_spacing) }}px; position: absolute; color: black; font-size: 9px; font-family: Poppins; font-weight: 400; letter-spacing: 0.09px; word-wrap: break-word">
            {{ $edu->field_of_study }}
        </div>
        <div data-layer="EDUCATION_DATE" class="EducationDate" style="left: 50px; top: {{ $education_base_top + 30 + ($index * $experience_spacing) }}px; position: absolute; color: rgba(0, 0, 0, 0.70); font-size: 9px; font-family: Poppins; font-weight: 400; letter-spacing: 0.09px; word-wrap: break-word">
            {{ $edu->start_date }} - {{ $edu->end_date ?? 'Jelenleg' }}
        </div>
        <div data-layer="EDUCATION_DESCRIPTION" class="EducationDescription" style="width: 683px; left: 50px; top: {{ $education_base_top + 45 + ($index * $experience_spacing) }}px; position: absolute; color: rgba(0, 0, 0, 0.70); font-size: 9px; font-family: Poppins; font-weight: 400; line-height: 13px; word-wrap: break-word">
            {!! nl2br(e($edu->description)) !!}
        </div>
    @endforeach
</div>

</body>
</html>
