import React from "react"
import InfoCard from "../../components/info-card/info-card"

export default () => {
  return (
    <section className="section__wrapper">
      <InfoCard
        title="Creación y correción de estilos"
        paragraph="Revisamos los comunicados de prensa y recomendamos cambios previo al envío."
        id="comunicado"
        src="comunicado.svg"
      />
      <InfoCard
        title="Distribución automatizada "
        paragraph="Envíamos a medios y periodistas de acuerdo al público meta y la categoría."
        id="media"
        reverse={false}
        src="media.svg"
      />
      <InfoCard
        title="Seguimiento"
        paragraph="Hacemos un reporte de análisis de desempeño del comunicado enviado."
        id="grafica"
        src="grafica.svg"
      />
    </section>
  )
}
