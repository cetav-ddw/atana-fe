import React from "react"
import Logo from "../../images/Logo-color.png"
import "./message.scss"

const Message = () => {
  return (
    <div className="message_container">
      <img className="message_image" src={Logo} alt={"Logo de la empresa"} />
      <h2 className="message_title">¡Muchas gracias por registrarse!</h2>
      <p className="message_info">
        Esta es una versión beta de Átana. Pronto enviaremos a su correo una
        confirmación de su suscripción.
      </p>
    </div>
  )
}

export default Message
