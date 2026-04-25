import { portfolioData } from "../data/portfolioData";
import useScrollReveal from "../hooks/useScrollReveal";
import "./Projects.css";

export default function Projects() {
    const { ref: headerRef, isVisible: headerVisible } = useScrollReveal();
    const { ref: gridRef, isVisible: gridVisible } = useScrollReveal({ threshold: 0.1 });

    return (
        <section id="projects" className="projects section">
            <div className="container">
                <div ref={headerRef} className={`section-header reveal ${headerVisible ? "visible" : ""}`}>
                    <span className="section-tag">My Work</span>
                    <h2 className="section-title">Featured Projects</h2>
                </div>
                <div ref={gridRef} className={`projects-grid stagger-children ${gridVisible ? "visible" : ""}`}>
                    {portfolioData.projects.map((project, i) => (
                        <div className="project-card" key={i} style={{ "--accent": project.color }}>
                            <div className="project-card-top">
                                <div className="project-icon-wrap" style={{ background: project.color + "22" }}>
                                    <span className="project-icon">{project.icon}</span>
                                </div>
                                <div className="project-number">0{i + 1}</div>
                            </div>
                            <div className="project-info">
                                <span className="project-subtitle">{project.subtitle}</span>
                                <h3 className="project-title">{project.title}</h3>
                                <p className="project-desc">{project.description}</p>
                            </div>
                            <div className="project-footer">
                                <div className="project-tags">
                                    {project.tags.map((tag) => (
                                        <span className="project-tag" key={tag} style={{ borderColor: project.color, color: project.color }}>
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
