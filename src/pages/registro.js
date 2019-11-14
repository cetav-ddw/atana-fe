import React, { Component } from "react"
import { Link } from "gatsby"
import Form from "../components/suscribe-components/form"
import Message from "../components/success-message/success-message"
import "../styles/register.scss"

class Register extends Component {
  constructor(props) {
    super(props)
    this.state = {
      registered: false,
    }
    this.handleRegistration = this.handleRegistration.bind(this)
  }

  handleRegistration(state) {
    this.setState({
      registered: state,
    })
  }

  render() {
    if (!this.state.registered) {
      return (
        <section className="register">
          <div className="register__nav">
            <Link to="/" className="nav__logo__container">
              <img src="../atana-logo.svg" alt="Átana" className="nav__logo" />
            </Link>
          </div>
          <div className="register__wrapper">
            <Form action={this.handleRegistration} />
          </div>
        </section>
      )
    } else {
      return <Message />
    }
  }
}

export default Register
