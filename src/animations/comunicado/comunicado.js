import React, { useEffect } from 'react';
import svgAnimations from '../svg-animations';

import './comunicado.scss';

const comunicado = {
  comunicado(s, tl) {
    tl.set(s, { display: 'block' })
      .from(s, 1, { opacity: 0 })
      .staggerFrom(`${s} rect[x]`, 0.35, { width: 0 }, 0.35)
      .to(s, 1, { opacity: 0 }, '+=1')
      .call(() => tl.restart(true, false));
  },
};

export default () => {
  useEffect(() => {
    svgAnimations(comunicado, './<!>.svg');
  });

  return () => <div id="comunicado"></div>;
};
