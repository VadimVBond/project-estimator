---
publishDate: 2026-03-30T00:00:00Z
title: "Automation of Navigation and Content in Markdown Projects"
excerpt: "Architectural approach to generating navigation and structuring content in multilingual Markdown projects."
image: ../auto-navigation-markdown-cover.svg
category: Documentation
tags: [markdown, architecture, automation, i18n, static-site]
metadata:
  canonical: https://astrowind.vercel.app/en/astrowind_pf_blog_auto_navigation_markdown
---

# 1. Context

In projects based on Markdown (documentation, technical blogs, portfolios, internal knowledge bases), navigation is often formed manually. When scaling the structure — adding languages, sections, nested categories — maintaining the menu becomes a separate task.

With multiple languages, reusable components, and several page types (articles, cases, documentation), manual navigation synchronization ceases to be a sustainable solution.

The goal is to form an architecture where the project structure becomes the source of truth, and navigation and auxiliary data are generated automatically.

---

# 2. Problem

Main symptoms:

- Duplication of structure in configurations.
- Discrepancy between the file system and the menu.
- Manual synchronization when adding languages.
- Growth in the number of errors during refactoring.
- Loss of URL consistency.

In multilingual projects, the problem is intensified: the same hierarchy must be maintained in several directories.

---

# 3. Limitations

- Markdown remains the primary source of content.
- Manual editing of navigation in several places is not allowed.
- The structure must be scalable.
- Support for SEO (readable URLs, link stability).
- Minimal dependence on external plugins.
- Possibility of AI integration into the generation and verification process.

---

# 4. Options Considered

## Option 1: Fully Manual Configuration

Navigation is described in a YAML/JSON configuration.

Pros:
- Full order control.

Cons:
- Duplication.
- High probability of being out of sync.
- Low scalability.

The solution was rejected due to high operational load.

---

## Option 2: Automatic Generation Based on File Structure

The menu is built by scanning directories.

Pros:
- No duplication.
- File system is the source of truth.

Cons:
- Loss of order control.
- Limited flexibility.

The solution was partially accepted.

---

## Option 3: Metadata in Frontmatter + Navigation Generator

Each Markdown file contains structural parameters:

- order
- section
- lang
- slug

The generator forms a tree based on metadata.

Pros:
- Order control.
- Multilingual support.
- Extensibility.

Cons:
- An additional processing layer is required.

Selected as the primary approach.

---

# 5. Chosen Approach

The architecture consists of three levels:

1. File structure — base hierarchy.
2. Frontmatter — declarative metadata.
3. Navigation generator — a script that forms the structure.

The file system defines the sections, and the metadata determines the order and logical grouping.

Project structure:

```
content/
  en/
    blog/
    docs/
  ru/
    blog/
    docs/
scripts/
  generate-navigation.ts
```

Generator:
- Scans directories.
- Reads frontmatter.
- Builds a tree.
- Exports JSON.

---

# 6. Implementation Details

## 6.1. Frontmatter Format

```
---
title: "Article"
order: 2
section: "architecture"
lang: "en"
slug: "auto-navigation"
---
```

## 6.2. Generation Algorithm

1. Recursive directory scanning.
2. Grouping by languages.
3. Grouping by section.
4. Sorting by order.
5. Structure generation:

```
{
  "en": {
    "architecture": [ ... ]
  }
}
```

## 6.3. Build Integration

- Script runs before the build.
- JSON is imported into the layout.
- The menu is formed dynamically.

## 6.4. AI in the Workflow

- Metadata consistency check.
- Search for missing slugs.
- Order conflict analysis.

AI is used as a validation tool, not a source of structure.

---

# 7. Trade-offs

| Decision | Advantage | Limitation |
|----------|--------------|-------------|
| Auto-generation | No duplication | Additional processing layer |
| Frontmatter | Order control | Requires discipline |
| JSON-export | Clean architecture | Synchronization during build is necessary |

The main trade-off is an increase in infrastructure complexity for stability and scalability.

---

# 8. Result

- Structure became the source of truth.
- Adding a new language does not require a configuration change.
- Manual menu updates are excluded.
- Number of errors during refactoring is reduced.
- URL predictability is increased.

Navigation scales linearly with project growth.

---

# 9. Conclusions and Lessons Learned

1. File structure must be declarative.
2. Metadata must control logic, not configurations.
3. Automation is justified with project growth.
4. AI is useful as a verification tool, but not as an architecture source.
5. Stability is more important than local convenience.

Navigation automation is not an optimization, but a transition to a managed architecture for Markdown projects.

