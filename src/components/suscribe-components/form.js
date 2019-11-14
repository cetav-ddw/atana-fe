import React, { useState } from "react"
import "./form.scss"

const Form = ({ sendDataTo, isRegister }) => {
  const [message, setMessage] = useState("");
  const [formFields, setFormFields] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: ""
  })

  function handleFormFields(event) {
    setFormFields({
      ...formFields,
      [event.target.name]: event.target.value
    })
  }

  const handleSubmit = event => {
    event.preventDefault()
    if (formFields.email !== "") {
      setMessage("Procesando su solicitud")
      sendDataTo(formFields.email, {
        FIRSTNAME: formFields.firstName,
        LASTNAME: formFields.lastName,
        PHONE: formFields.phone,
      })
        .then(data => {
          if (data.result === "error") {
            setMessage(
              "El correo que se ingresó tiene errores, asegurece que el formato es valido, y que aún no tiene una cuenta con Átana. Por favor vuelva a intentarlo."
            )
          } else {
            isRegister(true)
          }
        })
        .catch(err => {
          setMessage("Algo salió mal con la solicitud")
        })
    } else {
      setMessage("Asegurese de llenar el campo requerido.")
    }
  }

  const clearWarnings = () => {
    setMessage("")
  }

  return (
    <div className="register__layout">
      <h1>Suscribirse</h1>
      <p className="text--helpers">
        Para suscribirse llene los siguientes datos
      </p>
      <form onSubmit={handleSubmit} className="form">
        <div className="form__field">
          <label htmlFor="formFirstName">Nombre</label>
          <input
            type="text"
            value={formFields.firstName}
            onChange={(event) => handleFormFields(event)}
            name="firstname"
            id="formFirstName"
          />
        </div>
        <div className="form__field">
          <label htmlFor="formLastname">Apellido</label>
          <input
            type="text"
            value={formFields.lastName}
            onChange={(event) => handleFormFields(event)}
            name="lastname"
            id="formLastName"
          />
        </div>
        <div className="form__field">
          <label htmlFor="formPhone">Número de teléfono</label>
          <input
            type="tel"
            value={formFields.phone}
            onChange={(event) => handleFormFields(event)}
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
            value={formFields.email}
            onChange={(event) => handleFormFields(event)}
            name="email"
            id="formEmail"
            onBlur={() => clearWarnings()}
            pattern="[a-z0-9!#$%&'*+\/=?^_`{|}~.-]+@[a-z0-9-]+(\.[a-z0-9-]+)*"
          />
        </div>
        <p className="form__message message__error">{message}</p>
        <button
          className="btn btn--primary form__btn"
          type="submit"
        >
          Suscribirse
        </button>
      </form>
      <p className="text--helpers">Está es la versión beta de Átana</p>
    </div>
  )
}

export default Form
