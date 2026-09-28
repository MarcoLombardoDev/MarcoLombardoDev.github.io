/* Ambient background: slow-drifting embers on a dark field.
   Vanilla canvas, no dependency. Pauses for prefers-reduced-motion
   and while the tab is hidden. */
(function () {
  "use strict";

  var canvas = document.querySelector(".bg-fx");
  if (!canvas || !canvas.getContext) return;

  var reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (reduceMotion) return;

  var ctx = canvas.getContext("2d");
  var dpr = Math.min(window.devicePixelRatio || 1, 2);
  var w = 0;
  var h = 0;
  var particles = [];
  var running = true;
  var rafId = null;

  var RED = [232, 17, 45];
  var WHITE = [244, 244, 246];

  function sprite(color, glowPx) {
    var size = glowPx * 2;
    var off = document.createElement("canvas");
    off.width = off.height = size;
    var octx = off.getContext("2d");
    var g = octx.createRadialGradient(glowPx, glowPx, 0, glowPx, glowPx, glowPx);
    g.addColorStop(0, "rgba(" + color[0] + "," + color[1] + "," + color[2] + ",1)");
    g.addColorStop(0.4, "rgba(" + color[0] + "," + color[1] + "," + color[2] + ",0.55)");
    g.addColorStop(1, "rgba(" + color[0] + "," + color[1] + "," + color[2] + ",0)");
    octx.fillStyle = g;
    octx.fillRect(0, 0, size, size);
    return off;
  }

  var redSprite = sprite(RED, 30);
  var whiteSprite = sprite(WHITE, 16);

  function makeParticle() {
    var isEmber = Math.random() < 0.24;
    return {
      x: Math.random() * w,
      y: Math.random() * h + h * 0.1,
      r: isEmber ? 2 + Math.random() * 2.2 : 0.6 + Math.random() * 1.1,
      sprite: isEmber ? redSprite : whiteSprite,
      glow: isEmber ? 30 : 16,
      speed: isEmber ? 8 + Math.random() * 10 : 4 + Math.random() * 8,
      drift: (Math.random() - 0.5) * 10,
      sway: Math.random() * Math.PI * 2,
      swaySpeed: 0.15 + Math.random() * 0.25,
      alpha: isEmber ? 0.75 + Math.random() * 0.25 : 0.32 + Math.random() * 0.3
    };
  }

  function resize() {
    w = window.innerWidth;
    h = window.innerHeight;
    canvas.width = w * dpr;
    canvas.height = h * dpr;
    canvas.style.width = w + "px";
    canvas.style.height = h + "px";
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

    var density = Math.min(110, Math.max(40, Math.round((w * h) / 16000)));
    particles = [];
    for (var i = 0; i < density; i++) particles.push(makeParticle());
  }

  var last = performance.now();

  function tick(now) {
    if (!running) return;
    var dt = Math.min(0.05, (now - last) / 1000);
    last = now;

    ctx.clearRect(0, 0, w, h);

    for (var i = 0; i < particles.length; i++) {
      var p = particles[i];
      p.y -= p.speed * dt;
      p.sway += p.swaySpeed * dt;
      var x = p.x + Math.sin(p.sway) * p.drift;

      if (p.y < -p.glow) {
        p.y = h + p.glow;
        p.x = Math.random() * w;
      }

      ctx.globalAlpha = p.alpha;
      ctx.drawImage(p.sprite, x - p.glow, p.y - p.glow, p.glow * 2, p.glow * 2);
    }
    ctx.globalAlpha = 1;

    rafId = requestAnimationFrame(tick);
  }

  function start() {
    if (rafId) return;
    last = performance.now();
    rafId = requestAnimationFrame(tick);
  }

  function stop() {
    if (rafId) cancelAnimationFrame(rafId);
    rafId = null;
  }

  document.addEventListener("visibilitychange", function () {
    running = document.visibilityState === "visible";
    if (running) start();
    else stop();
  });

  var resizeTimer = null;
  window.addEventListener("resize", function () {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(resize, 150);
  });

  resize();
  start();
})();
