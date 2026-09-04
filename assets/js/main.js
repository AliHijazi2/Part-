/* GBD – kleine Helfer für Navigation und Formulare. */
(function () {
  "use strict";

  /* Mobile Navigation ein-/ausklappen */
  var toggle = document.querySelector(".nav-toggle");
  var nav = document.getElementById("main-nav");

  if (toggle && nav) {
    toggle.addEventListener("click", function () {
      var open = nav.classList.toggle("is-open");
      toggle.setAttribute("aria-expanded", String(open));
    });
  }

  /* Aktuellen Menüpunkt markieren */
  var here = document.body.dataset.page;
  if (here) {
    var link = document.querySelector('.main-nav a[data-nav="' + here + '"]');
    if (link) link.setAttribute("aria-current", "page");
  }

  /* Formulare: noch kein Backend – Eingaben werden nur bestätigt. */
  document.querySelectorAll("form[data-demo]").forEach(function (form) {
    form.addEventListener("submit", function (event) {
      event.preventDefault();
      var status = form.querySelector(".form-status");
      if (status) {
        status.hidden = false;
        status.focus();
      }
      form.reset();
    });
  });

  /* Jahreszahl im Fußbereich */
  document.querySelectorAll("[data-year]").forEach(function (el) {
    el.textContent = String(new Date().getFullYear());
  });
})();
