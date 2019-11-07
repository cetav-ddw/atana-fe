import React, { Component } from "react"
import { Link } from "gatsby"
import Button from "../components/ComponentButtons/buttons.js"
import addToMailchimp from "gatsby-plugin-mailchimp"
import "../styles/register.scss"

class Register extends Component {
  constructor() {
    super()
    this.state = {
      formEmail: "",
      formFirstName: "",
      formLastName: "",
      formPhone: "",
      message: "",
      registered: false,
    }
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleInput = this.handleInput.bind(this)
    this.handleRender = this.handleRender.bind(this)
  }

  handleSubmit(e) {
    e.preventDefault()
    const { formEmail } = this.state
    if (formEmail !== "") {
      this.setState({
        message: "Procesando su solicitud",
      },() => {
          addToMailchimp(formEmail, {
            FIRSTNAME: formFirstName,
            LASTNAME: formLastName,
            PHONE: formPhone,
          })
            .then(data => {
              if (data.result === "error") {
                this.setState(
                  {
                    registered: "error",
                  },
                  () => {
                    this.setState({
                      message: data.msg,
                    })
                  }
                )
              } else {
                this.setState({
                  registered: true,
                })
              }
            })
            .catch(err => {
              this.setState({
                message: err,
              })
            })
        }
      )
    } else {
      this.setState({
        message:
          "Asegurese de llenar el campo de la contraseña.",
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
        <div className="register__layout">
          <h1>Suscribirse</h1>
          <p className="text--helpers">Para suscribirse llene los siguientes datos</p>
          <form
            onSubmit={e => this.handleSubmit(e)}
            className="form"
            novalidate
          >
            <div className="form__field">
              <label htmlFor="formFirstname">Nombre</label>
              <input
                type="text"
                value={this.state.formFirstName}
                onChange={event => this.handleInput(event)}
                name="firstname"
                id="formFirstName"
              />
            </div>
            <div className="form__field">
              <label htmlFor="formLastname">Apellido</label>
              <input
                type="text"
                value={this.state.formLastName}
                onChange={event => this.handleInput(event)}
                name="lastname"
                id="formLastName"
              />
            </div>
            <div className="form__field">
              <label htmlFor="formPhone">Número de teléfono</label>
              <input
                type="tel"
                value={this.state.formPhone}
                onChange={event => this.handleInput(event)}
                name="phone"
                id="formPhone"
              />
            </div>
            <div className="form__field">
              <label htmlFor="formEmail">Correo electrónico <span className="required__field">(Requerido)</span></label>
              <input
                type="email"
                value={this.state.formEmail}
                onChange={event => this.handleInput(event)}
                name="email"
                id="formEmail"
                required
              />
            </div>
            <p className="form__message message__error">{this.state.message}</p>
            <Button button="primary" type="submit" buttonValue="Suscribirse" buttonLabel="suscribirse" customStyle="form__btn">
              Suscribirse
            </Button>
          </form>
          <p className="text--helpers">Esta es la versión beta de Átana</p>
        </div>
      )
    } else if (this.state.registered === "error") {
      return (
        <div className="register__layout">
          <div className="section__wrapper">
            <h2>
              Algo salió mal, puede que el usuario ya solicitó una cuenta con
              Átana o que el usuario ya existe.
            </h2>
            <p className="form__message">
              Error:
              <span className="message__error">{this.state.message}</span>
            </p>
            <Link to="/" className="btn btn--secondary">
              Regresar al Home
            </Link>
          </div>
        </div>
      )
    } else {
      return (
        <div className="register__layout">
          <Link to="/" className="register__logo__container">
            <img src="../atana-purple-logo.svg" alt="Átana" className="register__logo" />
          </Link>
          <h2>
            Muchas gracias por registrarse en nuestra plataforma!
          </h2>
          <p>
            Esta es un versión beta de Átana, por lo tanto en el lapso de algunos días se le enviará un correo para confirmar su suscripción.
          </p>
          <Link to="/" className="btn btn--secondary">
            Regresar al Home
          </Link>
        </div>
      )
    }
  }

  render() {
    const renderView = this.handleRender()
    return (
      <section className="register">
        <img src="../slim-left-corner.svg" className="frame--left" alt="Átana decoración izquierda fondo"/>
        <img src="../slim-right-corner.svg" className="frame--right" alt="Átana decoración derecha fondo"/>
        <div className="section__wrapper">
          <div className="register__nav">
            <Link to="/" className="nav__logo__container">
              <img src="../atana-logo.svg" alt="átana" className="nav__logo" />
            </Link>
          </div>
          {renderView}
        </div>
      </section>
    )
  }
}

export default Register
