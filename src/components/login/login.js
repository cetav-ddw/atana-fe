import React, { Component } from "react"
import { Link } from "gatsby";
import Button from "../ComponentButtons/buttons"
import FormLogin from "../form-login/formLogin"
import "./login.scss"


class Login extends Component {
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

  render() {
    if (!this.state.registered) {
      return (
          <div className="login">
            <h1 className="login__title">Iniciar sesión</h1>
            <p className="login__sentence">Ingrese sus datos para iniciar</p>
            <form
              onSubmit={this.handleSubmit}
              className="form"
            >
              <FormLogin
                formType="formEmail"
                fieldName="Correo electrónico"
                idName="formEmail"
                type="email"
                name="email"
                value={this.state.formEmail}
                change={this.handleInput}
                inputIcon="../user-icon.svg"
              />
              <FormLogin
                formType="formPassword"
                fieldName="Contraseña"
                idName="formPassword"
                type="password"
                name="password"
                value={this.state.formPassword}
                change={this.handleInput}
                inputIcon="../password-icon.svg"
              />
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
        <div className="login">
          <p>Vista en construcción</p>
        </div>
      )
    }
  }
}

export default Login
