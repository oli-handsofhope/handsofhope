# Hands of Hope – Epics & User Stories

Projektstand: Erste Ebene als statischer HTML-Prototyp gebaut.
Ziel-Stack (Protokoll 19.06.26): **Next.js / React + Sanity Headless CMS**, Hosting auf Vercel.
Parallel in Planung: **Baustellenabwicklungs-App** (PWA, Microsoft-Integration).

Legende: ⬜ offen · 🗺 im Protokoll 19.06.26 besprochen
Hinweis: Der statische HTML-Prototyp dient als inhaltliche Referenz. Neuaufbau auf Next.js/React + Sanity – alle Stories starten bei ⬜.

---

## EPIC 0 – Tech-Stack-Migration & Projektsetup
*Aus Protokoll 19.06.26 — betrifft den Wechsel vom statischen Prototyp zum Produktions-Stack.*

| # | User Story | Status |
|---|------------|--------|
| 0.1 | Als Entwickler möchte ich das Projekt auf Next.js/React migrieren, damit wiederverwendbare Komponenten und serverseitiges Rendering möglich sind. | ⬜ 🗺 |
| 0.2 | Als Redakteur möchte ich Sanity als Headless CMS nutzen, um Blog-Posts, Teamdaten und Seitenblöcke ohne Entwicklerkenntnisse zu pflegen. | ⬜ 🗺 |
| 0.3 | Als Team möchten wir die Website auf Vercel hosten (Pro-Plan ~20 €/Monat) mit automatischen Preview-Deployments pro Branch. | ⬜ 🗺 |
| 0.4 | Als Entwickler möchte ich vordefinierte React-Komponenten und KI-Regeln (Markdown-Dateien) anlegen, damit Claude konsistent im definierten Design-System arbeitet. | ⬜ 🗺 |
| 0.5 | Als Team möchten wir GitHub und VS Code als gemeinsame Entwicklungsumgebung eingerichtet haben. | ⬜ 🗺 Nächster Schritt lt. Protokoll |
| 0.6 | Als Team möchten wir die Markenbezeichnungen verbindlich klären (z. B. „Enzophob"/„Henzophob") bevor der Code-Aufbau beginnt. | ⬜ 🗺 Offen lt. Protokoll |
| 0.7 | Als Team möchten wir Heikos Design-Komponenten als Grundlage für den Seitenaufbau abwarten, bevor mit dem Coding begonnen wird. | ⬜ 🗺 Blockiert auf Heiko |

---

## EPIC 1 – Globale Infrastruktur & Design-System

| # | User Story | Status |
|---|------------|--------|
| 1.1 | Als Besucher möchte ich auf jeder Seite eine konsistente Navigation sehen, damit ich mich sofort orientieren kann. | ⬜ |
| 1.2 | Als Besucher möchte ich, dass die Navigation beim Scrollen verschwindet und bei Aufwärtsbewegung zurückkehrt, um mehr Leseraum zu haben. | ⬜ |
| 1.3 | Als Besucher möchte ich im Footer alle wichtigen Links und Kontaktdaten finden, ohne zurück nach oben scrollen zu müssen. | ⬜ |
| 1.4 | Als Besucher möchte ich über Cookie-Einstellungen informiert werden und diese ablehnen können. | ⬜ |
| 1.5 | Als Besucher möchte ich die Website auch auf dem Smartphone gut bedienen können. | ⬜ |
| 1.6 | Als Besucher mit eingeschränkter Sehkraft möchte ich ausreichende Kontraste und semantisches HTML vorfinden. | ⬜ |
| 1.7 | Als Besucher möchte ich, dass Seiten schnell laden, auch auf mobilen Verbindungen. | ⬜ |
| 1.8 | Als Besucher möchte ich ein Favicon sehen, das die Marke widerspiegelt. | ⬜ |
| 1.9 | Als Team möchten wir ein konsistentes Farbsystem pro Arbeitsbereich, damit Besucher Bereiche visuell unterscheiden können. | ⬜ |
| 1.10 | Als Entwickler möchte ich Header und Footer zentral pflegen, ohne jede Seite anfassen zu müssen. | ⬜ |
| 1.11 | Als Besucher möchte ich korrekte Open-Graph-Meta-Tags vorfinden, damit geteilte Links in sozialen Medien schön aussehen. | ⬜ |
| 1.12 | Als Team möchten wir eine robots.txt und sitemap.xml, damit Suchmaschinen die Seite korrekt indexieren. | ⬜ |

