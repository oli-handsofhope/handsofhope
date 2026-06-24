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
| 0.3 | Als Team betreiben wir die Website auf Vercel mit automatischen Preview-Deployments pro Branch (~20 €/Monat Pro). | ⬜ 🗺 |
| 0.4 | Als Entwickler lege ich React-Komponenten und Claude-Regelwerk (Markdown) an, damit KI-generierter Code im Design-System bleibt. | ⬜ 🗺 |
| 0.5 | Als Team haben wir GitHub und VS Code auf allen Entwickler-Rechnern eingerichtet. | ⬜ 🗺 Nächster Schritt lt. Protokoll |
| 0.6 | Als Team klären wir die Markenbezeichnungen verbindlich, bevor der Aufbau beginnt. | ⬜ 🗺 Blockiert, offen lt. Protokoll |
| 0.7 | Als Team warten wir auf Heikos Design-Komponenten als Grundlage für das Seiten-Layout-Meeting. | ⬜ 🗺 Blockiert auf Heiko |

---

## EPIC 1 – Globale Infrastruktur & Design-System

| # | User Story | Status |
|---|------------|--------|
| 1.1 | Als Besucher finde ich auf jeder Seite eine konsistente Navigation mit Hide-on-Scroll und aktivem Bereichsindikator. | ⬜ |
| 1.2 | Als Besucher finde ich im Footer alle wichtigen Links, Kontaktdaten und Social-Media-Verknüpfungen. | ⬜ |
| 1.3 | Als Besucher kann ich Cookie-Einwilligung erteilen oder verweigern (DSGVO-konform). | ⬜ |
| 1.4 | Als Besucher nutze ich die Website uneingeschränkt auf Smartphone, Tablet und Desktop. | ⬜ |
| 1.5 | Als Besucher mit Einschränkungen finde ich ausreichende Kontraste, semantisches HTML und Tastaturnavigation. | ⬜ |
| 1.6 | Als Besucher lädt jede Seite schnell — Core Web Vitals im grünen Bereich. | ⬜ |
| 1.7 | Als Besucher sehe ich ein Favicon und korrekte Open-Graph-Tags, sodass geteilte Links ansprechend aussehen. | ⬜ |
| 1.8 | Als Entwickler pflege ich Navigation und Footer zentral an einer Stelle. | ⬜ |
| 1.9 | Als Team werden wir in Suchmaschinen gefunden — robots.txt, sitemap.xml und Meta-Descriptions sind vollständig. | ⬜ |

---

## EPIC 2 – Startseite

| # | User Story | Status |
|---|------------|--------|
| 2.1 | Als Erstbesucher verstehe ich sofort, wer Hands of Hope ist, was die Organisation tut und welche Bereiche es gibt — inklusive Kennzahlen und Einstieg in alle Arbeitsbereiche. | ⬜ |
| 2.2 | Als Besucher sehe ich aktuelle Blog-Posts als Teaser. | ⬜ |
| 2.3 | Als Besucher bekomme ich einen Videoeindruck der Organisation (Imagefilm). | ⬜ |
| 2.4 | Als Spender sehe ich einen klaren Handlungsaufruf zur Spende. | ⬜ |
| 2.5 | Als interessierter Besucher kann ich mich für den Newsletter anmelden. | ⬜ |

---

## EPIC 3 – Rehabilitation

| # | User Story | Status |
|---|------------|--------|
| 3.1 | Als Betroffener oder Angehöriger verstehe ich das Gesamtangebot: Konzept, Tagesstruktur, Aufnahmeprozess und Nachsorgehaus — auf einer Seite. | ⬜ |
| 3.2 | Als Angehöriger erfahre ich, wie ich jemanden bei der Aufnahme konkret unterstützen kann. | ⬜ |
| 3.3 | Als Betroffener kann ich Bewerbungsunterlagen und das Wiedereingliederungskonzept herunterladen. | ⬜ |
| 3.4 | Als Betroffener oder Angehöriger nehme ich direkt Kontakt auf oder stelle eine Aufnahmeanfrage. | ⬜ |
| 3.5 | Als Besucher lese ich Erfahrungsberichte ehemaliger Klienten. | ⬜ |

