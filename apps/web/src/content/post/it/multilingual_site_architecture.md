---
publishDate: 2026-03-30T00:00:00Z
title: "Come ho costruito un sito multilingue senza CMS"
excerpt: "Analisi architettonica della costruzione di un sito statico multilingue senza l'uso di un CMS. Struttura, limitazioni, SEO e compromessi."
image: https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=2000&q=80
category: Documentation
tags: [architettura, siti-statici, i18n, seo, astro, mkdocs]
metadata:
  canonical: https://astrowind.vercel.app/it/multilingual_site_architecture
---

# 1. Contesto

![Sito Statico](https://images.unsplash.com/photo-1554130916-c2aebf8c8770)

L'obiettivo è creare un progetto portfolio e un blog di ingegneria senza l'uso di un CMS.

Requisiti:

- Generazione statica completa
- Supporto per diverse lingue
- Contenuto in Markdown
- Controllo sulla struttura degli URL
- Minimizzazione della logica di runtime
- Architettura SEO prevedibile

Stack:

- MkDocs per le sezioni di documentazione
- Astro per il portfolio e la parte blog
- Tailwind / Bootstrap a seconda dell'attività

Il progetto è stato progettato per essere estensibile e compatibile con le CDN.

---

# 2. Problema

![CMS vs Statico](https://images.unsplash.com/photo-1559526324-593bc073d938)

La maggior parte dei siti multilingue sono costruiti su un CMS:

- WordPress + plugin
- Headless CMS
- Strapi / Contentful

Il problema di questo approccio:

- Eccessivo per un portfolio
- Complessità dell'infrastruttura
- Dipendenza dalle API
- Aumento dei punti di fallimento
- Dipendenza dal runtime

Obiettivo: implementare il multilinguismo senza database e senza pannello amministrativo.

---

# 3. Limitazioni

![Limitazioni](https://images.unsplash.com/photo-1581091870629-33b3c9f2c55e)

- Generazione statica completa (SSG)
- Assenza di un server applicativo
- Compatibilità SEO
- Possibilità di hosting su una CDN
- Controllo di canonical e hreflang
- Minimizzazione della duplicazione della struttura

---

# 4. Opzioni Considerate

## Opzione A — Segregazione delle Directory

```
/en/
/ru/
/uk/
```

Pro:
- Logica semplice
- Separazione esplicita

Contro:
- Duplicazione della struttura
- Aumento del rischio di contenuti non sincronizzati
- Crescita della complessità del supporto

Rifiuto: alto costo di manutenzione in fase di scalabilità.

## Opzione B — Headless CMS

Pro:
- Gestione tramite interfaccia utente
- Centralizzazione dei dati

Contro:
- Complessità dell'architettura
- Dipendenza dalle API
- Perdita della semplicità statica
- Ridondanza per un portfolio

Rifiuto: complessità ingiustificata.

## Opzione C — Collezioni di contenuti con campo lang (Selezionata)

```
src/content/blog/article.ru.md
src/content/blog/article.en.md
```

Pro:
- Layout unico
- Slug comune
- Controllo SEO centralizzato
- Facilità di scalabilità

Contro:
- È richiesta disciplina nelle convenzioni di denominazione
- Nessuna sincronizzazione automatica delle traduzioni

![Collezioni di Contenuti](https://images.unsplash.com/photo-1590608897129-79cfef5b9f3f)

---

# 5. Approccio Scelto

L'idea chiave è la lingua come attributo del contenuto, piuttosto che come cartella strutturale.

Ogni articolo:
- ha un unico slug
- differisce solo per `lang`
- viene generato nello spazio `/ru/slug` (o `/it/slug`, ecc.)

Questo permette di:
- centralizzare la SEO
- gestire hreflang
- non duplicare i layout
- mantenere la semplicità statica

![SEO e hreflang](https://images.unsplash.com/photo-1537432376769-00a4c61f2010)

---

# 6. Dettagli di Implementazione

## Struttura

```bash
src/
  content/
    blog/
      multilingual-architecture.ru.md
      multilingual-architecture.en.md
```

## Frontmatter

```yaml
lang: ru # o it, ecc.
slug: multilingual-architecture
```

## Generazione delle Rotte
- Ottenere tutti gli articoli
- Raggruppamento per slug
- Generazione di link alternativi

## SEO
- Canonical per ogni versione linguistica
- Generazione automatica di hreflang
- Esclusione dei draft dall'indicizzazione

## Navigazione
- Generazione automatica basata sulle collezioni di contenuti
- Senza duplicazione manuale della struttura

![Rotte e Navigazione](https://images.unsplash.com/photo-1557804506-669a67965ba0)

---

# 7. Compromessi

1. Nessuna interfaccia amministrativa
2. Nessuna traduzione in tempo reale
3. Nessun cambio di lingua a runtime
4. Disciplina della struttura richiesta

L'architettura semplifica l'infrastruttura ma richiede rigore ingegneristico.

---

# 8. Risultato

- Sito completamente statico
- Multilinguismo corretto dal punto di vista SEO
- Punto di fallimento minimo
- Scalabilità prevedibile

Supporta:
- 50+ articoli
- 3+ lingue
- espansione alla sezione documentazione

![Risultato](https://images.unsplash.com/photo-1522202176988-66273c2fd55f)

---

# 9. Conclusioni e Lezioni Apprese

Il multilinguismo non richiede un CMS.

Se:
- il volume dei contenuti è limitato
- non ci sono requisiti per l'editing a runtime
- la prevedibilità dell'architettura è importante

L'approccio statico si dimostra più sostenibile.

Fattore chiave — disciplina nell'organizzazione dei contenuti e nelle convenzioni degli slug.