---

## EPIC 2 – Startseite

| # | User Story | Status |
|---|------------|--------|
| 2.1 | Als Erstbesucher möchte ich sofort verstehen, wer Hands of Hope ist und was die Organisation tut. | ⬜ |
| 2.2 | Als Besucher möchte ich alle fünf Arbeitsbereiche auf einen Blick sehen und direkt navigieren können. | ⬜ |
| 2.3 | Als potenzieller Spender möchte ich einen klaren Handlungsaufruf zur Spende sehen. | ⬜ |
| 2.4 | Als Besucher möchte ich aktuelle Blog-Posts auf der Startseite als Teaser sehen. | ⬜ |
| 2.5 | Als interessierter Besucher möchte ich mich für einen Newsletter anmelden können. | ⬜ |
| 2.6 | Als Besucher möchte ich Kennzahlen der Organisation sehen (Mitarbeiter, Jahre, Klienten etc.). | ⬜ |
| 2.7 | Als Besucher möchte ich einen kurzen Videoeindruck der Organisation bekommen. | ⬜ Imagefilm-Einbindung offen |

---

## EPIC 3 – Rehabilitation

| # | User Story | Status |
|---|------------|--------|
| 3.1 | Als Betroffener möchte ich verstehen, was das Rehabilitationsangebot umfasst. | ⬜ |
| 3.2 | Als Betroffener möchte ich den Aufnahme- und Bewerbungsprozess Schritt für Schritt nachvollziehen. | ⬜ |
| 3.3 | Als Betroffener möchte ich wissen, wie das Nachsorgehaus funktioniert. | ⬜ |
| 3.4 | Als Betroffener oder Angehöriger möchte ich direkt Kontakt aufnehmen oder eine Anfrage stellen. | ⬜ |
| 3.5 | Als Betroffener möchte ich Bewerbungsunterlagen herunterladen können. | ⬜ |
| 3.6 | Als Betroffener möchte ich das Wiedereingliederungskonzept als Dokument einsehen. | ⬜ |
| 3.7 | Als Angehöriger möchte ich verstehen, wie ich jemanden bei der Aufnahme unterstützen kann. | ⬜ Angehörigen-Abschnitt fehlt |
| 3.8 | Als Besucher möchte ich Erfahrungsberichte von ehemaligen Klienten lesen. | ⬜ |

---

## EPIC 4 – Straßencafé

| # | User Story | Status |
|---|------------|--------|
| 4.1 | Als Interessierter möchte ich verstehen, was das Straßencafé ist und an wen es sich richtet. | ⬜ |
| 4.2 | Als potenzieller Gast möchte ich wissen, wann und wo das Café stattfindet. | ⬜ |
| 4.3 | Als potenzieller Ehrenamtlicher möchte ich erfahren, wie ich mich engagieren kann. | ⬜ |
| 4.4 | Als Besucher möchte ich den Sonntagsgottesdienst als weiteres Angebot entdecken. | ⬜ |
| 4.5 | Als Ehrenamtlicher möchte ich mich direkt über ein Formular anmelden. | ⬜ Ehrenamts-Formular fehlt |
| 4.6 | Als Spender möchte ich wissen, wie meine Spende das Straßencafé direkt unterstützt. | ⬜ Spenden-Kontext für Straßencafé fehlt |

---

## EPIC 5 – Prävention

