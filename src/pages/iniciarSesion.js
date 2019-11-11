import React, { Component } from "react"
import Lol from '../components/login/login';
import "../styles/iniciarSesion.scss";

class Login extends Component {
  render() {
    {
      return (
        <React.Fragment>
          <div className="head">
            <img src="../atana-logo.svg" className="head__logo"></img>
            <img src="../slim-right-corner.svg" className="head__wave"></img>
          </div>
          <Lol/>
        </React.Fragment>
      )
    }
  }
}

export default Login;