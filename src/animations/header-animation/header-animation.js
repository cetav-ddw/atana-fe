import React, { useEffect } from "react"
import svgAnimations from "../svg-animations"
import "./header-animation.scss"

const animations = {
  text(s, tl) {
    tl.set(s, { display: "block" })
      .from(s, 1, { opacity: 0 })
      .staggerFrom(`${s} rect[x]`, 0.35, { width: 0 }, 0.35)
      .to(s, 1, { opacity: 0 }, "+=1")
      .set(s, { display: "none" })
      .call(() => animations.paperplane("#paperplane", tl))
  },
  paperplane(s, tl) {
    tl.set(s, { display: "block" })
      .from(s, 1, { opacity: 0 })
      .staggerFrom(
        `${s} path:nth-child(n+3):nth-child(-n+11)`,
        0.2,
        { "stroke-dashoffset": 30 },
        0.15
      )
      .staggerFrom(`${s} path:nth-child(-n+2)`, 0.5, {
        transform: "translateX(-1vw)",
        opacity: 0,
      })
      .to(s, 1, { opacity: 0 }, "+=1")
      .set(s, { display: "none" })
      .call(() => animations.messages("#messages", tl))
  },
  messages(s, tl) {
    tl.set(s, { display: "block" })
      .from(s, 1, { opacity: 0 })
      .staggerFrom(`${s} svg *`, 1, { opacity: 0 }, 0.5)
      .to(s, 1, { opacity: 0 }, "+=1")
      .set(s, { display: "none" })
      .call(() => animations.stats("#stats", tl))
  },
  stats(s, tl) {
    tl.set(s, { display: "block" })
      .from(s, 1, { opacity: 0 })
      .from(`${s} rect:nth-child(5)`, 1, { width: 0 })
      .staggerFrom(`${s} rect:nth-child(-n+4)`, 1, { height: 0 }, -0.5)
      .from(`${s} path`, 2, { "stroke-dashoffset": 238 })
      .staggerFrom(`${s} circle`, 1, { opacity: 0 }, -0.5, "-=2")
      .to(s, 1, { opacity: 0 }, "+=1")
      .set(s, { display: "none" })
      .call(() => tl.restart(true, false))
  },
}

export default () => {
  useEffect(() => {
    svgAnimations(animations, "./<!>.svg")
  })

  return () => (
    <div className="container">
      <div id="text" className="container__svg">
        <p className="svg__paragraph">Podés crear un comunicado de prensa</p>
      </div>
      <div id="paperplane" className="container__svg">
        <p className="svg__paragraph">Le daremos seguimiento</p>
      </div>
      <div id="messages" className="container__svg">
        <p className="svg__paragraph">Se distribuirá automáticamente ...</p>
      </div>
      <div id="stats" className="container__svg">
        <p className="svg__paragraph">
          ... a todos los medios y periodistas categorizados.
        </p>
      </div>
    </div>
  )
}
