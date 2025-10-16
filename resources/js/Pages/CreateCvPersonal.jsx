import React, { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import './CreateCvPersonal.css';
import Footer from "../Components/Footer";
import placeholder from '../../images/profile_placeholder.png';

// Stepper component
const steps = [
  { label: "Adatok", path: "/createcv/personal-data" },
  { label: "Tapasztalatok", path: "/createcv/experience" },
  { label: "Tanulmányok", path: "/createcv/education" },
  { label: "Sablon", path: "/createcv/template" },
];


function StepProgress() {
  const location = useLocation();

  return (
    <div className="step-progress">
      {steps.map((step, index) => {
        const isActive = location.pathname === step.path;
        const isCompleted =
          steps.findIndex((s) => s.path === location.pathname) > index;

        return (
          <div key={step.path} className="step-wrapper">
            <Link
              to={step.path}
              className={`step ${isActive ? "active" : ""} ${
                isCompleted ? "completed" : ""
              }`}
            >
              <span className="step-index">{index + 1}</span>
              <span className="step-label">{step.label}</span>
            </Link>
            {index < steps.length - 1 && <div className="step-line"></div>}
          </div>
        );
      })}
    </div>
  );
}

// Main form component
export default function CreateCvPersonal() {
  const [form, setForm] = useState({
    profile_picture: null,
    first_name: "",
    last_name: "",
    email: "",
    phone: "",
    address: "",
    introduction: "",
  });
  const [preview, setPreview] = useState(placeholder);
  const [message, setMessage] = useState("");
  const navigate = useNavigate();
  // Checkbox
  const [acceptedTerms, setAcceptedTerms] = useState(false);

  // 👇 This restores saved data (and preview) from sessionStorage
  useEffect(() => {
    const saved = sessionStorage.getItem("personalData");
    if (saved) {
      const parsed = JSON.parse(saved);
      setForm((prev) => ({ ...prev, ...parsed }));
      if (parsed.profile_picture) {
        setPreview(parsed.profile_picture); 
      }
    }
  }, []);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    console.log("Selected file:", file);
    setForm({ ...form, profile_picture: file || null });

    if (file) {
      setPreview(URL.createObjectURL(file)); // show selected file
    } else {
      setPreview("/images/profile_placeholder.png"); // fallback to placeholder
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Checkbox checked
    if (!acceptedTerms) {
      setMessage("Kérjük, fogadja el az adatvédelmi irányelveket és feltételeket!");
      return;
    }

    try {
    const formData = new FormData();

    Object.entries(form).forEach(([key, value]) => {
      // Only append if the value exists
      if (value) {
        // For profile_picture, only append if it's a real File object
        if (key === "profile_picture") {
          if (value instanceof File) {
            formData.append(key, value);
          }
        } else {
          formData.append(key, value);
        }
      }
    });

    const response = await axios.post(
      "https://cvkeszito.hu/api/personal-data",
      formData,
      { headers: { "Content-Type": "multipart/form-data" } }
    );

    // Save to sessionStorage
    sessionStorage.setItem("personalData", JSON.stringify(response.data.data));

    // Update preview with server URL (instead of blob:)
    if (response.data.data.profile_picture) {
      setPreview(response.data.data.profile_picture);
    }

    setMessage(response.data.message);
    navigate("/createcv/experience");

  } catch (error) {
    if (error.response?.data?.errors) {
      setMessage(Object.values(error.response.data.errors).join(" "));
    } else {
      setMessage(error.response?.data?.message || "Hiba történt!");
    }
  }
};

  return (
    <>
    <div className="page-content personal-page-content">
      <StepProgress />

      <div className="createcv-form-card personal-form-card">
        <h1 className="create-cv-title">Adatok</h1>
        <p className="create-cv-description">Az alábbi mezőkben megadott adatok az Ön önéletrajzában fognak megjelenni. Kérjük, adja meg őket figyelmesen és helyesen.</p>
        <form onSubmit={handleSubmit} className="personal-form">
          <div className="profile-picture-container-outer">
            <p className="profile-picture-label">Profilkép</p>
            <span className="profile-picture-markup">
              Az ideális megjelenítéshez kérjük, válasszon egy <strong>500 × 500 px méretű, négyzet alakú</strong> .jpeg vagy .png formátumú képet.
            </span>
            <div className="profile-picture-container-inner">
              <input
                id="profilePictureInput"
                type="file"
                name="profile_picture"
                accept="image/*"
                onChange={handleFileChange}
                className="file-input"
              />
              <label htmlFor="profilePictureInput" className="file-input-label">
                Profilkép kiválasztása
              </label>

              <div className="image-preview">
                <img
                  src={preview}
                  alt="Preview"
                  style={{ width: "120px", height: "120px", borderRadius: "50%" }}
                />
              </div>
            </div>
          </div>

          <p className="personal-data-label">Adatok</p>
          <input
            type="text"
            name="first_name"
            placeholder="Keresztnév"
            value={form.first_name}
            onChange={handleChange}
            required
          />
          <input
            type="text"
            name="last_name"
            placeholder="Vezetéknév"
            value={form.last_name}
            onChange={handleChange}
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={form.email}
            onChange={handleChange}
            required
          />
          <input
            type="text"
            name="phone"
            placeholder="Telefonszám"
            value={form.phone}
            onChange={handleChange}
          />
          <input
            type="text"
            name="address"
            placeholder="Cím"
            value={form.address}
            onChange={handleChange}
          />
          <p className="personal-data-label">Bemutatkozás</p>
          <textarea
            name="introduction"
            className="introduction"
            placeholder="Bemutatkozó"
            value={form.introduction}
            onChange={handleChange}
            rows={4}
          />
          <div className="terms-checkbox">
            <input
              type="checkbox"
              id="acceptedTerms"
              checked={acceptedTerms}
              onChange={(e) => setAcceptedTerms(e.target.checked)}
              required
            />
            <label className="checkbox-content" htmlFor="acceptedTerms">
              <span>Elfogadom az&nbsp;</span>
              <a href="/privacy-policy" target="_blank" rel="noopener noreferrer">adatvédelmi irányelveket</a>
              <span>,&nbsp;</span>
              <a href="/cookie-policy" target="_blank" rel="noopener noreferrer">süti tájékoztatót</a>
              <span>&nbsp;és az&nbsp;</span>
              <a href="/terms-and-conditions" target="_blank" rel="noopener noreferrer">általános szerződési feltételeket</a>
              <span>.</span>
            </label>
          </div>
          <button className="continue-button" type="submit">Mentés és továbblépés</button>
        </form>
        {message && <p>{message}</p>}
      </div>
    </div>
    <Footer />
    </>
  );
}
