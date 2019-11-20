import React from "react"
import InfoCard from "../../components/info-card/info-card"
import Comunicado from "../../animations/comunicado/comunicado"
import Media from "../../animations/media/media"
import Graphic from "../../animations/graphic/graphic"
import "./how-we-work.scss"

export default () => {
  const cards = [
    {
      title: "Creación y corrección de estilos",
      paragraph:
        "De manera ágil revisamos sus comunicaciones para la prensa y recomendamos mejoras previo al envío.",
      id: "comunicado",
      link: "Crea un comunicado >",
      src: "comunicado.svg",
      Animation: Comunicado(),
    },
    {
      modifier: "container--reverse",
      title: "Distribución automatizada",
      paragraph:
        "Enviamos a medios de comunicación, periodistas, influenciadores, líderes de opinión de acuerdo a intereses segmentados.",
      id: "media",
      link: "Crea un comunicado >",
      src: "media.svg",
      Animation: Media(),
    },
    {
      title: "Seguimiento",
      paragraph:
        "Hacemos un reporte de análisis de desempeño del comunicado enviado.",
      id: "grafica",
      link: "Crea un comunicado >",
      src: "grafica.svg",
      Animation: Graphic(),
    },
  ]

  return (
    <section className="section__wrapper">
      <h2 className="wrapper__title">¿Cómo trabajamos?</h2>
      {cards.map((card, i) => (
        <InfoCard key={i} {...card} />
      ))}
    </section>
  )
}
