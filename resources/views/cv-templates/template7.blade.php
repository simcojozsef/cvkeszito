<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <title>CV - {{ $personalData->first_name }} {{ $personalData->last_name }}</title>

    <!-- Poppins + Roboto -->
    <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap&subset=latin-ext" rel="stylesheet">
    <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;500&display=swap&subset=latin-ext" rel="stylesheet">

    <style>
        @page { margin: 0; }
        body { margin: 0; padding: 0; }
    </style>
</head>

<body>

<div data-layer="BACKGROUND" style="width:794px;height:1123px;position:relative;background:#F6F8FD;">

    <!-- SVG DECORATIONS (ALL ORIGINAL FROM THE FIRST BLOCK) -->
    <!-- --- These are unchanged SVG containers --- -->

    <div style="position:absolute;left:413.98px;top:810.26px;">
        {!! file_get_contents(resource_path('views/cv-templates/svg/vector1.svg')) !!}
    </div>

    <div style="position:absolute;left:0px;top:896px;">
        {!! file_get_contents(resource_path('views/cv-templates/svg/vector2.svg')) !!}
    </div>

    <div style="position:absolute;left:493.6px;top:902.27px;">
        {!! file_get_contents(resource_path('views/cv-templates/svg/vector3.svg')) !!}
    </div>

    <div style="position:absolute;left:31.38px;top:920.45px;">
        {!! file_get_contents(resource_path('views/cv-templates/svg/vector4.svg')) !!}
    </div>

    <div style="position:absolute;left:135.28px;top:922.12px;">
        {!! file_get_contents(resource_path('views/cv-templates/svg/vector5.svg')) !!}
    </div>

    <div style="position:absolute;left:314.94px;top:932.32px;">
        {!! file_get_contents(resource_path('views/cv-templates/svg/vector6.svg')) !!}
    </div>

    <div style="position:absolute;left:396.01px;top:0px;">
        {!! file_get_contents(resource_path('views/cv-templates/svg/vector7.svg')) !!}
    </div>

    <div style="position:absolute;left:505.12px;top:55.10px;">
        {!! file_get_contents(resource_path('views/cv-templates/svg/vector8.svg')) !!}
    </div>

    <div style="position:absolute;left:352.43px;top:31.05px;">
        {!! file_get_contents(resource_path('views/cv-templates/svg/vector9.svg')) !!}
    </div>


    <!-- PROFILE PICTURE -->
    <div style="width:200px;height:200px;left:528px;top:31px;position:absolute;background:#E4E4E4;border-radius:250px;overflow:hidden;">
        @if(!empty($personalData->profile_picture) && file_exists(public_path('storage/' . $personalData->profile_picture)))
            @php
                $imagePath = public_path('storage/' . $personalData->profile_picture);
                $imageData = base64_encode(file_get_contents($imagePath));
                $imageExt = pathinfo($imagePath, PATHINFO_EXTENSION);
            @endphp

            <img src="data:image/{{ $imageExt }};base64,{{ $imageData }}"
                 style="width:100%;height:100%;object-fit:cover;border-radius:250px;">
        @endif
    </div>


    <!-- CONTACT NAME -->
    <div style="left:50px;top:56px;position:absolute;color:#00356B;font-size:32px;font-family:Poppins;font-weight:700;text-transform:capitalize;">
        {{ $personalData->first_name }} {{ $personalData->last_name }}
    </div>

    <!-- CONTACT PHONE -->
    <div style="left:50px;top:131px;position:absolute;color:rgba(0,53,107,0.70);font-size:14px;font-family:Roboto;font-weight:500;">
        {{ $personalData->phone }}
    </div>

    <!-- CONTACT EMAIL -->
    <div style="left:202px;top:131px;position:absolute;color:rgba(0,53,107,0.70);font-size:14px;font-family:Roboto;font-weight:500;text-decoration:underline;">
        {{ $personalData->email }}
    </div>

    <!-- CONTACT INTRODUCTION -->
    <div style="width:310px;left:50px;top:181px;position:absolute;color:rgba(0,0,0,0.70);font-size:11px;font-family:Poppins;font-weight:600;">
        {{ $personalData->introduction }}
    </div>


    <!-- EXPERIENCE TITLE -->
    <div style="left:50px;top:271px;position:absolute;color:rgba(0,53,107,0.70);font-size:15px;font-family:Poppins;font-weight:700;">
        Tapasztalat
    </div>

    @php
        $max_items = 3;
        $y = 309;
        $block_spacing = 120; 
    @endphp

    @foreach($experiences->take($max_items) as $exp)
        <div style="left:50px;top:{{ $y }}px;position:absolute;color:black;font-size:10px;font-family:Poppins;font-weight:700;">
            {{ $exp->company }}
        </div>

        <div style="left:50px;top:{{ $y + 15 }}px;position:absolute;color:black;font-size:9px;font-family:Poppins;font-weight:400;">
            {{ $exp->position }}
        </div>

        <div style="left:50px;top:{{ $y + 35 }}px;position:absolute;color:rgba(0,0,0,0.70);font-size:9px;font-family:Poppins;">
            {{ $exp->start_date }} – {{ $exp->end_date ?? 'Jelenleg' }}
        </div>

        <div style="width:683px;left:50px;top:{{ $y + 50 }}px;position:absolute;color:rgba(0,0,0,0.70);font-size:9px;font-family:Poppins;line-height:13px;">
            {!! nl2br(e($exp->description)) !!}
        </div>

        @php $y += $block_spacing; @endphp
    @endforeach


    <!-- EDUCATION TITLE -->
    <div style="left:50px;top:584px;position:absolute;color:rgba(0,53,107,0.70);font-size:15px;font-family:Poppins;font-weight:700;">
        Tanulmányok
    </div>

    @php
        $yEdu = 622;
    @endphp

    @foreach($educations->take($max_items) as $edu)
        <div style="left:50px;top:{{ $yEdu }}px;position:absolute;color:black;font-size:10px;font-family:Poppins;font-weight:700;">
            {{ $edu->school }}
        </div>

        <div style="left:50px;top:{{ $yEdu + 15 }}px;position:absolute;color:black;font-size:9px;font-family:Poppins;">
            {{ $edu->field_of_study }}
        </div>

        <div style="left:50px;top:{{ $yEdu + 30 }}px;position:absolute;color:rgba(0,0,0,0.70);font-size:9px;font-family:Poppins;">
            {{ $edu->start_date }} – {{ $edu->end_date ?? 'Jelenleg' }}
        </div>

        <div style="width:683px;left:50px;top:{{ $yEdu + 50 }}px;position:absolute;color:rgba(0,0,0,0.70);font-size:9px;font-family:Poppins;line-height:13px;">
            {!! nl2br(e($edu->description)) !!}
        </div>

        @php $yEdu += $block_spacing; @endphp
    @endforeach

</div>

</body>
</html>
