import { portfolioData } from "../data/portfolioData";
import useScrollReveal from "../hooks/useScrollReveal";
import "./Footer.css";

export default function Footer() {
    const year = new Date().getFullYear();
    const scrollTop = () => window.scrollTo({ top: 0, behavior: "smooth" });
    const { ref: footerRef, isVisible } = useScrollReveal({ threshold: 0.1 });

    return (
        <footer ref={footerRef} className={`footer ${isVisible ? "footer-visible" : ""}`}>
            <div className="container">
                <div className="footer-top">
                    <a className="footer-logo" href="#home" onClick={scrollTop}>
                        <span className="logo-bracket">&lt;</span>MA<span className="logo-bracket">/&gt;</span>
                    </a>
                    <p className="footer-tagline">Building things that matter.</p>
                    <div className="footer-socials">
                        <a href={`mailto:${portfolioData.email}`} className="footer-social" title="Email">📧</a>
                        <a href={portfolioData.linkedin} target="_blank" rel="noreferrer" className="footer-social" title="LinkedIn">💼</a>
                      
                    </div>
                </div>
                <div className="footer-divider"></div>
                <div className="footer-bottom">
                    <p>© {year} {portfolioData.name}. All rights reserved.</p>
                    <button className="back-top" onClick={scrollTop} aria-label="Back to top">↑</button>
                </div>
            </div>
        </footer>
    );
}