---

## EPIC 4 – Straßencafé

| # | User Story | Status |
|---|------------|--------|
| 4.1 | Als Besucher verstehe ich das Angebot vollständig: was das Straßencafé ist, wann und wo es stattfindet, und welche weiteren Angebote (Gottesdienst) es gibt. | ⬜ |
| 4.2 | Als Ehrenamtlicher melde ich mich über ein Formular an. | ⬜ |
| 4.3 | Als Spender erfahre ich, wie meine Spende das Straßencafé direkt unterstützt. | ⬜ |

---

## EPIC 5 – Prävention

| # | User Story | Status |
|---|------------|--------|
| 5.1 | Als Fachkraft, Elternteil oder Jugendlicher finde ich zielgruppengerecht aufbereitete Informationen zum Präventionsangebot — inklusive Reichweite und Referenzen. | ⬜ |
| 5.2 | Als Schule oder Fachkraft stelle ich eine Projektanfrage. | ⬜ |

---

## EPIC 6 – Dienstleistungen

| # | User Story | Status |
|---|------------|--------|
| 6.1 | Als Auftraggeber verstehe ich das Leistungsangebot, den sozialen Mehrwert und sehe Referenzen sowie Bildgalerien. | ⬜ |
| 6.2 | Als Auftraggeber stelle ich eine Anfrage oder fordere einen Kostenvoranschlag an. | ⬜ |

---

## EPIC 7 – Jugendhilfe

| # | User Story | Status |
|---|------------|--------|
| 7.1 | Als Fachkraft oder betroffene Familie verstehe ich Konzept und Aufnahme des Jugendhilfe-Angebots. | ⬜ |
| 7.2 | Als Besucher verfolge ich den Baufortschritt und erfahre, wie ich das Projekt fördern kann. | ⬜ |
| 7.3 | Als Fachkraft stelle ich eine Belegungsanfrage. | ⬜ |
| 7.4 | Als Interessierter trage ich mich auf eine Benachrichtigungsliste für die Fertigstellung ein. | ⬜ |

---

## EPIC 8 – Über uns

| # | User Story | Status |
|---|------------|--------|
| 8.1 | Als Besucher lerne ich Geschichte, Werte und christliche Grundlage der Organisation kennen und sehe das Team. | ⬜ |
| 8.2 | Als Bewerber finde ich offene Stellen und erfahre, was Hands of Hope als Arbeitgeber auszeichnet. | ⬜ |
| 8.3 | Als Bewerber informiere ich mich über Praktikum, FSJ und BFD und bewerbe mich direkt. | ⬜ |
| 8.4 | Als Spender spende ich unkompliziert und erfahre, wofür mein Geld konkret eingesetzt wird. | ⬜ |
| 8.5 | Als Besucher stelle ich per Kontaktformular eine allgemeine Anfrage. | ⬜ |
| 8.6 | Als Kooperationspartner erfahre ich, wie eine Zusammenarbeit aussehen kann. | ⬜ |

---

## EPIC 9 – Blog

| # | User Story | Status |
|---|------------|--------|
| 9.1 | Als Besucher entdecke ich Posts, lese sie und sehe Lesezeit und ähnliche Beiträge. | ⬜ |
| 9.2 | Als Besucher filtere ich Posts nach Kategorie. | ⬜ |
| 9.3 | Als Leser teile ich einen Post in sozialen Medien. | ⬜ |
| 9.4 | Als Redakteur erstelle ich Posts im Entwurfsmodus, prüfe sie per direktem Link und veröffentliche sie ohne Entwicklerkenntnisse. | ⬜ |

---

## EPIC 10 – Formulare & Backend

