export default () => {
  const c = document.querySelector('canvas');
  const ctx = c.getContext('2d');
  const w = () => window.innerWidth;
  // const h = () => window.innerHeight;

  const size = function size(w = window.innerWidth, h = window.innerHeight) {
    c.width = w;
    c.height = h;
    if (c.width === window.innerWidth) {
      window.addEventListener('resize', () => {
        c.width = window.innerWidth;
      });
    }
    if (c.height === window.innerHeight) {
      window.addEventListener('resize', () => {
        c.height = window.innerHeight;
      });
    }
  };

  const clear = function clear(color) {
    if (!color) {
      ctx.clearRect(0, 0, c.width, c.height);
    } else if (typeof color === 'string') {
      ctx.fillStyle = color;
      ctx.fillRect(0, 0, c.width, c.height);
      ctx.beginPath();
    }
  };

  const draw = function draw(f) {
    if (typeof f === 'function') f();
    requestAnimationFrame(() => draw(f));
  };

  const render = function render(vertex) {
    return {
      arc() {
        ctx.beginPath();
        ctx.fillStyle = vertex.c;
        ctx.arc(vertex.x, vertex.y, vertex.r, 0, Math.PI * 2);
        ctx.fill();
      },
    };
  };

  const renderGroup = function renderGroup(type, array) {
    return array.forEach(obj => {
      render(obj)[type]();
    });
  };

  const random = function random(max = 1, min = 0) {
    return Math.floor(Math.random() * (max - min + 1) + min);
  };

  size(w(), 455);
  const opacityReduction = 500;
  const stars = [...new Array(200)].map((_, i) => {
    const opacity = Math.abs(Math.sin(random(0, 100) - 50)) * 0.5;
    const radius = opacity * 3;
    const x = random(radius, w() - radius);
    const y = random(radius, c.height - radius - c.height * (i / c.height));
    return {
      x,
      y,
      origin: {
        x,
        y,
        w: w(),
        h: c.height,
      },
      r: radius,
      c: `rgba(${y}, 255, 255, ${opacity})`,
      opacity,
      direction: Math.floor(Math.cos(random(0, 100) - 50)),
    };
  });

  draw(() => {
    clear();
    stars.forEach((star, i) => {
      star.opacity += star.direction * (star.r / opacityReduction);
      if (
        star.opacity <= star.r / 10 ||
        star.opacity >= 1 - star.r / opacityReduction
      )
        star.direction = -star.direction;
      star.c = `rgba(255, 255, 255, ${star.opacity})`;
      star.x = w() * (star.origin.x / star.origin.w);
    });
    renderGroup('arc', stars);
  });
};
