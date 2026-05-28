# Hands of Hope – Website

Statische Website für [Hands of Hope gGmbH](https://handsofhope.de), gehostet auf GitHub Pages.

## Projektstruktur

```
handsofhope/
├── index.html              # Startseite
├── components/             # Referenz-Kopien (nicht aktiv – siehe scripts/includes.js)
│   ├── header.html
│   └── footer.html
├── styles/                 # CSS-Dateien
│   ├── main.css            # Design-Tokens, Reset, Basis
│   ├── navigation.css      # Navigation
│   ├── layout.css          # Raster-Utilities
│   ├── typography.css      # Schrift & Typografie
│   ├── sections.css        # Section-Layouts
│   ├── forms.css           # Formulare
│   ├── gallery.css         # Galerie & Lightbox
│   └── responsive.css      # Responsive Breakpoints
├── scripts/                # JavaScript-Dateien
│   ├── includes.js         # Header/Footer als Template-Strings (kein fetch nötig)
│   ├── navigation.js       # Nav-Interaktionen
│   ├── animations.js       # Scroll-Reveal
│   ├── lazyload.js         # Lazy Loading
│   └── gallery.js          # Galerie-Funktionen
├── assets/                 # Statische Dateien
│   ├── logos/
│   ├── icons/
│   ├── fonts/
│   └── global/
│
├── rehabilitation/         # Unterseite Rehabilitation (One-Pager)
│   └── index.html
├── dienstleistungen/       # Unterseite Dienstleistungen (One-Pager)
│   └── index.html
├── strassencafe/           # Unterseite Straßencafé (One-Pager)
│   └── index.html
├── praevention/            # Unterseite Prävention (One-Pager)
│   └── index.html
│
├── ueber-uns/              # One-Pager mit Anker-Sektionen
│   ├── index.html          #   #wer-wir-sind · #team · #geschichte · #mitarbeiten
│   │                       #   (team/, geschichte/, mitarbeiten/ sind KEINE Unterordner)
│   ├── jobs/               # Stellenangebote-Übersicht + Einzelstellen
│   │   ├── index.html
│   │   ├── hausmeister/
│   │   │   └── index.html
│   │   ├── sozialarbeiter/
│   │   │   └── index.html
│   │   └── hauswirtschaft/
│   │       └── index.html
│   ├── spenden/            # Eigenständige Seite
│   │   └── index.html
│   └── kontakt/            # Eigenständige Seite
│       └── index.html
│
├── blog/
│   ├── index.html
│   ├── sommerfest-2026/
│   │   └── index.html
│   └── testimonies-2026/
│       └── index.html
│
├── downloads/
├── impressum.html
├── datenschutz.html
├── robots.txt
├── sitemap.xml
└── CNAME                   # Eigene Domain (nach Migration)
```

### Navigation – Über uns (Anker-Struktur)

Die Dropdown-Links zeigen auf Sektionen des One-Pagers:

| Menüpunkt     | Ziel                           |
|---------------|-------------------------------|
| Wer wir sind  | `ueber-uns/#wer-wir-sind`     |
| Team          | `ueber-uns/#team`             |
| Geschichte    | `ueber-uns/#geschichte`       |
| Mitarbeiten   | `ueber-uns/#mitarbeiten`      |
| Stellenangebote | `ueber-uns/jobs/`           |
| Blog          | `blog/`                       |

## Lokale Entwicklung

Die Seite funktioniert direkt per **Doppelklick auf `index.html`** – kein lokaler Server nötig.

`scripts/includes.js` bettet Header und Footer als JavaScript-Template-Strings ein (kein `fetch()`). Pfade werden automatisch zur jeweiligen Seitentiefe angepasst.

### Header / Footer ändern
Alles in **`scripts/includes.js`** – die Funktionen `buildHeader()` und `buildFooter()`.
Die Dateien unter `components/` sind nur Lesbarkeits-Referenzen ohne Funktion.

## Domain-Migration

1. `CNAME`-Datei anlegen mit Inhalt: `handsofhope.de`
2. `robots.txt` Sitemap-URL aktualisieren
3. In GitHub Settings → Pages → Custom domain eintragen
4. DNS-Einträge beim Provider anpassen

## Bilder ersetzen

Alle Unsplash-Platzhalter durch eigene WebP-Bilder ersetzen:
- Max. 1200px breit für Hero, 800px für Cards
- Format: `.webp`
- Ablageort: jeweiliger Seitenordner (z.B. `rehabilitation/hero.webp`)

## Farben

| Variable     | Wert      | Verwendung                    |
|--------------|-----------|-------------------------------|
| `--dark`     | `#052937` | Hauptdunkel, Hero-Hintergrund |
| `--blue`     | `#0c4684` | Primärfarbe, Rehabilitation   |
| `--mid-blue` | `#c8d8e2` | Highlights, Hero-Akzent       |
| `--house`    | `#478e9a` | Straßencafé                   |
| `--green`    | `#7f9628` | Dienstleistungen              |
| `--yellow`   | `#ce9923` | Blog / Highlights             |
| `--red`      | `#da4f38` | Prävention                    |
