import React, { useEffect } from 'react';
import svgAnimations from '../svg-animations';

const media = {
  media(s, tl) {
    tl.set(s, { display: 'block' })
      .from(s, 1, { opacity: 0 })
      .staggerFrom(`${s} svg *`, 1, { opacity: 0 }, 0.5)
      .to(s, 1, { opacity: 0 }, '+=1')
      .call(() => tl.restart(true, false));
  },
};

export default () => {
  useEffect(() => {
    svgAnimations(media, './<!>.svg');
  });

  return () => <div id="media"></div>;
};
