import React, { useState } from "react"
import addToMailchimp from "gatsby-plugin-mailchimp"
import { Link } from "gatsby"
import Form from "../components/suscribe-components/form"
import Message from "../components/success-message/success-message"
import "../styles/register.scss"

const Register = () => {
  const [registration, setRegistration] = useState(false);
  const [message, setMessage] = useState("");

  function subscribeService({ email, firstName, lastName, phone }) {
    setMessage("Procesando su solicitud.")
    addToMailchimp(email, {
      FIRSTNAME: firstName,
      LASTNAME: lastName,
      PHONE: phone,
    })
      .then(data => {
        if(data.result === "success") {
          setRegistration(true);
        } else {
          setMessage("Algo salió mal, el usuario que se ingresó ya tiene una cuenta o bien, ya realizó una solicitud a Átana. Vuelva a intentarlo.")
        }
      })
  }

  const clearWarnings = () => {
    setMessage("")
  }
  
  if (!registration) {
    return (
      <section className="register">
        <div className="register__nav">
          <Link to="/" className="nav__logo__container">
            <img src="../atana-logo.svg" alt="Átana" className="nav__logo" />
          </Link>
        </div>
        <div className="register__wrapper">
          <Form handleService={subscribeService} handleMessages={clearWarnings} messageText={message} />
        </div>
      </section>
    )
  } else {
    return <Message />
  }
}

export default Register
