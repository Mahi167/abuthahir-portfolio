import { portfolioData } from "../data/portfolioData";
import useScrollReveal from "../hooks/useScrollReveal";
import "./Certifications.css";

export default function Certifications() {
    const { ref: headerRef, isVisible: headerVisible } = useScrollReveal();
    const { ref: gridRef, isVisible: gridVisible } = useScrollReveal({ threshold: 0.1 });

    return (
        <section id="certifications" className="certifications section">
            <div className="container">
                <div ref={headerRef} className={`section-header reveal ${headerVisible ? "visible" : ""}`}>
                    <span className="section-tag">Achievements</span>
                    <h2 className="section-title">Certifications</h2>
                </div>
                <div ref={gridRef} className={`cert-grid stagger-children ${gridVisible ? "visible" : ""}`}>
                    {portfolioData.certifications.map((cert, i) => (
                        <div className="cert-card" key={i}>
                            <div className="cert-icon">{cert.icon}</div>
                            <div className="cert-info">
                                <h3 className="cert-title">{cert.title}</h3>
                                <p className="cert-issuer">
                                    <span className="issuer-badge">{cert.issuer}</span>
                                </p>
                            </div>
                            <div className="cert-ribbon">✓</div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
