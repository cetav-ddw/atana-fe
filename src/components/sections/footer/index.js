import React from 'react';
import Greetings from '../greetings';
import FooterContact from '../footer-contact';

import './footer.scss';

const Footer = () => {
  return (
    <footer className="contact">
      <div className="section__wrapper">
        <Greetings />
      </div>
      <FooterContact />
    </footer>
  );
};

export default Footer;
