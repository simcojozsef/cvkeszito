<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="utf-8" />
<meta name="viewport" content="width=device-width, initial-scale=1" />
<title>Professional Resume</title>

<style>
    @import url("https://cdnjs.cloudflare.com/ajax/libs/meyer-reset/2.0/reset.min.css");

    html, body {
        margin: 0;
        padding: 0;
        height: 100%;
        font-family: Arial, sans-serif;
    }

    main {
        width: 794px;  /* A4 width in px at 96dpi */
        height: 1123px; /* A4 height in px at 96dpi */
        position: relative;
        margin: auto;
        overflow: hidden;
        background-image: url('img/BACKGROUND.png');
        background-size: cover;
        background-position: center;
        page-break-after: avoid;
    }

    img {
        display: block;
        width: 100%;
        height: auto;
    }

    .contact-header,
    .experience-section,
    .education-section {
        padding: 10px 40px;
    }

    .PROFILE-PICTURE {
        position: absolute;
        top: 30px;
        right: 50px;
        width: 200px;
        height: 200px;
    }

    .CONTACT-NAME { margin-top: 70px; width: 300px; }
    .CONTACT-PHONE { margin-top: 10px; }
    .CONTACT-EMAIL { margin-top: 5px; }
    .CONTACT-INTRODUCTION { margin-top: 20px; width: 350px; }

    h2 {
        margin-top: 40px;
        margin-bottom: 10px;
    }

    .experience-item, .education-item {
        margin-bottom: 20px;
    }

    /* Prevent page break inside the main container */
    @media print {
        body, main {
            width: 794px;
            height: 1123px;
            overflow: hidden;
        }
    }
</style>
</head>
<body>
<main>
    <aside class="PROFILE-PICTURE">
        <img src="img/PROFILE-PICTURE.png" alt="Profile picture">
    </aside>

    <header class="contact-header">
        <h1 class="CONTACT-NAME">
            <img src="img/CONTACT-NAME.png" alt="Contact Name" />
        </h1>
        <div class="CONTACT-PHONE">
            <img src="img/CONTACT-PHONE.png" alt="Phone number" />
        </div>
        <div class="CONTACT-EMAIL">
            <img src="img/CONTACT-EMAIL.png" alt="Email" />
        </div>
        <p class="CONTACT-INTRODUCTION">
            <img src="img/CONTACT-INTRODUCTION.png" alt="Professional introduction" />
        </p>
    </header>

    <section class="experience-section">
        <h2 class="EXPERIENCE-TITLE">
            <img src="img/EXPERIENCE-TITLE.png" alt="Experience" />
        </h2>
        <div class="experience-item">
            <h3 class="EXPERIENCE-COMPANY">
                <img src="img/EXPERIENCE-COMPANY.png" alt="Company name" />
            </h3>
            <h4 class="EXPERIENCE-POSITION">
                <img src="img/EXPERIENCE-POSITION.png" alt="Position" />
            </h4>
            <time class="EXPERIENCE-DATE">
                <img src="img/EXPERIENCE-DATE.png" alt="Employment dates" />
            </time>
            <p class="EXPERIENCE">
                <img src="img/EXPERIENCE-DESCRIPTION.png" alt="Experience description" />
            </p>
        </div>
    </section>

    <section class="education-section">
        <h2 class="EDUCATION-TITLE">
            <img src="img/EDUCATION-TITLE.png" alt="Education" />
        </h2>
        <div class="education-item">
            <h3 class="EDUCATION-SCHOOL">
                <img src="img/EDUCATION-SCHOOL.png" alt="School name" />
            </h3>
            <h4 class="EDUCATION-FIELD-OF">
                <img src="img/EDUCATION-FIELD-OF-STUDY.png" alt="Field of study" />
            </h4>
            <time class="EDUCATION-DATE">
                <img src="img/EDUCATION-DATE.png" alt="Education dates" />
            </time>
            <p class="EDUCATION">
                <img src="img/EDUCATION-DESCRIPTION.png" alt="Education description" />
            </p>
        </div>
    </section>
</main>
</body>
</html>
