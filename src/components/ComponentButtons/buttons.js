import React from "react"
import PropTypes from "prop-types"
import "./buttons.scss"
import classNames from "classnames"

function Button({
  children,
  button,
  type,
  action,
  customStyle,
  buttonValue,
  buttonLabel,
}) {
  const mainClassNames = classNames(`btn btn--primary ${customStyle}`)
  const secondaryClassNames = classNames(`btn btn--secondary ${customStyle}`)
  const btnStyle = button === "primary" ? mainClassNames : secondaryClassNames
  return (
    <button
      className={btnStyle}
      type={type}
      onClick={action}
      value={buttonValue}
      name={buttonLabel}
    >{children}</button>
  )
}

Button.defaultProps = {
  children: "",
  action: () => console.log("Default function"),
  customStyle: "",
  button: PropTypes.oneOf(["primary", "secondary"]),
  type: PropTypes.oneOf(["submit", "reset", "button"]),
  buttonValue: "",
  buttonLabel: "",
}

Button.propTypes = {
  children: PropTypes.node,
  action: PropTypes.func,
  customStyle: PropTypes.string,
  button: PropTypes.string,
  type: PropTypes.string,
  buttonValue: PropTypes.string,
  buttonLabel: PropTypes.string,
}

export default Button
