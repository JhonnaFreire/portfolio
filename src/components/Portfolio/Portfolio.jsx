import { useState } from "react";
import Pokemon from "/src/assets/img/pokedex.png";
import Movies from "/src/assets/img/movies.png";
import Rick from "/src/assets/img/rick.png";
import Fortune from "/src/assets/img/fortune.png";
import Toggle from "/src/assets/img/toggle.png";
import Ecomm from "/src/assets/img/e-commerce.png";
import "./Portfolio.css";

const Portfolio = () => {
  const allProjects = [
    {
      id: 1,
      title: "Pokedex",
      description:
        "This funny application shows you the most important Pokemons, in this project I learn how to use an API.",
      Image: `${Pokemon}`,
      Link: "https://loquacious-cupcake-d05e1e.netlify.app/",
    },
    {
      id: 2,
      title: "Movies",
      description:
        "This is a simple movie app interface, here I learn how to create a structure using react.",
      Image: `${Movies}`,
      Link: 'https://stupendous-gelato-735172.netlify.app/'
    },
    {
      id: 3,
      title: "Rick And Morty",
      description:
        "Here is one of the coolest projects I ever did, using React and a lot of tools with CSS, this site shows us all the characters of this awesome show.",
      Image: `${Rick}`,
      Link: 'https://exquisite-paprenjak-313aec.netlify.app/'
    },
    {
      id: 4,
      title: "Fortune Phrases",
      description:
        "This is one of my first projects, this app shows you ramdom fortune phrases in Spanish just clic on one button.",
      Image: `${Fortune}`,
      Link: 'https://storied-genie-c6e501.netlify.app/'
    },
    {
      id: 5,
      title: "Toggle Menu",
      description:
        "This fashion menu shows us the best way to create a cool menu for a businees, like hotels or restaurants.",
      Image: `${Toggle}`,
      Link: 'https://glistening-faloodeh-1e0b4c.netlify.app/'
    },
    {
      id: 6,
      title: "E-commerce",
      description:
        "This site is inspired in the Academy I studied, with this project I learn how to create an e-commerce, handleling tools like APIs and CSS rocourses.",
      Image: `${Ecomm}`,
      Link: 'https://creative-stroopwafel-68a065.netlify.app/'
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
        updatedSelectedProjects.add(project.id);
      } else {
        delete updatedSelectedProjects.delete(project.id);
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
            <a href={project.Link} target="_blank" rel='noopener noreferrer' >
              <img
                className="projects__images"
                src={project.Image}
                alt={project.title}
              />
            </a>
            <div>
              {selectedProjects.has(project.id) ? (
                <div className="portfolio__project-description">
                  <h3 className="title__description">{project.title} description:</h3>
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
