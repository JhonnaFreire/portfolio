import "./Experience.css";
import javascript from '/src/assets/img/Js.png'
import html from '/src/assets/img/html.png'
import css from '/src/assets/img/css.png'


const Experience = () => {
  return (
    <>
      <h2 className="experience__title" >Experience</h2>
      <div className="experience__logos">
        <img src={javascript} />
        <h3 className="experience__subtitle">Javascript</h3>
        <img src={html} />
        <h3 className="experience__subtitle">HTML</h3>
        <img src={css} />
        <h3 className="experience__subtitle">CSS</h3>
      </div>
    </>
  );
};

export default Experience;
