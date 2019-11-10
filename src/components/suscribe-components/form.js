import React, { useState } from "react"
import addToMailchimp from "gatsby-plugin-mailchimp"
import "./form.scss"

const Form = () => {
  const [formFirstName, setFirstName] = useState("")
  const [formLastName, setLastName] = useState("")
  const [formPhone, setPhone] = useState("")
  const [formEmail, setEmail] = useState("")
  const [message, setMessage] = useState("")
  const [errorBackend, setError] = useState("")

  const handleSubmit = event => {
    event.preventDefault()
    if (formEmail !== "") {
      setMessage("Procesando su solicitud")
      addToMailchimp(formEmail, {
        FIRSTNAME: formFirstName,
        LASTNAME: formLastName,
        PHONE: formPhone,
      })
        .then(data => {
          if (data.result === "error") {
            setMessage(
              "El correo que se ingresó inició un proceso de registro o ya tiene una cuenta con Átana. Por favor vuelva a intentarlo."
            )
            setError(`Error: ${data.msg}`)
          } else {
            console.log(
              "Mensaje de exito, usted fue capaz de solicitar una cuenta. Este es un mensaje temporal y la página está en desarrollo."
            )
          }
        })
        .catch(err => {
          setMessage("Algo salió mal con la solicitud")
          setError(`Error: ${err}`)
        })
    } else {
      setMessage("Asegurese de llenar el campo requerido.")
    }
  }

  const clearWarnings = () => {
    setMessage("")
    setError("")
  }

  return (
    <div className="register__layout">
      <h1>Suscribirse</h1>
      <p className="text--helpers">
        Para suscribirse llene los siguientes datos
      </p>
      <form onSubmit={handleSubmit} className="form" noValidate>
        <div className="form__field">
          <label htmlFor="formFirstName">Nombre</label>
          <input
            type="text"
            value={formFirstName}
            onChange={event => setFirstName(event.target.value)}
            name="firstname"
            id="formFirstName"
          />
        </div>
        <div className="form__field">
          <label htmlFor="formLastname">Apellido</label>
          <input
            type="text"
            value={formLastName}
            onChange={event => setLastName(event.target.value)}
            name="lastname"
            id="formLastName"
          />
        </div>
        <div className="form__field">
          <label htmlFor="formPhone">Número de teléfono</label>
          <input
            type="tel"
            value={formPhone}
            onChange={event => setPhone(event.target.value)}
            name="phone"
            id="formPhone"
          />
        </div>
        <div className="form__field">
          <label htmlFor="formEmail">
            Correo electrónico{" "}
            <span className="required__field">(Requerido)</span>
          </label>
          <input
            type="email"
            value={formEmail}
            onChange={event => setEmail(event.target.value)}
            name="email"
            id="formEmail"
            onBlur={() => clearWarnings()}
            required
          />
        </div>
        <p className="form__message message__error">{message}</p>
        <p className="form__message message__error">{errorBackend}</p>
        <button
          className="btn btn--primary form__btn"
          type="submit"
          value="suscribirse"
          name="suscribirse"
        >
          Suscribirse
        </button>
      </form>
      <p className="text--helpers">Está es la versión beta de Átana</p>
    </div>
  )
}

export default Form
