import React, { Component } from "react"
import { Link } from "gatsby"
import Form from '../components/login/login';
import "../styles/iniciarSesion.scss";

class Login extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="head">
          <Link to="/">
            <img src="../atana-logo.svg" className="head__logo" alt=""></img>
          </Link>
          <img src="../slim-right-corner.svg" className="head__wave" alt="" aria-hidden="true"></img>
        </div>
        <Form />
      </React.Fragment>
    )

  }
}

export default Login