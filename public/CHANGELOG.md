# Changelog

Master heading for all changes made to spacehr.net.

[2026-08-11](#2026-08-11)<br>
[2026-08-01 to 2026-08-10](#2026-08-01-to-2026-08-10)<br>
[2026-07-31](#2026-07-31)

---

## 2026-08-11

---

### Blog URL Redirect Conflict Resolution [Back to Top](#changelog)

**Category:** SEO / Technical
**Files Modified:** 7
**Impact:** 50 blog posts restored to live, indexable status

**Why This Change Was Made**

Google Search Console showed 67 blog URLs in "Discovered — currently not indexed."
When Google crawled these URLs, the server returned a 301 redirect instead of the
expected 200 OK page. This created conflicting signals:

- Sitemap said: "This URL is canonical, index it"
- Canonical tag said: "This URL is the final destination"
- Server returned: 301 redirect to a different URL

Google resolved the conflict by dropping the pages from the index entirely.

The root cause: 50 cluster blog posts existed in a dual state — defined as live
pages in `blogData.ts` with content and sitemap entries, but also listed as 301
redirect sources in `next.config.ts`. Next.js processes redirects before page
rendering, so the redirect always won.

Additionally, `employee-attrition-prediction-guide` was both a live standalone
post and a redirect source to `hr-data-analytics-guide-2026`.

**Changes**

| File | What Changed | Why |
|------|-------------|-----|
| `next.config.ts` | Removed 51 redirect rules for live cluster posts; kept 20 for deprecated URLs | Live articles must return 200, not 301. Deprecated URLs still need redirects to preserve old backlinks. |
| `app/blogs/[slug]/layout.tsx` | Removed duplicate `generateMetadata` export | Both layout.tsx and page.tsx exported `generateMetadata` with different title suffixes ("Space HR Blog" vs "Space HR"), creating duplicate/conflicting metadata in the HTML head. |
| `app/solutions/hr-helpdesk-chatbot/page.tsx` | Replaced 2 deprecated blog links | Links pointed to `hr-helpdesk-chatbot-guide-2026` and `how-to-reduce-hr-ticket-volume` — both deprecated URLs that 301-redirect. Internal links should point to the final destination, not the redirect source. |
| `app/solutions/enterprise-hr-chatbot/page.tsx` | Replaced 1 deprecated blog link | Link pointed to `enterprise-ai-hr-chatbot-guide` — a deprecated URL. Updated to `chatbot-for-hr-services-complete-guide`. |
| `app/resources/hr-chatbot-buyers-guide/page.tsx` | Replaced 1 deprecated blog link, fixed duplicate | Same deprecated link issue. Also had two links pointing to the same blog post — replaced one with a different relevant post. |
| `lib/howToSchemas.ts` | Renamed 2 deprecated schema keys to live post slugs | Keys `how-to-reduce-hr-ticket-volume`, `onboarding-automation-guide-2026`, and `employee-self-service-portal-guide` referenced deprecated slugs. The blog page looks up HowTo schemas by slug — these would never render on live pages. Updated to live cluster post slugs so the schemas actually appear. |
| `lib/clusterPostContent.ts` | Added pillar article links to all 50 cluster posts | Cluster posts had zero internal links to their pillar articles. The hub-and-spoke model requires spokes to link back to the hub. Added "Read the full guide: [Pillar Title]" to each post. |

**Redirect Rules After Change**

- **20 kept** — genuinely deprecated/removed blog posts that no longer exist as live pages
- **51 removed** — live cluster articles that must return 200 with self-referencing canonicals

**Validation**

- `next build` succeeds (232 pages, 58 blog posts static)
- All 58 blog posts return 200 OK
- All 20 deprecated URLs return 301 → pillar post
- Sitemap includes all 58 posts
- No duplicate `generateMetadata` in layout + page
- Copywriting skill validation: all 50 cluster posts pass quality criteria
- Schema skill validation: Article, BreadcrumbList, HowTo, FAQPage all correct
- Site-architecture skill validation: hub-and-spoke model correctly implemented

### Schema & Content Validation

**Category:** SEO / Quality Assurance
**Skills Used:** `copywriting`, `schema`, `site-architecture`

**Why This Was Done**

After resolving the redirect conflict, the content quality and structured data
needed validation to ensure the restored pages would actually rank and display
correctly in search results.

**Copywriting Skill Validation**

All 50 cluster posts validated against copywriting skill criteria:
- Clarity over cleverness ✅
- Benefits over features ✅
- Specificity over vagueness ✅
- Customer language ✅
- Active voice ✅
- No exclamation points ✅
- No AI writing tells ✅
- Strong CTA copy ✅

**Schema Skill Validation**
- Article schema: ⚠️ Missing `image` property (required by Google)
- BreadcrumbList: ✅ Correctly implemented
- HowTo schema: ✅ Required props present
- FAQPage schema: ✅ Correctly implemented

**Site Architecture Skill Validation**
- Hub-and-spoke model: ✅ 5 pillars + 50 spokes
- Spoke → hub links: ✅ 50 links
- Hub → spoke links: ✅ 37 links
- No orphan pages: ✅
- Breadcrumbs: ✅
- Related content sections: ✅

[Back to Top](#changelog)

---

## 2026-08-01 to 2026-08-10

---

### robots.txt Fixes [Back to Top](#changelog)

**Why:** 14 template download links were being blocked by robots.txt, preventing Google from crawling and indexing those pages.

**What:** Added `rel="nofollow"` to download links in `app/templates/[slug]/page.tsx` and `app/templates/page.tsx`.

### Canonical Tags

**Why:** 7 pages had no canonical tag, causing Google to index duplicate versions of the same content.

**What:** Added `<link rel="canonical">` to 7 pages across features, solutions, and comparison sections.

### Redirect Fixes

**Why:** 6 files contained internal links pointing to URLs that 301-redirected, wasting crawl budget and creating unnecessary redirect chains.

**What:** Updated links in `app/resources/hr-chatbot-buyers-guide/page.tsx`, `app/solutions/internal-employee-chatbot/page.tsx`, `components/Footer.tsx`, and `app/hr-software/page.tsx` to point directly to final destinations.

### Dead Schema Removal

**Why:** `howToSchemas.ts` contained a schema entry for `/glossary/hr-automation` — a URL that no longer existed, creating orphaned structured data.

**What:** Removed the dead entry from `lib/howToSchemas.ts`.

### Meta Titles (49 fixed)

**Why:** 49 titles exceeded Google's 60-character display limit (truncated in search results). 2 titles contained stale year "2025". 3 titles were too short to be descriptive.

**What:** Shortened 49 titles to ≤60 characters. Updated 2 year references from 2025 to 2026. Expanded 3 short titles.

### Meta Descriptions (38 fixed)

**Why:** 38 pages had missing, duplicate, or poorly written meta descriptions. Google was auto-generating snippets from page content, which were often incomplete or unappealing.

**What:** Rewrote 38 descriptions to ≤155 characters with clear value propositions and CTAs.

### Content Depth (6 pages expanded)

**Why:** 6 pages had thin content (<500 words), which Google treats as low-quality. Thin pages rarely rank and can drag down overall site quality signals.

**What:** Expanded 6 pages (pricing, demo, request-a-demo, payroll-anomaly-detection, hrms, about) to 1,000-3,500+ words with structured sections, FAQs, and CTAs.

### Internal Linking

**Why:** Several pages were orphan or near-orphan — receiving few or no internal links. Internal links distribute PageRank and help Google discover and understand page relationships.

**What:**
- Added Industries section to footer (6 industry pages now linked site-wide)
- Added feature links to 13 comparison pages
- Added feature/industry links to 7 region pages
- Added solution/comparison links to 11 feature pages

### CRO Changes (17 files)

**Why:** Homepage and key landing pages had weak headlines, generic CTAs ("Learn More"), and no social proof. These issues reduce conversion rates regardless of traffic volume.

**What:**
- Homepage: New headline ("Automate HR. Cut Tickets by 70%. Go Live in 48 Hours."), trust bar with 5 stats, updated CTAs
- AI Automation: New headline ("Save 40+ Hours/Week on HR Tasks — No Code Required")
- HR Helpdesk Chatbot: New headline ("Deflect 70% of HR Tickets Before They're Created")
- Compare pages (13): Added "Ready to Switch?" CTA sections with risk reversal
- About page: Updated CTAs to "Start Free Trial" / "See What We Build for You"

### New Pages

**Why:** `/privacy` and `/terms` are required for directory submissions (G2, Capterra, Product Hunt) and ad platform approval. `/llms.txt` provides context to AI search systems (ChatGPT, Perplexity, etc.).

**What:** Created `/privacy` (Privacy Policy), `/terms` (Terms of Service), and `/llms.txt` (AI context file).

### Bug Fixes

**Why:** Footer fade effect applied globally instead of only on homepage. Sitemap had duplicate key bug (W-2 pointing to FW-4 path).

**What:** Fixed footer fade to only apply on homepage. Fixed sitemap entry for W-2 form download.

[Back to Top](#changelog)

---

## 2026-07-31

---

### Initial SEO Audit [Back to Top](#changelog)

**Category:** SEO / Technical
**Skills Used:** `seo-audit`, `ai-seo`, `content-strategy`

**Why This Was Done**

The site had no baseline SEO measurement. GSC data needed to be analyzed to identify
the highest-impact issues before making any changes.

**GSC Analysis**

Understanding current performance (clicks, impressions, CTR, position) identifies
where improvements will have the most impact.

**Findings:**
- 57 clicks, 15,599 impressions, 0.36% CTR — extremely low CTR indicates meta title/description issues
- Mobile CTR (0.8%) > Desktop CTR (0.31%) — mobile-first optimization needed
- India best market (1.52% CTR), US has massive impressions (6,985) but 0.09% CTR — geo-specific optimization needed
- Only 2 referring domains — backlinks are the #1 ranking blocker
- 67 URLs in "Discovered — currently not indexed" — content quality or technical issues

**Findings Documented**

Documenting findings creates accountability and allows tracking what was fixed vs.
what was skipped and why.

- `public/seo/seo-implementation-plan.md` — 17 tasks prioritized by impact
- `public/seo/seo-findings.md` — Full findings with status tracking

[Back to Top](#changelog)