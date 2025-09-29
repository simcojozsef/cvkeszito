import React from "react";
import "./UserReviews.css";

const reviews = [
  {
    name: "Katalin",
    role: "HR Reprezentatív",
    comment: "Kétségtelen, hogy a CV Készítő nekem nagyon jól működött. 15 percen belül elkészítettem önéletrajzomat és elküldtem az e-mail programmal.",
    stars: 5,
    image: "/images/testimonial/testimonial_1.png"
  },
  {
    name: "János",
    role: "Designer",
    comment: "Pozitív megjegyzéseket kaptam önéletrajzomra, és nagyon gyorsan találtam egy nagyszerű állást. Mindenképpen ajánlom a CV Készítőt!",
    stars: 5,
    image: "/images/testimonial/testimonial_2.png"
  },
  {
    name: "Csilla",
    role: "Marketing",
    comment: "Nagyon hasznos, hogy az összes önéletrajzomat és jelentkezésemet egy helyen kezelhetem a CV Készítővel. Olyan szuper önéletrajz-sablonok érhetők el benne!",
    stars: 5,
    image: "/images/testimonial/testimonial_3.png"
  },
    {
    name: "Dénes",
    role: "Programozó",
    comment: "Kétségtelen, hogy a CV Készítő nekem nagyon jól működött. 15 percen belül elkészítettem önéletrajzomat és elküldtem az e-mail programmal.",
    stars: 5,
    image: "/images/testimonial/testimonial_4.png"
  },
  {
    name: "Laura",
    role: "Ügyvezető",
    comment: "Pozitív megjegyzéseket kaptam önéletrajzomra, és nagyon gyorsan találtam egy nagyszerű állást. Mindenképpen ajánlom a CV Készítőt!",
    stars: 5,
    image: "/images/testimonial/testimonial_5.png"
  },
  {
    name: "Tamás",
    role: "Edző",
    comment: "Nagyon hasznos, hogy az összes önéletrajzomat és jelentkezésemet egy helyen kezelhetem a CV Készítővel. Olyan szuper önéletrajz-sablonok érhetők el benne!",
    stars: 5,
    image: "/images/testimonial/testimonial_6.png"
  },
];

const UserReviews = () => {
  return (
    <section className="user-reviews-section">
      <div className="max-w-5xl mx-auto px-4">
        <h2>Mit mondanak felhasználóink a CV Készítőről?</h2>
        <p className="subtitle">
          Találja meg Ön is álommunkáját. Mi csak elősegítjük a folyamatot egy professzionális önéletrajzzal.
        </p>

        <div className="user-reviews-container">
          {reviews.map((review, index) => (
            <div key={index} className="review-card">
              <img
                src={review.image}
                alt={review.name}
                className="profile-image"
              />
              <p className="comment">"{review.comment}"</p>
              <div className="stars">
                {"★".repeat(review.stars)}{"☆".repeat(5 - review.stars)}
              </div>
              <h3>{review.name}</h3>
              <p className="role">{review.role}</p>
            </div>
          ))}
        </div>

        <div className="companies-section text-center mt-12">
          <p className="companies mb-4">
            Top vállalatok is alkalmazzák felhasználóinkat!
          </p>
          <div className="company-logos">
            <img src="/images/apple-logo%201.svg" alt="Apple" className="company-logo apple-logo" />
            <img src="/images/google-logo%201.svg" alt="Google" className="company-logo google-logo" />
            <img src="/images/nike-logo%201.svg" alt="Nike" className="company-logo nike-logo" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default UserReviews;
