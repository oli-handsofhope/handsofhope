# Hands of Hope – Epics & User Stories

Projektstand: Erste Ebene (One-Pager-Struktur) weitgehend gebaut.
Tiefere Ebenen, Formulare, rechtliche Seiten und Betriebsprozesse folgen.

Legende: ✅ gebaut · 🔧 teilweise/Platzhalter · ⬜ offen

---

## EPIC 1 – Globale Infrastruktur & Design-System

| # | User Story | Status |
|---|------------|--------|
| 1.1 | Als Besucher möchte ich auf jeder Seite eine konsistente Navigation sehen, damit ich mich sofort orientieren kann. | ✅ |
| 1.2 | Als Besucher möchte ich, dass die Navigation beim Scrollen verschwindet und bei Aufwärtsbewegung zurückkehrt, um mehr Leseraum zu haben. | ✅ |
| 1.3 | Als Besucher möchte ich im Footer alle wichtigen Links und Kontaktdaten finden, ohne zurück nach oben scrollen zu müssen. | ✅ |
| 1.4 | Als Besucher möchte ich über Cookie-Einstellungen informiert werden und diese ablehnen können. | 🔧 Banner vorhanden, keine echte Consent-Logik |
| 1.5 | Als Besucher möchte ich die Website auch auf dem Smartphone gut bedienen können. | ✅ |
| 1.6 | Als Besucher mit eingeschränkter Sehkraft möchte ich ausreichende Kontraste und semantisches HTML vorfinden. | 🔧 Grundstruktur ok, kein Audit |
| 1.7 | Als Besucher möchte ich, dass Seiten schnell laden, auch auf mobilen Verbindungen. | 🔧 WebP done, kein CDN/Caching-Konzept |
| 1.8 | Als Besucher möchte ich ein Favicon sehen, das die Marke widerspiegelt. | 🔧 Kommentiert/ausgeblendet |
| 1.9 | Als Team möchten wir ein konsistentes Farbsystem pro Arbeitsbereich, damit Besucher Bereiche visuell unterscheiden können. | ✅ |
| 1.10 | Als Entwickler möchte ich Header und Footer zentral pflegen, ohne jede Seite anfassen zu müssen. | ✅ includes.js |
| 1.11 | Als Besucher möchte ich korrekte Open-Graph-Meta-Tags vorfinden, damit geteilte Links in sozialen Medien schön aussehen. | ⬜ |
| 1.12 | Als Team möchten wir eine robots.txt und sitemap.xml, damit Suchmaschinen die Seite korrekt indexieren. | 🔧 Dateien referenziert, Inhalt prüfen |

---

## EPIC 2 – Startseite

| # | User Story | Status |
|---|------------|--------|
| 2.1 | Als Erstbesucher möchte ich sofort verstehen, wer Hands of Hope ist und was die Organisation tut. | ✅ |
| 2.2 | Als Besucher möchte ich alle fünf Arbeitsbereiche auf einen Blick sehen und direkt navigieren können. | ✅ |
| 2.3 | Als potenzieller Spender möchte ich einen klaren Handlungsaufruf zur Spende sehen. | 🔧 CTA vorhanden, Link zu Platzhalter |
| 2.4 | Als Besucher möchte ich aktuelle Blog-Posts auf der Startseite als Teaser sehen. | ✅ |
| 2.5 | Als interessierter Besucher möchte ich mich für einen Newsletter anmelden können. | 🔧 Formular vorhanden, kein Backend |
| 2.6 | Als Besucher möchte ich Kennzahlen der Organisation sehen (Mitarbeiter, Jahre, Klienten etc.). | ✅ |
| 2.7 | Als Besucher möchte ich einen kurzen Videoeindruck der Organisation bekommen. | ⬜ Imagefilm-Einbindung offen |

---

## EPIC 3 – Rehabilitation