| # | User Story | Status |
|---|------------|--------|
| 5.1 | Als Lehrer oder Schulsozialarbeiter möchte ich verstehen, welche Präventionsangebote es gibt. | ⬜ |
| 5.2 | Als Schule möchte ich eine Anfrage für ein Schulprojekt stellen können. | ⬜ |
| 5.3 | Als Jugendlicher möchte ich niedrigschwellige Informationen zu Sucht und Hilfsangeboten finden. | ⬜ Eigene Zielgruppenansicht fehlt |
| 5.4 | Als Elternteil möchte ich Informationen zu Früherkennung und Gesprächshilfen finden. | ⬜ |
| 5.5 | Als Besucher möchte ich Referenzen und Reichweite der Präventionsarbeit sehen (Schulen, Zahlen). | ⬜ |

---

## EPIC 6 – Dienstleistungen

| # | User Story | Status |
|---|------------|--------|
| 6.1 | Als potenzieller Auftraggeber möchte ich verstehen, welche Leistungen angeboten werden. | ⬜ |
| 6.2 | Als Auftraggeber möchte ich wissen, warum ein Auftrag an Hands of Hope sinnvoll ist (sozialer Mehrwert). | ⬜ |
| 6.3 | Als Auftraggeber möchte ich Referenzen und Kundenstimmen sehen. | ⬜ |
| 6.4 | Als Auftraggeber möchte ich direkt eine Anfrage stellen. | ⬜ |
| 6.5 | Als Auftraggeber möchte ich einen Kostenvoranschlag anfordern. | ⬜ Angebotsanfrage-Formular fehlt |
| 6.6 | Als Besucher möchte ich Vorher-Nachher-Bilder oder Projektgalerien sehen. | ⬜ |

---

## EPIC 7 – Jugendhilfe

| # | User Story | Status |
|---|------------|--------|
| 7.1 | Als Fachkraft der Jugendhilfe möchte ich verstehen, was das Konzept ist. | ⬜ |
| 7.2 | Als betroffener Jugendlicher oder Familie möchte ich das Angebot und die Aufnahme verstehen. | ⬜ |
| 7.3 | Als Besucher möchte ich den Baufortschritt verfolgen können. | ⬜ |
| 7.4 | Als Unterstützer möchte ich erfahren, wie ich das Projekt fördern kann. | ⬜ |
| 7.5 | Als Fachkraft möchte ich Belegungsanfragen stellen können. | ⬜ |
| 7.6 | Als Besucher möchte ich bei Fertigstellung automatisch benachrichtigt werden. | ⬜ Wartelisten-/Benachrichtigungs-Feature |

---

## EPIC 8 – Über uns

| # | User Story | Status |
|---|------------|--------|
| 8.1 | Als Besucher möchte ich die Geschichte der Organisation kennenlernen. | ⬜ |
| 8.2 | Als Besucher möchte ich das Team mit Namen, Rollen und Fotos sehen. | ⬜ |
| 8.3 | Als Interessierter möchte ich verstehen, welche Werte und christliche Grundlage die Arbeit trägt. | ⬜ |
| 8.4 | Als potenzieller Mitarbeiter möchte ich offene Stellen finden und mich bewerben. | ⬜ |
| 8.5 | Als Student möchte ich mich für ein Praktikum bewerben. | ⬜ |
| 8.6 | Als junger Mensch möchte ich mich für FSJ oder BFD informieren und bewerben. | ⬜ |
| 8.7 | Als Spender möchte ich sicher und unkompliziert spenden können. | ⬜ |
| 8.8 | Als Spender möchte ich erfahren, wofür meine Spende konkret eingesetzt wird. | ⬜ |
| 8.9 | Als Besucher möchte ich per Kontaktformular eine allgemeine Anfrage stellen. | ⬜ |
| 8.10 | Als Besucher möchte ich Hands of Hope auf sozialen Medien folgen. | ⬜ |
| 8.11 | Als Kooperationspartner möchte ich erfahren, wie eine Zusammenarbeit aussehen kann. | ⬜ |

---

## EPIC 9 – Stellenangebote (ueber-uns/jobs/)

