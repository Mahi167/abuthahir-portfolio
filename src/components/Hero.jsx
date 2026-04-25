import { useState, useEffect } from "react";
import { portfolioData } from "../data/portfolioData";
import useScrollReveal from "../hooks/useScrollReveal";
import profileImg from "../assets/profile.jpg";
import "./Hero.css";

const roles = [
    "Software Developer",
    "Full Stack Engineer",
    "React.js Developer",
    "Problem Solver",
];

export default function Hero() {
    const [roleIndex, setRoleIndex] = useState(0);
    const [displayed, setDisplayed] = useState("");
    const [typing, setTyping] = useState(true);
    const { ref: statsRef, isVisible: statsVisible } = useScrollReveal({ threshold: 0.3 });

    useEffect(() => {
        const current = roles[roleIndex];
        let timeout;
        if (typing) {
            if (displayed.length < current.length) {
                timeout = setTimeout(() => setDisplayed(current.slice(0, displayed.length + 1)), 80);
            } else {
                timeout = setTimeout(() => setTyping(false), 1800);
            }
        } else {
            if (displayed.length > 0) {
                timeout = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 40);
            } else {
                setRoleIndex((i) => (i + 1) % roles.length);
                setTyping(true);
            }
        }
        return () => clearTimeout(timeout);
    }, [displayed, typing, roleIndex]);

    const scrollTo = (id) => {
        const el = document.getElementById(id);
        if (el) el.scrollIntoView({ behavior: "smooth" });
    };

    return (
        <section id="home" className="hero">
            <div className="hero-bg">
                <div className="hero-orb orb1"></div>
                <div className="hero-orb orb2"></div>
                <div className="hero-orb orb3"></div>
                <div className="grid-lines"></div>
                <div className="hero-particle p1"></div>
                <div className="hero-particle p2"></div>
                <div className="hero-particle p3"></div>
                <div className="hero-particle p4"></div>
                <div className="hero-particle p5"></div>
            </div>
            <div className="hero-content">
                <div className="hero-split">
                    <div className="hero-text">
                        <p className="hero-greeting animate-greeting">👋 Hello, World! I am</p>
                        <h1 className="hero-name animate-name">
                            <span className="name-highlight">{portfolioData.name}</span>
                        </h1>
                        <div className="hero-role animate-role">
                            <span className="role-text">{displayed}</span>
                            <span className="cursor">|</span>
                        </div>
                        <p className="hero-summary animate-summary">{portfolioData.summary}</p>
                        <div className="hero-cta animate-cta">
                            <button className="btn btn-primary" onClick={() => scrollTo("projects")}>
                                View Projects
                            </button>
                            <button className="btn btn-secondary" onClick={() => scrollTo("contact")}>
                                Contact Me
                            </button>
                           
                        </div>
                    </div>
                    <div className="hero-photo-wrap animate-photo">
                        <div className="hero-photo-ring">
                            <div className="hero-photo-glow"></div>
                            <img
                                src={profileImg}
                                alt={portfolioData.name}
                                className="hero-photo"
                            />
                        </div>
                        <div className="hero-photo-badge badge-top">
                            <span>⚛️</span> React.js
                        </div>
                        <div className="hero-photo-badge badge-bottom">
                            <span>☕</span> Java
                        </div>
                    </div>
                </div>
                <div
                    ref={statsRef}
                    className={`hero-stats ${statsVisible ? "visible" : ""}`}
                >
                    <div className="stat">
                        <span className="stat-num">3+</span>
                        <span className="stat-label">Projects</span>
                    </div>
                    <div className="stat-divider"></div>
                    <div className="stat">
                        <span className="stat-num">4</span>
                        <span className="stat-label">Certifications</span>
                    </div>
                    <div className="stat-divider"></div>
                    <div className="stat">
                        <span className="stat-num">4+</span>
                        <span className="stat-label">Technologies</span>
                    </div>
                </div>
            </div>
            <button className="scroll-down" onClick={() => scrollTo("about")} aria-label="Scroll down">
                <div className="scroll-wheel"></div>
            </button>
        </section>
    );
}