| # | User Story | Status |
|---|------------|--------|
| 3.1 | Als Betroffener möchte ich verstehen, was das Rehabilitationsangebot umfasst. | ✅ |
| 3.2 | Als Betroffener möchte ich den Aufnahme- und Bewerbungsprozess Schritt für Schritt nachvollziehen. | ✅ |
| 3.3 | Als Betroffener möchte ich wissen, wie das Nachsorgehaus funktioniert. | ✅ |
| 3.4 | Als Betroffener oder Angehöriger möchte ich direkt Kontakt aufnehmen oder eine Anfrage stellen. | ✅ Kontaktbox |
| 3.5 | Als Betroffener möchte ich Bewerbungsunterlagen herunterladen können. | 🔧 PDF-Link referenziert, Datei fehlt |
| 3.6 | Als Betroffener möchte ich das Wiedereingliederungskonzept als Dokument einsehen. | 🔧 PDF-Link referenziert, Datei fehlt |
| 3.7 | Als Angehöriger möchte ich verstehen, wie ich jemanden bei der Aufnahme unterstützen kann. | ⬜ Angehörigen-Abschnitt fehlt |
| 3.8 | Als Besucher möchte ich Erfahrungsberichte von ehemaligen Klienten lesen. | 🔧 Über Blog teilweise abgedeckt |

---

## EPIC 4 – Straßencafé

| # | User Story | Status |
|---|------------|--------|
| 4.1 | Als Interessierter möchte ich verstehen, was das Straßencafé ist und an wen es sich richtet. | ✅ |
| 4.2 | Als potenzieller Gast möchte ich wissen, wann und wo das Café stattfindet. | ✅ |
| 4.3 | Als potenzieller Ehrenamtlicher möchte ich erfahren, wie ich mich engagieren kann. | ✅ |
| 4.4 | Als Besucher möchte ich den Sonntagsgottesdienst als weiteres Angebot entdecken. | ✅ |
| 4.5 | Als Ehrenamtlicher möchte ich mich direkt über ein Formular anmelden. | ⬜ Ehrenamts-Formular fehlt |
| 4.6 | Als Spender möchte ich wissen, wie meine Spende das Straßencafé direkt unterstützt. | ⬜ Spenden-Kontext für Straßencafé fehlt |

---

## EPIC 5 – Prävention

| # | User Story | Status |
|---|------------|--------|
| 5.1 | Als Lehrer oder Schulsozialarbeiter möchte ich verstehen, welche Präventionsangebote es gibt. | ✅ |
| 5.2 | Als Schule möchte ich eine Anfrage für ein Schulprojekt stellen können. | ✅ Kontaktbox |
| 5.3 | Als Jugendlicher möchte ich niedrigschwellige Informationen zu Sucht und Hilfsangeboten finden. | ⬜ Eigene Zielgruppenansicht fehlt |
| 5.4 | Als Elternteil möchte ich Informationen zu Früherkennung und Gesprächshilfen finden. | ⬜ |
| 5.5 | Als Besucher möchte ich Referenzen und Reichweite der Präventionsarbeit sehen (Schulen, Zahlen). | 🔧 Teilweise vorhanden |

---

## EPIC 6 – Dienstleistungen

| # | User Story | Status |
|---|------------|--------|
| 6.1 | Als potenzieller Auftraggeber möchte ich verstehen, welche Leistungen angeboten werden. | ✅ |
| 6.2 | Als Auftraggeber möchte ich wissen, warum ein Auftrag an Hands of Hope sinnvoll ist (sozialer Mehrwert). | ✅ |
| 6.3 | Als Auftraggeber möchte ich Referenzen und Kundenstimmen sehen. | ✅ |
| 6.4 | Als Auftraggeber möchte ich direkt eine Anfrage stellen. | ✅ Kontaktbox |
| 6.5 | Als Auftraggeber möchte ich einen Kostenvoranschlag anfordern. | ⬜ Angebotsanfrage-Formular fehlt |
| 6.6 | Als Besucher möchte ich Vorher-Nachher-Bilder oder Projektgalerien sehen. | ⬜ |

---

## EPIC 7 – Jugendhilfe

| # | User Story | Status |
|---|------------|--------|
| 7.1 | Als Fachkraft der Jugendhilfe möchte ich verstehen, was das Konzept ist. | 🔧 Entwurf, "Bald verfügbar" |
| 7.2 | Als betroffener Jugendlicher oder Familie möchte ich das Angebot und die Aufnahme verstehen. | ⬜ |
| 7.3 | Als Besucher möchte ich den Baufortschritt verfolgen können. | ✅ Baufortschritts-Sektion |
| 7.4 | Als Unterstützer möchte ich erfahren, wie ich das Projekt fördern kann. | 🔧 Mitmachen-Sektion vorhanden |
| 7.5 | Als Fachkraft möchte ich Belegungsanfragen stellen können. | ⬜ |
| 7.6 | Als Besucher möchte ich bei Fertigstellung automatisch benachrichtigt werden. | ⬜ Wartelisten-/Benachrichtigungs-Feature |

