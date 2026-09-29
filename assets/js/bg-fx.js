/* Ambient background: rain-like streaks falling down-right on a dark
   field. Vanilla canvas, no dependency. Pauses for prefers-reduced-motion
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

  /* Fall direction: mostly down, leaning right. */
  var TILT = (24 * Math.PI) / 180;
  var DIR_X = Math.sin(TILT);
  var DIR_Y = Math.cos(TILT);
  var ROTATION = Math.atan2(DIR_Y, DIR_X);

  function drawStreak(length, thickness) {
    var half = length / 2;
    var r = thickness / 2;
    ctx.beginPath();
    if (ctx.roundRect) {
      ctx.roundRect(-half, -r, length, thickness, r);
    } else {
      ctx.rect(-half, -r, length, thickness);
    }
    ctx.fill();
  }

  function makeParticle(anywhere) {
    var isEmber = Math.random() < 0.22;
    var p = {
      isEmber: isEmber,
      length: isEmber ? 24 + Math.random() * 16 : 17 + Math.random() * 15,
      thickness: isEmber ? 3.2 + Math.random() * 1.8 : 2.4 + Math.random() * 1.3,
      speed: isEmber ? 65 + Math.random() * 50 : 45 + Math.random() * 65,
      alpha: isEmber ? 0.7 + Math.random() * 0.3 : 0.24 + Math.random() * 0.3
    };
    if (anywhere) {
      p.x = Math.random() * (w + 240) - 120;
      p.y = Math.random() * (h + 240) - 120;
    } else {
      respawn(p);
    }
    return p;
  }

  function respawn(p) {
    var margin = p.length + p.thickness;
    if (Math.random() < 0.5) {
      p.x = Math.random() * w;
      p.y = -margin;
    } else {
      p.x = -margin;
      p.y = Math.random() * h;
    }
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
    for (var i = 0; i < density; i++) particles.push(makeParticle(true));
  }

  var last = performance.now();

  function tick(now) {
    if (!running) return;
    var dt = Math.min(0.05, (now - last) / 1000);
    last = now;

    ctx.clearRect(0, 0, w, h);

    for (var i = 0; i < particles.length; i++) {
      var p = particles[i];
      p.x += DIR_X * p.speed * dt;
      p.y += DIR_Y * p.speed * dt;

      var margin = p.length + p.thickness;
      if (p.x - margin > w || p.y - margin > h) respawn(p);

      ctx.save();
      ctx.translate(p.x, p.y);
      ctx.rotate(ROTATION);
      ctx.globalAlpha = p.alpha;
      ctx.fillStyle = p.isEmber ? "rgb(232, 17, 45)" : "rgb(244, 244, 246)";
      drawStreak(p.length, p.thickness);
      ctx.restore();
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