| # | User Story | Status |
|---|------------|--------|
| 9.1 | Als Besucher möchte ich eine Übersicht aller offenen Stellen sehen. | ⬜ |
| 9.2 | Als Bewerber möchte ich Details zu einer Stelle lesen (Aufgaben, Profil, Benefits). | ⬜ |
| 9.3 | Als Bewerber möchte ich mich direkt online bewerben oder Kontakt aufnehmen. | ⬜ |
| 9.4 | Als Bewerber möchte ich wissen, was Hands of Hope als Arbeitgeber auszeichnet. | ⬜ Arbeitgeber-Profil fehlt |

---

## EPIC 10 – Blog

| # | User Story | Status |
|---|------------|--------|
| 10.1 | Als Besucher möchte ich Blog-Posts entdecken und lesen. | ⬜ |
| 10.2 | Als Besucher möchte ich Posts nach Kategorie filtern. | ⬜ Filterung fehlt |
| 10.3 | Als Leser möchte ich am Ende eines Posts ähnliche Beiträge vorgeschlagen bekommen. | ⬜ |
| 10.4 | Als Leser möchte ich einen Post teilen können (Social Share). | ⬜ |
| 10.5 | Als Leser möchte ich die Lesezeit eines Posts vorab einschätzen können. | ⬜ |
| 10.6 | Als Team möchten wir neue Posts einfach ohne Entwicklungskenntnisse hinzufügen. | ⬜ |
| 10.7 | Als Team möchten wir Posts im Entwurfsmodus prüfen, bevor sie veröffentlicht werden. | ⬜ |
| 10.8 | Als Besucher möchte ich Posts auch als Audio hören können (Barrierefreiheit). | ⬜ |

---

## EPIC 11 – Rechtliches & Compliance

| # | User Story | Status |
|---|------------|--------|
| 11.1 | Als Besucher möchte ich ein vollständiges Impressum abrufen können. | ⬜ |
| 11.2 | Als Besucher möchte ich eine vollständige Datenschutzerklärung lesen. | ⬜ |
| 11.3 | Als Besucher möchte ich Cookie-Einwilligung gezielt erteilen oder verweigern (DSGVO). | ⬜ |
| 11.4 | Als Spender möchte ich eine Spendenquittung anfordern können. | ⬜ |
| 11.5 | Als Besucher möchte ich, dass Kontaktformulare DSGVO-konform sind. | ⬜ Hinweistext in Formularen fehlt |

---

## EPIC 12 – Formulare & Backend-Anbindung

| # | User Story | Status |
|---|------------|--------|
| 12.1 | Als Besucher möchte ich das Kontaktformular absenden und eine Bestätigung erhalten. | ⬜ |
| 12.2 | Als Besucher möchte ich mich für den Newsletter anmelden und eine Bestätigungs-Mail erhalten. | ⬜ |
| 12.3 | Als Team möchten wir Formular-Einsendungen per E-Mail oder CRM erhalten. | ⬜ Formspree / Netlify Forms / eigenes Backend |
| 12.4 | Als Team möchten wir Spam-Schutz für alle Formulare (Honeypot oder CAPTCHA). | ⬜ |
| 12.5 | Als potenzieller Ehrenamtlicher möchte ich mich über ein Formular anmelden. | ⬜ |
| 12.6 | Als Auftraggeber möchte ich ein Angebotsanfrage-Formular nutzen. | ⬜ |

---

## EPIC 13 – Spendenintegration

| # | User Story | Status |
|---|------------|--------|
| 13.1 | Als Spender möchte ich per PayPal spenden können. | ⬜ |
| 13.2 | Als Spender möchte ich per Überweisung spenden und die Bankverbindung finden. | ⬜ |
| 13.3 | Als Spender möchte ich Dauerspenden einrichten können. | ⬜ |
| 13.4 | Als Spender möchte ich sehen, wie viel bereits gesammelt wurde (optional: Spendenbarometer). | ⬜ |
| 13.5 | Als Unternehmen möchte ich Corporate-Giving-Optionen kennen. | ⬜ |

---

## EPIC 14 – SEO & Performance

