# Blog-Post erstellen – Prompts für Claude

Zwei Schritte: **① Entwurf** (direkt aufrufbar, noch unsichtbar) → **② Veröffentlichen**

---

## Schritt 1 – Entwurf erstellen

Nur Autor, Text und Medien angeben – den Rest erschließt Claude selbst.
Bilder einfach als Datei-Anhänge mitschicken.

```
Erstelle einen neuen Blog-Post-Entwurf für hands-of-hope.de.

Autor: [Vorname Nachname]

Text:
[Artikel-Text hier einfügen.
Absätze durch Leerzeile trennen.
Überschriften mit # (H2) oder ## (H3) markieren.
Zitate / Pullquotes mit > einleiten.
Bildunterschriften direkt nach dem Bild in [Klammern] angeben.]

Medien: [Dateien hochladen und/oder Links einfügen]

---
Technischer Kontext (nicht ändern):
Repo oli-handsofhope/handsofhope, aktueller Branch.
Vorlage: blog/mikes-geschichte/index.html
Teamdaten (Rollen + Fotos): in ueber-uns/index.html nachschlagen,
Fotos unter ueber-uns/team/[vorname-nachname].jpg
Kategorie aus Textinhalt erschließen.
Entwurf: noindex gesetzt, kein Eintrag in blog/posts.js, kein Link von der Übersicht.
Alle verfügbaren Komponenten: blog/demo-alle-komponenten/index.html
```

**Claude erschließt selbst:**
- Kategorie (aus dem Textinhalt)
- Rolle + Foto des Autors (aus `ueber-uns/index.html`)
- Slug (aus dem Titel)
- Teaser (aus den ersten Absätzen)
- Bild-Platzierung (nach Kontext)
- Lesezeit (aus Wortanzahl)

---

## Schritt 2 – Entwurf veröffentlichen

Wenn der Post geprüft und freigegeben ist:

```
Veröffentliche den Blog-Post-Entwurf unter blog/[slug]/index.html:
Noindex und Entwurfs-Banner entfernen, Eintrag oben in blog/posts.js
hinzufügen, commiten und pushen.
```

---

## Verfügbare Komponenten

Demo mit allen Bausteinen: `blog/demo-alle-komponenten/` (Branch aufrufen)

| Komponente          | Wie angeben                                        |
|---------------------|----------------------------------------------------|
| Fließtext           | Einfach schreiben                                  |
| Überschrift H2 / H3 | `#` bzw. `##` am Zeilenanfang                      |
| Liste               | `-` (Aufzählung) oder `1.` (nummeriert)            |
| Pull Quote / Zitat  | `> "Zitat" – Quelle`                              |
| Hinweis-Box         | `[HINWEIS: Text der Box]`                          |
| Bild + Unterschrift | Datei hochladen, Unterschrift in `[Klammern]` danach |
| Foto-Slider         | Mehrere Bilder hochladen + `[SLIDER]` im Text      |
| YouTube-Video       | Watch-URL einfach in den Text einfügen             |
| Audio               | MP3-URL oder Podcast-Link einfügen                 |
| Externer Link       | `[LINK: Bezeichnung → https://...]`                |
