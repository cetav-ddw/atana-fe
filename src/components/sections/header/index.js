import React from 'react';
import { Link } from 'gatsby';
import Menu from '../nav-menu';
import Button from '../../units/button';
import headerAnimations from './header-animation';

import './header.scss';

const Header = () => {
  const HeaderAnimation = headerAnimations();
  // ToDo revisar linea 31, boton vacio es mala practica y falta el action
  return (
    <div className="header">
      <div className="section__wrapper">
        <Menu />
        <h1 className="header__title">
          <span className="header__title-span">crea y distribuye</span>{' '}
          comunicados de prensa
        </h1>
        <p className="header__text">
          De una manera más fácil, rápida y sencilla.{' '}
        </p>
        <Link to="" className="header__btn btn btn--primary">
          Suscribirse
        </Link>
        <div className="header__animation">
          <HeaderAnimation />
        </div>
      </div>
      <div className="header__arrow">
        <Button customStyle="arrow__btn"></Button>
      </div>
    </div>
  );
};
export default Header;
