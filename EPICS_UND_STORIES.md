# Hands of Hope – Epics & User Stories

Projektstand: Statischer HTML-Prototyp als inhaltliche Referenz.
Ziel-Stack (Protokoll 19.06.26): **Next.js / React + Sanity Headless CMS**, Hosting auf Vercel.
Alle Stories starten bei ⬜.

---

## Rollen

| Rolle | Beschreibung |
|-------|-------------|
| **Besucher** | Allgemeiner Websitebesucher ohne spezifischen Kontext |
| **Betroffener** | Person mit Suchterkrankung, sucht Hilfe oder Information |
| **Angehöriger** | Familienmitglied oder nahestehende Person eines Betroffenen |
| **Fachkraft** | Sozialarbeiter, Lehrer, Jugendamtsmitarbeiter o. Ä. |
| **Ehrenamtlicher** | Interessent oder aktiver Freiwilliger |
| **Auftraggeber** | Unternehmen oder Privatperson, die Dienstleistungen anfragen |
| **Spender** | Person oder Organisation, die finanziell unterstützen möchte |
| **Bewerber** | Kandidat für Stelle, Praktikum, FSJ oder BFD |
| **Redakteur** | Teammitglied, das Inhalte im CMS pflegt |
| **Entwickler** | Technisch Verantwortlicher |

---

## EPIC 0 – Tech-Stack & Projektsetup
*Protokoll 19.06.26 — Wechsel vom Prototyp zum Produktions-Stack.*

| # | User Story | Status |
|---|------------|--------|
| 0.1 | Als Entwickler richte ich Next.js/React als Basis ein, sodass wiederverwendbare Komponenten und serverseitiges Rendering möglich sind. | ⬜ 🗺 |
| 0.2 | Als Redakteur kann ich Sanity als Headless CMS nutzen, um Inhalte ohne Entwicklerkenntnisse zu pflegen. | ⬜ 🗺 |
| 0.3 | Als Team betreiben wir die Website auf Vercel mit automatischen Preview-Deployments pro Branch (~20 €/Monat Pro), damit Änderungen vor dem Veröffentlichen geprüft werden können. | ⬜ 🗺 |
| 0.4 | Als Entwickler lege ich React-Komponenten und Claude-Regelwerk (Markdown) an, damit KI-generierter Code im Design-System bleibt. | ⬜ 🗺 |
| 0.5 | Als Team haben wir GitHub und VS Code auf allen Entwickler-Rechnern eingerichtet, damit alle an derselben Codebasis arbeiten können. | ⬜ 🗺 Nächster Schritt lt. Protokoll |
| 0.6 | Als Team klären wir die Markenbezeichnungen verbindlich, bevor der Aufbau beginnt, damit keine Texte und Komponenten später umbenannt werden müssen. | ⬜ 🗺 Blockiert, offen lt. Protokoll |
| 0.7 | Als Team warten wir auf Heikos Design-Komponenten als Grundlage für das Seiten-Layout-Meeting. | ⬜ 🗺 Blockiert auf Heiko |

---

## EPIC 1 – Globale Infrastruktur & Design-System

| # | User Story | Status |
|---|------------|--------|
| 1.1 | Als Besucher finde ich auf jeder Seite eine konsistente Navigation mit Hide-on-Scroll und aktivem Bereichsindikator, damit ich jederzeit weiß, wo ich mich befinde. | ⬜ |
| 1.2 | Als Besucher finde ich im Footer alle wichtigen Links, Kontaktdaten und Social-Media-Verknüpfungen. | ⬜ |
| 1.3 | Als Besucher kann ich Cookie-Einwilligung erteilen oder verweigern (DSGVO-konform), damit keine Tracking-Daten ohne meine Zustimmung erhoben werden. | ⬜ |
| 1.4 | Als Besucher nutze ich die Website uneingeschränkt auf Smartphone, Tablet und Desktop. | ⬜ |
| 1.5 | Als Besucher mit Einschränkungen finde ich ausreichende Kontraste, semantisches HTML und Tastaturnavigation. | ⬜ |
| 1.6 | Als Besucher lädt jede Seite schnell — Core Web Vitals im grünen Bereich. | ⬜ |
| 1.7 | Als Besucher sehe ich ein Favicon und korrekte Open-Graph-Tags, sodass geteilte Links in sozialen Medien und Messengern ansprechend aussehen. | ⬜ |
| 1.8 | Als Entwickler pflege ich Navigation und Footer zentral an einer Stelle, damit Änderungen nicht in jeder Seite einzeln nachgezogen werden müssen. | ⬜ |
| 1.9 | Als Team werden wir in Suchmaschinen gefunden — robots.txt, sitemap.xml und Meta-Descriptions sind vollständig. | ⬜ |