| # | User Story | Status |
|---|------------|--------|
| 10.1 | Als Besucher erhalte ich nach dem Absenden eines Formulars eine Bestätigung, und das Team erhält die Einsendung per E-Mail. | ⬜ |
| 10.2 | Als Team schützen alle Formulare mit Spam-Schutz (Honeypot oder CAPTCHA) und enthalten DSGVO-Hinweistext. | ⬜ |
| 10.3 | Als Ehrenamtlicher melde ich mich über ein dediziertes Formular an. | ⬜ |
| 10.4 | Als Auftraggeber fordere ich über ein Formular ein Angebot an. | ⬜ |

---

## EPIC 11 – Spendenintegration

| # | User Story | Status |
|---|------------|--------|
| 11.1 | Als Spender spende ich per PayPal oder Banküberweisung. | ⬜ |
| 11.2 | Als Spender richte ich eine Dauerspende ein. | ⬜ |
| 11.3 | Als Spender sehe ich ein Spendenbarometer oder konkreten Verwendungsnachweis. | ⬜ |
| 11.4 | Als Unternehmen erfahre ich Corporate-Giving-Optionen. | ⬜ |

---

## EPIC 12 – Rechtliches & Compliance

| # | User Story | Status |
|---|------------|--------|
| 12.1 | Als Besucher rufe ich ein vollständiges Impressum und eine Datenschutzerklärung ab. | ⬜ |
| 12.2 | Als Spender fordere ich eine Spendenquittung an. | ⬜ |
| 12.3 | Als Team haben wir AV-Verträge mit allen Drittanbietern und nutzen EU-konformes Hosting. | ⬜ 🗺 Bob Held |

---

## EPIC 13 – SEO, Performance & Analytics

| # | User Story | Status |
|---|------------|--------|
| 13.1 | Als Team werden wir regional gefunden — strukturierte Daten (Schema.org), vollständige Meta-Tags und sitemap.xml. | ⬜ |
| 13.2 | Als Team messen wir Traffic datenschutzkonform (DSGVO-konforme Analytics-Alternative). | ⬜ |
| 13.3 | Als Team halten wir Core Web Vitals grün und überwachen Performance aktiv. | ⬜ |

---

## EPIC 14 – Deployment & Betrieb

| # | User Story | Status |
|---|------------|--------|
| 14.1 | Als Team ist die Website unter handsofhope.de erreichbar mit automatischem Deployment bei jedem Push auf main. | ⬜ |
| 14.2 | Als Team haben wir einen Branch-Review-Prozess (PR → Review → Merge) und CDN-Auslieferung für Assets. | ⬜ |
| 14.3 | Als Team haben wir eine definierte Wartungsstrategie für Updates, Monitoring und Backups. | ⬜ 🗺 |

---

## EPIC 15 – Headless CMS (Sanity)
*Protokoll 19.06.26 — Inhaltspflege ohne Entwickler.*

| # | User Story | Status |
|---|------------|--------|
| 15.1 | Als Redakteur pflege ich Blog-Posts, Teamdaten, Stellenangebote und Galerien im Sanity Studio. | ⬜ 🗺 |
| 15.2 | Als Entwickler definiere ich das Sanity-Schema mit erlaubten Inhaltsblöcken, sodass kein freies HTML möglich ist. | ⬜ 🗺 |
| 15.3 | Als Team klären wir, welche Inhaltsbereiche CMS-gesteuert sind und welche im Code bleiben. | ⬜ 🗺 Offen lt. Protokoll |

---

## EPIC 16 – Sicherheit & Authentifizierung
*Protokoll 19.06.26.*

| # | User Story | Status |
|---|------------|--------|
| 16.1 | Als Team haben wir 2-Faktor-Authentifizierung für alle Admin-Zugänge (CMS, Hosting, GitHub). | ⬜ 🗺 |
| 16.2 | Als Entwickler stelle ich sicher, dass keine API-Keys oder Secrets clientseitig ausgeliefert werden. | ⬜ 🗺 |
| 16.3 | Als Team entscheiden wir uns für eine Auth-Plattform (Supabase vs. Microsoft Entra) und setzen sie ein. | ⬜ 🗺 Entscheidung offen |

---