| # | User Story | Status |
|---|------------|--------|
| 14.1 | Als Team möchten wir für jeden Bereich in der regionalen Suche gefunden werden. | ⬜ |
| 14.2 | Als Team möchten wir strukturierte Daten (Schema.org) für Organisation und Artikel. | ⬜ |
| 14.3 | Als Team möchten wir eine vollständige sitemap.xml mit allen URLs. | ⬜ |
| 14.4 | Als Team möchten wir Google Analytics oder eine datenschutzkonforme Alternative einbinden. | ⬜ |
| 14.5 | Als Team möchten wir Core Web Vitals grün halten (LCP, CLS, FID). | ⬜ kein Monitoring |

---

## EPIC 15 – Deployment & Betrieb

| # | User Story | Status |
|---|------------|--------|
| 15.1 | Als Team möchten wir die Website unter der eigenen Domain handsofhope.de erreichbar haben. | ⬜ |
| 15.2 | Als Team möchten wir automatische Deployments bei jedem Push auf main. | ⬜ GitHub Actions / Pages konfigurieren |
| 15.3 | Als Team möchten wir einen Branch-Review-Prozess (PR → Review → Merge). | ⬜ |
| 15.4 | Als Team möchten wir Bilder und Assets über ein CDN ausliefern. | ⬜ |
| 15.5 | Als Team möchten wir regelmäßige Backups des Repos sicherstellen. | ⬜ |
---

## EPIC 16 – Headless CMS (Sanity) & Redaktionsprozess
*Aus Protokoll 19.06.26 — Ziel: Inhaltspflege ohne Entwickler.*

| # | User Story | Status |
|---|------------|--------|
| 16.1 | Als Redakteur möchte ich Blog-Posts im Sanity Studio anlegen, bearbeiten und veröffentlichen, ohne HTML-Kenntnisse zu haben. | ⬜ 🗺 |
| 16.2 | Als Redakteur möchte ich Teamdaten (Foto, Name, Rolle) im CMS pflegen, damit die Team-Seite immer aktuell ist. | ⬜ 🗺 aktuell hardcoded |
| 16.3 | Als Redakteur möchte ich Stellenangebote im CMS anlegen und deaktivieren können. | ⬜ 🗺 |
| 16.4 | Als Redakteur möchte ich Galerien und Slider-Inhalte im CMS verwalten. | ⬜ 🗺 |
| 16.5 | Als Entwickler möchte ich das Sanity-Schema so definieren, dass Redakteure nur erlaubte Inhaltsblöcke nutzen können (kein freies HTML). | ⬜ 🗺 |
| 16.6 | Als Team möchten wir den Sanity Pro-Plan evaluieren (~18 €/Monat) und mit dem Free-Plan starten. | ⬜ 🗺 |
| 16.7 | Als Team möchten wir klären, welche Inhaltsbereiche CMS-gesteuert sind und welche im Code bleiben. | ⬜ 🗺 Offen lt. Protokoll |

---

## EPIC 17 – Baustellenabwicklungs-App (PWA)
*Aus Protokoll 19.06.26 — eigenständiges Produkt für den Dienstleistungsbereich.*

| # | User Story | Status |
|---|------------|--------|
| 17.1 | Als Mitarbeiter möchte ich Aufträge digital anlegen (Kundendaten, Fotos, Aufgaben), damit keine Informationen verloren gehen. | ⬜ 🗺 |
| 17.2 | Als Mitarbeiter möchte ich Angebote einsehen und dem Auftrag zuordnen. | ⬜ 🗺 |
| 17.3 | Als Mitarbeiter möchte ich Termine aus der App in meinen Outlook-Kalender übertragen (Microsoft Graph API). | ⬜ 🗺 |
| 17.4 | Als Teamleiter möchte ich Aufgaben im Microsoft Planner aus der App heraus erstellen und verfolgen. | ⬜ 🗺 |
| 17.5 | Als Mitarbeiter möchte ich abgeschlossene Aufträge automatisch auf SharePoint archivieren. | ⬜ 🗺 |
| 17.6 | Als Mitarbeiter möchte ich die App als PWA im Browser nutzen (kein App-Store-Download nötig). | ⬜ 🗺 PWA bevorzugt lt. Protokoll |
| 17.7 | Als Team möchten wir Authentifizierung über Microsoft Entra/Azure (Single Sign-On mit bestehenden Microsoft-Konten). | ⬜ 🗺 Entscheidung: Supabase vs. MS Entra offen |
| 17.8 | Als Entwickler möchte ich Pflicht- und Kann-Funktionen der App klar definiert haben, bevor der Tech-Stack festgelegt wird. | ⬜ 🗺 Offen lt. Protokoll |
| 17.9 | Als Mitarbeiter möchte ich Zeiten für einen Auftrag erfassen können. | ⬜ 🗺 |
| 17.10 | Als Entwickler möchte ich klären, ob die App offline-fähig sein muss (z. B. auf Baustellen ohne WLAN). | ⬜ 🗺 Offen lt. Protokoll |

