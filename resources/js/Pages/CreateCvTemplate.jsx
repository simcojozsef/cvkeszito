import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Worker, Viewer, SpecialZoomLevel } from '@react-pdf-viewer/core';
import '@react-pdf-viewer/core/lib/styles/index.css';
import "./CreateCvTemplate.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { loadStripe } from "@stripe/stripe-js";
import { FaLock, FaDownload, FaExclamationCircle } from "react-icons/fa";
import { Link } from "react-router-dom";
import Footer from "../Components/Footer";

const steps = [
  { label: "Adatok", path: "/createcv/personal-data" },
  { label: "Tapasztalatok", path: "/createcv/experience" },
  { label: "Tanulmányok", path: "/createcv/education" },
  { label: "Sablon", path: "/createcv/template" },
];

function StepProgress() {
    const location = useLocation();
    const navigate = useNavigate();

    return (
        <div className="step-progress">
            {steps.map((step, index) => {
                const isActive = location.pathname === step.path;
                const isCompleted = steps.findIndex((s) => s.path === location.pathname) > index;

                return (
                    <div key={step.path} className="step-wrapper">
                        <span
                            className={`step ${isActive ? "active" : ""} ${isCompleted ? "completed" : ""}`}
                            onClick={() => navigate(step.path)}
                            style={{ cursor: "pointer" }}
                        >
                            <span className="step-index">{index + 1}</span>
                            <span className="step-label">{step.label}</span>
                        </span>
                        {index < steps.length - 1 && <div className="step-line"></div>}
                    </div>
                );
            })}
        </div>
    );
}

// Modal component for PDF preview
function PdfModal({ isOpen, onClose, pdfUrl }) {
  if (!isOpen) return null;

  return (
    <div
      className="modal-overlay"
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        backgroundColor: "rgba(0,0,0,0.6)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        zIndex: 1000,
      }}
      onClick={onClose} // close when clicking outside
    >
      <div
        style={{
          position: "relative",
          width: "80%",
          height: "80%",
          backgroundColor: "#fff",
          borderRadius: "10px",
          padding: "1rem",
          display: "flex",
          flexDirection: "column",
        }}
        onClick={(e) => e.stopPropagation()} // prevent modal close when clicking inside
      >
        <button
          onClick={onClose}
          style={{
            position: "absolute",
            top: "10px",
            right: "10px",
            padding: "5px 10px",
            cursor: "pointer",
          }}
        >
          ✕
        </button>

        <div style={{ flex: 1, overflow: "auto" }} onContextMenu={(e) => e.preventDefault()}>
          <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.11.174/build/pdf.worker.min.js">
            <Viewer
              fileUrl={pdfUrl}
              defaultScale={SpecialZoomLevel.PageWidth}
            />
          </Worker>
        </div>
      </div>
    </div>
  );
}

export default function CreateCvTemplate() {
  const [personalData, setPersonalData] = useState(null);
  const [pdfModalUrl, setPdfModalUrl] = useState(null);
  const [hasPaid, setHasPaid] = useState(false);
  const stripePromise = loadStripe("pk_test_51S6AOzRxjLYtlevTwLjqO2X1HCf6eaR9zmEx7WgpncJbjy72vtwVHLYYgc9eW1C8eFVouBSaSgeaZvjPGff8mOr100vkLTFikO");

  // Load personal data
  useEffect(() => {
    const personal = JSON.parse(sessionStorage.getItem("personalData"));
    setPersonalData(personal);
  }, []);

  // Check if payment was completed
  useEffect(() => {
    const paid = sessionStorage.getItem("hasPaid") === "true";
    setHasPaid(paid);
  }, []);

if (!personalData) {
  return (
    <>
      <div className="page-content" style={{ marginBottom: "10rem" }}>
        <StepProgress />
        <div className="createcv-form-card">
          <h1>Hiányzó adatok</h1>
          <p>Kérlek töltsd ki a személyes adatokat először.</p>
        </div>
      </div>
      <Footer />
    </>
  );
}

  const templates = [
    { id: "template1", name: "1. Letisztult" },
    { id: "template2", name: "2. Modern" },
    { id: "template3", name: "3. Népszerű" },
    { id: "template4", name: "4. Artisztikus" },
    { id: "template5", name: "5. Színes" },
    { id: "template6", name: "6. Lágy" },
  ];

  const rows = [];
  for (let i = 0; i < templates.length; i += 3) {
    rows.push(templates.slice(i, i + 3));
  }

  const handleCopyLink = (url) => {
      navigator.clipboard.writeText(url)
          .then(() => {
              toast.success("Link másolva a vágólapra!");
          })
          .catch(() => {
              toast.error("Sikertelen másolás!");
          });
  };


  const handleDownloadClick = async (pdfUrl) => {
  if (!hasPaid) {
    try {
      // Call Laravel backend to create a Stripe session
      const res = await fetch("/api/create-stripe-session", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ pdfUrl }),
      });

      const data = await res.json();

      const stripe = await stripePromise;
      await stripe.redirectToCheckout({ sessionId: data.id });
    } catch (err) {
      console.error(err);
      toast.error("Hiba a fizetésnél!");
    }
  } else {
    // Already paid → allow download
    const link = document.createElement("a");
    link.href = pdfUrl;
    link.download = `CV_${personalData.first_name}_${personalData.last_name}.pdf`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }
};




