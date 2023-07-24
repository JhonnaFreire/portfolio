import "./NavBar.css";

const NavBar = () => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };
  return (
    <nav className="nav_bar">
      <h1 className="nav_bar__logo">Jhonnatan Freire</h1>
      <button className="nav_bar__button" onClick={() => scrollToSection("about-me")}>About me</button>
      <button className="nav_bar__button" onClick={() => scrollToSection("portfolio")}>Portfolio</button>
      <button className="nav_bar__button" onClick={() => scrollToSection("experience")}>Experience</button>
      <button className="nav_bar__button" onClick={() => scrollToSection("contact")}>Contact</button>
    </nav>
  );
};

export default NavBar;
