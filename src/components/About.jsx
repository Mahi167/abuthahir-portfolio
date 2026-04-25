import { portfolioData } from "../data/portfolioData";
import useScrollReveal from "../hooks/useScrollReveal";
import "./About.css";

export default function About() {
    const { ref: sectionRef, isVisible } = useScrollReveal();
    const { ref: avatarRef, isVisible: avatarVisible } = useScrollReveal({ threshold: 0.2 });
    const { ref: contentRef, isVisible: contentVisible } = useScrollReveal({ threshold: 0.2 });

    return (
        <section id="about" className="about section">
            <div className="container">
                <div ref={sectionRef} className={`section-header reveal ${isVisible ? "visible" : ""}`}>
                    <span className="section-tag">About Me</span>
                    <h2 className="section-title">Who I Am</h2>
                </div>
                <div className="about-grid">
                    <div ref={avatarRef} className={`about-avatar-wrap reveal-left ${avatarVisible ? "visible" : ""}`}>
                        <div className="avatar-ring">
                            <div className="avatar-inner">
                                <span className="avatar-text">MA</span>
                            </div>
                        </div>
                        <div className="avatar-badge">
                            <span>🎓</span>
                            <span>Software Engineer</span>
                        </div>
                    </div>
                    <div ref={contentRef} className={`about-content reveal-right ${contentVisible ? "visible" : ""}`}>
                        <h3 className="about-title">
                            Hi, I'm <span className="highlight">{portfolioData.name}</span>
                        </h3>
                        <p className="about-desc">{portfolioData.summary}</p>
                        <div className="about-info">
                            <div className="info-item">
                                <span className="info-icon">📍</span>
                                <span>{portfolioData.location}</span>
                            </div>
                            <div className="info-item">
                                <span className="info-icon">📧</span>
                                <a href={`mailto:${portfolioData.email}`}>{portfolioData.email}</a>
                            </div>
                            <div className="info-item">
                                <span className="info-icon">📞</span>
                                <a href={`tel:${portfolioData.phone}`}>{portfolioData.phone}</a>
                            </div>
                            <div className="info-item">
                                <span className="info-icon">💼</span>
                                <a href={portfolioData.linkedin} target="_blank" rel="noreferrer">LinkedIn</a>
                            </div>
                          
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
