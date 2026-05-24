---
publishDate: 2023-01-29T00:00:00Z
title: "Warum MkDocs nicht nur fuer Dokumentation geeignet ist"
excerpt: "Eine Analyse des Einsatzes von MkDocs fuer Webprojekte mit nicht standardmaessiger Inhaltsstruktur und Komponenten."
image: ../../../assets/images/posts/mkdocs/mkdocs-overview.png
category: Documentation
tags: [MkDocs, architecture, frontend, Python, static site]
metadata:
  canonical: https://astrowind.vercel.app/de/mkdocs_extended_article
---

## 1. Kontext

MkDocs wird traditionell fuer Projektdokumentation verwendet. Seine Standardstruktur ist auf linearen Content ausgelegt und schraenkt Frontend-Anpassungen sowie Mehrsprachigkeit ein. Mit steigenden Anforderungen an interaktive Websites lohnt sich ein breiterer Blick auf MkDocs.

## 2. Problem

MkDocs soll fuer Projekte genutzt werden, die ueber reine Dokumentation hinausgehen, waehrend statische Generierung, Mehrsprachigkeit, dynamische Elemente und die Trennung zwischen globalen und lokalen Stilen erhalten bleiben.

Die zentrale Einschraenkung: MkDocs bietet kein vollwertiges Komponentensystem.

## 3. Randbedingungen

- keine native Dynamik;
- begrenzte Template-Moeglichkeiten;
- SEO und URLs haengen vom Generator ab;
- Navigation grosser Projekte wird komplex.

## 4. Gepruefte Optionen

1. React oder Next.js wurden wegen zu hoher Komplexitaet verworfen.
2. Astro mit Markdown wurde wegen Integrationsaufwand verworfen.
3. MkDocs mit eigenen Includes und Bloecken wurde gewaehlt, da es Markdown beibehält und dennoch interaktive Elemente erlaubt.

## 5. Gewaehlter Ansatz

- `overrides/base.html` fuer die Seitenstruktur;
- `overrides/includes/blocks/` fuer wiederverwendbare UI-Bloecke;
- Header- und Footer-Includes fuer Sprachen- und Theme-Umschaltung;
- `docs/` fuer Inhalte nach Sprache.

Content wird von Darstellung getrennt, und Bloecke koennen ohne Kernanpassungen eingebunden werden.

## 6. Umsetzungsdetails

1. Mehrsprachigkeit ueber automatisch generierte Navigation.
2. Komponenten als separate HTML-Dateien mit lokalen Styles und JS.
3. Interaktive Elemente ueber leichtgewichtige Bibliotheken und JSON-Daten.
4. SEO ueber individuelle Meta-Tags im Basislayout.

## 7. Trade-offs

MkDocs bietet einfache Deployments und leichtgewichtige Seiten, verlangt aber Disziplin bei Navigation, Includes und begrenzter Dynamik.

## 8. Ergebnis

- Mehrsprachigkeit und SEO-Unterstuetzung;
- wiederverwendbare Komponenten;
- interaktive Elemente ohne komplexe Build-Pipeline;
- Skalierbarkeit ueber `overrides/includes`.

## 9. Schlussfolgerungen

MkDocs eignet sich auch fuer Content-Websites mit begrenzter Interaktivitaet. Entscheidend sind die saubere Trennung von Content, Templates und Includes sowie ein disziplinierter Aufbau der Block-Struktur.
