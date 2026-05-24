---
publishDate: 2026-03-30T00:00:00Z
title: "Wie ich eine mehrsprachige Website ohne CMS gebaut habe"
excerpt: "Eine architektonische Analyse zum Aufbau einer mehrsprachigen statischen Website ohne CMS. Struktur, Randbedingungen, SEO und Trade-offs."
image: https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=2000&q=80
category: Documentation
tags: [architecture, static-sites, i18n, seo, astro, mkdocs]
metadata:
  canonical: https://astrowind.vercel.app/de/multilingual_site_architecture
---

# 1. Kontext

Ziel war es, ein Portfolio-Projekt und einen Engineering-Blog ohne CMS aufzubauen.

Anforderungen:

- vollstaendige statische Generierung;
- Unterstuetzung fuer mehrere Sprachen;
- Content in Markdown;
- Kontrolle ueber die URL-Struktur;
- minimale Runtime-Logik;
- vorhersehbare SEO-Architektur.

Der Stack kombiniert MkDocs fuer Dokumentation und Astro fuer Portfolio und Blog. Die Architektur sollte erweiterbar bleiben und sich gut auf CDN-Hosting abbilden lassen.

---

# 2. Problem

Die meisten mehrsprachigen Websites basieren auf einem CMS wie WordPress, Headless-CMS-Systemen oder Plattformen wie Strapi und Contentful.

Fuer ein Portfolio mit technischem Content fuehrt dieser Ansatz jedoch oft zu:

- unnötiger Komplexitaet;
- staerkerer Infrastrukturbindung;
- API-Abhaengigkeit;
- mehr Ausfallpunkten;
- zusaetzlicher Runtime-Abhaengigkeit.

Die Aufgabe bestand darin, Mehrsprachigkeit ohne Datenbank und ohne Administrationsoberflaeche zu realisieren.

---

# 3. Randbedingungen

- vollstaendige statische Generierung;
- kein Application-Server;
- SEO-Kompatibilitaet;
- Hosting auf CDN moeglich;
- Kontrolle ueber canonical und hreflang;
- moeglichst geringe Strukturdopplung.

---

# 4. Gepruefte Optionen

## Option A: Sprachverzeichnisse

`/en/`, `/ru/`, `/uk/`, `/it/`, `/de/`, `/fr/`

Vorteile:

- einfache Logik;
- explizite Trennung.

Nachteile:

- starke Strukturduplizierung;
- hohes Risiko fuer asynchrone Inhalte;
- steigende Support-Komplexitaet.

## Option B: Headless CMS

Vorteile:

- Content-Management ueber UI;
- zentrale Datenhaltung.

Nachteile:

- architektonische Komplexitaet;
- API-Abhaengigkeit;
- Verlust statischer Einfachheit;
- Ueberdimensionierung fuer ein Portfolio.

## Option C: Content Collections mit Sprachfeld

Ein gemeinsamer Slug und Sprachversionen auf Dateiebene. Diese Option wurde gewaehlt, weil sie Layouts, SEO und Routen zentralisierbar macht, ohne die statische Einfachheit zu verlieren.

---

# 5. Gewaehlter Ansatz

Der zentrale Gedanke lautet: Sprache ist ein Inhaltsattribut und nicht nur ein Strukturordner.

Jeder Artikel:

- besitzt einen gemeinsamen Slug;
- unterscheidet sich ueber `lang` bzw. Locale-Kontext;
- wird in einem sprachspezifischen URL-Raum ausgegeben.

Das erlaubt zentrales SEO-Management, hreflang-Kontrolle und statische Einfachheit ohne Layout-Duplizierung.

---

# 6. Umsetzungsdetails

## Struktur

Content-Dateien werden als Varianten desselben Artikels pro Sprache organisiert.

## Frontmatter

Sprache und Slug definieren die Lokalisierung und die Gruppierung der Varianten.

## Routing

Alle Artikel werden geladen, nach gemeinsamem Slug gruppiert und fuer die einzelnen Sprachen erzeugt.

## SEO

Jede Sprachversion erhaelt ihren eigenen Canonical-Link, hreflang wird automatisch aus der Gruppe erzeugt und Drafts werden von der Indexierung ausgeschlossen.

## Navigation

Die Navigation wird automatisch aus den Content Collections erzeugt, ohne manuelle Strukturdopplung.

---

# 7. Trade-offs

1. Keine Administrationsoberflaeche.
2. Keine Live-Uebersetzungen.
3. Kein Runtime-Sprachwechsel auf Inhaltsebene.
4. Hoher Bedarf an Strukturdisziplin.

Die Architektur vereinfacht die Infrastruktur, verlangt aber saubere Engineering-Regeln.

---

# 8. Ergebnis

- vollstaendig statische Website;
- SEO-korrekte Mehrsprachigkeit;
- minimale Ausfallpunkte;
- vorhersehbare Skalierbarkeit.

Der Ansatz kann problemlos auf mehr Artikel, mehr Sprachen und weitere Dokumentationsbereiche erweitert werden.

---

# 9. Schlussfolgerungen

Mehrsprachigkeit braucht nicht zwingend ein CMS. Wenn Content-Umfang beherrschbar bleibt, kein Runtime-Editing benoetigt wird und architektonische Vorhersehbarkeit wichtig ist, ist ein statischer Ansatz nachhaltiger und robuster.
