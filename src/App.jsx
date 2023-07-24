import NavBar from "./components/NavBar/NavBar";
import Banner from "./components/Banner/Banner";
import AboutMe from "./components/AboutMe/AboutMe";
import Portfolio from "./components/Portfolio/Portfolio";
import Experience from "./components/Experience/Experience";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";


import "./App.css";

function App() {
  return (
    <>
      <NavBar />
      <Banner />
      <AboutMe />
      <section id="portfolio">
        <Portfolio />
      </section>
      <section id="experience">
        <Experience />
      </section>
      <section id="contact">
        <Contact />
      </section>
      <Footer />
    </>
  );
}

export default App;
