import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <h3 className="footer__text">Jhonnatan Freire 2023 -All rights reserved</h3>
      <div className="footer__solcial-networks">
        <i className="bx bxl-linkedin-square footer__social-icon"></i>
        <i className="bx bxl-instagram-alt footer__social-icon"></i>
        <i className="bx bxl-facebook-square footer__social-icon"></i>
        <i className="bx bxs-up-arrow-alt footer__back-to-top-icon"></i>
      </div>
    </div>
  );
};

export default Footer;
