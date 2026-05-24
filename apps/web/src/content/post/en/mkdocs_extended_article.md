---
publishDate: 2026-03-29T00:00:00Z
title: "Why MkDocs is Suitable Not Only for Documentation"
excerpt: "Analysis of using MkDocs for web projects with non-standard content structure and components."
image: "../../../assets/images/posts/mkdocs/mkdocs-overview.png"
category: Documentation
tags: ["MkDocs", "architecture", "frontend", "Python", "static site"]
metadata:
  canonical: https://astrowind.vercel.app/en/mkdocs_extended_article
---

## 1. Context
![MkDocs project structure](../../../assets/images/posts/mkdocs/mkdocs-folder-structure.png)
MkDocs is traditionally used for project documentation. Its structure (`docs/`, `mkdocs.yml`) is oriented towards linear content, limiting frontend customization and multi-language content. With the growing demand for interactive sites, there is a need to consider MkDocs for broader tasks.

## 2. Problem
![Integration problem](../../../assets/images/posts/mkdocs/mkdocs-problem.png)
It is necessary to use MkDocs for projects that go beyond documentation, while maintaining:
- Static nature and ease of deployment
- Multilingual support
- Possibility of dynamic components
- Separation of global and local styles

Limitation: MkDocs does not provide a full-fledged component system.

## 3. Limitations
![MkDocs Limitations](../../../assets/images/posts/mkdocs/mkdocs-limitations.png)
- No native dynamics
- Limited template capabilities (Jinja2 + Markdown)
- SEO and URLs depend on the generator
- Complexity of navigation in large projects

## 4. Options Considered
![Alternative solutions](../../../assets/images/posts/mkdocs/mkdocs-alternatives.png)
1. React/Next.js — SSR and components, rejected due to excessive complexity.
2. Astro + Markdown — flexible generation, rejected due to integration complexity.
3. MkDocs with custom includes and blocks — selected approach: maintains Markdown, allows interactive elements and multilingualism.

## 5. Chosen Approach
![MkDocs Architecture Diagram](../../../assets/images/posts/mkdocs/mkdocs-architecture-diagram.png)
- `overrides/base.html` — page structure
- `overrides/includes/blocks/` — reusable UI blocks
- `overrides/includes/headers/` and `footers/` — language and theme switchers
- `docs/` — content by language (`en/`, `ru/`, `uk/`)

Content is separated from presentation, blocks can be connected without modifying the core.

## 6. Implementation Details
1. Multilingualism: nav is formed by a script, include blocks with flags.
2. Components: separate HTML files with local styles and JS, global styles in assets/css.
3. Interactive elements: Swiper sliders, filters with JSON.
4. SEO: separate URLs for each language, meta tags via base.html.

## 7. Trade-offs
![Trade-offs](../../../assets/images/posts/mkdocs/mkdocs-tradeoffs.png)
| Factor | Pros | Cons |
|--------|-------|--------|
| Deployment | Static site | Limited dynamics |
| Multilingualism | Clear structure | Nav generation script needed |
| Components | Reusability | No full component system |
| SEO | Manual meta tag setup | No SSR |
| Performance | Lightweight pages | JS for interactivity increases size |

## 8. Result
![Implementation result](../../../assets/images/posts/mkdocs/mkdocs-result.png)
- Multilingualism and SEO support
- Reusable components
- Interactive elements without complex builds
- Scalability through `overrides/includes`

## 9. Conclusions and Lessons
![Conclusions](../../../assets/images/posts/mkdocs/mkdocs-lessons.png)
- MkDocs is suitable for content sites with interactivity
- Separation of content, templates, and blocks is critical for extensibility
- Dynamics limitations are compensated by minimal JS and JSON
- Maintainability depends on discipline in organizing include blocks
