# Three Sites Into One — Merge Map

The unified Next.js portal (this repo) is the surviving site. This document
tracks what migrated from each legacy property and the redirect map to apply
at the hosting level once Vercel/Netlify access lands.

## Source properties

| Legacy site | Stack | Fate |
|---|---|---|
| qud-system.vercel.app (v12) | static HTML/Tailwind | Retire after redirects; content merged |
| qud.vercel.app (v10) | static Bootstrap template | Retire after redirects; content merged |
| qud-systm.netlify.app (brand-v) | static PWA | Retire after redirects; llms.txt/offers already merged |
| qud-system-software-company...vercel.app (v09, currently 404) | static Bootstrap | Do NOT restore; content merged here |

## What migrated

| Content | From | To |
|---|---|---|
| FAQ page (rewritten, bilingual + FAQPage schema) | v12 faq.html | `/faq` |
| CVPEN (resume/ATS AI) | software-company divisions | `/products/cvpen` |
| Kenzy AI (storytelling) | software-company divisions | `/products/kenzy-ai` |
| MyHowia (identity wallet) | software-company divisions | `/products/myhowia` |
| ProtectX & PenRate | software-company divisions | `/products/protectx-penrate` |
| Vision Guard Systems | software-company divisions | `/products/vision-guard` |
| QudSoft & Qud Project | software-company divisions | `/products/qudsoft-qudproject` |
| Dragon R1 & B1 | software-company divisions | `/products/dragon-security-suite` (already existed) |
| QudMind / Agent3.5 | software-company divisions | `/products/qudmind-aura` + `/products/ai-coding-agent-3-5-prd-explorer` (already existed) |
| llms.txt, offers engine, PWA patterns | brand-v | `public/llms.txt`, `public/offers.js`, `public/sw.js` (already merged) |

Legacy slug aliases in `lib/products-data.ts` now resolve to the real
product entries (previously CVPEN/Kenzy/MyHowia redirected to unrelated
products).

## Redirect map to apply at hosting level

| Old URL | Redirect to |
|---|---|
| qud-system.vercel.app/ | {new domain}/ |
| qud-system.vercel.app/services.html | {new domain}/services |
| qud-system.vercel.app/contact.html | {new domain}/contact |
| qud-system.vercel.app/about.html | {new domain}/about |
| qud-system.vercel.app/faq.html | {new domain}/faq |
| qud-system.vercel.app/support.html | {new domain}/support |
| qud.vercel.app/* | {new domain}/ (page-level where paths match) |
| qud-systm.netlify.app/ | {new domain}/ |

All redirects 301. Apply after the unified site is deployed and verified.