---

## EPIC 2 – Startseite

| # | User Story | Status |
|---|------------|--------|
| 2.1 | Als Erstbesucher verstehe ich sofort, wer Hands of Hope ist, was die Organisation tut und welche Bereiche es gibt — inklusive Kennzahlen und Einstieg in alle Arbeitsbereiche. | ⬜ |
| 2.2 | Als Besucher sehe ich aktuelle Blog-Posts als Teaser, damit ich einen Eindruck der laufenden Arbeit bekomme und tiefer einsteigen kann. | ⬜ |
| 2.3 | Als Besucher bekomme ich einen Videoeindruck der Organisation (Imagefilm). | ⬜ |
| 2.4 | Als Spender sehe ich einen klaren Handlungsaufruf zur Spende, damit der Weg zur Unterstützung ohne Umwege möglich ist. | ⬜ |
| 2.5 | Als interessierter Besucher kann ich mich für den Newsletter anmelden. | ⬜ |

---

## EPIC 3 – Rehabilitation

| # | User Story | Status |
|---|------------|--------|
| 3.1 | Als Betroffener oder Angehöriger verstehe ich das Gesamtangebot: Konzept, Tagesstruktur, Aufnahmeprozess und Nachsorgehaus — auf einer Seite, damit ich keine mehrfachen Anlaufstellen suchen muss. | ⬜ |
| 3.2 | Als Angehöriger erfahre ich, wie ich jemanden bei der Aufnahme konkret unterstützen kann, damit ich in einer Krisensituation handlungsfähig bin. | ⬜ |
| 3.3 | Als Betroffener kann ich Bewerbungsunterlagen und das Wiedereingliederungskonzept herunterladen, damit ich mich vorbereiten kann, bevor ich Kontakt aufnehme. | ⬜ |
| 3.4 | Als Betroffener oder Angehöriger nehme ich direkt Kontakt auf oder stelle eine Aufnahmeanfrage. | ⬜ |
| 3.5 | Als Besucher lese ich Erfahrungsberichte ehemaliger Klienten, damit ich ein realistisches Bild der Rehabilitation bekomme. | ⬜ |

---

## EPIC 4 – Straßencafé

| # | User Story | Status |
|---|------------|--------|
| 4.1 | Als Besucher verstehe ich das Angebot vollständig: was das Straßencafé ist, wann und wo es stattfindet, und welche weiteren Angebote (Gottesdienst) es gibt. | ⬜ |
| 4.2 | Als Ehrenamtlicher melde ich mich über ein Formular an, damit das Team die Kapazitäten planen kann. | ⬜ |
| 4.3 | Als Spender erfahre ich, wie meine Spende das Straßencafé direkt unterstützt, damit ich den konkreten Verwendungszweck kenne. | ⬜ |

---

## EPIC 5 – Prävention

| # | User Story | Status |
|---|------------|--------|
| 5.1 | Als Fachkraft, Elternteil oder Jugendlicher finde ich zielgruppengerecht aufbereitete Informationen zum Präventionsangebot — inklusive Reichweite und Referenzen, damit ich einschätzen kann, ob das Angebot zu meiner Schule oder Einrichtung passt. | ⬜ |
| 5.2 | Als Schule oder Fachkraft stelle ich eine Projektanfrage. | ⬜ |

---

## EPIC 6 – Dienstleistungen

