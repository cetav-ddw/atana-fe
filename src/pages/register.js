import React, { Component } from "react"
import { Link } from "gatsby"
import addToMailchimp from "gatsby-plugin-mailchimp"

class Register extends Component {
  constructor() {
    super()
    this.state = {
      formEmail: "",
      formFirstName: "",
      formLastName: "",
      formPhone: "",
      message: "",
      registered: false
    }
    this.handleSubmit=this.handleSubmit.bind(this);
    this.handleInput=this.handleInput.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    const {formEmail, formFirstName, formLastName, formPhone} = this.state;
    if(formEmail !== "" && formFirstName !== "" && formLastName !== "" && formPhone !== "") {
      this.setState({
        message: "Todo listo, ya se creó una solicitud."
      }, () => {
        addToMailchimp(formEmail, {
          FIRSTNAME: formFirstName,
          LASTNAME: formLastName,
          PHONE: formPhone
        }).then(() => {
          this.setState({
            registered: true
          })
        }).catch((err) => {
          this.setState({
            message: err
          })
        })
      })
    } else {
      this.setState({
        message: "Asegurese de primero llenar todos los campos con la información solicitada."
      })
    }
  }

  handleInput(e) {
    const inputName = e.target.id;
    this.setState({
      [inputName]: e.target.value
    })
  }

  render () {
    if(!this.state.registered) {
      return (
        <div>
          <form onSubmit={(e) => this.handleSubmit(e)} method="post" target="_blank" novalidate>
            <div>
              <h2>Ingrese su información para solicitar su cuenta</h2>
            </div>
            <div>
              <label htmlFor="formEmail">Correo electrónico: </label>
              <input type="email" value={this.state.formEmail} onChange={(event) => this.handleInput(event)} name="email" id="formEmail" required/>
            </div>
            <div>
              <label htmlFor="formFirstname">Primer nombre: </label>
              <input type="text" value={this.state.formFirstName} onChange={(event) => this.handleInput(event)} name="firstname" id="formFirstName"/>
            </div>
            <div>
              <label htmlFor="formLastname">Primer apellido : </label>
              <input type="text" value={this.state.formLastName} onChange={(event) => this.handleInput(event)} name="lastname" id="formLastName"/>
            </div>
            <div>
              <label htmlFor="formPhone">Número de teléfono : </label>
              <input type="tel" value={this.state.formPhone} onChange={(event) => this.handleInput(event)} name="phone" id="formPhone"/>
            </div>
            <div>
              <button type="submit" value="Subscribe" name="subscribe">Suscribirse</button>
            </div>
          </form>
          <p>{this.state.message}</p>
          <Link to="/">Salir del proceso de registro</Link>
        </div>
      )
    } else {
      return(
        <div>
          <h2>Su proceso de registro se acaba de completar, le pedimos esperar 3 días para que su cuenta sea creada y verificada.</h2>
          <Link>Regresar al Home</Link>
        </div>
      )
    }
  }
}

export default Register;