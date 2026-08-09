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

  /* ------------------------------------------------------------------- Year */
  document.querySelectorAll("[data-year]").forEach(function (el) {
    el.textContent = String(new Date().getFullYear());
  });
})();
