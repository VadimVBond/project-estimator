---
publishDate: 2026-03-30T00:00:00Z
title: "How I Built a Multilingual Site Without a CMS"
excerpt: "Architectural breakdown of building a multilingual static site without using a CMS. Structure, limitations, SEO, and trade-offs."
image: https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=2000&q=80
category: Documentation
tags: [architecture, static-sites, i18n, seo, astro, mkdocs]
metadata:
  canonical: https://astrowind.vercel.app/en/multilingual_site_architecture
---

# 1. Context

![Static Site](https://images.unsplash.com/photo-1554130916-c2aebf8c8770)

The goal is to create a portfolio project and an engineering blog without using a CMS.

Requirements:

- Full static generation
- Support for several languages
- Content in Markdown
- Control over URL structure
- Minimization of runtime logic
- Predictable SEO architecture

Stack:

- MkDocs for documentation sections
- Astro for portfolio and blog parts
- Tailwind / Bootstrap depending on the task

The project was designed to be extensible and CDN-compatible.

---

# 2. Problem

![CMS vs Static](https://images.unsplash.com/photo-1559526324-593bc073d938)

Most multilingual sites are built on a CMS:

- WordPress + plugins
- Headless CMS
- Strapi / Contentful

The problem with this approach:

- Overkill for a portfolio
- Infrastructure complexity
- API dependence
- Increased point of failure
- Runtime dependence

Task: implement multilingualism without a database and without an administrative panel.

---

# 3. Limitations

![Limitations](https://images.unsplash.com/photo-1581091870629-33b3c9f2c55e)

- Full static generation (SSG)
- Absence of an application server
- SEO compatibility
- Possibility of hosting on a CDN
- Control of canonical and hreflang
- Minimization of structure duplication

---

# 4. Options Considered

## Option A — Directory Segregation

```
/en/
/ru/
/uk/
```

Pros:
- Simple logic
- Explicit separation

Cons:
- Structure duplication
- Increased risk of out-of-sync content
- Growth of support complexity

Rejection: high cost of maintenance when scaling.

## Option B — Headless CMS

Pros:
- Management via UI
- Data centralization

Cons:
- Architecture complexity
- API dependence
- Loss of static simplicity
- Redundancy for a portfolio

Rejection: unjustified complexity.

## Option C — Content collections with lang-field (Selected)

```
src/content/blog/article.ru.md
src/content/blog/article.en.md
```

Pros:
- Single layout
- Common slug
- Centralized SEO control
- Easy scaling

Cons:
- Discipline in naming conventions is required
- No automatic synchronization of translations

![Content Collections](https://images.unsplash.com/photo-1590608897129-79cfef5b9f3f)

---

# 5. Chosen Approach

The key idea is language as a content attribute, rather than as a structural folder.

Each article:
- has a single slug
- differs only in `lang`
- is generated in the `/ru/slug` space (or `/en/slug`, etc.)

This allows:
- centralized SEO
- managing hreflang
- not duplicating layouts
- maintaining static simplicity

![SEO and hreflang](https://images.unsplash.com/photo-1537432376769-00a4c61f2010)

---

# 6. Implementation Details

## Structure

```bash
src/
  content/
    blog/
      multilingual-architecture.ru.md
      multilingual-architecture.en.md
```

## Frontmatter

```yaml
lang: ru # or en, etc.
slug: multilingual-architecture
```

## Route Generation
- Getting all articles
- Grouping by slug
- Generating alternate links

## SEO
- Canonical for each language version
- Automatic hreflang generation
- Exclusion of drafts from indexing

## Navigation
- Automatic generation based on content collections
- Without manual structure duplication

![Routes and Navigation](https://images.unsplash.com/photo-1557804506-669a67965ba0)

---

# 7. Trade-offs

1. No administrative interface
2. No live translations
3. No runtime language switching
4. Required structure discipline

Architecture simplifies the infrastructure but requires engineering rigor.

---

# 8. Result

- Fully static site
- SEO-correct multilingualism
- Minimal point of failure
- Predictable scalability

Supports:
- 50+ articles
- 3+ languages
- expansion to documentation section

![Result](https://images.unsplash.com/photo-1522202176988-66273c2fd55f)

---

# 9. Conclusions and Lessons Learned

Multilingualism does not require a CMS.

If:
- volume of content is limited
- there are no requirements for runtime editing
- predictability of architecture is important

The static approach proves to be more sustainable.

Key factor — discipline in content organization and slug conventions.
