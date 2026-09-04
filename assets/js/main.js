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

  /* Programm: alle Abschnitte auf- oder zuklappen */
  var topics = document.querySelectorAll(".topic");

  document.querySelectorAll("[data-topics]").forEach(function (button) {
    button.addEventListener("click", function () {
      var open = button.dataset.topics === "open";
      topics.forEach(function (topic) { topic.open = open; });
    });
  });

  /* Wird ein Abschnitt direkt verlinkt (z. B. programm.html#abschnitt-9),
     soll er geöffnet und angesteuert werden. */
  function oeffneAusAdresse() {
    if (!window.location.hash) return;
    var ziel = document.querySelector(window.location.hash);
    if (ziel && ziel.classList.contains("topic")) {
      ziel.open = true;
      ziel.scrollIntoView({ block: "start" });
    }
  }
  oeffneAusAdresse();
  window.addEventListener("hashchange", oeffneAusAdresse);

  /* Beim Drucken alles aufklappen, danach den alten Stand wiederherstellen. */
  if (topics.length) {
    var vorherOffen = [];
    window.addEventListener("beforeprint", function () {
      vorherOffen = [];
      topics.forEach(function (topic) {
        vorherOffen.push(topic.open);
        topic.open = true;
      });
    });
    window.addEventListener("afterprint", function () {
      topics.forEach(function (topic, i) { topic.open = vorherOffen[i]; });
    });
  }

  /* Jahreszahl im Fußbereich */
  document.querySelectorAll("[data-year]").forEach(function (el) {
    el.textContent = String(new Date().getFullYear());
  });
})();