## EPIC 17 – Mehrsprachigkeit (i18n)
*Architektonische Grundsatzentscheidung — beeinflusst URL-Struktur, Sanity-Schema und Routing.*

| # | User Story / Task | Status |
|---|------------|--------|
| 17.1 | 🔍 Als Team entscheiden wir, ob Mehrsprachigkeit (z. B. Russisch, Arabisch, Englisch) benötigt wird und für welche Bereiche. | ⬜ 🗺 Entscheidung vor Architekturstart |
| 17.2 | Als Entwickler richte ich Next.js i18n-Routing ein (`/de/`, `/en/`, …), sodass Sprachen sauber getrennt sind. | ⬜ |
| 17.3 | Als Redakteur pflege ich übersetzte Inhalte im Sanity Studio je Sprache getrennt. | ⬜ |
| 17.4 | Als Besucher wechsle ich die Sprache über einen Sprachumschalter in der Navigation. | ⬜ |

---

## EPIC 18 – E-Mail & Newsletter (Brevo)

| # | User Story / Task | Status |
|---|------------|--------|
| 18.1 | 🔍 Als Entwickler richte ich Brevo als E-Mail-Provider ein (transaktionale Mails + Newsletter) und verbinde es mit der Website. | ⬜ |
| 18.2 | Als Besucher melde ich mich für den Newsletter an und erhalte eine Double-Opt-In-Bestätigungsmail (DSGVO). | ⬜ |
| 18.3 | Als Besucher erhalte ich nach jedem Formular-Absenden eine automatische Bestätigungsmail. | ⬜ |
| 18.4 | Als Redakteur verwalte ich Newsletter-Kampagnen direkt in Brevo, ohne Entwicklerunterstützung. | ⬜ |
| 18.5 | Als Team haben wir eine DSGVO-konforme Einwilligungshistorie für alle E-Mail-Abonnenten. | ⬜ |

---

## EPIC 19 – Veranstaltungen & Aktualitäten

