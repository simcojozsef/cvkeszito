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
                        Készítsd el profi önéletrajzodat percek alatt!
                    </h1>
                    <p className="paragraph">
                        Nincs szükség technikai tudásra – egyszerűen add meg az adataidat, és mi automatikusan PDF formátumban generáljuk az önéletrajzodat.
                    </p>
                    <Link
                        to="/createcv/personal-data"
                        className="create-cv-button"
                    >
                        Önéletrajz elkészítése!
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
