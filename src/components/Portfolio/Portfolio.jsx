import { useState } from "react";
import "./Portfolio.css";

const Portfolio = () => {
  const allProjects = [
    { id: 1, title: "Project 1", description: "..." },
    { id: 2, title: "Project 2", description: "..." },
    { id: 3, title: "Project 3", description: "..." },
    { id: 4, title: "Project 4", description: "..." },
    { id: 5, title: "Project 5", description: "..." },
    { id: 6, title: "Project 6", description: "..." },
  ];

  const [showAllProjects, setShowAllProjects] = useState(false);

  const visibleProjects = showAllProjects
    ? allProjects
    : allProjects.slice(0, 2);

  const handleViewAllClick = () => {
    setShowAllProjects(true);
  };

  const handleViewLessClick = () => {
    setShowAllProjects(false);
  };

  return (
    <div className="portfolio__body">
      <h1 className="portfolio__title">Portfolio</h1>
      <div className="portfolio__container">
        {visibleProjects.map((project) => (
          <div className="portfolio__project" key={project.id}>
            <h2 className="portfolio__project-title">{project.title}</h2>
            <p className="portfolio__project-description">
              {project.description}
            </p>
          </div>
        ))}
      </div>
      <div>
        {!showAllProjects && (
          <button
            className="portfolio__view-button"
            onClick={handleViewAllClick}
          >
            View All
          </button>
        )}
        {showAllProjects && (
          <button
            className="portfolio__view-button"
            onClick={handleViewLessClick}
          >
            View Less
          </button>
        )}
      </div>
    </div>
  );
};

export default Portfolio;
