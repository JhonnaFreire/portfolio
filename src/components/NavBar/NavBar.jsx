import Jhonna from "/src/assets/img/Jhonna.png";
import "./NavBar.css";
import { useState } from "react";

const NavBar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
      setMenuOpen(false);
    }
  };
  return (
    <article className="nav__bar__container">
        <img className="nav__bar__img" src={Jhonna} />
      <nav className={`nav__bar ${menuOpen ? "open" : ""}`}>
        <div className={`nav__bar__buttons ${menuOpen ? 'open' : ''}`}>
          <button
            className="nav__bar__button"
            onClick={() => scrollToSection("about-me")}
          >
            About me
          </button>
          <button
            className="nav__bar__button"
            onClick={() => scrollToSection("portfolio")}
          >
            Portfolio
          </button>
          <button
            className="nav__bar__button"
            onClick={() => scrollToSection("experience")}
          >
            Experience
          </button>
          <button
            className="nav__bar__button"
            onClick={() => scrollToSection("contact")}
          >
            Contact
          </button>
        </div>
        <div className="nav__bar__toggle" onClick={toggleMenu}>
          <span className={`toggle-icon ${menuOpen ? 'open' : ''}`}>&#9776;</span>
        </div>
      </nav>
    </article>
  );
};

export default NavBar;
