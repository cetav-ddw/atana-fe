import { TimelineMax } from "gsap/all"
import CSSPlugin from "gsap/CSSPlugin"

const C = CSSPlugin // here is the gotcha....

export default function svgAnimations(animations, base) {
  Object.keys(animations).map((txt, i) => {
    const [src, parent] = [
      base.replace("<!>", txt),
      document.getElementById(txt),
    ]

    fetch(src)
      .then(res => res.text())
      .then(svg => {
        parent.innerHTML = svg + parent.innerHTML
        parent.style.setProperty("display", "none")
        if (!i) animations[txt](`#${txt}`, new TimelineMax())
        return 1
      })
  })
}