| # | User Story / Task | Status |
|---|------------|--------|
| 19.1 | 🔍 Als Team entscheiden wir, welche Eventtypen es gibt (Straßencafé-Ausfall, Fundraising, Gottesdienst, Schulprojekte) und wie sie sich auf der Website darstellen. | ⬜ 🗺 |
| 19.2 | Als Redakteur lege ich Veranstaltungen im CMS an (Titel, Datum, Ort, Kategorie, Bild). | ⬜ |
| 19.3 | Als Besucher sehe ich bevorstehende Veranstaltungen auf einer Übersichtsseite und als Widget auf der Startseite. | ⬜ |
| 19.4 | Als Redakteur veröffentliche ich kurzfristige Hinweise (z. B. „Straßencafé fällt heute aus") als Banner oder Aushang. | ⬜ |

---

## EPIC 20 – Datenmigration & URL-Strategie
*Umzug vom statischen Prototyp auf den Next.js/Vercel-Stack ohne Ranking- und Bookmark-Verlust.*

| # | User Story / Task | Status |
|---|------------|--------|
| 20.1 | 🔍 Als Entwickler lege ich eine vollständige URL-Map an (alt → neu) und identifiziere alle Weiterleitungen, die benötigt werden. | ⬜ |
| 20.2 | Als Entwickler richte ich 301-Weiterleitungen in `next.config.js` ein, sodass alle alten URLs korrekt weiterleiten. | ⬜ |
| 20.3 | Als Redakteur migriere ich vorhandene Inhalte (Blog-Posts, Teamseite, Stellenangebote) in das Sanity CMS. | ⬜ |
| 20.4 | Als Team prüfen wir nach dem Go-Live, dass keine toten Links oder fehlenden Weiterleitungen in der Search Console auftauchen. | ⬜ |

---

## EPIC 21 – Testing & Qualitätssicherung

| # | User Story / Task | Status |
|---|------------|--------|
| 21.1 | 🔍 Als Team legen wir die Testing-Strategie fest (E2E mit Playwright, visuelle Regression, manuelle Checklisten). | ⬜ 🗺 |
| 21.2 | Als Entwickler habe ich E2E-Tests für kritische Pfade: Kontaktformular, Newsletter-Anmeldung, Spendenflow. | ⬜ |
| 21.3 | Als Entwickler stelle ich sicher, dass jedes Deployment automatisch getestet wird (CI-Pipeline auf GitHub Actions). | ⬜ |
| 21.4 | Als Team haben wir eine manuelle Abnahme-Checkliste für neue Seiten (Design, Mobile, Links, Formulare). | ⬜ |
| 21.5 | Als Besucher lande ich bei unbekannten URLs auf einer gestalteten 404-Seite mit Navigationshilfe. | ⬜ |

---

## EPIC 22 – Barrierefreiheit (WCAG 2.1 AA / EAA)
*Ab 2025 gilt der European Accessibility Act auch für viele gemeinnützige Organisationen.*

| # | User Story / Task | Status |
|---|------------|--------|
| 22.1 | 🔍 Als Team klären wir, ob der EAA für Hands of Hope verpflichtend gilt, und legen den Ziel-Konformitätslevel fest. | ⬜ 🗺 |
| 22.2 | Als Besucher mit Sehbehinderung kann ich die Website vollständig mit einem Screenreader (NVDA/VoiceOver) bedienen. | ⬜ |
| 22.3 | Als Besucher mit motorischer Einschränkung navigiere ich die Website ausschließlich per Tastatur. | ⬜ |
| 22.4 | Als Besucher mit Sehschwäche finde ich überall ausreichende Farbkontraste (Kontrastverhältnis ≥ 4,5:1). | ⬜ |
| 22.5 | Als Entwickler führe ich einen automatisierten Accessibility-Scan (axe-core oder Lighthouse) in der CI-Pipeline aus. | ⬜ |

---

## EPIC 23 – Projektübergabe & Betriebsdokumentation

| # | User Story / Task | Status |
|---|------------|--------|
| 23.1 | Als Redakteur habe ich eine kurze Schulungseinheit (Video oder Screencasts) für das Sanity Studio erhalten. | ⬜ |
| 23.2 | Als Team haben wir eine zentrale Ablage aller Zugangsdaten und Credentials (Passwort-Manager). | ⬜ |
| 23.3 | Als Entwickler-Nachfolger finde ich eine technische Dokumentation: Stack, Architekturentscheidungen, Deployment-Prozess. | ⬜ |
| 23.4 | Als Team haben wir einen definierten Ansprechpartner und Prozess für laufende Wartung nach Go-Live. | ⬜ |

---

## Priorisierung

### Jetzt — offene Entscheidungen (blockieren alles andere)
- 0.6 Markenbezeichnungen klären
- 0.7 Heikos Design-Komponenten → Seiten-Layout-Meeting
- 0.5 GitHub + VS Code bei allen Entwicklern einrichten
- 15.3 Klären welche Inhalte ins CMS kommen
- 16.3 Auth-Entscheidung: Supabase vs. Microsoft Entra
- 12.3 Vercel EU-Hosting / DSGVO-Prüfung (Bob Held)
- **17.1 Mehrsprachigkeit: Ja/Nein-Entscheidung (beeinflusst Architektur)**
- **22.1 EAA-Prüfung: Verpflichtung klären**

### Kurzfristig — Produktions-Stack & Pflichtinhalte
- 0.1–0.4 Next.js + Sanity aufsetzen
- 15.1–15.2 CMS-Schema und Redaktionsworkflow
- 20.1–20.2 URL-Map und 301-Weiterleitungen
- 18.1 Brevo einrichten
- 12.1 Impressum und Datenschutzerklärung
- 16.1–16.2 2FA und Secrets-Management
- 10.1–10.2 Formular-Backend + DSGVO-Hinweise
- 11.1 PayPal-Integration live schalten

### Mittelfristig — Inhalte und Features ausbauen
- Epics 3–8 Alle Bereichsseiten vollständig befüllen
- 9.1–9.4 Blog vollständig (inkl. Kategoriefilter, Social Share)
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
