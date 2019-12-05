import { TimelineMax } from 'gsap/all';
import CSSPlugin from 'gsap/CSSPlugin';

/* eslint-disable */
// ToDo Agregar un comentario sobre el issue que se resolvio
const C = CSSPlugin;

export default function svgAnimations(animations, base) {
  Object.keys(animations).map((txt, i) => {
    const [src, parent] = [
      base.replace('<!>', txt),
      document.getElementById(txt),
    ];

    fetch(src)
      .then(res => res.text())
      .then(svg => {
        new TimelineMax();
        parent.style.display = 'none';
        parent.innerHTML = svg + parent.innerHTML;
        return !i ? animations[txt](`#${txt}`, new TimelineMax()) : null;
      });
  });
}
