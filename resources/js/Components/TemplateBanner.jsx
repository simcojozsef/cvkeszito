import React, { useState } from "react";
import "./TemplateBanner.css";

const templates = [
  "https://cvkeszito.hu/images/cv-minta1.JPG",
  "https://cvkeszito.hu/images/cv-minta2.JPG",
  "https://cvkeszito.hu/images/cv-minta3.JPG",
  "https://cvkeszito.hu/images/cv-minta4.JPG",
  "https://cvkeszito.hu/images/cv-minta5.JPG",
  "https://cvkeszito.hu/images/cv-minta6.JPG",
];

const labels = [
  "Népszerű",
  "Gyakori választás",
  "Színes",
  "Modern",
  "Letisztult",
  "Elegáns",
];

const TemplateBanner = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [touchStartX, setTouchStartX] = useState(null);

  const openLightbox = (index) => {
    setCurrentIndex(index);
    setIsOpen(true);
  };

  const closeLightbox = () => setIsOpen(false);

  const nextImage = () => setCurrentIndex((currentIndex + 1) % templates.length);
  const prevImage = () =>
    setCurrentIndex((currentIndex - 1 + templates.length) % templates.length);

  const handleTouchStart = (e) => setTouchStartX(e.touches[0].clientX);

  const handleTouchEnd = (e) => {
    if (touchStartX === null) return;
    const touchEndX = e.changedTouches[0].clientX;
    const diff = touchStartX - touchEndX;
    if (diff > 50) nextImage(); // swipe left
    else if (diff < -50) prevImage(); // swipe right
    setTouchStartX(null);
  };

  return (
    <section className="template-banner-section">
      <div className="template-banner-container">
        <h2 className="template-title">Tűnjön ki az önéletrajzával!</h2>
        <p className="template-subtitle">
          Növelje esélyeit az állásszerzésre azzal, hogy professzionálisan megtervezett önéletrajz-sablonjainkkal és kiegészítő színvilágunkkal készíti el önéletrajzát.
        </p>

        <div className="template-images">
          {templates.map((src, index) => (
            <div
              key={index}
              className="template-card"
              onClick={() => openLightbox(index)}
            >
              <img src={src} alt={`CV Template ${index + 1}`} />
              <p className="template-label">{labels[index]}</p>
            </div>
          ))}
        </div>

        <p className="template-note">
          Készítse el könnyedén önéletrajzát a <a className="create-cv-highlighted" href="https://cvkeszito.hu/createcv/personal-data" target="_blank" rel="noopener noreferrer">CV Készítő online szerkesztőnkkel</a>, és töltse le PDF formátumban!
        </p>
      </div>

      {isOpen && (
        <div
          className="lightbox-overlay"
          onClick={closeLightbox}
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
        >
          <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
            <button className="lightbox-close" onClick={closeLightbox}>
              X
            </button>
            <button className="lightbox-prev" onClick={prevImage}>
              &#10094;
            </button>
            <img src={templates[currentIndex]} alt={`CV Template ${currentIndex + 1}`} />
            <button className="lightbox-next" onClick={nextImage}>
              &#10095;
            </button>
          </div>
        </div>
      )}
    </section>
  );
};

export default TemplateBanner;
