import React from "react";
import { Link } from "react-router-dom";
import Advantages from "../Components/Advantages";
import UserReviews from "../Components/UserReviews";
import "./Home.css";
import CallToAction from "../Components/CallToAction"; 
import TemplateBanner from "../Components/TemplateBanner"; 
import Information from "../Components/Information"; 
import FooterCallToAction from "../Components/FooterCallToAction";
import Footer from "../Components/Footer";

export default function Home() {
    return (
        <>
            <main
                style={{
                    position: "relative",
                    minHeight: "500px",
                    overflow: "hidden",
                    background: "linear-gradient(135deg, #7d79d8, #62cccc)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    padding: "60px 20px",
                    fontSize: "12px",
                }}
            >
                {/* Hero content */}
                <div
                    style={{
                        position: "relative",
                        zIndex: 1,
                        textAlign: "center",
                        color: "#fff",
                        maxWidth: "800px",
                        width: "100%",
                        marginTop: "-200px",
                    }}
                >
                    <h1 className="title">
                        Készítse el professzionális önéletrajzát percek alatt – technikai tudás nélkül!
                    </h1>
                    <h2 className="sub-title">
                        Modern sablonok, egyszerű használat, azonnali PDF letöltés.
                    </h2>
                    <p className="paragraph">
                        Az adatok felvétele után automatikusan elkészítjük önéletrajzát, melyet Ön letölthet.
                    </p>
                    <Link
                        to="/createcv/personal-data"
                        className="create-cv-button"
                    >
                        Kezdje el most!
                    </Link>
                </div>
            </main>

            {/* Section below */}
            <Advantages />
            <UserReviews />
            <CallToAction />
            <TemplateBanner />
            <Information />
            <FooterCallToAction />
            <Footer />
        </>
    );
}
