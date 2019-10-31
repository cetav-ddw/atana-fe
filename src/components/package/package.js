import React, { useState } from "react"
import { Link } from "gatsby"
import PropTypes from "prop-types"
import "./package.scss"
import "../ComponentButtons/buttons.scss"

const Package = ({ data }) => {
  const [toggleState, setToggleState] = useState(false)

  const toggleHandler = () => {
    setToggleState(!toggleState)
  }

  const bundleFeatures = processFeature => {
    const featureItem = processFeature.map((feature, id) => {
      return <li key={`${data.bundle}-${id}`}>{feature}</li>
    })
    return <ul className="package__features">{featureItem}</ul>
  }

  return (
    <div className={`package package--${data.bundle}`}>
      <div className="package__head">
        <p className="package__type">{data.title}</p>
      </div>
      <p className="package__price">{data.price}</p>
      <div
        className={`package__body ${toggleState ? "package__body--open" : ""}`}
      >
        {bundleFeatures(data.features)}
        <Link to="" className="btn btn--secondary package__btn">
          Obtener {data.title}
        </Link>
      </div>
      <button
        className="btn--seemore package__btn--seemore"
        onClick={() => toggleHandler()}
      >
        {`${toggleState ? "Ver menos" : "Ver más"}`}
      </button>
    </div>
  )
}

Package.defaultProps = {
  data: [],
  bundle: "basic",
}

Package.propTypes = {
  data: PropTypes.object,
  bundle: PropTypes.string,
}

export default Package
