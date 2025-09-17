import React, { useState } from "react";
import "./TemplateBanner.css";

const templates = [
  "https://cvkeszito.hu/images/cv-minta1.jpg",
  "https://cvkeszito.hu/images/cv-minta2.jpg",
  "https://cvkeszito.hu/images/cv-minta3.jpg",
  "https://cvkeszito.hu/images/cv-minta4.jpg",
  "https://cvkeszito.hu/images/cv-minta5.jpg",
  "https://cvkeszito.hu/images/cv-minta6.jpg",
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
        <h2 className="template-title">Tűnj ki az önéletrajzoddal!</h2>
        <p className="template-subtitle">
          Növeld esélyeid az állásszerzésre azzal, hogy professzionálisan megtervezett önéletrajz-sablonjainkkal és kiegészítő színvilágunkkal készíted el önéletrajzod.
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
          Tekintsd meg az összes elérhető professzionális önéletrajz sablont.
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
