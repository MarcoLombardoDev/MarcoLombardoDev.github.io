/* Ambient background: outlined geometric shapes that drift, rotate and
   morph between polygons. Shapes that drift close together get tied by an
   elastic spring (drawn as a line): they bounce against each other while
   travelling on as a group. The cursor "grabs" nearby shapes and a click
   adds a few more. Vanilla canvas, no dependency. Pauses for
   prefers-reduced-motion and while the tab is hidden. */
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
  var links = [];
  var linked = {};
  var nextId = 1;
  var baseCount = 0;
  var running = true;
  var rafId = null;

  var TAU = Math.PI * 2;
  var SIDES = [3, 4, 5, 6];
  var VERTS = 60;
  var LINK_DIST = 170;
  var BREAK_DIST = 270;
  var MAX_LINKS = 2;
  var GRAB_DIST = 210;
  var SPRING_K = 6;
  var SPRING_DAMP = 0.7;
  var DRIFT_RELAX = 0.35;
  var MAX_SPEED = 70;
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
    var bx = Math.cos(angle) * speed;
    var by = Math.sin(angle) * speed;
    return {
      id: nextId++,
      dead: false,
      linkCount: 0,
      x: x === undefined ? Math.random() * w : x,
      y: y === undefined ? Math.random() * h : y,
      bx: bx,
      by: by,
      vx: bx,
      vy: by,
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

  /* Resizing only adapts the canvas and tops up the shape count: on mobile the
     address bar showing/hiding while scrolling fires resize constantly, and
     rebuilding the shapes there made the background jump around. */
  function resize() {
    var nw = window.innerWidth;
    var nh = window.innerHeight;
    var first = shapes.length === 0;
    if (!first && nw === w && nh === h) return;

    w = nw;
    h = nh;
    canvas.width = w * dpr;
    canvas.height = h * dpr;
    canvas.style.width = w + "px";
    canvas.style.height = h + "px";
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

    baseCount = Math.min(34, Math.max(14, Math.round((w * h) / 55000)));
    while (shapes.length < baseCount) shapes.push(makeShape());
  }

  function pairKey(a, b) {
    return a.id < b.id ? a.id + "-" + b.id : b.id + "-" + a.id;
  }

  function removeLink(index) {
    var l = links[index];
    l.a.linkCount--;
    l.b.linkCount--;
    delete linked[pairKey(l.a, l.b)];
    links.splice(index, 1);
  }

  function addLink(a, b) {
    var avgX = (a.bx + b.bx) / 2;
    var avgY = (a.by + b.by) / 2;
    a.bx = b.bx = avgX;
    a.by = b.by = avgY;
    a.linkCount++;
    b.linkCount++;
    linked[pairKey(a, b)] = true;
    links.push({
      a: a,
      b: b,
      rest: 85 + (a.size + b.size) * 0.6,
      now: 0,
      phase: Math.random() * TAU,
      breath: 0.8 + Math.random() * 0.7
    });
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
    var l;

    /* ties: form between nearby free shapes, snap when stretched too far */
    for (i = links.length - 1; i >= 0; i--) {
      l = links[i];
      var bdx = l.b.x - l.a.x;
      var bdy = l.b.y - l.a.y;
      if (l.a.dead || l.b.dead || bdx * bdx + bdy * bdy > BREAK_DIST * BREAK_DIST) removeLink(i);
    }
    for (i = 0; i < shapes.length; i++) {
      if (shapes[i].linkCount >= MAX_LINKS) continue;
      for (j = i + 1; j < shapes.length; j++) {
        if (shapes[j].linkCount >= MAX_LINKS) continue;
        var fx = shapes[i].x - shapes[j].x;
        var fy = shapes[i].y - shapes[j].y;
        if (fx * fx + fy * fy < LINK_DIST * LINK_DIST && !linked[pairKey(shapes[i], shapes[j])]) {
          addLink(shapes[i], shapes[j]);
          if (shapes[i].linkCount >= MAX_LINKS) break;
        }
      }
    }

    /* spring forces: Hooke + damping along each tie */
    for (i = 0; i < links.length; i++) {
      l = links[i];
      l.phase += l.breath * dt;
      l.now = l.rest * (1 + 0.13 * Math.sin(l.phase));
      var dx = l.b.x - l.a.x;
      var dy = l.b.y - l.a.y;
      var d = Math.sqrt(dx * dx + dy * dy) || 1;
      var nx = dx / d;
      var ny = dy / d;
      var relVel = (l.b.vx - l.a.vx) * nx + (l.b.vy - l.a.vy) * ny;
      var f = SPRING_K * (d - l.now) + SPRING_DAMP * relVel;
      l.a.vx += nx * f * dt;
      l.a.vy += ny * f * dt;
      l.b.vx -= nx * f * dt;
      l.b.vy -= ny * f * dt;
    }

    for (i = 0; i < shapes.length; i++) {
      s = shapes[i];

      /* ease back toward the shape's own drift so motion never dies out */
      s.vx += (s.bx - s.vx) * DRIFT_RELAX * dt;
      s.vy += (s.by - s.vy) * DRIFT_RELAX * dt;
      var sp = Math.sqrt(s.vx * s.vx + s.vy * s.vy);
      if (sp > MAX_SPEED) {
        s.vx *= MAX_SPEED / sp;
        s.vy *= MAX_SPEED / sp;
      }

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

    /* ties, drawn a bit stronger and brighter the more they are stretched */
    ctx.lineWidth = 1.5;
    ctx.strokeStyle = "rgb(244, 244, 246)";
    for (i = 0; i < links.length; i++) {
      l = links[i];
      var lx = l.b.x - l.a.x;
      var ly = l.b.y - l.a.y;
      var ld = Math.sqrt(lx * lx + ly * ly);
      var strain = Math.min(0.25, (Math.abs(ld - l.now) / l.rest) * 0.5);
      ctx.globalAlpha = 0.3 + 0.28 * (1 - ld / BREAK_DIST) + strain;
      ctx.beginPath();
      ctx.moveTo(l.a.x, l.a.y);
      ctx.lineTo(l.b.x, l.b.y);
      ctx.stroke();
    }

    ctx.lineWidth = 1;
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
    while (shapes.length > baseCount + 12) shapes.shift().dead = true;
  });

  var resizeTimer = null;
  window.addEventListener("resize", function () {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(resize, 150);
  });

  resize();
  start();
})();
