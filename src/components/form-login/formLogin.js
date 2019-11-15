import React from "react"
import "../login/login.scss"

export default ({type,name,idName,formType,value,change,fieldName,inputIcon
}) =>
<div className="form__field">
  <label htmlFor={formType}>{fieldName}</label>
  <input
    id={idName}
    className="form__input"
    type={type}
    name={name}
    value={value}
    onChange={change}
  />
  <img src={inputIcon} className="form__input-icon" alt="" aria-hidden="true" />
</div>
