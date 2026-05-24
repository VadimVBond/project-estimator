---
publishDate: 2023-01-29T00:00:00Z
title: "Pourquoi MkDocs ne convient pas uniquement a la documentation"
excerpt: "Une analyse de l'utilisation de MkDocs pour des projets web avec une structure de contenu et des composants non standards."
image: ../../../assets/images/posts/mkdocs/mkdocs-overview.png
category: Documentation
tags: [MkDocs, architecture, frontend, Python, static site]
metadata:
  canonical: https://astrowind.vercel.app/fr/mkdocs_extended_article
---

## 1. Contexte

MkDocs est traditionnellement utilise pour la documentation de projet. Sa structure standard est orientee vers un contenu lineaire et limite la personnalisation frontend ainsi que le multilinguisme. Avec la demande croissante pour des sites plus interactifs, il devient pertinent d'evaluer MkDocs sur un champ d'usage plus large.

## 2. Probleme

Il faut utiliser MkDocs pour des projets qui depassent la simple documentation tout en conservant la generation statique, le support multilingue, des composants dynamiques et une separation claire entre styles globaux et locaux.

La limite principale est claire : MkDocs ne fournit pas de systeme de composants complet.

## 3. Contraintes

- pas de dynamique native ;
- capacites de template limitees ;
- SEO et URLs dependants du generateur ;
- navigation complexe dans les grands projets.

## 4. Options considerees

1. React ou Next.js ont ete rejetes pour cause de complexite excessive.
2. Astro avec Markdown a ete ecarte a cause du cout d'integration.
3. MkDocs avec includes et blocs personnalises a ete retenu, car il conserve Markdown tout en autorisant des elements interactifs.

## 5. Approche retenue

- `overrides/base.html` pour la structure de page ;
- `overrides/includes/blocks/` pour les blocs UI reutilisables ;
- includes de header et footer pour langue et theme ;
- `docs/` pour les contenus organises par langue.

Le contenu est separe de la presentation, et les blocs peuvent etre relies sans toucher au noyau.

## 6. Details d'implementation

1. Multilinguisme via une navigation generee automatiquement.
2. Composants sous forme de fichiers HTML separes avec styles et JS locaux.
3. Elements interactifs via bibliotheques legeres et JSON.
4. SEO via des meta-tags personnalises dans le layout principal.

## 7. Trade-offs

MkDocs facilite le deploiement et garde des pages legeres, mais exige de la discipline sur la navigation, les includes et la gestion d'une dynamique limitee.

## 8. Resultat

- support du multilinguisme et du SEO ;
- composants reutilisables ;
- elements interactifs sans pipeline de build lourde ;
- scalabilite via `overrides/includes`.

## 9. Conclusions

MkDocs convient aussi a des sites de contenu avec une interactivite limitee. Le point crucial reste la separation propre entre contenu, templates et includes ainsi qu'une organisation rigoureuse des blocs reutilisables.
