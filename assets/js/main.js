/* Marco Lombardo — personal site
   Shared behaviour for the /en/ and /it/ pages. */

(function () {
  "use strict";

  var STORAGE_KEY = "ml-lang";

  /* ---------------------------------------------------------------- Language
     Remember the language the visitor is actually reading, so the root
     redirector honours the manual choice on the next visit. */
  var pageLang = (document.documentElement.lang || "en").slice(0, 2);

  document.querySelectorAll("[data-lang-link]").forEach(function (link) {
    link.addEventListener("click", function () {
      try {
        localStorage.setItem(STORAGE_KEY, link.getAttribute("data-lang-link"));
      } catch (e) {
        /* private mode — ignore */
      }
    });
  });

  try {
    if (localStorage.getItem(STORAGE_KEY) !== pageLang) {
      localStorage.setItem(STORAGE_KEY, pageLang);
    }
  } catch (e) {
    /* ignore */
  }

  /* ------------------------------------------------------------------ Header */
  var header = document.querySelector(".site-header");
  var onScroll = function () {
    if (header) header.classList.toggle("is-stuck", window.scrollY > 24);
  };
  onScroll();
  window.addEventListener("scroll", onScroll, { passive: true });

  /* -------------------------------------------------------------- Mobile nav */
  var toggle = document.querySelector(".nav-toggle");
  var nav = document.querySelector(".nav");

  if (toggle && nav) {
    toggle.addEventListener("click", function () {
      var open = document.body.classList.toggle("nav-open");
      toggle.setAttribute("aria-expanded", String(open));
    });

    nav.addEventListener("click", function (e) {
      if (e.target.closest("a")) {
        document.body.classList.remove("nav-open");
        toggle.setAttribute("aria-expanded", "false");
      }
    });

    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape" && document.body.classList.contains("nav-open")) {
        document.body.classList.remove("nav-open");
        toggle.setAttribute("aria-expanded", "false");
        toggle.focus();
      }
    });
  }

  /* --------------------------------------------------------- Reveal on scroll */
  var revealables = document.querySelectorAll(".reveal");

  if (!("IntersectionObserver" in window)) {
    revealables.forEach(function (el) {
      el.classList.add("is-visible");
    });
  } else {
    var observer = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (!entry.isIntersecting) return;
          var el = entry.target;
          var delay = Number(el.getAttribute("data-delay") || 0);
          setTimeout(function () {
            el.classList.add("is-visible");
          }, delay);
          observer.unobserve(el);
        });
      },
      { rootMargin: "0px 0px -12% 0px", threshold: 0.12 }
    );

    revealables.forEach(function (el) {
      observer.observe(el);
    });
  }

  /* ------------------------------------------------------ Scroll spy for nav */
  var sections = Array.prototype.slice.call(
    document.querySelectorAll("main section[id]")
  );
  var navLinks = Array.prototype.slice.call(
    document.querySelectorAll(".nav a[href^='#']")
  );

  if (sections.length && navLinks.length && "IntersectionObserver" in window) {
    var spy = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (!entry.isIntersecting) return;
          navLinks.forEach(function (link) {
            link.classList.toggle(
              "is-active",
              link.getAttribute("href") === "#" + entry.target.id
            );
          });
        });
      },
      { rootMargin: "-45% 0px -50% 0px" }
    );
    sections.forEach(function (s) {
      spy.observe(s);
    });
  }

  /* ------------------------------------------------- Portrait graceful fallback
     The page still looks finished if the photo file has not been added yet. */
  var portrait = document.querySelector("[data-portrait]");
  if (portrait) {
    var markMissing = function () {
      portrait.closest(".ring-inner").classList.add("no-photo");
    };
    portrait.addEventListener("error", markMissing);
    if (portrait.complete && portrait.naturalWidth === 0) markMissing();
  }

  /* ------------------------------------------------------ Logo graceful fallback
     Every instance shares one source, so a single failure covers them all. */
  var logo = document.querySelector(".logo-img");
  if (logo) {
    var markLogoMissing = function () {
      document.documentElement.classList.add("no-logo-file");
    };
    logo.addEventListener("error", markLogoMissing);
    if (logo.complete && logo.naturalWidth === 0) markLogoMissing();
  }

  /* ------------------------------------------------------------------- Year */
  document.querySelectorAll("[data-year]").forEach(function (el) {
    el.textContent = String(new Date().getFullYear());
  });

  /* ------------------------------------------------------------ Cookie notice
     Informational only — this site has nothing to opt in or out of, so the
     single button just acknowledges and remembers not to show it again. */
  var COOKIE_ACK_KEY = "ml-cookie-ack";
  var notice = document.querySelector("[data-cookie-notice]");
  if (notice) {
    var acknowledged = false;
    try {
      acknowledged = localStorage.getItem(COOKIE_ACK_KEY) === "1";
    } catch (e) {
      /* private mode — show the notice every visit rather than fail */
    }
    var syncBodySpace = function () {
      document.body.style.paddingBottom = notice.offsetHeight + "px";
    };

    if (!acknowledged) {
      requestAnimationFrame(function () {
        notice.classList.add("is-visible");
        syncBodySpace();
      });
      window.addEventListener("resize", syncBodySpace);
    }

    var ackButton = notice.querySelector("[data-cookie-ack]");
    if (ackButton) {
      ackButton.addEventListener("click", function () {
        notice.classList.remove("is-visible");
        document.body.style.paddingBottom = "";
        window.removeEventListener("resize", syncBodySpace);
        try {
          localStorage.setItem(COOKIE_ACK_KEY, "1");
        } catch (e) {
          /* private mode — nothing to persist, notice just hides for this visit */
        }
      });
    }
  }

  /* ------------------------------------------------------------- Lightbox
     Click a screenshot to see it full size; arrows, Esc and a click outside
     the image work too. Without <dialog> support the link simply opens the
     image. */
  var shotLinks = Array.prototype.slice.call(
    document.querySelectorAll("a[data-lightbox]")
  );

  if (shotLinks.length && typeof HTMLDialogElement === "function") {
    var labels =
      pageLang === "it"
        ? { close: "Chiudi", prev: "Immagine precedente", next: "Immagine successiva" }
        : { close: "Close", prev: "Previous image", next: "Next image" };

    var box = document.createElement("dialog");
    box.className = "lightbox";
    box.setAttribute("aria-label", labels.close);
    box.innerHTML =
      '<div class="lightbox-stage"><img alt=""></div>' +
      '<p class="lightbox-caption"></p>' +
      '<button type="button" class="lightbox-btn lightbox-close" aria-label="' + labels.close + '">&times;</button>' +
      '<button type="button" class="lightbox-btn lightbox-prev" aria-label="' + labels.prev + '">&#8249;</button>' +
      '<button type="button" class="lightbox-btn lightbox-next" aria-label="' + labels.next + '">&#8250;</button>';
    document.body.appendChild(box);

    var boxImg = box.querySelector("img");
    var boxCap = box.querySelector(".lightbox-caption");
    var group = [];
    var current = 0;

    var show = function (i) {
      current = (i + group.length) % group.length;
      var link = group[current];
      var thumb = link.querySelector("img");
      boxImg.src = link.getAttribute("href");
      boxImg.alt = thumb ? thumb.alt : "";
      boxCap.textContent = thumb ? thumb.alt : "";
      var many = group.length > 1;
      box.querySelector(".lightbox-prev").hidden = !many;
      box.querySelector(".lightbox-next").hidden = !many;
    };

    shotLinks.forEach(function (link) {
      link.addEventListener("click", function (e) {
        if (e.metaKey || e.ctrlKey || e.shiftKey || e.button === 1) return;
        e.preventDefault();
        var name = link.getAttribute("data-lightbox");
        group = shotLinks.filter(function (l) {
          return l.getAttribute("data-lightbox") === name;
        });
        box.showModal();
        show(group.indexOf(link));
      });
    });

    box.querySelector(".lightbox-close").addEventListener("click", function () {
      box.close();
    });
    box.querySelector(".lightbox-prev").addEventListener("click", function () {
      show(current - 1);
    });
    box.querySelector(".lightbox-next").addEventListener("click", function () {
      show(current + 1);
    });
    box.addEventListener("click", function (e) {
      if (e.target === box || e.target.classList.contains("lightbox-stage")) box.close();
    });
    box.addEventListener("keydown", function (e) {
      if (e.key === "ArrowLeft") show(current - 1);
      else if (e.key === "ArrowRight") show(current + 1);
    });
    box.addEventListener("close", function () {
      boxImg.removeAttribute("src");
    });
  }
})();
