# GBD – Gerechtigkeitsbündnis Deutschlands

Website-Grundgerüst der Partei GBD. Reines HTML/CSS/JavaScript – kein Build-Schritt,
keine Abhängigkeiten. Alle Texte sind bisher **Platzhalter** und im Quelltext mit der
CSS-Klasse `placeholder` markiert.

## Seiten

| Datei | Inhalt |
| --- | --- |
| `index.html` | Startseite: Slogan, Kernthemen, Kennzahlen, Meldungen, Aufruf |
| `programm.html` | Parteiprogramm mit Themenübersicht (aufklappbare Abschnitte) |
| `partei.html` | Über uns: Selbstverständnis, Vorstand, Struktur, Dokumente |
| `aktuelles.html` | Meldungen, Pressemitteilungen, Termine |
| `mitmachen.html` | Mitglied werden, aktiv werden, spenden (mit Formular) |
| `kontakt.html` | Geschäftsstelle, Kontaktformular, Presse |
| `impressum.html` | Impressum (Pflichtangaben ergänzen) |
| `datenschutz.html` | Datenschutzerklärung (Inhalt ergänzen) |

## Aufbau

```
assets/
  css/style.css   Gestaltung, Markenfarben ganz oben als CSS-Variablen
  js/main.js      Mobilmenü, aktiver Menüpunkt, Formular-Rückmeldung
  img/gbd-logo.png
```

## Lokal ansehen

```bash
python3 -m http.server 8000
# danach http://localhost:8000 im Browser öffnen
```

## Anpassen

* **Farben** – in `assets/css/style.css` unter `:root` (`--navy`, `--red`).
* **Navigation** – der Kopfbereich steht in jeder HTML-Datei; Änderungen in allen Dateien nachziehen.
* **Texte** – alle Stellen mit `class="placeholder"` ersetzen und die Klasse entfernen.

## Formulare

Die Formulare auf `mitmachen.html` und `kontakt.html` sind noch **ohne Empfänger**:
Beim Absenden erscheint nur eine Bestätigung, es werden keine Daten verschickt.
Für den Echtbetrieb muss ein Formular-Dienst oder ein eigenes Backend angebunden werden.

## Veröffentlichen (GitHub Pages)

Einmalig im Repo unter **Settings → Pages** einstellen:

* Source: *Deploy from a branch*
* Branch: `claude/gbd-website-skeleton-bl3yxh`, Ordner `/ (root)`

Nach ein bis zwei Minuten ist die Seite erreichbar unter
<https://alihijazi2.github.io/Part-/>. Jeder weitere Push auf den Branch
aktualisiert die Seite automatisch.
