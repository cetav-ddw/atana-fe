import React, { Component } from "react"
import Button from "../components/ComponentButtons/buttons.js"
import { Link } from "gatsby"
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
    const { formEmail, formFirstName, formLastName, formPhone } = this.state
    if (
      formEmail !== "" &&
      formFirstName !== "" &&
      formLastName !== "" &&
      formPhone !== ""
    ) {
      this.setState(
        {
          message: "Procesando su solicitud",
        },
        () => {
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
          "Asegurese de primero llenar todos los campos con la información solicitada.",
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
        <div className="register__layout layout--form">
          <h1>Te damos la bienvenida</h1>
          <p>Solicite formar parte de Átana llenando el siguiente formulario</p>
          <form
            onSubmit={e => this.handleSubmit(e)}
            method="post"
            target="_blank"
            className="form"
            novalidate
          >
            <div className="form__field">
              <label htmlFor="formEmail">Correo electrónico</label>
              <input
                type="email"
                value={this.state.formEmail}
                onChange={event => this.handleInput(event)}
                name="email"
                id="formEmail"
                required
                placeholder="mi-correo@ejemplo"
              />
            </div>
            <div className="form__field">
              <label htmlFor="formFirstname">Nombre</label>
              <input
                type="text"
                value={this.state.formFirstName}
                onChange={event => this.handleInput(event)}
                name="firstname"
                id="formFirstName"
                placeholder="Nombre"
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
                placeholder="Apellido"
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
                placeholder="000-000-000"
              />
            </div>
            <p className="form__message message__error">{this.state.message}</p>
            <Button
              children="Subscribirse"
              button="secondary"
              type="submit"
              buttonValue="Subscribe"
              buttonLabel="subscribe"
              customStyle="form__btn"
            />
          </form>
        </div>
      )
    } else if (this.state.registered === "error") {
      return (
        <div className="register__layout layout--error">
          <div className="section__wrapper register--error__layout">
            <h2>
              Algo salió mal, puede que el usuario ya solicitó una cuenta con
              Átana o que el usuario ya existe.
            </h2>
            <p className="form__message">
              Error:{" "}
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
        <div className="register__layout layout--success">
          <div className="section__wrapper register--success__layout">
            <h2>
              Su proceso de registro se acaba de completar, le pedimos esperar 3
              días para que su cuenta sea creada y verificada.
            </h2>
            <Link to="/" className="btn btn--secondary">
              Regresar al Home
            </Link>
          </div>
        </div>
      )
    }
  }

  render() {
    const renderView = this.handleRender()
    return (
      <section className="register">
        <div className="register__nav">
          <Link to="/" className="nav__logo__container">
            <img src="atana-logo.svg" alt="átana" className="nav__logo" />
          </Link>
          {this.state.registered === false ? (
            <Link to="/" className="nav__button">
              Salir del proceso de registro
            </Link>
          ) : (
            ""
          )}
        </div>
        {renderView}
      </section>
    )
  }
}

export default Register