| # | User Story | Status |
|---|------------|--------|
| 6.1 | Als Auftraggeber verstehe ich das Leistungsangebot, den sozialen Mehrwert und sehe Referenzen sowie Bildgalerien, damit ich die Qualität der Arbeit einschätzen kann, bevor ich anfrage. | ⬜ |
| 6.2 | Als Auftraggeber stelle ich eine Anfrage oder fordere einen Kostenvoranschlag an. | ⬜ |

---

## EPIC 7 – Jugendhilfe

| # | User Story | Status |
|---|------------|--------|
| 7.1 | Als Fachkraft oder betroffene Familie verstehe ich Konzept und Aufnahme des Jugendhilfe-Angebots. | ⬜ |
| 7.2 | Als Besucher verfolge ich den Baufortschritt und erfahre, wie ich das Projekt fördern kann, damit Unterstützer die Entwicklung miterleben und sich einbringen können. | ⬜ |
| 7.3 | Als Fachkraft stelle ich eine Belegungsanfrage. | ⬜ |
| 7.4 | Als Interessierter trage ich mich auf eine Benachrichtigungsliste für die Fertigstellung ein, damit ich informiert werde, sobald Plätze verfügbar sind. | ⬜ |

---

## EPIC 8 – Über uns

| # | User Story | Status |
|---|------------|--------|
| 8.1 | Als Besucher lerne ich Geschichte, Werte und christliche Grundlage der Organisation kennen und sehe das Team, damit ich einschätzen kann, wer hinter der Arbeit steht. | ⬜ |
| 8.2 | Als Bewerber finde ich offene Stellen und erfahre, was Hands of Hope als Arbeitgeber auszeichnet. | ⬜ |
| 8.3 | Als Bewerber informiere ich mich über Praktikum, FSJ und BFD und bewerbe mich direkt. | ⬜ |
| 8.4 | Als Spender spende ich unkompliziert und erfahre, wofür mein Geld konkret eingesetzt wird. | ⬜ |
| 8.5 | Als Besucher stelle ich per Kontaktformular eine allgemeine Anfrage. | ⬜ |
| 8.6 | Als Kooperationspartner erfahre ich, wie eine Zusammenarbeit aussehen kann, damit ich einschätzen kann, ob ein gemeinsames Projekt sinnvoll ist. | ⬜ |

---

## EPIC 9 – Blog

| # | User Story | Status |
|---|------------|--------|
| 9.1 | Als Besucher entdecke ich Posts, lese sie und sehe Lesezeit und ähnliche Beiträge, damit ich tiefer in ein Thema einsteigen kann. | ⬜ |
| 9.2 | Als Besucher filtere ich Posts nach Kategorie, damit ich nur für mich relevante Inhalte sehe. | ⬜ |
| 9.3 | Als Leser teile ich einen Post in sozialen Medien. | ⬜ |
| 9.4 | Als Redakteur erstelle ich Posts im Entwurfsmodus, prüfe sie per direktem Link und veröffentliche sie ohne Entwicklerkenntnisse, damit neue Inhalte schnell und unabhängig erscheinen können. | ⬜ |

---

## EPIC 10 – Formulare & Backend

| # | User Story | Status |
|---|------------|--------|
| 10.1 | Als Besucher erhalte ich nach dem Absenden eines Formulars eine Bestätigung, und das Team erhält die Einsendung per E-Mail, damit keine Anfrage verloren geht. | ⬜ |
| 10.2 | Als Team schützen alle Formulare mit Spam-Schutz (Honeypot oder CAPTCHA) und enthalten DSGVO-Hinweistext, damit keine unerwünschten Einsendungen die Arbeitsprozesse belasten. | ⬜ |
| 10.3 | Als Ehrenamtlicher melde ich mich über ein dediziertes Formular an, damit das Team alle relevanten Angaben strukturiert erhält. | ⬜ |
| 10.4 | Als Auftraggeber fordere ich über ein Formular ein Angebot an. | ⬜ |

---

## EPIC 11 – Spendenintegration

