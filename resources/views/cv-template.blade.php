<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <title>CV</title>
    <style>
        body { font-family: DejaVu Sans, sans-serif; }
        h1, h2 { margin-bottom: 0; }
        p { margin: 0.2em 0; }
        hr { margin: 1em 0; }
    </style>
</head>
<body>
    <h1>{{ $personalData->first_name }} {{ $personalData->last_name }}</h1>
    <p>Email: {{ $personalData->email }}</p>
    <p>Phone: {{ $personalData->phone }}</p>
    <hr>

    <h2>Experiences</h2>
    @foreach($experiences as $exp)
        <p><strong>{{ $exp->position }}</strong> at {{ $exp->company }}</p>
        <p>{{ $exp->start_date }} - {{ $exp->end_date ?? 'Present' }}</p>
        <p>{{ $exp->description }}</p>
        <hr>
    @endforeach

    <h2>Education</h2>
    @foreach($educations as $edu)
        <p><strong>{{ $edu->degree }}</strong> at {{ $edu->school }}</p>
        <p>{{ $edu->start_date }} - {{ $edu->end_date ?? 'Present' }}</p>
        <p>{{ $edu->field_of_study }}</p>
        <p>{{ $edu->description }}</p>
        <hr>
    @endforeach
</body>
</html>
