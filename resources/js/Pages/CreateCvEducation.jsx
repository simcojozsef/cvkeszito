import React, { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import './CreateCvEducation.css';
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

export default function CreateCvEducation() {
  const navigate = useNavigate();
  const savedPersonalData = JSON.parse(sessionStorage.getItem("personalData"));
  const personal_data_id = savedPersonalData?.id;

  const [educations, setEducations] = useState([
    { school: "", degree: "", field_of_study: "", start_date: "", end_date: "", description: "" },
  ]);
  const [message, setMessage] = useState("");

  const handleChange = (index, e) => {
    const newEducations = [...educations];
    newEducations[index][e.target.name] = e.target.value;
    setEducations(newEducations);
  };

  const maxItems = 3;
  const handleAdd = () => {
    if (educations.length >= maxItems) {
      setMessage("Maximum 3 tanulmányt adhat hozzá.");
      return;
    }
    setEducations([
      ...educations,
      { school: "", degree: "", field_of_study: "", start_date: "", end_date: "", description: "" },
    ]);
  };

  const handleRemove = (index) => {
    const newEducations = educations.filter((_, i) => i !== index);
    setEducations(newEducations);
  };

  const handleSubmit = async (e) => {
  e.preventDefault();
  try {
    // send each education to backend
    for (let edu of educations) {
      await axios.post("https://cvkeszito.hu/api/educations", {
        ...edu,
        personal_data_id,
      });
    }

    // save to sessionStorage
    sessionStorage.setItem("educations", JSON.stringify(educations));

    setMessage("Educations saved successfully!");
    navigate("/createcv/template"); // go to next step
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
    <div className="page-content education-page-content">
      <StepProgress />

      <div className="createcv-form-card education-form-card">
        <h1>Tanulmányok</h1>
        <p className="create-cv-description">Kérjük, az alábbi mezőkben adja meg korábbi tanulmányait.</p>
        <form onSubmit={handleSubmit}>
          {educations.map((edu, index) => (
            <div key={index} className="education-item">
              <label htmlFor={`school_${index}`}>Hol tanult?</label>
              <input
                type="text"
                name="school"
                placeholder="Intézmény neve"
                value={edu.school}
                onChange={(e) => handleChange(index, e)}
                required
                maxLength={40}
              />
              <small>{edu.school.length} / 40 karakter</small>
              <label htmlFor={`degree_${index}`}>Milyen érettségit vagy diplomát szerzett?</label>
              <input
                type="text"
                name="degree"
                placeholder="Érettségi / Diploma"
                value={edu.degree}
                onChange={(e) => handleChange(index, e)}
                maxLength={40}
              />
              <small>{edu.degree.length} / 40 karakter</small>
              <label htmlFor={`field_of_study_${index}`}>Milyen szakon vagy tanulmányi területen tanult?</label>
              <input
                type="text"
                name="field_of_study"
                placeholder="Szak / Tanulmányi terület"
                value={edu.field_of_study}
                onChange={(e) => handleChange(index, e)}
                maxLength={40}
              />
              <small>{edu.field_of_study.length} / 40 karakter</small>
              <label htmlFor={`start_date_${index}`}>Kezdés ideje: </label>
              <input
                type="date"
                name="start_date"
                placeholder="Kezdés dátuma"
                value={edu.start_date}
                onChange={(e) => handleChange(index, e)}
                required
              />
              <label className="education-end-date-label" htmlFor={`end_date_${index}`}>Végzés ideje: </label>
              <input
                type="date"
                name="end_date"
                placeholder="Befejezés dátuma"
                value={edu.end_date}
                onChange={(e) => handleChange(index, e)}
              />
              <label className="education-description-label" htmlFor={`description_${index}`}>Milyen tanulmányt folytatott?</label>
              <textarea
                name="description"
                placeholder="Leírás"
                value={edu.description}
                onChange={(e) => handleChange(index, e)}
                maxLength={230}
              />
              <small>{edu.description.length} / 230 karakter</small>
              <button type="button" onClick={() => handleRemove(index)}>
                Törlés
              </button>
              <hr />
            </div>
          ))}
          <div className="button-container">
            <button className="button button-add-new" type="button" onClick={handleAdd}>
                Új tanulmány hozzáadása
            </button>
            <br />
            <button className="button button-submit" type="submit">Mentés és továbblépés</button>
          </div>
        </form>
        {message && <p>{message}</p>}
      </div>
    </div>
    <Footer />
    </>
  );
}
