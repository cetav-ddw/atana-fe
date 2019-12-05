import React from "react"
import "../../components/ComponentButtons/buttons.scss"
import Menu from "../../components/nav-menu/nav-menu"
import header from "../../animations/header-animation/header-animation"
import { Link } from "gatsby"
import "./header.scss"

const Header = () => {
  const HeaderAnimation = header()
  return (
    <div className="header">
      <div className="section__wrapper">
        <Menu />
        <h1 className="header__title">
          <span className="header__title-span">crea y distribuye</span>{" "}
          comunicados de prensa
        </h1>
        <p className="header__text">
          De una manera más fácil, rápida y sencilla.{" "}
        </p>
        <Link to="" className="header__btn btn btn--primary">
          Suscribirse
        </Link>
        <div className="header__animation">
          <HeaderAnimation />
        </div>
      </div>
      <div className="header__arrow">
        <button className="arrow__btn"></button>
      </div>
    </div>
  )
}
export default Header