| # | User Story | Status |
|---|------------|--------|
| 11.1 | Als Spender spende ich per PayPal oder Banküberweisung. | ⬜ |
| 11.2 | Als Spender richte ich eine Dauerspende ein, damit ich die Organisation langfristig und planbar unterstützen kann. | ⬜ |
| 11.3 | Als Spender sehe ich ein Spendenbarometer oder konkreten Verwendungsnachweis, damit meine Spende greifbar und nachvollziehbar wird. | ⬜ |
| 11.4 | Als Unternehmen erfahre ich Corporate-Giving-Optionen. | ⬜ |

---

## EPIC 12 – Rechtliches & Compliance

| # | User Story | Status |
|---|------------|--------|
| 12.1 | Als Besucher rufe ich ein vollständiges Impressum und eine Datenschutzerklärung ab. | ⬜ |
| 12.2 | Als Spender fordere ich eine Spendenquittung an, damit ich die Spende steuerlich geltend machen kann. | ⬜ |
| 12.3 | Als Team haben wir AV-Verträge mit allen Drittanbietern und nutzen EU-konformes Hosting, damit personenbezogene Daten DSGVO-konform verarbeitet werden. | ⬜ 🗺 Bob Held |

---

## EPIC 13 – SEO, Performance & Analytics

| # | User Story | Status |
|---|------------|--------|
| 13.1 | Als Team werden wir regional gefunden — strukturierte Daten (Schema.org), vollständige Meta-Tags und sitemap.xml, damit Suchmaschinen die Angebote den richtigen Zielgruppen zeigen. | ⬜ |
| 13.2 | Als Team messen wir Traffic datenschutzkonform (DSGVO-konforme Analytics-Alternative), damit wir Nutzerverhalten verstehen, ohne Einwilligungspflicht für jeden Besucher. | ⬜ |
| 13.3 | Als Team halten wir Core Web Vitals grün und überwachen Performance aktiv. | ⬜ |

---

## EPIC 14 – Deployment & Betrieb

| # | User Story | Status |
|---|------------|--------|
| 14.1 | Als Team ist die Website unter handsofhope.de erreichbar mit automatischem Deployment bei jedem Push auf main, damit neue Inhalte ohne manuellen Eingriff live gehen. | ⬜ |
| 14.2 | Als Team haben wir einen Branch-Review-Prozess (PR → Review → Merge) und CDN-Auslieferung für Assets, damit Änderungen geprüft werden, bevor sie live sind. | ⬜ |
| 14.3 | Als Team haben wir eine definierte Wartungsstrategie für Updates, Monitoring und Backups, damit Ausfälle frühzeitig erkannt und behoben werden können. | ⬜ 🗺 |

---

## EPIC 15 – Headless CMS (Sanity)
*Protokoll 19.06.26 — Inhaltspflege ohne Entwickler.*

