# Blog-Post erstellen – Prompts für Claude

Zwei Schritte: **① Entwurf** (direkt aufrufbar, unsichtbar) → **② Veröffentlichen**

---

## Schritt 1 – Entwurf erstellen

Kopiere diesen Prompt und fülle die Lücken aus.
Lade Bilder als Datei-Anhänge mit hoch.

```
Erstelle einen neuen Blog-Post-Entwurf für hands-of-hope.de.

Autor: [Vorname Nachname, Funktion – z. B. "Nils Erner, Leitung Straßencafé"]
Kategorie: [Rehabilitation / Straßencafé / Prävention / Dienstleistungen / Allgemein]

Text:
[Artikel-Text hier einfügen. Absätze durch Leerzeile trennen.
Überschriften mit # (H2) oder ## (H3) markieren.
Zitate / Pullquotes mit > einleiten.
Bildunterschriften direkt nach einem Bild in [Klammern] angeben.]

Medien:
[Bilder als Datei hochladen – oder Unsplash-Links angeben.
YouTube-Links: einfach die Watch-URL einfügen.
Audio-Links: direkte MP3-URL oder Podcast-Plattform-Link.]

---

Technischer Kontext (nicht ändern):
- Repo: oli-handsofhope/handsofhope, aktueller Branch
- Vorlage: blog/mikes-geschichte/index.html
- Post-Ordner: blog/[slug-aus-titel]/index.html
- Autor-Fotos: ueber-uns/team/[vorname-nachname].jpg
- Entwurf = noindex-Tag gesetzt, KEIN Eintrag in blog/posts.js, KEIN Link von Übersicht
- Slider-Komponente: scripts/slider.js (Klasse photo-slider--portrait für Hochkant-Galerien)
- Alle Komponenten zeigt: blog/demo-alle-komponenten/index.html
```

**Claude liefert:**
- Slug aus dem Titel
- Teaser-Text aus den ersten Absätzen
- Bild-Platzierung nach Kontext
- Entwurfs-Banner oben sichtbar
- Direktlink zum Aufrufen und Prüfen

---

## Schritt 2 – Entwurf veröffentlichen

Wenn der Post geprüft und freigegeben ist:

```
Veröffentliche den Blog-Post-Entwurf unter blog/[slug]/index.html:

1. noindex-Meta-Tag entfernen
2. Entwurfs-Banner entfernen
3. Eintrag oben in blog/posts.js hinzufügen
   (Slug, Titel, Teaser, Kategorie, Datum, Autor, Lesezeit, Thumbnail-URL)
4. Commiten und pushen
```

---

## Komponenten-Übersicht (Demo)

Alle verfügbaren Bausteine live sehen:
`blog/demo-alle-komponenten/index.html` (lokal / auf Branch aufrufen)

| Komponente        | Verwendung                                      |
|-------------------|-------------------------------------------------|
| Fließtext         | Standard – immer vorhanden                      |
| H2 / H3           | `#` bzw. `##` im Text                           |
| Liste             | `-` (ungeordnet) oder `1.` (nummeriert)         |
| Pull Quote        | `> "Zitat" – Quelle`                            |
| Hinweis-Box       | z. B. „Name geändert", Datenschutzhinweis       |
| Bild + Unterschrift | Datei hochladen + Bildunterschrift in `[...]` |
| Foto-Slider       | Mehrere Bilder hochladen, Slider gewünscht      |
| YouTube-Video     | Watch-URL angeben                               |
| Audio             | MP3-URL oder Podcast-Link angeben               |
| Externe Link-Karte | URL + Bezeichnung angeben                      |
