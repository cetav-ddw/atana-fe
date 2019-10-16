import React, { useEffect } from "react"
import ourMissionCanvas from "../../utils/our-mission-canvas"
import "./our-mission.scss"

export default () => {
  useEffect(ourMissionCanvas)

  return (
    <section className="our-mission">
      <canvas className="our-mission__canvas"></canvas>
      <div className="section__wrapper">
        <h2 className="our-mission__title">Nuestra misión</h2>
        <p className="our-mission__paragraph">
          Trasladar ideas valiosas de quienes las crean a quienes pueden darlas
          a conocer.
        </p>
        <div className="our-mission__svg-group svg-group--spacing">
          <div className="our-mission__svg light-bulb" />
          <div className="our-mission__svg light-bulb" />
          <div className="our-mission__svg paper-plane" />
          <div className="our-mission__svg planet" />
        </div>
        <h2 className="our-mission__title">Nuestra Visión</h2>
        <p className="our-mission__paragraph">
          Ser la fuente confiable de distribución de contenido en el mercado
          centroamericano, al enlazar empresas y medios de comunicación.
        </p>
        <div className="our-mission__svg-group">
          <div className="our-mission__svg check" />
          <div className="our-mission__svg check" />
          <div className="our-mission__svg check" />
          <div className="our-mission__svg check" />
          <div className="our-mission__svg check" />
          <div className="our-mission__svg check" />
        </div>
        <div className="our-mission__logo" />
      </div>
      <div className="cta">
        <div className="our-mission__svg cta__paper-plane--dark" />
        <div className="our-mission__svg cta__paper-plane" />
        <button className="cta__btn">Crea tu comunicado</button>
      </div>
    </section>
  )
}
