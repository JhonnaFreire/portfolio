import "./Experience.css";
import javascript from "/src/assets/img/Js.png";
import html from "/src/assets/img/html.png";
import css from "/src/assets/img/css.png";
import react from '/src/assets/img/react..png'

const Experience = () => {
  return (
    <article>
      <hr />
      <h2 className="experience__title">Knowledge</h2>
      <div className="experience__logos">
        <div className="experience__frame">
          <h3 className="experience__subtitle">Javascript</h3>
          <img className="experience__images" src={javascript} />
        </div>
        <div className="experience__frame">
          <h3 className="experience__subtitle">HTML</h3>
          <img className="experience__images" src={html} />
        </div>
        <div className="experience__frame">
          <h3 className="experience__subtitle">CSS</h3>
          <img className="experience__images" src={css} />
        </div>
        <div className="experience__frame">
          <h3 className="experience__subtitle">React</h3>
          <img className="experience__images" src={react} />
        </div>
      </div>
      <hr />
    </article>
  );
};

export default Experience;
