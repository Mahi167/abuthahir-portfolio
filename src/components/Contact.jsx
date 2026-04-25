import { useState } from "react";
import { portfolioData } from "../data/portfolioData";
import useScrollReveal from "../hooks/useScrollReveal";
import "./Contact.css";

export default function Contact() {
    const [form, setForm] = useState({ name: "", email: "", message: "" });
    const [sent, setSent] = useState(false);
    const { ref: headerRef, isVisible: headerVisible } = useScrollReveal();
    const { ref: infoRef, isVisible: infoVisible } = useScrollReveal({ threshold: 0.1 });
    const { ref: formRef, isVisible: formVisible } = useScrollReveal({ threshold: 0.1 });

    const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

    const handleSubmit = (e) => {
        e.preventDefault();
        const mailto = `mailto:${portfolioData.email}?subject=Message from ${encodeURIComponent(form.name)}&body=${encodeURIComponent(form.message + "\n\nFrom: " + form.email)}`;
        window.location.href = mailto;
        setSent(true);
    };

    return (
        <section id="contact" className="contact section">
            <div className="container">
                <div ref={headerRef} className={`section-header reveal ${headerVisible ? "visible" : ""}`}>
                    <span className="section-tag">Get In Touch</span>
                    <h2 className="section-title">Contact Me</h2>
                </div>
                <div className="contact-grid">
                    <div ref={infoRef} className={`contact-info reveal-left ${infoVisible ? "visible" : ""}`}>
                        <p className="contact-intro">
                            I'm currently open to new opportunities. Whether you have a question, a project
                            idea, or just want to say hello — my inbox is always open!
                        </p>
                        <div className="contact-details">
                            <a href={`mailto:${portfolioData.email}`} className="contact-card">
                                <span className="contact-card-icon">📧</span>
                                <div>
                                    <span className="contact-card-label">Email</span>
                                    <span className="contact-card-value">{portfolioData.email}</span>
                                </div>
                            </a>
                            <a href={`tel:${portfolioData.phone}`} className="contact-card">
                                <span className="contact-card-icon">📞</span>
                                <div>
                                    <span className="contact-card-label">Phone</span>
                                    <span className="contact-card-value">{portfolioData.phone}</span>
                                </div>
                            </a>
                            <a href={portfolioData.linkedin} target="_blank" rel="noreferrer" className="contact-card">
                                <span className="contact-card-icon">💼</span>
                                <div>
                                    <span className="contact-card-label">LinkedIn</span>
                                    <span className="contact-card-value">Mohammed Abuthahir</span>
                                </div>
                            </a>
                            
                        </div>
                    </div>
                    <form ref={formRef} className={`contact-form reveal-right ${formVisible ? "visible" : ""}`} onSubmit={handleSubmit}>
                        {sent && (
                            <div className="form-success">✅ Opening your email client...</div>
                        )}
                        <div className="form-group">
                            <label htmlFor="name">Your Name</label>
                            <input
                                id="name"
                                name="name"
                                type="text"
                                placeholder="John Doe"
                                value={form.name}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="email">Your Email</label>
                            <input
                                id="email"
                                name="email"
                                type="email"
                                placeholder="john@example.com"
                                value={form.email}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="message">Message</label>
                            <textarea
                                id="message"
                                name="message"
                                placeholder="Hi Mohammed, I'd like to connect..."
                                rows={5}
                                value={form.message}
                                onChange={handleChange}
                                required
                            ></textarea>
                        </div>
                        <button type="submit" className="btn btn-primary form-btn">
                            Send Message ✉️
                        </button>
                    </form>
                </div>
            </div>
        </section>
    );
}
