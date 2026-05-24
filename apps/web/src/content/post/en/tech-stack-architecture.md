---
publishDate: 2026-03-30T00:00:00Z
title: "Tech Stack in Practice: An Architectural Overview"
excerpt: "An architectural review of the technologies in use, the reasoning behind their selection, and the way they integrate into the workflow."
image: ../tech-stack-architecture-cover.svg
category: Documentation
tags: [architecture, astro, python, ai, workflow]
metadata:
  canonical: https://astrowind.vercel.app/en/tech-stack-architecture
---

# 1. Context

![Tech stack cover](../tech-stack-architecture-cover.svg)

The stack in use is focused on building static and hybrid websites, documentation systems, and Python-based backend services. Its main directions include Astro for frontend orchestration, MkDocs for documentation projects, Python frameworks for API work, and AI tools as a supporting layer for analysis and workflow acceleration.

The goal of this stack is not technological variety on its own. The real objective is architectural control: predictable scaling, reusable components, and a structure that remains coherent as projects become more complex.

---

# 2. Problem

Most small and mid-sized projects run into the same issues:

- fragmented code structure;
- weak reuse strategy;
- lack of systematic multilingual support;
- mixed content, logic, and presentation;
- poor control as the project grows.

There is also the added challenge of integrating AI tools without giving up architectural discipline. The stack needs to stay modular, support different project sizes, and avoid forcing a platform change every time requirements evolve.

---

# 3. Constraints

The technology choices were made under several constraints:

1. Low infrastructure cost.
2. The ability to deploy to edge platforms and static hosting.
3. Minimal dependence on heavy CMS platforms.
4. Clear separation between frontend and backend.
5. The ability to use AI without exposing sensitive data.
6. Manual control over project structure instead of hidden abstractions.

The stack must be manageable at the architectural level, not only at the framework level.

---

# 4. Options Considered

## 4.1 Full SPA approach

Next.js and similar solutions were considered.

Advantages:

- high flexibility;
- mature ecosystem.

Reasons for rejection:

- excessive complexity for most projects;
- heavier infrastructure demands;
- SEO risks when misconfigured.

## 4.2 CMS approach

WordPress and comparable systems were considered.

Advantages:

- fast initial launch;
- many ready-made plugins.

Reasons for rejection:

- weak architectural control;
- limited structural scalability;
- higher technical-debt risk.

## 4.3 Pure backend plus templates

Advantages:

- full control over server logic.

Reasons for rejection:

- duplicated logic;
- weak UI reusability;
- frontend scaling difficulties.

---

# 5. Selected Approach

The selected solution is a hybrid architectural stack:

- Astro as the primary frontend orchestrator;
- MkDocs for documentation and structured content projects;
- Python with Django Ninja, FastAPI, and Flask for APIs and server logic;
- AI tools as a supporting engineering layer.

The key idea is separation of responsibilities.

| Layer | Tool | Role |
| --- | --- | --- |
| UI and content | Astro | Static generation, SEO, page composition |
| Documentation | MkDocs | Structured content and navigation |
| API | Django Ninja / FastAPI | Lightweight typed backend |
| Lightweight services | Flask | Isolated microservices and prototypes |
| AI | Gemini / Copilot / ChatGPT | Support for analysis, drafting, and review |

---

# 6. Implementation Details

## 6.1 Frontend with Astro

The base structure looks like this:

```text
src/
  components/
  layouts/
  pages/
  libs/
  i18n/
public/
```

Key principles:

- components do not depend on specific pages;
- multilingual support is built through folder structure and dictionaries;
- reusable blocks are extracted into `libs/`.

## 6.2 Multilingual strategy

The stack uses:

- structural language separation (`/en/`, `/ru/`, `/uk/`, `/it/`);
- centralized dictionaries;
- explicit routing;
- SEO-oriented URL structure.

The language layer is treated as part of architecture, not as an afterthought.

## 6.3 Python backend

### Django Ninja / FastAPI

Used for:

- JSON APIs;
- administrative services;
- database integration.

The choice is based on:

- performance;
- typing support;
- predictable project structure.

### Flask

Used for:

- lightweight services;
- prototyping;
- isolated microservices.

## 6.4 AI in the workflow

AI is treated as a quality multiplier, not as the source of architecture.

Its roles include:

- generating drafts and repetitive scaffolding;
- strengthening architectural analysis;
- refining technical text and explanations.

AI does not define the project structure. It accelerates execution and adds an additional verification layer.

## 6.5 Component reuse

Components are designed to be:

- independent;
- detached from one specific project;
- style-isolated;
- portable into separate libraries.

The goal is to build an internal reusable component base.

---

# 7. Trade-offs

## 7.1 Astro versus SPA

Pros:

- strong performance;
- direct control over HTML;
- SEO-friendly output.

Cons:

- less built-in interactivity.

Solution: use islands architecture only where interactivity is genuinely required.

## 7.2 Multilingual structure through folders

Pros:

- explicitness;
- SEO transparency.

Cons:

- more files;
- higher maintenance volume.

## 7.3 Backend/frontend separation

Pros:

- independent evolution;
- better scalability.

Cons:

- additional API coordination.

## 7.4 AI integration

Pros:

- faster development;
- better draft quality and phrasing.

Cons:

- risk of shallow solutions;
- ongoing need for engineering review.

---

# 8. Result

The resulting stack:

- enables fast project launch;
- stays predictable in maintenance;
- scales from landing pages to more complex structures;
- remains controllable at the architectural level;
- supports component reuse;
- works well with modern AI-assisted workflows.

The projects still preserve strong performance, clean structure, SEO-oriented organization, and readiness for extension.

---

# 9. Conclusions

1. A tech stack should be selected for architectural compatibility, not for trend value.
2. Ease of maintenance matters more than ecosystem breadth by itself.
3. Multilingual support, SEO, and reuse should be considered at the structural level from the start.
4. AI improves the workflow only when architectural discipline already exists.
5. A strong stack reduces the cost of future changes and allows the project to grow without chaotic complexity.

That is why a good stack is defined not by the number of tools, but by the coherence of their roles inside the system.
