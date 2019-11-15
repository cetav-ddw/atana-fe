import React, { useEffect } from "react"
import svgAnimations from "../svg-animations"
import "./graphic.scss"

const grafica = {
  grafica(s, tl) {
    tl.set(s, { display: "block" })
      .from(s, 1, { opacity: 0 })
      .from(`${s} rect:nth-child(6)`, 1, { width: 0 })
      .staggerFrom(`${s} rect:nth-child(-n+5)`, 1, { height: 0 }, -0.5)
      .from(`${s} path`, 2, { "stroke-dashoffset": 450 })
      .staggerFrom(`${s} circle`, 1, { opacity: 0 }, -0.5, "-=2")
      .to(s, 1, { opacity: 0 }, "+=1")
      .call(() => tl.restart(true, false))
  },
}

export default () => {
  useEffect(() => {
    svgAnimations(grafica, "./<!>.svg")
  })

  return () => <div id="grafica"></div>
}