| # | User Story | Status |
|---|------------|--------|
| 15.1 | Als Team klären wir, welche Inhaltsbereiche CMS-gesteuert sind und welche im Code bleiben, damit das Schema nicht unnötig komplex wird. | ⬜ 🗺 Offen lt. Protokoll |
| 15.2 | Als Entwickler definiere ich das Sanity-Schema mit erlaubten Inhaltsblöcken, damit kein freies HTML möglich ist und das Design konsistent bleibt. | ⬜ 🗺 |
| 15.3 | Als Redakteur pflege ich **Blog-Posts** (Text, Bilder, Autor, Kategorie, Tags) im Sanity Studio. | ⬜ |
| 15.4 | Als Redakteur pflege ich **Teammitglieder** (Foto, Name, Rolle, Kurztext) im Sanity Studio, damit Personaländerungen ohne Entwickler aktualisiert werden können. | ⬜ |
| 15.5 | Als Redakteur pflege ich **Stellenangebote** (Titel, Beschreibung, Bereich, Eintrittsdatum, aktiv/inaktiv) im Sanity Studio, damit abgelaufene Stellen nicht manuell gelöscht, sondern nur deaktiviert werden müssen. | ⬜ |
| 15.6 | Als Redakteur pflege ich **Veranstaltungen & Aktualitäten** (Datum, Ort, Kategorie, kurzfristige Hinweise) im Sanity Studio. | ⬜ |
| 15.7 | Als Redakteur pflege ich **Bild-Galerien & Referenzprojekte** (z. B. für Dienstleistungen, Prävention) im Sanity Studio, damit neue Projekte ohne Code-Änderung gezeigt werden können. | ⬜ |
| 15.8 | Als Redakteur pflege ich **PDF-Downloads** (Bewerbungsunterlagen, Konzeptdokumente) im Sanity Studio, damit aktualisierte Dokumente sofort verfügbar sind. | ⬜ |
| 15.9 | Als Redakteur passe ich **Kennzahlen der Startseite** (z. B. „über 1.000 Klienten") im Sanity Studio an, damit veraltete Zahlen ohne Entwickler korrigiert werden können. | ⬜ |
| 15.10 | Als Redakteur aktualisiere ich **Kontaktdaten & Öffnungszeiten** (Straßencafé, Standorte) im Sanity Studio. | ⬜ |

---

## EPIC 16 – Sicherheit & Authentifizierung
*Protokoll 19.06.26.*

| # | User Story | Status |
|---|------------|--------|
| 16.1 | Als Team haben wir 2-Faktor-Authentifizierung für alle Admin-Zugänge (CMS, Hosting, GitHub), damit kompromittierte Passwörter allein keinen Zugriff ermöglichen. | ⬜ 🗺 |
| 16.2 | Als Entwickler stelle ich sicher, dass keine API-Keys oder Secrets clientseitig ausgeliefert werden, damit sie nicht aus dem Browser-Quellcode ausgelesen werden können. | ⬜ 🗺 |
| 16.3 | Als Team entscheiden wir uns für eine Auth-Plattform (Supabase vs. Microsoft Entra) und setzen sie ein. | ⬜ 🗺 Entscheidung offen |

---

## EPIC 17 – Mehrsprachigkeit (i18n)
*Architektonische Grundsatzentscheidung — beeinflusst URL-Struktur, Sanity-Schema und Routing.*

| # | User Story / Task | Status |
|---|------------|--------|
| 17.1 | 🔍 Als Team entscheiden wir, ob Mehrsprachigkeit (z. B. Russisch, Arabisch, Englisch) benötigt wird und für welche Bereiche, damit die Architektur von Anfang an darauf ausgelegt werden kann. | ⬜ 🗺 Entscheidung vor Architekturstart |
| 17.2 | Als Entwickler richte ich Next.js i18n-Routing ein (`/de/`, `/en/`, …), sodass Sprachen sauber getrennt sind und SEO je Sprache funktioniert. | ⬜ |
| 17.3 | Als Redakteur pflege ich übersetzte Inhalte im Sanity Studio je Sprache getrennt, damit kein Übersetzungs-Chaos in einem einzigen Dokument entsteht. | ⬜ |
| 17.4 | Als Besucher wechsle ich die Sprache über einen Sprachumschalter in der Navigation. | ⬜ |

---

## EPIC 18 – E-Mail & Newsletter (Brevo)

| # | User Story / Task | Status |
|---|------------|--------|
| 18.1 | 🔍 Als Entwickler richte ich Brevo als E-Mail-Provider ein (transaktionale Mails + Newsletter) und verbinde es mit der Website, damit alle ausgehenden Mails über einen einzigen Kanal laufen. | ⬜ |
| 18.2 | Als Besucher melde ich mich für den Newsletter an und erhalte eine Double-Opt-In-Bestätigungsmail, damit die Einwilligung DSGVO-konform dokumentiert ist. | ⬜ |
| 18.3 | Als Besucher erhalte ich nach jedem Formular-Absenden eine automatische Bestätigungsmail, damit ich weiß, dass meine Anfrage angekommen ist. | ⬜ |
| 18.4 | Als Redakteur verwalte ich Newsletter-Kampagnen direkt in Brevo, ohne Entwicklerunterstützung. | ⬜ |
| 18.5 | Als Team haben wir eine DSGVO-konforme Einwilligungshistorie für alle E-Mail-Abonnenten, damit wir bei Anfragen nachweisen können, wann und wie die Einwilligung erteilt wurde. | ⬜ |

---

## EPIC 19 – Veranstaltungen & Aktualitäten

| # | User Story / Task | Status |
|---|------------|--------|
| 19.1 | 🔍 Als Team entscheiden wir, welche Eventtypen es gibt (Straßencafé-Ausfall, Fundraising, Gottesdienst, Schulprojekte) und wie sie sich auf der Website darstellen. | ⬜ 🗺 |
| 19.2 | Als Redakteur lege ich Veranstaltungen im CMS an (Titel, Datum, Ort, Kategorie, Bild), damit die Übersicht immer aktuell bleibt ohne Entwicklereingriff. | ⬜ |
| 19.3 | Als Besucher sehe ich bevorstehende Veranstaltungen auf einer Übersichtsseite und als Widget auf der Startseite. | ⬜ |
| 19.4 | Als Redakteur veröffentliche ich kurzfristige Hinweise (z. B. „Straßencafé fällt heute aus") als Banner, damit Besucher rechtzeitig informiert werden, bevor sie anreisen. | ⬜ |

---

## EPIC 20 – Datenmigration & URL-Strategie
*Umzug vom statischen Prototyp auf den Next.js/Vercel-Stack ohne Ranking- und Bookmark-Verlust.*

| # | User Story / Task | Status |
|---|------------|--------|
| 20.1 | 🔍 Als Entwickler lege ich eine vollständige URL-Map an (alt → neu) und identifiziere alle Weiterleitungen, die benötigt werden, damit kein aufgebautes Suchmaschinen-Ranking verloren geht. | ⬜ |
| 20.2 | Als Entwickler richte ich 301-Weiterleitungen in `next.config.js` ein, sodass alle alten URLs korrekt weiterleiten. | ⬜ |
| 20.3 | Als Redakteur migriere ich vorhandene Inhalte (Blog-Posts, Teamseite, Stellenangebote) in das Sanity CMS, damit alle Inhalte ab Go-Live aus dem CMS ausgeliefert werden. | ⬜ |
| 20.4 | Als Team prüfen wir nach dem Go-Live, dass keine toten Links oder fehlenden Weiterleitungen in der Search Console auftauchen. | ⬜ |

---

## EPIC 21 – Testing & Qualitätssicherung

| # | User Story / Task | Status |
|---|------------|--------|
| 21.1 | 🔍 Als Team legen wir die Testing-Strategie fest (E2E mit Playwright, visuelle Regression, manuelle Checklisten), damit der Testaufwand dem Projektumfang entspricht. | ⬜ 🗺 |
| 21.2 | Als Entwickler habe ich E2E-Tests für kritische Pfade: Kontaktformular, Newsletter-Anmeldung, Spendenflow, damit Regressionsfehler bei Deployments sofort auffallen. | ⬜ |
| 21.3 | Als Entwickler stelle ich sicher, dass jedes Deployment automatisch getestet wird (CI-Pipeline auf GitHub Actions), damit fehlerhafte Versionen nicht live gehen können. | ⬜ |
| 21.4 | Als Team haben wir eine manuelle Abnahme-Checkliste für neue Seiten (Design, Mobile, Links, Formulare). | ⬜ |
| 21.5 | Als Besucher lande ich bei unbekannten URLs auf einer gestalteten 404-Seite mit Navigationshilfe, damit ich nicht in einer Sackgasse lande. | ⬜ |

---

## EPIC 22 – Barrierefreiheit (WCAG 2.1 AA / EAA)
*Ab 2025 gilt der European Accessibility Act auch für viele gemeinnützige Organisationen.*

| # | User Story / Task | Status |
|---|------------|--------|
| 22.1 | 🔍 Als Team klären wir, ob der EAA für Hands of Hope verpflichtend gilt, und legen den Ziel-Konformitätslevel fest, damit der Entwicklungsaufwand realistisch eingeplant werden kann. | ⬜ 🗺 |
| 22.2 | Als Besucher mit Sehbehinderung kann ich die Website vollständig mit einem Screenreader (NVDA/VoiceOver) bedienen. | ⬜ |
| 22.3 | Als Besucher mit motorischer Einschränkung navigiere ich die Website ausschließlich per Tastatur. | ⬜ |
| 22.4 | Als Besucher mit Sehschwäche finde ich überall ausreichende Farbkontraste (Kontrastverhältnis ≥ 4,5:1). | ⬜ |
| 22.5 | Als Entwickler führe ich einen automatisierten Accessibility-Scan (axe-core oder Lighthouse) in der CI-Pipeline aus, damit Barrierefreiheitsfehler nicht unbemerkt eingebaut werden. | ⬜ |

---

## EPIC 23 – Projektübergabe & Betriebsdokumentation

| # | User Story / Task | Status |
|---|------------|--------|
| 23.1 | Als Redakteur habe ich eine kurze Schulungseinheit (Video oder Screencasts) für das Sanity Studio erhalten, damit das Team unabhängig von externen Entwicklern Inhalte pflegen kann. | ⬜ |
| 23.2 | Als Team haben wir eine zentrale Ablage aller Zugangsdaten und Credentials (Passwort-Manager), damit bei Personalwechsel kein Zugang verloren geht. | ⬜ |
| 23.3 | Als Entwickler-Nachfolger finde ich eine technische Dokumentation: Stack, Architekturentscheidungen, Deployment-Prozess, damit Einarbeitung ohne den ursprünglichen Entwickler möglich ist. | ⬜ |
| 23.4 | Als Team haben wir einen definierten Ansprechpartner und Prozess für laufende Wartung nach Go-Live, damit technische Probleme nicht unbearbeitet bleiben. | ⬜ |

---

## Priorisierung

### Jetzt — offene Entscheidungen (blockieren alles andere)
- 0.6 Markenbezeichnungen klären
- 0.7 Heikos Design-Komponenten → Seiten-Layout-Meeting
- 0.5 GitHub + VS Code bei allen Entwicklern einrichten
- 15.1 Klären welche Inhalte ins CMS kommen
- 16.3 Auth-Entscheidung: Supabase vs. Microsoft Entra
- 12.3 Vercel EU-Hosting / DSGVO-Prüfung (Bob Held)
- **17.1 Mehrsprachigkeit: Ja/Nein-Entscheidung (beeinflusst Architektur)**
- **22.1 EAA-Prüfung: Verpflichtung klären**

### Kurzfristig — Produktions-Stack & Pflichtinhalte
- 0.1–0.4 Next.js + Sanity aufsetzen
- 15.2 CMS-Schema und Redaktionsworkflow
- 20.1–20.2 URL-Map und 301-Weiterleitungen
- 18.1 Brevo einrichten
- 12.1 Impressum und Datenschutzerklärung
- 16.1–16.2 2FA und Secrets-Management
- 10.1–10.2 Formular-Backend + DSGVO-Hinweise
- 11.1 PayPal-Integration live schalten

### Mittelfristig — Inhalte und Features ausbauen
- Epics 3–8 Alle Bereichsseiten vollständig befüllen
- 9.1–9.4 Blog vollständig (inkl. Kategoriefilter, Social Share)
- 15.3–15.10 CMS-Inhaltstypen befüllen
- 19.1–19.4 Veranstaltungen & Aktualitäten
- 13.1–13.3 SEO, Analytics, Performance-Monitoring
- 14.1–14.3 Deployment, CDN, Wartungsstrategie
- 21.1–21.5 Testing & QA
- 22.2–22.5 Barrierefreiheit umsetzen

### Längerfristig — neue Features & Abschluss
- 11.2–11.4 Dauerspenden, Spendenbarometer, Corporate Giving
- 2.3 Imagefilm Startseite
- 20.3–20.4 Inhaltsmigration + Post-Launch-Prüfung
- 23.1–23.4 Übergabe & Dokumentation
