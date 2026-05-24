---
publishDate: 2026-03-30T00:00:00Z
title: "Automatisierung von Navigation und Content in Markdown-Projekten"
excerpt: "Ein architektonischer Ansatz zur Generierung von Navigation und Strukturierung von Content in mehrsprachigen Markdown-Projekten."
image: ../auto-navigation-markdown-cover.svg
category: Documentation
tags: [markdown, architecture, automation, i18n, static-site]
metadata:
  canonical: https://astrowind.vercel.app/de/astrowind_pf_blog_auto_navigation_markdown
---

# 1. Kontext

In Markdown-basierten Projekten wie Dokumentation, technischen Blogs, Portfolios oder internen Wissensbasen wird Navigation oft manuell gepflegt. Sobald die Struktur mit Sprachen, Bereichen und verschachtelten Kategorien waechst, wird die Pflege des Menues selbst zu einem separaten Problem.

Mit mehreren Sprachen, wiederverwendbaren Komponenten und unterschiedlichen Seitentypen wird manuelle Synchronisierung der Navigation nicht mehr tragfaehig. Ziel ist eine Architektur, in der die Projektstruktur zur Quelle der Wahrheit wird und Navigation sowie Hilfsdaten automatisch generiert werden.

---

# 2. Problem

Typische Symptome sind:

- duplizierte Struktur in Konfigurationen;
- Abweichungen zwischen Dateisystem und Menu;
- manuelle Synchronisierung beim Hinzufuegen von Sprachen;
- mehr Fehler bei Refactorings;
- Verlust konsistenter URLs.

In mehrsprachigen Projekten verschärft sich das Problem, weil dieselbe Hierarchie in mehreren Verzeichnissen erhalten bleiben muss.

---

# 3. Randbedingungen

- Markdown bleibt die primaere Quelle des Contents.
- Navigation darf nicht an mehreren Stellen manuell gepflegt werden.
- Die Struktur muss skalierbar bleiben.
- SEO-relevante URLs muessen stabil und lesbar sein.
- Die Abhaengigkeit von externen Plugins soll gering bleiben.
- AI muss sich in Generierung und Validierung integrieren lassen.

---

# 4. Gepruefte Optionen

## Option 1: Vollstaendig manuelle Konfiguration

Navigation wird in YAML- oder JSON-Dateien beschrieben.

Vorteile:

- volle Kontrolle ueber die Reihenfolge.

Nachteile:

- Duplizierung;
- hohes Risiko fuer Inkonsistenzen;
- geringe Skalierbarkeit.

## Option 2: Automatische Generierung aus der Dateistruktur

Das Menu wird durch Scannen von Verzeichnissen aufgebaut.

Vorteile:

- keine Duplizierung;
- Dateisystem als Quelle der Wahrheit.

Nachteile:

- weniger Kontrolle ueber Reihenfolgen;
- eingeschraenkte Flexibilitaet.

Diese Option wurde teilweise uebernommen.

---

# 5. Gewaehlter Ansatz

Die Navigation wird ueber eine hybride Strategie aufgebaut:

1. Die Verzeichnisstruktur definiert die Grundhierarchie.
2. Metadaten im Markdown verfeinern Titel, Reihenfolge und SEO.
3. Routengenerierung und Hilfsstrukturen werden automatisch aufgebaut.
4. Sprachversionen folgen derselben strukturellen Logik.

So bleibt die Architektur stabil, waehrend Redakteure und Entwickler trotzdem ausreichend Kontrolle behalten.

---

# 6. Umsetzungsdetails

## 6.1 Struktur als Quelle der Wahrheit

Dateien und Ordner definieren die Basishierarchie. Dadurch spiegelt die Navigation die reale Inhaltsstruktur wider und muss nicht separat reproduziert werden.

## 6.2 Metadaten fuer Feinkorrekturen

Frontmatter kann Titel, Prioritaet, Sichtbarkeit oder weitere Hilfsinformationen enthalten. So bleibt die Navigation automatisch und zugleich steuerbar.

## 6.3 Mehrsprachige Konsistenz

Sprachverzeichnisse folgen demselben Muster. Damit bleibt die Logik fuer Slugs, Menues und Breadcrumbs ueber alle Lokalen hinweg konsistent.

## 6.4 AI-gestuetzte Validierung

AI kann eingesetzt werden, um fehlende Navigationspunkte, strukturelle Inkonsistenzen und unlogische Gruppierungen frueh zu erkennen. Entscheidungen ueber Architektur bleiben jedoch beim Entwickler.

---

# 7. Trade-offs

1. Vollautomatik reduziert direkten manuellen Einfluss.
2. Eine strukturgetriebene Navigation verlangt Disziplin in Dateinamen und Verzeichnissen.
3. Mehrsprachigkeit erhoeht weiter den Pflegeaufwand.

Dafuer sinken Duplizierung, Inkonsistenz und Wartungskosten deutlich.

---

# 8. Ergebnis

Mit diesem Ansatz wird die Projektstruktur selbst zur zentralen Quelle fuer Navigation und Hilfsdaten. Das reduziert Synchronisationsfehler, vereinfacht Refactorings und verbessert die Vorhersehbarkeit des Systems.

---

# 9. Schlussfolgerungen

1. Navigation sollte aus der Struktur abgeleitet werden, nicht aus mehreren manuellen Konfigurationen.
2. Markdown-Projekte brauchen klare Regeln fuer Hierarchie und Benennung.
3. Mehrsprachigkeit funktioniert besser, wenn sie strukturell verankert ist.
4. AI ist fuer Validierung und Beschleunigung nuetzlich, ersetzt aber keine Architekturentscheidungen.
5. Gute Navigation ist ein Ergebnis guter Informationsarchitektur.
