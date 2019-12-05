import React from 'react';
import { Link } from 'gatsby';

import './nav-menu.scss';

const Menu = () => (
  <>
    <div className="nav__menu section__wrapper">
      <Link to="">
        <img src="atana-logo.svg" alt="átana" className="header__logo" />
      </Link>
      <div>
        <Link to="" className="nav__link">
          iniciar sesión
        </Link>
        <Link to="" className="nav__btn btn btn--primary">
          Suscribirse
        </Link>
      </div>
    </div>
  </>
);
export default Menu;
