import React from "react"
import "./nav-menu.scss"
import { Link } from "gatsby"

const Menu = () => (
  <React.Fragment>
    <div className="nav__menu">
      <Link to="/iniciarSesion" className="nav__link">
        iniciar sesión
      </Link>
      <Link to="" className="nav__btn btn btn--primary">
        Suscribirse
      </Link>
    </div>
  </React.Fragment>
)
export default Menu
