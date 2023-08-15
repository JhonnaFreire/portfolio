import { useState, useEffect } from "react";
import "./Footer.css";

const Footer = () => {
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowBackToTop(true);
      } else {
        setShowBackToTop(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="footer">
      <h3 className="footer__text">
        Jhonnatan Freire 2023 - All rights reserved
      </h3>
      <div className="footer__social-networks">
        <a
          href="https://www.linkedin.com/in/jhonnatan-freire-1576b9273"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="bx bxl-linkedin footer__social-icon"></i>
        </a>
        <a
          href="https://walink.co/4d6da5"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="bx bxl-whatsapp footer__social-icon"></i>
        </a>
      </div>
      {showBackToTop && (
        <i
          className="bx bxs-up-arrow-alt footer__back-to-top-icon"
          onClick={scrollToTop}
        ></i>
      )}
    </div>
  );
};

export default Footer;
