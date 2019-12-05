import React from 'react';
import { Link } from 'gatsby';

const FooterContact = () => {
  return (
    <div className="footer__gradient">
      <div className="contact__social">
        <Link to="/">
          <img src="atana-logo.svg" alt="Átana" className="footer__logo" />
        </Link>
        <div className="social__container">
          <p>Síguenos en nuestras redes sociales:</p>
          <Link to="" className="social social--facebook" />
          <Link to="" className="social social--instagram" />
          <Link to="" className="social social--whatsapp" />
        </div>
      </div>
    </div>
  );
};

export default FooterContact;
