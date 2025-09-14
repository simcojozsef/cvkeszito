
import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

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

export default function CreateCvTemplate() {
  const [personalData, setPersonalData] = useState(null);
  const [experiences, setExperiences] = useState([]);
  const [educations, setEducations] = useState([]);

  useEffect(() => {
    const personal = JSON.parse(sessionStorage.getItem("personalData"));
    const exp = JSON.parse(sessionStorage.getItem("experiences")) || [];
    const edu = JSON.parse(sessionStorage.getItem("educations")) || [];

    setPersonalData(personal);
    setExperiences(exp);
    setEducations(edu);
  }, []);

  return (
    <div className="page-content">
      <StepProgress />

      <div className="createcv-form-card">
        <h1>Összegzés / Sablon</h1>

        {/* Personal Data */}
        {personalData && (
          <div>
            <h2>Személyes adatok</h2>
            <p>Keresztnév: {personalData.first_name}</p>
            <p>Vezetéknév: {personalData.last_name}</p>
            <p>Email: {personalData.email}</p>
            <p>Telefonszám: {personalData.phone}</p>
          </div>
        )}

        {/* Experiences */}
        {experiences.length > 0 && (
          <div>
            <h2>Tapasztalatok</h2>
            {experiences.map((exp, index) => (
              <div key={index} style={{ marginBottom: "1rem" }}>
                <p>
                  <strong>{exp.position}</strong> at <em>{exp.company}</em>
                </p>
                <p>
                  {exp.start_date} - {exp.end_date || "present"}
                </p>
                <p>{exp.description}</p>
              </div>
            ))}
          </div>
        )}

        {/* Education */}
        {educations.length > 0 && (
          <div>
            <h2>Tanulmányok</h2>
            {educations.map((edu, index) => (
              <div key={index} style={{ marginBottom: "1rem" }}>
                <p>
                  <strong>{edu.degree}</strong> at <em>{edu.school}</em>
                </p>
                <p>
                  {edu.start_date} - {edu.end_date || "present"}
                </p>
                <p>Szak: {edu.field_of_study}</p>
                <p>{edu.description}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

