import { useState, useEffect } from "react";
import "./Navbar.css";

const navLinks = [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Skills", href: "#skills" },
    { label: "Projects", href: "#projects" },
    { label: "Education", href: "#education" },
    { label: "Certifications", href: "#certifications" },
    { label: "Contact", href: "#contact" },
];

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);
    const [active, setActive] = useState("home");

    useEffect(() => {
        const onScroll = () => {
            setScrolled(window.scrollY > 50);
            const sections = navLinks.map((l) => l.href.replace("#", ""));
            for (let i = sections.length - 1; i >= 0; i--) {
                const el = document.getElementById(sections[i]);
                if (el && window.scrollY >= el.offsetTop - 100) {
                    setActive(sections[i]);
                    break;
                }
            }
        };
        window.addEventListener("scroll", onScroll);
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    // Lock body scroll when menu is open
    useEffect(() => {
        document.body.style.overflow = menuOpen ? "hidden" : "";
        return () => { document.body.style.overflow = ""; };
    }, [menuOpen]);

    const handleNav = (href) => {
        setMenuOpen(false);
        const el = document.getElementById(href.replace("#", ""));
        if (el) el.scrollIntoView({ behavior: "smooth" });
    };

    return (
        <nav className={`navbar ${scrolled ? "scrolled" : ""}`}>
            <div className="nav-container">
                <a className="nav-logo" href="#home" onClick={() => handleNav("#home")}>
                    <span className="logo-bracket">&lt;</span>MA<span className="logo-bracket">/&gt;</span>
                </a>
                <ul className={`nav-links ${menuOpen ? "open" : ""}`}>
                    {navLinks.map((link) => (
                        <li key={link.label}>
                            <button
                                className={`nav-link ${active === link.href.replace("#", "") ? "active" : ""}`}
                                onClick={() => handleNav(link.href)}
                            >
                                {link.label}
                            </button>
                        </li>
                    ))}
                </ul>
                {/* Background overlay for mobile menu */}
                <div
                    className={`nav-overlay ${menuOpen ? "open" : ""}`}
                    onClick={() => setMenuOpen(false)}
                />
                <button
                    className={`hamburger ${menuOpen ? "open" : ""}`}
                    onClick={() => setMenuOpen(!menuOpen)}
                    aria-label="Toggle menu"
                >
                    <span></span>
                    <span></span>
                    <span></span>
                </button>
            </div>
        </nav>
    );
}
