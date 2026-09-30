/* Ambient background: outlined geometric shapes that drift, rotate and
   morph between polygons, linked by faint lines; the cursor "grabs" nearby
   shapes and a click adds a few more. Vanilla canvas, no dependency.
   Pauses for prefers-reduced-motion and while the tab is hidden. */
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
  var shapes = [];
  var baseCount = 0;
  var running = true;
  var rafId = null;

  var TAU = Math.PI * 2;
  var SIDES = [3, 4, 5, 6];
  var VERTS = 60;
  var LINK_DIST = 170;
  var GRAB_DIST = 210;
  var mouse = { x: -9999, y: -9999 };

  /* Distance from the centre to the edge of a regular n-gon (circumradius
     1) in direction theta; vertices sit at theta = 0, 2pi/n, ... */
  function polygonRadius(n, theta) {
    var seg = TAU / n;
    var a = (((theta % seg) + seg) % seg) - seg / 2;
    return Math.cos(Math.PI / n) / Math.cos(a);
  }

  function pickSides(except) {
    var n;
    do {
      n = SIDES[Math.floor(Math.random() * SIDES.length)];
    } while (n === except);
    return n;
  }

  function makeShape(x, y) {
    var isRed = Math.random() < 0.28;
    var angle = Math.random() * TAU;
    var speed = 9 + Math.random() * 16;
    var from = pickSides(0);
    return {
      x: x === undefined ? Math.random() * w : x,
      y: y === undefined ? Math.random() * h : y,
      vx: Math.cos(angle) * speed,
      vy: Math.sin(angle) * speed,
      size: isRed ? 16 + Math.random() * 22 : 14 + Math.random() * 34,
      rot: Math.random() * TAU,
      rotSpeed: (Math.random() - 0.5) * 0.5,
      from: from,
      to: pickSides(from),
      t: Math.random(),
      morphSpeed: 0.12 + Math.random() * 0.14,
      pulse: Math.random() * TAU,
      isRed: isRed,
      strokeAlpha: isRed ? 0.85 + Math.random() * 0.15 : 0.5 + Math.random() * 0.3,
      fillAlpha: isRed ? 0.14 : 0.08,
      lineWidth: isRed ? 2.2 : 1.8
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

    baseCount = Math.min(34, Math.max(14, Math.round((w * h) / 55000)));
    shapes = [];
    for (var i = 0; i < baseCount; i++) shapes.push(makeShape());
  }

  function drawShape(s) {
    var e = s.t * s.t * (3 - 2 * s.t);
    var size = s.size * (1 + 0.08 * Math.sin(s.pulse));

    ctx.save();
    ctx.translate(s.x, s.y);
    ctx.rotate(s.rot);
    ctx.beginPath();
    for (var i = 0; i < VERTS; i++) {
      var theta = (i / VERTS) * TAU;
      var r = size * ((1 - e) * polygonRadius(s.from, theta) + e * polygonRadius(s.to, theta));
      var px = Math.cos(theta) * r;
      var py = Math.sin(theta) * r;
      if (i === 0) ctx.moveTo(px, py);
      else ctx.lineTo(px, py);
    }
    ctx.closePath();
    ctx.fillStyle = s.isRed ? "rgb(232, 17, 45)" : "rgb(244, 244, 246)";
    ctx.globalAlpha = s.fillAlpha;
    ctx.fill();
    ctx.strokeStyle = s.isRed ? "rgb(255, 34, 55)" : "rgb(244, 244, 246)";
    ctx.lineWidth = s.lineWidth;
    ctx.lineJoin = "round";
    ctx.globalAlpha = s.strokeAlpha;
    ctx.stroke();
    ctx.restore();
  }

  var last = performance.now();

  function tick(now) {
    if (!running) return;
    var dt = Math.min(0.05, (now - last) / 1000);
    last = now;

    ctx.clearRect(0, 0, w, h);

    var i;
    var j;
    var s;

    for (i = 0; i < shapes.length; i++) {
      s = shapes[i];
      s.x += s.vx * dt;
      s.y += s.vy * dt;
      s.rot += s.rotSpeed * dt;
      s.pulse += dt * 0.9;
      s.t += s.morphSpeed * dt;
      if (s.t >= 1) {
        s.t = 0;
        s.from = s.to;
        s.to = pickSides(s.from);
      }

      var m = s.size * 1.6;
      if (s.x < -m) s.x = w + m;
      else if (s.x > w + m) s.x = -m;
      if (s.y < -m) s.y = h + m;
      else if (s.y > h + m) s.y = -m;
    }

    ctx.lineWidth = 1;
    ctx.strokeStyle = "rgb(244, 244, 246)";
    for (i = 0; i < shapes.length; i++) {
      for (j = i + 1; j < shapes.length; j++) {
        var dx = shapes[i].x - shapes[j].x;
        var dy = shapes[i].y - shapes[j].y;
        var d2 = dx * dx + dy * dy;
        if (d2 < LINK_DIST * LINK_DIST) {
          ctx.globalAlpha = (1 - Math.sqrt(d2) / LINK_DIST) * 0.45;
          ctx.beginPath();
          ctx.moveTo(shapes[i].x, shapes[i].y);
          ctx.lineTo(shapes[j].x, shapes[j].y);
          ctx.stroke();
        }
      }
    }

    ctx.strokeStyle = "rgb(255, 34, 55)";
    for (i = 0; i < shapes.length; i++) {
      var gx = shapes[i].x - mouse.x;
      var gy = shapes[i].y - mouse.y;
      var gd2 = gx * gx + gy * gy;
      if (gd2 < GRAB_DIST * GRAB_DIST) {
        ctx.globalAlpha = (1 - Math.sqrt(gd2) / GRAB_DIST) * 0.7;
        ctx.beginPath();
        ctx.moveTo(shapes[i].x, shapes[i].y);
        ctx.lineTo(mouse.x, mouse.y);
        ctx.stroke();
      }
    }

    for (i = 0; i < shapes.length; i++) drawShape(shapes[i]);
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

  window.addEventListener("mousemove", function (e) {
    mouse.x = e.clientX;
    mouse.y = e.clientY;
  });
  document.documentElement.addEventListener("mouseleave", function () {
    mouse.x = mouse.y = -9999;
  });

  window.addEventListener("click", function (e) {
    for (var i = 0; i < 3; i++) {
      shapes.push(makeShape(e.clientX + (Math.random() - 0.5) * 40, e.clientY + (Math.random() - 0.5) * 40));
    }
    while (shapes.length > baseCount + 12) shapes.shift();
  });

  var resizeTimer = null;
  window.addEventListener("resize", function () {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(resize, 150);
  });

  resize();
  start();
})();
