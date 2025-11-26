<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <meta name="description" content="Professional resume and contact information" />
    <title>Professional Resume</title>

    <style>
        /* globals.css */
        @import url("https://cdnjs.cloudflare.com/ajax/libs/meyer-reset/2.0/reset.min.css");
        * {
            -webkit-font-smoothing: antialiased;
            box-sizing: border-box;
        }
        html, body {
            margin: 0;
            height: 100%;
        }
        button:focus-visible {
            outline: 2px solid #4a90e2 !important;
            outline: -webkit-focus-ring-color auto 5px !important;
        }
        a {
            text-decoration: none;
        }

        /* style.css */
        .box {
            position: relative;
            width: 794px;
            height: 1123px;
        }

        .box .group {
            position: fixed;
            top: 877px;
            left: -1393px;
            width: 822px;
            height: 1123px;
        }

        .box .BACKGROUND {
            position: absolute;
            top: 0;
            left: 0;
            width: 794px;
            height: 1123px;
            background-image: url("img/BACKGROUND.png");
            background-size: cover;
            background-position: center;
        }

        .box .contact-header { position: relative; }

        .box .CONTACT-NAME,
        .box .CONTACT-EMAIL,
        .box .CONTACT-INTRODUCTION,
        .box .CONTACT-PHONE,
        .box .PROFILE-PICTURE,
        .box .EXPERIENCE-TITLE,
        .box .EDUCATION-TITLE,
        .box .EXPERIENCE-COMPANY,
        .box .EDUCATION-SCHOOL,
        .box .EXPERIENCE-DATE,
        .box .EDUCATION-DATE,
        .box .EXPERIENCE,
        .box .EDUCATION,
        .box .EDUCATION-FIELD-OF,
        .box .EXPERIENCE-POSITION {
            margin: 0;
            display: block;
        }

        .box img {
            display: block;
            width: 100%;
            height: 100%;
        }

        .box .CONTACT-NAME { position: absolute; top: 67px; left: 51px; width: 276px; height: 29px; }
        .box .CONTACT-EMAIL { position: absolute; top: 136px; left: 202px; width: 99px; height: 14px; }
        .box .CONTACT-INTRODUCTION { position: absolute; top: 184px; left: 51px; width: 161px; height: 12px; }
        .box .CONTACT-PHONE { position: absolute; top: 136px; left: 50px; width: 106px; height: 10px; }
        .box .PROFILE-PICTURE { position: absolute; top: 31px; left: 528px; width: 200px; height: 200px; border-radius: 0; }
        .box .EXPERIENCE-TITLE { position: absolute; top: 277px; left: 51px; width: 141px; height: 14px; }
        .box .EDUCATION-TITLE { position: absolute; top: 590px; left: 51px; width: 140px; height: 14px; }
        .box .EXPERIENCE-COMPANY { position: absolute; top: 313px; left: 51px; width: 123px; height: 9px; }
        .box .EDUCATION-SCHOOL { position: absolute; top: 626px; left: 51px; width: 111px; height: 9px; }
        .box .EXPERIENCE-DATE { position: absolute; top: 342px; left: 51px; width: 79px; height: 7px; }
        .box .EDUCATION-DATE { position: absolute; top: 656px; left: 51px; width: 79px; height: 7px; }
        .box .EXPERIENCE { position: absolute; top: 359px; left: 51px; width: 576px; height: 22px; }
        .box .EDUCATION { position: absolute; top: 673px; left: 51px; width: 576px; height: 22px; }
        .box .EDUCATION-FIELD-OF { position: absolute; top: 641px; left: 51px; width: 133px; height: 7px; }
        .box .EXPERIENCE-POSITION { position: absolute; top: 328px; left: 51px; width: 97px; height: 7px; }
    </style>
</head>
<body>
    <main class="box">
        <article class="group">
            <div class="BACKGROUND" role="img" aria-label="Background design"></div>
            <header class="contact-header">
                <h1 class="CONTACT-NAME">
                    <img src="{{ asset('img/CONTACT-NAME.png') }}" alt="Contact Name" />
                </h1>
                <address class="contact-info">
                    <div class="CONTACT-PHONE">
                        <img src="{{ asset('img/CONTACT-PHONE.png') }}" alt="Phone number" />
                    </div>
                    <a href="mailto:mail@mail.com" target="_blank" rel="noopener noreferrer" class="CONTACT-EMAIL">
                        <img src="{{ asset('img/CONTACT-EMAIL.png') }}" alt="Email: mail@mail.com" />
                    </a>
                </address>
                <p class="CONTACT-INTRODUCTION">
                    <img src="{{ asset('img/CONTACT-INTRODUCTION.png') }}" alt="Professional introduction" />
                </p>
            </header>
            <aside class="PROFILE-PICTURE">
                <img src="{{ asset('img/PROFILE-PICTURE.png') }}" alt="Profile picture" />
            </aside>
            <section class="experience-section" aria-labelledby="experience-heading">
                <h2 id="experience-heading" class="EXPERIENCE-TITLE">
                    <img src="{{ asset('img/EXPERIENCE-TITLE.png') }}" alt="Experience" />
                </h2>
                <article class="experience-item">
                    <h3 class="EXPERIENCE-COMPANY">
                        <img src="{{ asset('img/EXPERIENCE-COMPANY.png') }}" alt="Company name" />
                    </h3>
                    <h4 class="EXPERIENCE-POSITION">
                        <img src="{{ asset('img/EXPERIENCE-POSITION.png') }}" alt="Position title" />
                    </h4>
                    <time class="EXPERIENCE-DATE">
                        <img src="{{ asset('img/EXPERIENCE-DATE.png') }}" alt="Employment dates" />
                    </time>
                    <p class="EXPERIENCE">
                        <img src="{{ asset('img/EXPERIENCE-DESCRIPTION.png') }}" alt="Experience description" />
                    </p>
                </article>
            </section>
            <section class="education-section" aria-labelledby="education-heading">
                <h2 id="education-heading" class="EDUCATION-TITLE">
                    <img src="{{ asset('img/EDUCATION-TITLE.png') }}" alt="Education" />
                </h2>
                <article class="education-item">
                    <h3 class="EDUCATION-SCHOOL">
                        <img src="{{ asset('img/EDUCATION-SCHOOL.png') }}" alt="School name" />
                    </h3>
                    <h4 class="EDUCATION-FIELD-OF">
                        <img src="{{ asset('img/EDUCATION-FIELD-OF-STUDY.png') }}" alt="Field of study" />
                    </h4>
                    <time class="EDUCATION-DATE">
                        <img src="{{ asset('img/EDUCATION-DATE.png') }}" alt="Education dates" />
                    </time>
                    <p class="EDUCATION">
                        <img src="{{ asset('img/EDUCATION-DESCRIPTION.png') }}" alt="Education description" />
                    </p>
                </article>
            </section>
        </article>
    </main>
</body>
</html>