---

## EPIC 8 – Über uns

| # | User Story | Status |
|---|------------|--------|
| 8.1 | Als Besucher möchte ich die Geschichte der Organisation kennenlernen. | ✅ |
| 8.2 | Als Besucher möchte ich das Team mit Namen, Rollen und Fotos sehen. | ✅ |
| 8.3 | Als Interessierter möchte ich verstehen, welche Werte und christliche Grundlage die Arbeit trägt. | ✅ |
| 8.4 | Als potenzieller Mitarbeiter möchte ich offene Stellen finden und mich bewerben. | 🔧 Stellenangebote referenziert, Seite fehlt |
| 8.5 | Als Student möchte ich mich für ein Praktikum bewerben. | ✅ |
| 8.6 | Als junger Mensch möchte ich mich für FSJ oder BFD informieren und bewerben. | ✅ |
| 8.7 | Als Spender möchte ich sicher und unkompliziert spenden können. | 🔧 PayPal-Button mit Platzhalter-ID |
| 8.8 | Als Spender möchte ich erfahren, wofür meine Spende konkret eingesetzt wird. | 🔧 Kurz erwähnt, kein Detailbereich |
| 8.9 | Als Besucher möchte ich per Kontaktformular eine allgemeine Anfrage stellen. | 🔧 Formular vorhanden, kein Backend |
| 8.10 | Als Besucher möchte ich Hands of Hope auf sozialen Medien folgen. | ✅ Footer-Links |
| 8.11 | Als Kooperationspartner möchte ich erfahren, wie eine Zusammenarbeit aussehen kann. | ⬜ |

---

## EPIC 9 – Stellenangebote (ueber-uns/jobs/)

| # | User Story | Status |
|---|------------|--------|
| 9.1 | Als Besucher möchte ich eine Übersicht aller offenen Stellen sehen. | 🔧 Seite referenziert, fehlt |
| 9.2 | Als Bewerber möchte ich Details zu einer Stelle lesen (Aufgaben, Profil, Benefits). | 🔧 Unterseiten referenziert (hausmeister, sozialarbeiter, hauswirtschaft), fehlen |
| 9.3 | Als Bewerber möchte ich mich direkt online bewerben oder Kontakt aufnehmen. | ⬜ |
| 9.4 | Als Bewerber möchte ich wissen, was Hands of Hope als Arbeitgeber auszeichnet. | ⬜ Arbeitgeber-Profil fehlt |

---

## EPIC 10 – Blog

| # | User Story | Status |
|---|------------|--------|
| 10.1 | Als Besucher möchte ich Blog-Posts entdecken und lesen. | ✅ |
| 10.2 | Als Besucher möchte ich Posts nach Kategorie filtern. | ⬜ Filterung fehlt |
| 10.3 | Als Leser möchte ich am Ende eines Posts ähnliche Beiträge vorgeschlagen bekommen. | ✅ Sidebar |
| 10.4 | Als Leser möchte ich einen Post teilen können (Social Share). | ⬜ |
| 10.5 | Als Leser möchte ich die Lesezeit eines Posts vorab einschätzen können. | ✅ |
| 10.6 | Als Team möchten wir neue Posts einfach ohne Entwicklungskenntnisse hinzufügen. | ✅ BLOG_POST_ERSTELLEN.md |
| 10.7 | Als Team möchten wir Posts im Entwurfsmodus prüfen, bevor sie veröffentlicht werden. | ✅ noindex-Workflow |
| 10.8 | Als Besucher möchte ich Posts auch als Audio hören können (Barrierefreiheit). | ⬜ |

---

## EPIC 11 – Rechtliches & Compliance

| # | User Story | Status |
|---|------------|--------|
| 11.1 | Als Besucher möchte ich ein vollständiges Impressum abrufen können. | 🔧 Referenziert, Datei fehlt |
| 11.2 | Als Besucher möchte ich eine vollständige Datenschutzerklärung lesen. | 🔧 Referenziert, Datei fehlt |
| 11.3 | Als Besucher möchte ich Cookie-Einwilligung gezielt erteilen oder verweigern (DSGVO). | 🔧 Banner ohne echte Consent-Verwaltung |
| 11.4 | Als Spender möchte ich eine Spendenquittung anfordern können. | ⬜ |
| 11.5 | Als Besucher möchte ich, dass Kontaktformulare DSGVO-konform sind. | ⬜ Hinweistext in Formularen fehlt |

