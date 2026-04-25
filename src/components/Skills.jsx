import { portfolioData } from "../data/portfolioData";
import useScrollReveal from "../hooks/useScrollReveal";
import "./Skills.css";

export default function Skills() {
    const { ref: headerRef, isVisible: headerVisible } = useScrollReveal();
    const { ref: gridRef, isVisible: gridVisible } = useScrollReveal({ threshold: 0.1 });
    const { ref: stripRef, isVisible: stripVisible } = useScrollReveal({ threshold: 0.2 });

    return (
        <section id="skills" className="skills section">
            <div className="container">
                <div ref={headerRef} className={`section-header reveal ${headerVisible ? "visible" : ""}`}>
                    <span className="section-tag">What I Know</span>
                    <h2 className="section-title">Technical Skills</h2>
                </div>
                <div ref={gridRef} className={`skills-grid stagger-children ${gridVisible ? "visible" : ""}`}>
                    {portfolioData.skills.map((skillGroup) => (
                        <div className="skill-card" key={skillGroup.category}>
                            <div className="skill-card-header">
                                <span className="skill-icon">{skillGroup.icon}</span>
                                <h3 className="skill-category">{skillGroup.category}</h3>
                            </div>
                            <div className="skill-tags">
                                {skillGroup.items.map((item) => (
                                    <span className="skill-tag" key={item}>{item}</span>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>

                <div ref={stripRef} className={`tech-strip reveal-scale ${stripVisible ? "visible" : ""}`}>
                    {[
                        { name: "Java", icon: "☕" },
                        { name: "JavaScript", icon: "🟨" },
                        { name: "React.js", icon: "⚛️" },
                        { name: "Spring Boot", icon: "🌱" },
                        { name: "SQL", icon: "🗄️" },
                        { name: "Docker", icon: "🐳" },
                        { name: "Git", icon: "📦" },
                        { name: "HTML5", icon: "🔥" },
                        { name: "CSS3", icon: "🎨" },
                        { name: "Postman", icon: "📬" },
                    ].map((tech) => (
                        <div className="tech-pill" key={tech.name}>
                            <span>{tech.icon}</span>
                            <span>{tech.name}</span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
