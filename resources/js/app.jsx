import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import logo from "../images/logo.png";
import "../css/app.css";
/*Blog*/



// Import the full page components
import Home from "./Pages/Home";
import OneletrajzKeszitese from "./Pages/OneletrajzKeszitese";
import OneletrajzSablonok from "./Pages/OneletrajzSablonok";
import Arazas from "./Pages/Arazas";
import Kapcsolat from "./Pages/Kapcsolat";
import CreateCvPersonal from "./Pages/CreateCvPersonal";
import CreateCvExperience from "./Pages/CreateCvExperience";
import CreateCvEducation from "./Pages/CreateCvEducation";
import CreateCvTemplate from "./Pages/CreateCvTemplate";
import PaymentSuccess from "./Pages/PaymentSuccess";

// Blog import 
import Blog from "./Pages/Blog";
import PostPage from "./Pages/PostPage";
import AltalanosSzerzodesiFeltetelek from "./Pages/AltalanosSzerzodesiFeltetelek";
import Adatvedelem from "./Pages/Adatvedelem";
import SutiTajekoztato from "./Pages/SutiTajekoztato";

import CookiePopup from "./Components/CookiePopup";

function App() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
        <Router>
            <header className="navbar">
                <div className="navbar-container">
                    {/* Logo */}
                    <div className="navbar-logo">
                        <Link to="/" style={{ display: "flex", alignItems: "center", textDecoration: "none" }}>
                            <img className="logo" src={logo} alt="Logo" />
                            <span className="logo-text">Készítő</span>
                        </Link>
                    </div>

                    {/* Hamburger button (mobile) */}
                    {/* Hamburger button (mobile) */}
                    <button
                        className="navbar-toggle"
                        onClick={() => setIsOpen(!isOpen)}
                        aria-label="Toggle menu"
                    >
                        {isOpen ? (
                            <span style={{ color: "white", fontSize: "24px", fontSize: "32px" }}>✕</span>
                        ) : (
                            <span style={{ fontSize: "32px" }}>☰</span>
                        )}
                    </button>

                    {/* Menu */}
                    <nav className={`navbar-menu ${isOpen ? "open" : ""}`}>
                            <ul>
                                <li><Link to="/createcv/personal-data">Önéletrajz készítése</Link></li>
                                <li><Link to="/oneletrajz-sablonok">Sablonok</Link></li>
                                <li><Link to="/blog">Blog</Link></li>
                                <li><Link to="/arazas">Árazás</Link></li>
                                <li><Link to="/kapcsolat">Kapcsolat</Link></li>
                            </ul>
                    </nav>
                </div>
            </header>


            {/* Page content */}
            <main>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/oneletrajz-keszitese" element={<OneletrajzKeszitese />} />
                    <Route path="/oneletrajz-sablonok" element={<OneletrajzSablonok />} />
                    <Route path="/blog" element={<Blog />} />
                    <Route path="/arazas" element={<Arazas />} />
                    <Route path="/kapcsolat" element={<Kapcsolat />} />
                    <Route path="/createcv/personal-data" element={<CreateCvPersonal />} />
                    <Route path="/createcv/experience" element={<CreateCvExperience />} />
                    <Route path="/createcv/education" element={<CreateCvEducation />} />
                    <Route path="/createcv/template" element={<CreateCvTemplate />} />
                    <Route path="/blog/:slug" element={<PostPage />} />
                    <Route path="/success" element={<PaymentSuccess />} />
                    {/* Legal pages */}
                        <Route path="/terms-and-conditions" element={<AltalanosSzerzodesiFeltetelek />} />
                        <Route path="/privacy-policy" element={<Adatvedelem />} />
                        <Route path="/cookie-policy" element={<SutiTajekoztato />} />
                    <Route path="*" element={<h1>404. A keresett oldalt nem találtuk.</h1>} />
                </Routes>
            </main>
        </Router>
        <CookiePopup />
        </>
    );
}

ReactDOM.createRoot(document.getElementById("app")).render(<App />);
