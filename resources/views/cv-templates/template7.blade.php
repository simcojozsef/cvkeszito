<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>CV - {{ $personalData->first_name }} {{ $personalData->last_name }}</title>
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    
    <!-- Montserrat font -->
    <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;700&display=swap" rel="stylesheet">

    <style>
        body {
            margin: 0;
            font-family: 'Montserrat', sans-serif;
            background: #f9f9f9;
            color: #202020;
        }

        .cv-container {
            max-width: 900px;
            margin: 20px auto;
            background: #fff;
            border-radius: 15px;
            padding: 40px 30px;
            box-shadow: 0 10px 30px rgba(0,0,0,0.1);
        }

        .header {
            text-align: center;
            margin-bottom: 40px;
        }

        .profile-picture {
            width: 150px;
            height: 150px;
            border-radius: 50%;
            overflow: hidden;
            margin: 0 auto 20px auto;
        }

        .profile-picture img {
            width: 100%;
            height: 100%;
            object-fit: cover;
        }

        .name {
            font-size: 28px;
            font-weight: 700;
            margin-bottom: 5px;
        }

        .title {
            font-size: 16px;
            font-weight: 500;
            color: #666;
            margin-bottom: 20px;
        }

        .contact-info {
            display: flex;
            justify-content: center;
            gap: 30px;
            flex-wrap: wrap;
            font-size: 12px;
            margin-bottom: 30px;
        }

        .section {
            margin-bottom: 30px;
        }

        .section h2 {
            font-size: 18px;
            font-weight: 700;
            margin-bottom: 15px;
            border-bottom: 2px solid #E8E8E8;
            padding-bottom: 5px;
        }

        .experience-item, .education-item {
            margin-bottom: 20px;
        }

        .experience-item h3, .education-item h3 {
            font-size: 14px;
            font-weight: 500;
            margin: 0 0 5px 0;
        }

        .experience-item p, .education-item p {
            font-size: 12px;
            line-height: 1.6;
            margin: 0;
        }

        /* Skills section */
        .skills {
            display: flex;
            flex-wrap: wrap;
            gap: 10px;
        }

        .skill {
            flex: 1 1 45%;
            margin-bottom: 10px;
        }

        .skill-name {
            font-size: 12px;
            margin-bottom: 5px;
        }

        .skill-bar {
            background: #e0e0e0;
            height: 6px;
            border-radius: 3px;
            overflow: hidden;
        }

        .skill-bar-fill {
            height: 100%;
            background: #2f64e0;
            width: 0;
        }

        @media(max-width: 768px) {
            .contact-info {
                flex-direction: column;
                align-items: center;
            }

            .skill {
                flex: 1 1 100%;
            }
        }
    </style>
</head>
<body>

<div class="cv-container">
    <div class="header">
        <div class="profile-picture">
            @if(!empty($personalData->profile_picture) && file_exists(public_path('storage/' . $personalData->profile_picture)))
                @php
                    $imagePath = public_path('storage/' . $personalData->profile_picture);
                    $imageData = base64_encode(file_get_contents($imagePath));
                    $imageExt = pathinfo($imagePath, PATHINFO_EXTENSION);
                @endphp
                <img src="data:image/{{ $imageExt }};base64,{{ $imageData }}" alt="Profile Picture">
            @endif
        </div>
        <div class="name">{{ $personalData->first_name }} {{ $personalData->last_name }}</div>
        <div class="title">{{ $personalData->title ?? 'Product Designer' }}</div>
        <div class="contact-info">
            <div>{{ $personalData->phone }}</div>
            <div>{{ $personalData->email }}</div>
            <div>{{ $personalData->address }}</div>
        </div>
    </div>

    <div class="section">
        <h2>Introduction</h2>
        <p>{{ $personalData->introduction ?? '' }}</p>
    </div>

    <div class="section">
        <h2>Experience</h2>
        @foreach($experiences as $exp)
            <div class="experience-item">
                <h3>{{ $exp->start_date }} - {{ $exp->end_date ?? 'Present' }} | {{ $exp->company }} | {{ $exp->position }}</h3>
                <p>{{ $exp->description }}</p>
            </div>
        @endforeach
    </div>

    <div class="section">
        <h2>Education</h2>
        @foreach($educations as $edu)
            <div class="education-item">
                <h3>{{ $edu->start_date }} - {{ $edu->end_date ?? 'Present' }} | {{ $edu->school }} | {{ $edu->field_of_study }}</h3>
                <p>{{ $edu->description }}</p>
            </div>
        @endforeach
    </div>

    @if(!empty($skills))
    <div class="section">
        <h2>Skills</h2>
        <div class="skills">
            @foreach($skills as $skill)
                <div class="skill">
                    <div class="skill-name">{{ $skill->name }}</div>
                    <div class="skill-bar">
                        <div class="skill-bar-fill" style="width: {{ $skill->level ?? '50' }}%;"></div>
                    </div>
                </div>
            @endforeach
        </div>
    </div>
    @endif
</div>

</body>
</html>
