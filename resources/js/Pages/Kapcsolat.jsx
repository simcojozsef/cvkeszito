import React, { useState } from "react";
import { AiOutlineCheck } from "react-icons/ai"; 
import "./Kapcsolat.css";
import Footer from "../Components/Footer";

export default function Kapcsolat() {
  const [formData, setFormData] = useState({
    vezeteknev: "",
    keresztnev: "",
    email: "",
    telefon: "",
    uzenet: "",
  });

  const [message, setMessage] = useState(""); // success/error message

  const handleWebsiteClick = () => {
    window.open("https://jozsefsimco.hu", "_blank"); // Opens in a new tab/window
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage("");

    try {
      const response = await fetch("http://localhost:8000/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await response.json();
      setMessage(data.message);

      // Clear form after success
      setFormData({
        vezeteknev: "",
        keresztnev: "",
        email: "",
        telefon: "",
        uzenet: "",
      });
    } catch (err) {
      console.error(err);
      setMessage("Hiba történt az üzenet küldésekor.");
    }
  };

  return (
    <>
      <div className="contact-section">
        <h1 className="contact-title">Kapcsolat</h1>

        <div className="contact-container">
          {/* Profi önéletrajz készítés */}
          <div className="pro-creation-info">
            <h2>Profi önéletrajz készítése designer segítségével</h2>
            <ul>
              <li><AiOutlineCheck className="check-icon" /> Az elkészítés 3 ingyenes módosítást tartalmaz</li>
              <li><AiOutlineCheck className="check-icon" /> Egyszeri bruttó ára: 79.900 Ft</li>
              <li><AiOutlineCheck className="check-icon" /> Számlaképesen elkészül 4 napon belül</li>
              <li><AiOutlineCheck className="check-icon" /> Tapasztalatokat, tanulmányokat az ügyfél küldi meg számunkra</li>
              <li><AiOutlineCheck className="check-icon" /> Ha van egy minta/sablon, amit szeretne, azt lekövetjük</li>
            </ul>
          </div>

          {/* Bal oldal - Elérhetőségek */}
          <div className="contact-info">
            <p><strong>Kapcsolattartó: </strong>Simco József</p>
            <p><strong>Telefon: </strong> +36 20 972 6362</p>
            <p>
              <strong>E-mail: </strong> info@jozsefsimco.hu
            </p>
            <p>
              <strong>Weboldal: </strong> 
              <span 
                className="website" 
                onClick={handleWebsiteClick} 
                style={{ cursor: "pointer", color: "#007bff", textDecoration: "underline" }}
              >
                https://jozsefsimco.hu
              </span>
            </p>
            <p><strong>Cím: </strong> 4002 Debrecen, Salakos u. 85</p>
          </div>

          {/* Új Contact Form box */}
          <div className="contact-form-box">
            <h2>Kapcsolatfelvétel</h2>
            {message && <p className="form-message">{message}</p>}
            <form onSubmit={handleSubmit}>
              <input
                type="text"
                name="vezeteknev"
                value={formData.vezeteknev}
                onChange={handleChange}
                placeholder="Vezetéknév"
                required
              />
              <input
                type="text"
                name="keresztnev"
                value={formData.keresztnev}
                onChange={handleChange}
                placeholder="Keresztnév"
                required
              />
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="E-mail"
                required
              />
              <input
                type="text"
                name="telefon"
                value={formData.telefon}
                onChange={handleChange}
                placeholder="Telefon"
              />
              <textarea
                name="uzenet"
                value={formData.uzenet}
                onChange={handleChange}
                placeholder="Üzenet"
                required
              />
              <button className="send-form" type="submit">Küldés</button>
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
