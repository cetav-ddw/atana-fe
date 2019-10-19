import React from "react"
import Package from "../../components/package/package"
import "./our-packages.scss"
const packagesData = require("../../components/package/package-data.json")

export default () => {
  const bundles = packagesData.bundles.map((bundle, id) => {
    return <Package data={bundle} key={`${bundle}-${id}`} />
  })
  return (
    <section className="section__wrapper">
      <h2 className="section__title">Nuestros paquetes</h2>
      <div className="section__bundler">{bundles}</div>
    </section>
  )
}
