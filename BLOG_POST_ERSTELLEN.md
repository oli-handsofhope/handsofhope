# Blog-Post erstellen – Anleitung für das Team

Zwei Schritte: **① Entwurf** → **② Veröffentlichen**

---

## Schritt 1 – Entwurf erstellen

**Diesen Prompt an Claude schicken** (Bilder als Datei-Anhänge mitschicken):

```
Lies BLOG_POST_ERSTELLEN.md und erstelle danach einen neuen Blog-Post-Entwurf.

Autor: [Vorname Nachname]

Text:
[Artikeltext hier einfügen.
Absätze durch Leerzeile trennen.
Überschriften mit # (H2) oder ## (H3) markieren.
Zitate / Pullquotes mit > einleiten.
Bildunterschriften direkt nach dem Bild in [Klammern] angeben.]

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

- Repo: `oli-handsofhope/handsofhope`, aktueller Branch
- Blog-Posts: `blog/[slug]/index.html`
- Vorlage: `blog/mikes-geschichte/index.html`
- Teamdaten (Rollen): in `ueber-uns/index.html` nachschlagen
- Autor-Fotos: `ueber-uns/team/[vorname-nachname].jpg`
- Zentrale Registry: `blog/posts.js` — neuer Eintrag ganz oben (neueste zuerst)
- Slider-Komponente: `scripts/slider.js`, Modifier `photo-slider--portrait` für Hochkant-Galerien
- Alle Komponenten als Demo: `blog/demo-alle-komponenten/index.html`
- **Entwurf:** `<meta name="robots" content="noindex, nofollow">` + Entwurfs-Banner, KEIN Eintrag in `blog/posts.js`
- **Veröffentlichen:** noindex + Banner entfernen, Eintrag oben in `blog/posts.js` hinzufügen, commiten und pushen

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
