import React, { Component } from "react"
import Button from "../ComponentButtons/buttons"
import addToMailchimp from "gatsby-plugin-mailchimp"
import "./login.scss"

class Lol extends Component {
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
    const { formEmail, formPassword} = this.state
    if (
      formEmail !== "" &&
      formPassword !== "" 
    ) {
      this.setState(
        () => {
          addToMailchimp(formEmail, {
            FIRSTNAME: formPassword,
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
                    console.log(data)
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
    } else if (formEmail ^ formPassword ) {

    }
    else {
      this.setState({
        message:
          "Asegurese de llenar todos los campos con la información solicitada.",
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
          <h1>Iniciar sesión</h1>
          <p>Ingrense sus datos para iniciar</p>
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
              />
            </div>
            <div className="form__field">
              <label htmlFor="formPassword">Contraseña</label>
              <input
                type="password"
                value={this.state.formPassword}
                onChange={event => this.handleInput(event)}
                name="firstname"
                id="formPassword"
              />
            </div>
            <p className="form__message message__error">{this.state.message}</p>
            <Button
              children="Inciar sesión"
              button="primary"
              type="submit"
              buttonValue="Inciar sesión"
              buttonLabel="Inciar sesión"
              customStyle="form__btn"
            />
          </form>
        </div>
      )
    } else {
      return (
        <div className="register__layout">
          <div className="section__wrapper">
            <h2>
              Vista en construcción
            </h2>
          </div>
        </div>
      )
    }
  }

  render() {
    const renderView = this.handleRender()
    return (
      <section className="register">
        {renderView}
      </section>
    )
  }
}

export default Lol
