import { useState } from "react";
import "./Portfolio.css";

const Portfolio = () => {
  const allProjects = [
    {
      id: 1,
      title: "Pokedex",
      description:
        "This funny application shows you the most important Pokemons, in this project I learn how to use an API.",
      Image: "/src/assets/img/pokedex.png",
      Link: "https://glistening-faloodeh-1e0b4c.netlify.app/",
    },
    {
      id: 2,
      title: "Movies",
      description:
        "This is a simple movie app interface, here I learn how to create a structure using react.",
      Image: "/src/assets/img/movies.png",
    },
    {
      id: 3,
      title: "Rick And Morty",
      description:
        "Here is one of the coolest projects I ever did, using React and a lot of tools with CSS, this site shows us all the characters of this awesome show.",
      Image: "/src/assets/img/rick.png",
    },
    {
      id: 4,
      title: "Fortune Phrases",
      description:
        "This is one of my first projects, this app shows you ramdom fortune phrases in Spanish just clic on one button.",
      Image: "/src/assets/img/fortune.png",
    },
    {
      id: 5,
      title: "Toggle Menu",
      description:
        "This fashion menu shows us the best way to create a cool menu for a businees, like hotels or restaurants.",
      Image: "/src/assets/img/toggle.png",
    },
    {
      id: 6,
      title: "E-commerce",
      description:
        "This site is inspired in the Academy I studied, with this project I learn how to create an e-commerce, handleling tools like APIs and CSS rocourses.",
      Image: "/src/assets/img/e-commerce.png",
    },
  ];

  const [selectedProjects, setSelectedProject] = useState(new Set());
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

  const toggleDescription = (project) => {
    setSelectedProject((prevSelectedProjects) => {
      const updatedSelectedProjects = new Set(prevSelectedProjects);
      if (!updatedSelectedProjects.has(project.id)) {
        updatedSelectedProjects.add(project.id)
      } else {
        delete updatedSelectedProjects.delete(project.id)
      }
      return updatedSelectedProjects;
    });
  };
  return (
    <div className="portfolio__body">
      <h1 className="portfolio__title">Portfolio</h1>
      <div className="portfolio__container">
        {visibleProjects.map((project) => (
          <div className="portfolio__project" key={project.id}>
            <h2 className="portfolio__project-title">{project.title}</h2>
            <img
              className="projects__images"
              src={project.Image}
              alt={project.title}
            />
            <div>
              {selectedProjects.has(project.id) ? (
                <div className="portfolio__project-description">
                  <h3>{project.title} description:</h3>
                  <p>{project.description}</p>
                  <button
                    className="close__des-button"
                    onClick={() => toggleDescription(project)}
                  >
                    Close description
                  </button>
                </div>
              ) : (
                <button
                  className="portfolio__shows-description"
                  onClick={() => toggleDescription(project)}
                >
                  Shows description
                </button>
              )}
            </div>
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
