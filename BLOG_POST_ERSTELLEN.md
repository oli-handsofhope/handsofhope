# Blog-Post erstellen – Anleitung für das Team

Zwei Schritte: **① Entwurf** → **② Veröffentlichen**

---

## Schritt 1 – Entwurf erstellen

**Diesen Prompt an Claude schicken** (Bilder als Datei-Anhänge mitschicken):

```
Lies BLOG_POST_ERSTELLEN.md und erstelle einen Blog-Post-Entwurf.

Autor: [Vorname Nachname]
Text: [Fertig formuliert oder Stichpunkte – Claude strukturiert und formuliert aus]
Medien: [Dateien hochladen und/oder Links einfügen]
```

**Claude erschließt daraus selbst:**
- Kategorie (aus dem Textinhalt)
- Rolle + Foto des Autors (aus `ueber-uns/index.html`)
- Slug (aus dem Titel)
- Teaser (aus den ersten Absätzen)
- Bild-Platzierung (nach Kontext)
- Lesezeit (aus Wortanzahl)

**Was Claude liefert:** Den Post als Entwurf — direkt per Link aufrufbar,
aber noch nicht in der Blog-Übersicht und für Suchmaschinen unsichtbar (noindex).

---

## Schritt 2 – Entwurf veröffentlichen

Wenn der Post geprüft und freigegeben ist, diesen Prompt schicken:

```
Lies BLOG_POST_ERSTELLEN.md und veröffentliche den Entwurf blog/[slug]/index.html.
```

---

## Technischer Kontext (für Claude, nicht für das Team)

### Dateistruktur
- Repo: `oli-handsofhope/handsofhope`, aktueller Branch (per `git branch` ermitteln)
- Neuer Post: `blog/[slug]/index.html`
- Vorlage mit allen Komponenten: `blog/demo-alle-komponenten/index.html`
- Pfade aus Post-Unterordner: `../../styles/`, `../../scripts/`, `../../blog/posts.js`
- Alle `<script>`-Tags brauchen `defer`

### Autor
- Rolle nachschlagen: `ueber-uns/index.html` → `.role` neben dem Namen
- Foto: `ueber-uns/team/[vorname-nachname].jpg`
- onerror-Fallback immer setzen: `onerror="this.onerror=null;this.src='UNSPLASH_URL'"`
- Passende Unsplash-Fallback-URL aus dem Kontext wählen (Person, neutral)

### Bilder
- Hochgeladene JPG/PNG → **vor dem Einbinden in WebP konvertieren**
- Skalieren auf max. 2400px (längste Seite): `python3 -c "from PIL import Image; ..."`
- Dann: `cwebp -q 82 bild.jpg -o bild.webp`
- Logos/UI-Grafiken: Qualität 90 statt 82
- Ablage: im Post-Ordner `blog/[slug]/`
- Originaldateien (jpg/png) danach löschen

### Medien einbetten
- **YouTube**: `youtube.com/watch?v=VIDEO_ID` → `<iframe src="youtube.com/embed/VIDEO_ID">`
- **Audio**: HTML5 `<audio controls>` mit direkter MP3-URL, oder `<iframe>` für Spotify/SoundCloud
- **Slider**: `<div class="photo-slider">` → `scripts/slider.js` einbinden; Modifier `photo-slider--portrait` für Hochkant-Galerien; Slides sind `<figure class="slide">` (wichtig: figure, nicht div)

### posts.js – Felder für neuen Eintrag (ganz oben einfügen, neueste zuerst)
```js
{
  slug:       'post-slug',
  title:      'Vollständiger Titel',
  excerpt:    'Teaser-Text, 2–3 Sätze, ca. 300 Zeichen.',
  category:   'Rehabilitation',          // Rehabilitation | Straßencafé | Prävention | Dienstleistungen | Allgemein
  badgeClass: 'badge-rehab',             // badge-rehab | badge-cafe | badge-prev | badge-dienst | badge-allg
  date:       '12. Juni 2025',
  author:     'Vorname Nachname',
  authorRole: 'Leitung Rehabilitation',
  readMin:    5,
  thumb:      'https://...',             // erstes Bild des Posts (WebP-URL oder Unsplash)
  thumbAlt:   'Kurze Bildbeschreibung',
}
```

### Entwurf vs. Veröffentlichen
- **Entwurf:** `<meta name="robots" content="noindex, nofollow">` + gelben Entwurfs-Banner einfügen, **kein** Eintrag in `blog/posts.js`
- **Veröffentlichen:** noindex-Tag + Banner entfernen, Eintrag oben in `blog/posts.js` hinzufügen, commiten und pushen

---

## Verfügbare Komponenten

Demo mit allen Bausteinen live sehen: `blog/demo-alle-komponenten/` (Branch aufrufen)

| Komponente          | Wie angeben                                          |
|---------------------|------------------------------------------------------|
| Fließtext           | Einfach schreiben                                    |
| Überschrift H2 / H3 | `#` bzw. `##` am Zeilenanfang                        |
| Liste               | `-` (Aufzählung) oder `1.` (nummeriert)              |
| Pull Quote / Zitat  | `> "Zitat" – Quelle`                                |
| Hinweis-Box         | `[HINWEIS: Text der Box]`                            |
| Bild + Unterschrift | Datei hochladen, Unterschrift in `[Klammern]` danach |
| Foto-Slider         | Mehrere Bilder hochladen + `[SLIDER]` im Text        |
| YouTube-Video       | Watch-URL einfach in den Text einfügen               |
| Audio               | MP3-URL oder Podcast-Link einfügen                   |
| Externer Link       | `[LINK: Bezeichnung → https://...]`                  |
