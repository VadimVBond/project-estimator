---
publishDate: 2026-03-30T00:00:00Z
title: "Content Scaling Problems and How I Solved Them"
excerpt: "An architectural breakdown of content scaling issues in a multilingual Astro project and the collection-based model used to solve them."
image: ../content-scaling-architecture-cover.svg
category: Documentation
tags: [architecture, astro, content, i18n, scalability]
metadata:
  canonical: https://astrowind.vercel.app/en/astrowind_pf_blog_content_scaling_architecture
---

# 1. Context

![Content architecture cover](../content-scaling-architecture-cover.svg)

The project is a multilingual Astro platform with a technical blog, documentation, and portfolio sections. Because everything is statically generated, the content model affects much more than authoring convenience. It directly impacts SEO, routing, URL predictability, and long-term maintainability.

The model had to satisfy several requirements:

- locale isolation without chaotic duplication;
- one routing strategy for all languages;
- predictable SEO structure;
- easy addition of new languages without core refactoring;
- maintainability without introducing CMS-level complexity.

At the beginning, the structure was linear. Articles were added one by one, and localization was handled by copying files. That worked while the amount of content was small. Once both articles and locales started growing, the architectural limits became obvious.

---

# 2. Problem

![File growth and content drift](../content-scaling-architecture-problem.svg)

The main issues appeared quickly:

1. Every new language increased the number of files proportionally.
2. Navigation and article lists could drift between locales.
3. Frontmatter was duplicated and started diverging.
4. SEO fields required manual review.
5. The project structure became less predictable over time.

The model of treating each localized article as an independent entity did not scale well, because the real cost was not writing content but maintaining structure.

---

# 3. Constraints

The solution had to respect real technical boundaries:

1. Static generation only, with no server-side logic.
2. Clear locale-specific URLs.
3. Minimal manual synchronization.
4. The ability to add languages without rewriting routes.
5. An implementation simple enough for normal engineering workflows.

In practice, this meant choosing an architecture that stays simple in daily use while remaining stable as the amount of content grows.

---

# 4. Options Considered

## Option 1: Full directory duplication by locale

```text
content/
  ru/
  en/
  uk/
  it/
```

Pros:

- simple initial implementation;
- obvious language isolation.

Cons:

- linear file growth;
- high risk of version drift;
- repeated metadata;
- manual synchronization of structure.

This approach became too expensive to maintain.

## Option 2: One source with translations through dictionaries

Content lives in one file and strings are translated through an i18n dictionary.

Cons:

- not suitable for long-form articles;
- weak editorial independence for locales;
- poor fit for SEO adaptation of substantial content;
- uncomfortable authoring flow for Markdown-heavy articles.

For engineering posts, this model was too fragile.

## Option 3: Astro content collections with locale separation

Use content collections with typed frontmatter and a shared file naming convention.

Pros:

- one data schema;
- validation of required fields;
- predictable route generation;
- the ability to group translations by a shared slug.

This became the base strategy.

---

# 5. Selected Approach

![Hybrid collection and locale model](../content-scaling-architecture-solution.svg)

The final model is hybrid:

1. All articles live in one `post` collection.
2. Locale is determined by the locale directory.
3. The same article uses the same basename across all locales.
4. Translations are linked through the common slug.
5. Navigation and blog listings are generated from the collection.

Example structure:

```text
src/content/post/
  ru/astrowind_pf_blog_content_scaling_architecture.md
  en/astrowind_pf_blog_content_scaling_architecture.md
  uk/astrowind_pf_blog_content_scaling_architecture.md
  it/astrowind_pf_blog_content_scaling_architecture.md
```

This keeps locale content isolated while centralizing routing, tags, and SEO logic.

---

# 6. Implementation Details

## 6.1. Collection schema

The `post` collection schema in `src/content/config.ts` defines the accepted frontmatter shape and prevents articles from drifting into arbitrary metadata formats.

That removes an entire class of content errors at build time.

## 6.2. Slug and tag normalization

The project computes slug, permalink, category, and tags centrally in `src/utils/blog.ts`.

That provides:

- one normalization rule for every locale;
- automatic tag-safe routing.

## 6.3. Translation grouping

Localized versions are grouped by the shared slug fragment:

```ts
const commonSlugs = [...new Set(posts.map((post) => post.slug.split('/')[1]))];
```

Once that grouping exists, locale-specific routes and post lists can be built without any extra manual mapping.

## 6.4. Automatic inclusion in the blog

The main blog index and the latest-posts widgets both read from the collection directly.

That means a new article:

- appears in the blog list automatically;
- can show up in latest posts based on publish date;
- lands on tag pages without manual menu updates.

---

# 7. Trade-offs

The chosen model has a cost:

1. Build-time logic becomes slightly more sophisticated.
2. File naming must stay consistent across locales.
3. Frontmatter discipline becomes mandatory.

That complexity is still much cheaper than ongoing manual synchronization.

---

# 8. Result

The practical outcome is clear:

1. Adding a new language does not require a blog architecture rewrite.
2. URL structure remains predictable.
3. Tags and categories are built centrally.
4. Navigation stays synchronized automatically.
5. The number of failure points decreases.

At that point, scaling depends mostly on the number of articles, not on repeated architectural changes.

---

# 9. Conclusions

This led to a few durable lessons:

1. Content scaling is a data-structure problem, not just a volume problem.
2. Duplication destroys maintainability faster than it appears at the start.
3. Typed frontmatter is valuable even in Markdown-first projects.
4. Grouping translations by a shared slug creates a stable localization model.
5. Static generation scales well when the content architecture is designed intentionally.

That is why blog architecture decisions should be made for future expansion, not only for the current amount of content.
