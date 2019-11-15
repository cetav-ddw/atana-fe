import React, { useState } from "react"
import "../ComponentButtons/buttons.scss"
import "./form.scss"

const Form = ({ handleService, handleMessages, messageText}) => {
  const [formFields, setFormFields] = useState({
    email: "",
    firstName: "",
    lastName: "",
    phone: ""
  })

  function handleFormFields(event) {
    setFormFields({
      ...formFields,
      [event.target.name]: event.target.value
    })
  }

  function handleSubmit (event) {
    event.preventDefault()
    handleService(formFields)
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
            onChange={handleFormFields}
            name="firstName"
            id="formFirstName"
          />
        </div>
        <div className="form__field">
          <label htmlFor="formLastname">Apellido</label>
          <input
            type="text"
            value={formFields.lastName}
            onChange={handleFormFields}
            name="lastName"
            id="formLastName"
          />
        </div>
        <div className="form__field">
          <label htmlFor="formPhone">Número de teléfono</label>
          <input
            type="tel"
            value={formFields.phone}
            onChange={handleFormFields}
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
            onChange={handleFormFields}
            name="email"
            id="formEmail"
            onBlur={() => handleMessages()}
            pattern="[a-z0-9!#$%&'*+\/=?^_`{|}~.-]+@[a-z0-9-]+(\.[a-z0-9-]+)*"
            required
          />
        </div>
        {messageText !== "" && <p className="form__message form__error">{messageText}</p>}
        <button
          className="btn btn--primary form__btn"
          type="submit"
        >
          Suscribirse
        </button>
      </form>
      <p className="text--helpers">Esta es la versión beta de Átana</p>
    </div>
  )
}

export default Form
