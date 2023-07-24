import "./AboutMe.css";

const AboutMe = () => {
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
    <body className="body">
      <article className="aboutme__card">
        <header className="aboutme__header">
          <img
            className="aboutme__photo"
            src="/src/assets/img/20210516_153358_2.jpg"
          />
          <h1 className="aboutme__title">About me</h1>
          <p className="aboutme__description">
            Hey! my name is Jhonnatan Freire and I love to create things with technology, starting with websites with a lot of functions and desings, you can just take a look in some of my works here.
          </p>
          <button
            className="aboutme__button"
            onClick={() => scrollToSection("contact")}
          >
            Hire me
          </button>
          <button className="aboutme__button">Resume</button>
        </header>
      </article>
    </body>
  );
};

export default AboutMe;