---

## EPIC 18 – DSGVO, Sicherheit & Hosting
*Aus Protokoll 19.06.26 — Bob Held verantwortlich.*

| # | User Story | Status |
|---|------------|--------|
| 18.1 | Als Team möchten wir prüfen, ob Vercels Free-Plan DSGVO-konform (EU-Hosting) ist, bevor wir ihn produktiv nutzen. | ⬜ 🗺 Bob Held prüft |
| 18.2 | Als Team möchten wir AV-Verträge mit allen Drittanbietern (Vercel, Sanity, Newsletter-Tool, Formular-Tool) abschließen. | ⬜ 🗺 Bob Held prüft |
| 18.3 | Als Team möchten wir für Newsletter und Kontaktformulare DSGVO-konforme Drittanbieter auswählen (kein eigenes Backend). | ⬜ 🗺 Auswahl offen |
| 18.4 | Als Entwickler möchte ich sicherstellen, dass keine API-Keys oder Secrets clientseitig ausgeliefert werden. | ⬜ 🗺 |
| 18.5 | Als Team möchten wir 2-Faktor-Authentifizierung für alle Admin-Zugänge (CMS, Hosting, GitHub) einrichten. | ⬜ 🗺 Dringend empfohlen lt. Protokoll |
| 18.6 | Als Team möchten wir eine Hosting- und Wartungsstrategie (Updates, Monitoring, Backups) definieren. | ⬜ 🗺 Offen lt. Protokoll |

---

## Priorisierungsvorschlag

### Jetzt — Klärungen & Entscheidungen (blockieren alles andere)
- 0.6 Markennamen verbindlich klären (Enzophob/Henzophob)
- 0.7 Heikos Design-Komponenten abwarten → gemeinsames Seiten-Aufbau-Meeting
- 0.5 GitHub + VS Code bei allen Entwicklern einrichten
- 16.7 Festlegen welche Inhaltsbereiche ins CMS kommen
- 17.7 Entscheidung: Supabase vs. Microsoft Entra für App-Auth
- 18.1 Vercel EU-Hosting / DSGVO-Prüfung (Bob Held)

### Kurzfristig — Prototyp vervollständigen (aktueller statischer Stand)
- 11.1 Impressum erstellen
- 11.2 Datenschutzerklärung erstellen
- 13.1 PayPal-Button-ID eintragen
- 9.1–9.3 Stellenangebote-Seiten anlegen
- 3.5–3.6 PDF-Downloads bereitstellen
- 7.1–7.5 Jugendhilfe vollständig ausbauen

### Mittelfristig — Produktions-Stack aufbauen
- 0.1–0.4 Migration zu Next.js + Sanity
- 16.1–16.5 CMS-Schema und Redaktionsworkflow
- 18.2–18.5 AV-Verträge, 2FA, Sicherheitskonzept
- 12.3 Formular-Backend (Drittanbieter, DSGVO-konform)

### Längerfristig — Wachstum & neue Produkte
- 17.1–17.10 Baustellenabwicklungs-App (PWA)
- 10.2 Blog-Kategoriefilter
- 2.7 Imagefilm Startseite
- 14.2 Schema.org strukturierte Daten
- 13.3 Dauerspenden
