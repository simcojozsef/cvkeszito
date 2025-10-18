import React, { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import './CreateCvExperience.css';
import Footer from "../Components/Footer";

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

export default function CreateCvExperience() {
  const navigate = useNavigate();

  const savedPersonalData = JSON.parse(sessionStorage.getItem("personalData"));
  const personal_data_id = savedPersonalData?.id;

  const [experiences, setExperiences] = useState([
    { company: "", position: "", start_date: "", end_date: "", description: "" },
  ]);
  const [message, setMessage] = useState("");

  const handleChange = (index, e) => {
    const newExperiences = [...experiences];
    newExperiences[index][e.target.name] = e.target.value;
    setExperiences(newExperiences);
  };

  const maxItems = 3;
  const handleAdd = () => {
    if (experiences.length >= maxItems) {
          setMessage("Maximum 3 tapasztalatot adhat hozzá.");
        return;
    }
    setExperiences([
        ...experiences,
        { company: "", position: "", start_date: "", end_date: "", description: "" },
    ]);
};

  const handleRemove = (index) => {
    const newExperiences = experiences.filter((_, i) => i !== index);
    setExperiences(newExperiences);
  };

  const handleSubmit = async (e) => {
  e.preventDefault();
  try {
    // send to backend
    for (let exp of experiences) {
      await axios.post("https://cvkeszito.hu/api/experiences", {
        ...exp,
        personal_data_id,
      });
    }

    // save to sessionStorage
    sessionStorage.setItem("experiences", JSON.stringify(experiences));

    setMessage("Experiences saved successfully!");
    navigate("/createcv/education"); // go to next step
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
    <div className="page-content experience-page-content">
      <StepProgress />

      <div className="createcv-form-card experience-form-card">
        <h1>Tapasztalatok</h1>
        <p className="create-cv-description">Kérjük, az alábbi mezőkben adja meg korábbi munkatapasztalatait.</p>
        <form onSubmit={handleSubmit}>
          {experiences.map((exp, index) => (
            <div key={index} className="experience-item">
              <div className="experience-data-wrapper">
                <div className="experience-field-wrapper">
                  <label htmlFor={`company_${index}`}>Hol dolgozott?:</label>
                  <input
                    type="text"
                    name="company"
                    placeholder="Cég neve"
                    value={exp.company}
                    onChange={(e) => handleChange(index, e)}
                    required
                    maxLength={40}
                  />
                  <small>
                    {exp.company.length} / 40 karakter
                  </small>
                </div>
                <div className="experience-field-wrapper">
                  <label htmlFor={`position_${index}`}>Milyen pozíciót töltött be?: </label>
                  <input
                    type="text"
                    name="position"
                    placeholder="Pozíció"
                    value={exp.position}
                    onChange={(e) => handleChange(index, e)}
                    required
                    maxLength={40}
                  />
                  <small>
                    {exp.position.length} / 40 karakter
                  </small>
                </div>
              </div>
              <div className="experience-date-wrapper">
                <div className="experience-startdate-wrapper">
                  <label htmlFor={`start_date_${index}`}>Kezdés dátuma:</label>
                  <input
                    type="date"
                    name="start_date"
                    placeholder="Kezdés dátuma"
                    value={exp.start_date}
                    onChange={(e) => handleChange(index, e)}
                    required
                  />
                </div>
                <div className="experience-enddate-wrapper">
                  <label className="end-date-label" htmlFor={`end_date_${index}`}>Befejezés dátuma:</label>
                  <input
                    type="date"
                    name="end_date"
                    placeholder="Befejezés dátuma"
                    value={exp.end_date}
                    onChange={(e) => handleChange(index, e)}
                  />
                </div>
              </div>
              <label className="description-label" htmlFor={`description_${index}`}>Milyen feladatokat látott el?: </label>
              <textarea
                name="description"
                placeholder="Leírás"
                value={exp.description}
                onChange={(e) => handleChange(index, e)}
                maxLength={230}
              />
              <small>
                {exp.description.length} / 230 karakter
              </small>
              <button type="button" onClick={() => handleRemove(index)}>
                Törlés
              </button>
              <hr />
            </div>
          ))}

          <div className="button-container">
            <button className="button button-add-new" type="button" onClick={handleAdd}>
                Új tapasztalat hozzáadása
            </button>
            <br />
            <button className="button button-submit continue-button" type="submit">Mentés és továbblépés</button>
          </div>
        </form>
        {message && <p>{message}</p>}
      </div>
    </div>
    <Footer />
    </>
  );
}
