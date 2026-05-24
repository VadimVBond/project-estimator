---
publishDate: 2026-03-30T00:00:00Z
title: "Comment j'ai construit un site multilingue sans CMS"
excerpt: "Une analyse architecturale de la construction d'un site statique multilingue sans CMS. Structure, contraintes, SEO et compromis."
image: https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=2000&q=80
category: Documentation
tags: [architecture, static-sites, i18n, seo, astro, mkdocs]
metadata:
  canonical: https://astrowind.vercel.app/fr/multilingual_site_architecture
---

# 1. Contexte

L'objectif etait de construire un portfolio et un blog d'ingenierie sans CMS.

Exigences :

- generation statique complete ;
- support de plusieurs langues ;
- contenu en Markdown ;
- controle de la structure d'URL ;
- logique runtime minimale ;
- architecture SEO previsible.

La pile combine MkDocs pour la documentation et Astro pour le portfolio et le blog. L'architecture devait rester extensible et bien adaptee a un hebergement CDN.

---

# 2. Probleme

La plupart des sites multilingues reposent sur un CMS comme WordPress, des headless CMS ou des plateformes comme Strapi et Contentful.

Pour un portfolio avec contenu technique, cette approche introduit souvent :

- une complexite inutile ;
- une dependance accrue a l'infrastructure ;
- une dependance aux API ;
- davantage de points de panne ;
- une dependance runtime supplementaire.

Le but etait donc d'implementer le multilinguisme sans base de donnees et sans interface d'administration.

---

# 3. Contraintes

- generation statique complete ;
- absence de serveur applicatif ;
- compatibilite SEO ;
- hebergement possible sur CDN ;
- controle de canonical et hreflang ;
- duplication structurelle minimale.

---

# 4. Options considerees

## Option A : dossiers par langue

`/en/`, `/ru/`, `/uk/`, `/it/`, `/de/`, `/fr/`

Avantages :

- logique simple ;
- separation explicite.

Inconvenients :

- forte duplication de structure ;
- risque eleve de derive entre contenus ;
- complexite de maintenance croissante.

## Option B : headless CMS

Avantages :

- gestion via une interface ;
- centralisation des donnees.

Inconvenients :

- complexite architecturale ;
- dependance aux API ;
- perte de simplicite statique ;
- surdimensionnement pour un portfolio.

## Option C : content collections avec champ de langue

Un slug partage et des variantes par langue au niveau des fichiers. Cette option a ete retenue car elle permet de centraliser layouts, SEO et routes tout en gardant la simplicite statique.

---

# 5. Approche retenue

L'idee centrale est simple : la langue est un attribut du contenu, pas seulement un dossier de structure.

Chaque article :

- possede un slug commun ;
- se distingue par `lang` ou le contexte de locale ;
- est genere dans un espace d'URL propre a la langue.

Cela permet une gestion centralisee du SEO, du hreflang et des layouts sans duplication inutile.

---

# 6. Details d'implementation

## Structure

Les fichiers de contenu sont organises comme des variantes du meme article pour chaque langue.

## Frontmatter

La langue et le slug definissent la localisation et le regroupement des variantes.

## Routage

Tous les articles sont charges, regroupes par slug commun et generes pour chaque langue.

## SEO

Chaque version linguistique recoit son canonical, le hreflang est genere automatiquement et les drafts sont exclus de l'indexation.

## Navigation

La navigation est produite automatiquement a partir des content collections sans duplication manuelle de structure.

---

# 7. Trade-offs

1. Pas d'interface d'administration.
2. Pas de traduction en direct.
3. Pas de changement de langue runtime pour le contenu.
4. Forte exigence de discipline structurelle.

L'architecture simplifie l'infrastructure mais demande des regles d'ingenierie claires.

---

# 8. Resultat

- site entierement statique ;
- multilinguisme correct du point de vue SEO ;
- nombre minimal de points de panne ;
- scalabilite previsible.

Cette approche peut etre etendue a davantage d'articles, de langues et de sections documentaires.

---

# 9. Conclusions

Le multilinguisme ne necessite pas forcement un CMS. Quand le volume de contenu reste maitrisable, qu'aucune edition runtime n'est requise et que la previsibilite architecturale est importante, une approche statique est plus durable et plus robuste.