---

## EPIC 12 – Formulare & Backend-Anbindung

| # | User Story | Status |
|---|------------|--------|
| 12.1 | Als Besucher möchte ich das Kontaktformular absenden und eine Bestätigung erhalten. | 🔧 JS-Pseudo-Submit, kein Backend |
| 12.2 | Als Besucher möchte ich mich für den Newsletter anmelden und eine Bestätigungs-Mail erhalten. | 🔧 JS-Pseudo-Submit, kein Backend |
| 12.3 | Als Team möchten wir Formular-Einsendungen per E-Mail oder CRM erhalten. | ⬜ Formspree / Netlify Forms / eigenes Backend |
| 12.4 | Als Team möchten wir Spam-Schutz für alle Formulare (Honeypot oder CAPTCHA). | ⬜ |
| 12.5 | Als potenzieller Ehrenamtlicher möchte ich mich über ein Formular anmelden. | ⬜ |
| 12.6 | Als Auftraggeber möchte ich ein Angebotsanfrage-Formular nutzen. | ⬜ |

---

## EPIC 13 – Spendenintegration

| # | User Story | Status |
|---|------------|--------|
| 13.1 | Als Spender möchte ich per PayPal spenden können. | 🔧 Button-ID ist Platzhalter |
| 13.2 | Als Spender möchte ich per Überweisung spenden und die Bankverbindung finden. | ✅ IBAN im Spendenbereich |
| 13.3 | Als Spender möchte ich Dauerspenden einrichten können. | ⬜ |
| 13.4 | Als Spender möchte ich sehen, wie viel bereits gesammelt wurde (optional: Spendenbarometer). | ⬜ |
| 13.5 | Als Unternehmen möchte ich Corporate-Giving-Optionen kennen. | ⬜ |

---

## EPIC 14 – SEO & Performance

| # | User Story | Status |
|---|------------|--------|
| 14.1 | Als Team möchten wir für jeden Bereich in der regionalen Suche gefunden werden. | 🔧 Meta-Descriptions vorhanden, kein strukturiertes Markup |
| 14.2 | Als Team möchten wir strukturierte Daten (Schema.org) für Organisation und Artikel. | ⬜ |
| 14.3 | Als Team möchten wir eine vollständige sitemap.xml mit allen URLs. | 🔧 Datei referenziert, Inhalt prüfen |
| 14.4 | Als Team möchten wir Google Analytics oder eine datenschutzkonforme Alternative einbinden. | ⬜ |
| 14.5 | Als Team möchten wir Core Web Vitals grün halten (LCP, CLS, FID). | ⬜ kein Monitoring |

---

## EPIC 15 – Deployment & Betrieb

| # | User Story | Status |
|---|------------|--------|
| 15.1 | Als Team möchten wir die Website unter der eigenen Domain handsofhope.de erreichbar haben. | 🔧 CNAME-Anleitung vorhanden |
| 15.2 | Als Team möchten wir automatische Deployments bei jedem Push auf main. | ⬜ GitHub Actions / Pages konfigurieren |
| 15.3 | Als Team möchten wir einen Branch-Review-Prozess (PR → Review → Merge). | 🔧 Branch-Workflow genutzt, kein formaler PR-Prozess |
| 15.4 | Als Team möchten wir Bilder und Assets über ein CDN ausliefern. | ⬜ |
| 15.5 | Als Team möchten wir regelmäßige Backups des Repos sicherstellen. | ✅ GitHub als Backup |

---

## Priorisierungsvorschlag (nächste Sprints)

### Sofort (blockierend / rechtlich)
- 11.1 Impressum erstellen
- 11.2 Datenschutzerklärung erstellen
- 11.3 Cookie-Consent mit echter Logik (z. B. Klaro, CookieYes)
- 13.1 PayPal-Button-ID eintragen
- 12.3 Formulare an Backend anbinden (Formspree reicht für den Start)

### Kurzfristig (fehlende Seiten)
- 9.1–9.3 Stellenangebote-Seiten anlegen
- 3.5–3.6 PDF-Downloads bereitstellen
- 7.1–7.5 Jugendhilfe vollständig ausbauen

### Mittelfristig (Wachstum)
- 10.2 Blog-Kategoriefilter
- 10.4 Social Share
- 2.7 Imagefilm Startseite
- 6.5 Angebotsanfrage Dienstleistungen
- 14.2 Schema.org strukturierte Daten
