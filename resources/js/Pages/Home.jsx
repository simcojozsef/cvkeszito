import React, { useCallback } from "react";
import { Link } from "react-router-dom";
import Particles from "react-particles";
import { loadSlim } from "tsparticles-slim";
import Advantages from "../Components/Advantages";
import UserReviews from "../Components/UserReviews";
import "./Home.css";
import CallToAction from "../Components/CallToAction"; 
import TemplateBanner from "../Components/TemplateBanner"; 
import Information from "../Components/Information"; 
import FooterCallToAction from "../Components/FooterCallToAction";
import Footer from "../Components/Footer";


export default function Home() {
    const particlesInit = useCallback(async (engine) => {
        await loadSlim(engine);
    }, []);

    const particlesLoaded = useCallback(async (container) => {
        console.log(container);
    }, []);

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
                {/* Particles Background */}
                <Particles
                    id="tsparticles"
                    init={particlesInit}
                    loaded={particlesLoaded}
                    options={{
                        background: { color: { value: "transparent" } },
                        fpsLimit: 60,
                        interactivity: {
                            events: {
                                onHover: { enable: true, mode: "grab" },
                                resize: true,
                            },
                            modes: {
                                grab: { distance: 140, links: { opacity: 1 } },
                                repulse: { distance: 200, duration: 0.4 },
                            },
                        },
                        particles: {
                            number: { value: 100, density: { enable: true, area: 1000 } },
                            color: { value: ["#aa73ff", "#f8c210", "#83d238", "#33b1f8"] },
                            shape: { type: "circle" },
                            opacity: { value: 0.6 },
                            size: { value: { min: 1, max: 3 } },
                            links: { enable: true, distance: 120, color: "#ffffff", opacity: 0.4, width: 1 },
                            move: { enable: true, speed: 2, outModes: "bounce" },
                        },
                        detectRetina: true,
                    }}
                    style={{
                        position: "absolute",
                        top: 0,
                        left: 0,
                        width: "100%",
                        height: "100%",
                        zIndex: 0,
                    }}
                />

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

                {/* Modern wave separator */}

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
