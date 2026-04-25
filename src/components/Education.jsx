import { portfolioData } from "../data/portfolioData";
import useScrollReveal from "../hooks/useScrollReveal";
import "./Education.css";

export default function Education() {
    const { ref: headerRef, isVisible: headerVisible } = useScrollReveal();
    const { ref: timelineRef, isVisible: timelineVisible } = useScrollReveal({ threshold: 0.1 });

    return (
        <section id="education" className="education section">
            <div className="container">
                <div ref={headerRef} className={`section-header reveal ${headerVisible ? "visible" : ""}`}>
                    <span className="section-tag">My Background</span>
                    <h2 className="section-title">Education</h2>
                </div>
                <div ref={timelineRef} className={`edu-timeline stagger-children ${timelineVisible ? "visible" : ""}`}>
                    {portfolioData.education.map((edu, i) => (
                        <div className="edu-item" key={i}>
                            <div className="edu-dot">
                                <span>{edu.type === "college" ? "🎓" : "🏫"}</span>
                            </div>
                            <div className="edu-card">
                                <span className="edu-type">{edu.description}</span>
                                <h3 className="edu-degree">{edu.degree}</h3>
                                <p className="edu-institution">{edu.institution}</p>
                                {edu.location && <p className="edu-location">📍 {edu.location}</p>}
                            </div>
                        </div>
                    ))}
                    <div className="edu-line"></div>
                </div>
            </div>
        </section>
    );
}
