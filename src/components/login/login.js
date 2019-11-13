import React, { Component } from "react"
import Button from "../ComponentButtons/buttons"
import "./login.scss"
import { Link } from "gatsby";

class Form extends Component {
  constructor() {
    super()
    this.state = {
      formEmail: "",
      formPassword: "",
      message: "",
      registered: false,
    }
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleInput = this.handleInput.bind(this)
    this.handleRender = this.handleRender.bind(this)
  }

  handleSubmit(e) {
    e.preventDefault()
    const { formEmail, formPassword } = this.state
    if (
      formEmail !== "" &&
      formPassword !== ""
    ) {
      this.setState(
        (data => {
          if (data.result === "error") {
            this.setState(
              {
                registered: "error",
              },
            )
          } else {
            this.setState({
              registered: true,
            })
          }
        })
      )
    }
    else {
      this.setState({
        message:
          "Ingrese una dirección de correo electrónico y contraseña válidos.",
      })
    }
  }

  handleInput(e) {
    const inputName = e.target.id
    this.setState({
      [inputName]: e.target.value,
    })
  }

  handleRender() {
    if (!this.state.registered) {
      return (
        <div className="login">
          <h1 className="login__title">Iniciar sesión</h1>
          <p className="login__sentence">Ingrese sus datos para iniciar</p>
          <form
            onSubmit={event => this.handleSubmit(event)}
            className="form"
          >
            <div className="form__field">
              <label htmlFor="formEmail">Correo electrónico</label>
              <input
                type="email"
                name="email"
                value={this.state.formEmail}
                onChange={event => this.handleInput(event)}
                id="formEmail"
                className="form__input"
              />
              <img src="../user-icon.svg" className="form__input-icon" alt="" aria-hidden="true"></img>
            </div>
            <div className="form__field">
              <label htmlFor="formPassword">Contraseña</label>
              <input
                type="password"
                name="firstname"
                value={this.state.formPassword}
                onChange={event => this.handleInput(event)}
                id="formPassword"
                className="form__input"
              />
              <img src="../password-icon.svg" className="form__input-icon" alt="" aria-hidden="true"></img>
            </div>
            <p className="form__message">{this.state.message}</p>
            <Button
              children="Inciar sesión"
              button="primary"
              type="submit"
              buttonValue="Inciar sesión"
              buttonLabel="Inciar sesión"
              customStyle="form__btn"
            />
          </form>
          <div className="login__signup">
            <p className="signup__question">¿No tienes cuenta?</p>
            <Link to="/suscribirse" className="signup__link">Crear cuenta</Link>
          </div>

        </div>
      )
    } else {
      return (
        <div className="section__wrapper">
          <p>Vista en construcción</p>
        </div>
      )
    }
  }

  render() {
    const renderView = this.handleRender()
    return (
      <React.Fragment>
        {renderView}
      </React.Fragment>
    )
  }
}

export default Form
