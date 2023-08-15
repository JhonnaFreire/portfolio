import "./Banner.css"

const Banner = () => {
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
    <div className="banner">
    <h2 className="banner__title">I'm a </h2>
    <h2 className="banner__title__h2"> Full stack developer.</h2>
    <button className="banner__button" onClick={() => scrollToSection("portfolio")}>Projects</button>
    </div>
  )
}

export default Banner