const handleSendEmail = async (userId, templateId) => {
    if (!personalData?.email) {
        toast.error("Nincs e-mail cím megadva.");
        return;
    }

    try {
        const response = await fetch("/api/send-cv-email", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                email: personalData.email,
                firstName: personalData.first_name,
                lastName: personalData.last_name,
                userId: personalData.id,
                templateId: templateId,
            }),
        });

        const data = await response.json();

        if (data.success) {
            toast.success("Az önéletrajz e-mailben elküldve!");
        } else {
            toast.error(data.message || "Hiba történt az e-mail küldésekor.");
        }
    } catch (err) {
        console.error(err);
        toast.error("Hiba történt az e-mail küldésekor.");
    }
};


  return (
    <>
    <div className="page-content">
      <StepProgress />

      <div className="createcv-form-card text-center">
        <h1 className="mb-6">Választható sablonok</h1>
        <div className="info-box">
          <div className="info-header">
            <FaExclamationCircle className="info-icon" />
            <span className="info-title">Figyelem!</span>
            <span className="info-text">
              Kérjük olvasd el a fizetésre és sablon hozzáférhetőségre vonatkozó tartalmakat:
            </span>
          </div>
          <ul className="info-list">
            <li>Bármelyik sablonnak az ára <strong>2.600 Ft</strong>. Egyszeri fizetés bármelyik kinézetre.</li>
            <li>Sikeres fizetést követően bármelyik sablonú önéletrajzot letöltheted.</li>
            <li>Önéletrajzot nem tárolunk. Amint elhagyod az oldalt az önéletrajzod elvész, ezért kérjük, hogy sikeres fizetést követően mindenképp töltsd le azt.</li>
            <li>Amint sikeresen végrehajtottad a fizetést a <em>Letöltés</em> gombok elérhetővé válnak, ezáltal hozzáférhetsz önéletrajzodhoz.</li>
            <li>Ha profi önéletrajzot szeretnél készíttetni designer segítségével, akkor {' '}
              <Link to="/kapcsolat" className="contact-url">
                 kattints ide.
              </Link>
            </li>
            <li>A weboldalon önéletrajz visszatekintésére és utólagos letöltésre nem kínálunk lehetőséget az oldal elhagyása után!</li>
          </ul>
        </div>
        {rows.map((row, rowIndex) => (
          <div
            key={rowIndex}
            className="create-cv-container grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 justify-center mb-8"
          >
            {row.map((tpl) => {
              const pdfUrl = `http://localhost:8000/cv/pdf/${personalData.id}/${tpl.id}`;
              return (
                <div
                  key={tpl.id}
                  className="border-2 rounded-xl p-2 hover:shadow-lg transition duration-200 generated-cv"
                >
                  <h2 className="mt-3 font-semibold">{tpl.name}</h2>
                  <div style={{ width: "100%", height: "auto" }}>
                    <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.11.174/build/pdf.worker.min.js">
                      <Viewer
                        fileUrl={pdfUrl}
                        defaultScale={SpecialZoomLevel.PageWidth}
                        theme="light"
                        className="pdf-viewer"
                      />
                    </Worker>
                  </div>

                  <div className="button-container flex flex-wrap justify-center gap-2 mt-3">
                    {/*
                    <button
                      onClick={() =>
                        window.open(pdfUrl, "_blank", "noopener,noreferrer")
                      }
                      className="button button-add-new px-3 py-1 bg-gray-200 rounded hover:bg-gray-300"
                    >
                      Megtekintés
                    </button>
                    */}

                    {/* Lightbox preview */}
                    <button
                      onClick={() => setPdfModalUrl(pdfUrl)}
                      className="button button-add-new px-3 py-1 bg-gray-200 rounded hover:bg-gray-300 display-button"
                    >
                      Megtekintés
                    </button>

                    {/*Download button*/}
                    <div className="button-container">
                      {/* Payment button */}
                      <button
                        onClick={!hasPaid ? () => handleDownloadClick(pdfUrl) : undefined}
                        className={`btn btn-payment ${hasPaid ? "paid" : "pending"}`}
                        disabled={hasPaid}
                        title={hasPaid ? "A fizetés már sikeresen megtörtént." : "Fizetés a CV letöltéséhez"}
                      >
                        {hasPaid ? "Sikeres fizetés" : "Fizetés"}
                      </button>

                      {/* Download button */}
                      <button
                        onClick={hasPaid ? () => handleDownloadClick(pdfUrl) : undefined}
                        className={`btn btn-download ${hasPaid ? "available" : "disabled"}`}
                        disabled={!hasPaid}
                        title={!hasPaid ? "Fizetést követően a letöltés elérhetővé válik." : "CV letöltése"}
                      >
                        <span className="btn-icon">{hasPaid ? <FaDownload /> : <FaLock />}</span>
                        Letöltés
                      </button>
                    </div>

                    {/*
                    <button
                      onClick={() => handleCopyLink(pdfUrl)}
                      className="button button-add-new px-3 py-1 bg-gray-200 rounded hover:bg-gray-300"
                    >
                      Megosztás
                    </button>
                    */}

                    {/* Send via email button */}
                    {/*
                    <button
                      onClick={() => handleSendEmail(personalData.id, tpl.id)}
                      className="btn btn-email"
                  >
                      Küldés e-mailben
                  </button>
                  */}

                  </div>
                </div>
              );
            })}
          </div>
        ))}
      </div>

      <PdfModal
        isOpen={!!pdfModalUrl}
        onClose={() => setPdfModalUrl(null)}
        pdfUrl={pdfModalUrl}
      />

      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </div>
    <Footer/>
    </>
  );
}
