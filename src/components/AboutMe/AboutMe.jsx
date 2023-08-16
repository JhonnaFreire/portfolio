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
    <>
    <div className="body">
      <section className="aboutme__card">
        <header className="aboutme__header">
          <h1 className="aboutme__title">About me</h1>
          <p className="aboutme__description">
          Hi there! I'm Jhonnatan Freire, a fullstack web developer specializing in JavaScript, HTML, CSS and React. I craft seamless digital experiences by blending design and functionality. Let's bring your ideas to life through innovative and dynamic websites and applications. Explore my portfolio and witness the fusion of creativity and technology.
          </p>
          <div className="buttons">
            <button
              className="aboutme__buttons"
              onClick={() => scrollToSection("contact")}
            >
              Contact me
            </button>
            <span>
              <h2 className="or">or</h2>
            </span>
            <button className="aboutme__buttons">Look my CV</button>
          </div>
        </header>
      </section>
    </div>
    <hr />
    </>
  );
};

export default AboutMe;
