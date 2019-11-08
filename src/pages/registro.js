import React, { Component } from "react"
import { Link } from "gatsby"
import Form from "../components/suscribe-components/form"
import "../styles/register.scss"

class Register extends Component {
  render() {
    return (
      <section className="register">
        <img src="../slim-left-corner.svg" className="frame--left" alt="Átana decoración izquierda fondo"/>
        <img src="../slim-top-screen.svg" className="frame--top" alt="Átana decoración arriba fondo"/>
        <img src="../slim-right-corner.svg" className="frame--right" alt="Átana decoración derecha fondo"/>
        <div className="register__nav">
          <Link to="/" className="nav__logo__container">
            <img src="../atana-logo.svg" alt="átana" className="nav__logo" />
          </Link>
        </div>
        <div className="register__wrapper">
          <Form/>
        </div>
      </section>
    )
  }
}

export default Register
