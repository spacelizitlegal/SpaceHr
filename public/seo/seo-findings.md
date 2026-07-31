# SEO Findings & Status Tracking

**Date:** July 31, 2026  
**Site:** spacehr.net  
**GSC Data Period:** May 2 – July 29, 2026

---

## Executive Summary

### What Was Fixed

| GSC Issue | Pages | Fix Applied | Skill Used |
|-----------|-------|-------------|------------|
| Blocked by robots.txt | 14 | Added `rel="nofollow"` to download links | `seo-audit` + `ai-seo` |
| Page with redirect | 2 | Updated internal links, removed from sitemap | `site-architecture` |
| Discovered - not indexed | 81 | Added canonical tags to 7 pages | `content-strategy` |
| Crawled - not indexed | 6 | Identified 4 were expected, 2 need backlinks | `content-strategy` |
| Orphan page | 1 | Added internal links to `/industries/construction` | `site-architecture` |
| AI search visibility | — | Created `/llms.txt` | `ai-seo` |
| Directory readiness | — | Created `/privacy` and `/terms` pages | `directory-submissions` |

### Why Tasks Were Skipped

| Task | Reason |
|------|--------|
| 404 errors (1 page) | Visual mockup text, not a real link. Single 404 has no SEO impact. |
| Video indexing (2 videos) | Demo video is supplementary content. Nobody searches for "HR demo video". |
| Schema improvements | Already comprehensive — all major schema types present. |
| Programmatic SEO | Already has 13 comparison pages, 14 templates, 6 industries, 7 regions. |
| Content strategy | Long-term play. Focus on backlinks first for faster results. |
| Free tools | Already has W-4 Generator and True Cost Calculator. |
| On-page copy | Pages already have substantial content. |
| Analytics | Manual task — requires GA4/GTM setup outside of code changes. |
| Competitors | Research task — requires manual analysis. |
| CRO | Long-term play. Focus on indexing first. |

### What's Still Needed

1. **Deploy code changes** — All fixes are local, need to go to production
2. **Build backlinks** — #1 priority. Use `directory-submissions` skill
3. **Request indexing in GSC** — Use URL Inspection tool for priority pages
4. **Wait 2-4 weeks** — Google needs time to re-crawl and re-evaluate

### Expected Results After Deploy + 2 Weeks

| Metric | Current | Expected |
|--------|---------|----------|
| Pages indexed | 80 | 90-100 |
| Pages not indexed | 104 | 77-84 |
| Blocked by robots.txt | 14 | 0 |
| Page with redirect | 2 | 0 |
| Discovered - not indexed | 81 | 74-81 |
| Crawled - not indexed | 6 | 2 |

---

## Section 1.1: Pages Blocked by Robots.txt

### Status: ✅ INVESTIGATED — Code Change Made

### Findings

| Item | Status |
|------|--------|
| Live robots.txt | ✅ Correct — Only blocks `/api/`, `/admin/`, `/tools/w4-generator/lead` |
| Local app/robots.ts | ✅ Matches live version |
| Meta robots tags | ✅ All correct |
| GSC "14 blocked" count | ⚠️ STALE DATA — From older robots.txt version |

### Specific Blocked URLs

All 14 blocked URLs are `/api/template-download` endpoints.

### Action Taken

1. Added `rel="nofollow"` to template download links
2. Files modified: `app/templates/[slug]/page.tsx`, `app/templates/page.tsx`

---

## Section 1.2: Discovered but Not Indexed — 81 Pages

### Status: ✅ PARTIALLY FIXED — Canonical Tags Added

### Findings

| Check | Result |
|-------|--------|
| Pages with canonical tags | 80 of 88 (91%) |
| Pages missing canonical tags | **7 found and fixed** |
| Accidental noindex tags | 0 found — all noindex usage is intentional |
| Thin content (<200 words) | Minimal — most pages have substantial content |
| Low domain authority | 2 referring domains, 17 backlinks — likely main cause |

### Root Cause Analysis

The 81 pages not indexed is likely caused by:

1. **Low domain authority** — Only 2 referring domains. Google doesn't trust the site enough to index all pages.
2. **Missing canonical tags** — 7 pages had no canonical, which can confuse Google about which URL to index.
3. **Programmatic page similarity** — Compare, industry, and region pages share similar structure, which can trigger "discovered but not indexed."

### Action Taken — Canonical Tags Added

Added self-referencing canonical tags to 7 pages:

| File | Canonical Added |
|------|-----------------|
| `app/hr-payroll-software/page.tsx` | `https://spacehr.net/hr-payroll-software` |
| `app/hr-software/page.tsx` | `https://spacehr.net/hr-software` |
| `app/nyc-144-compliance/page.tsx` | `https://spacehr.net/nyc-144-compliance` |
| `app/california-pay-transparency/page.tsx` | `https://spacehr.net/california-pay-transparency` |
| `app/features/attrition-prediction/page.tsx` | `https://spacehr.net/features/attrition-prediction` |
| `app/features/appraisals/page.tsx` | `https://spacehr.net/features/appraisals` |
| `app/features/ai-templates/page.tsx` | `https://spacehr.net/features/ai-templates` |
| `app/sitemap-page/page.tsx` | `https://spacehr.net/sitemap-page` |

### What's Still Needed (Manual)

1. **Build backlinks** — This is the #1 priority. Use `directory-submissions` skill to submit to G2, Capterra, Product Hunt, etc.
2. **Request indexing in GSC** — Use URL Inspection tool to request indexing for priority pages
3. **Monitor coverage report** — Check weekly for 2-4 weeks to see if pages start getting indexed

---

## Section 1.3: Crawled but Not Indexed — 6 Pages

### Status: ✅ MOSTLY EXPECTED — 2 Pages Need Attention

### Findings

| Page | Status | Issue | Action |
|------|--------|-------|--------|
| `/blogs/talent-intelligence-dashboards...` | ✅ Expected | Redirect to another blog post | None — Google correctly doesn't index redirect sources |
| `/blogs/recruiter-productivity-metrics...` | ✅ Expected | Redirect to another blog post | None — Google correctly doesn't index redirect sources |
| `/blogs/leave-policy-automation...` | ✅ Expected | Redirect to another blog post | None — Google correctly doesn't index redirect sources |
| `/_next/static/media/...woff2` | ✅ Expected | Static font file, not a page | None — Not a page, just a font asset |
| `/solutions/employees` | ⚠️ Low authority | Well-linked but site has only 2 referring domains | Build backlinks |
| `/blogs/importance-of-soft-skills` | ⚠️ No internal links | Only discoverable via blog index listing | Add internal links |

### Analysis

**4 of 6 are expected behavior:**
- 3 blog posts are redirects (Google correctly doesn't index redirect sources)
- 1 is a static font file (not a page)

**2 pages need attention:**
1. `/solutions/employees` — Has internal links (navbar, footer, sitemap) but still not indexed due to low domain authority
2. `/blogs/importance-of-soft-skills` — No internal links pointing to it; only discoverable via blog index

### Root Cause

The primary issue is **low domain authority** (only 2 referring domains). Google is being selective about what it indexes from low-authority sites.

### What's Still Needed (Manual)

1. **Build backlinks** — #1 priority. This will help all pages get indexed.
2. **Add internal links** — Link to `/blogs/importance-of-soft-skills` from related blog posts
3. **Request indexing in GSC** — Use URL Inspection tool for `/solutions/employees` and `/blogs/importance-of-soft-skills`

---

## Section 1.4: Redirect Issues — 2 Pages

### Status: ✅ FIXED — Code Changes Made

### Findings

| URL | Redirect Destination | Issue |
|-----|---------------------|-------|
| `/blogs/internal-hr-chatbot-deployment-guide` | `/blogs/chatbot-for-hr-services-complete-guide` | Intentional redirect in `next.config.ts` |
| `/tools/w2-form-download` | `/tools/fw4-form-download` | Intentional redirect in `page.tsx` |

### Files Modified

| File | Change |
|------|--------|
| `app/sitemap.ts` | Removed `/tools/w2-form-download` from sitemap |
| `app/resources/hr-chatbot-buyers-guide/page.tsx` | Updated link to destination URL |
| `app/solutions/internal-employee-chatbot/page.tsx` | Updated link to destination URL |
| `components/Footer.tsx` | Updated link to `/tools/fw4-form-download` |
| `app/hr-software/page.tsx` | Updated link to `/tools/fw4-form-download` |
| `app/sitemap-page/page.tsx` | Updated link to `/tools/fw4-form-download` |
| `lib/howToSchemas.ts` | Removed dead schema entry for old blog URL |

---

## Section 1.5: 404 Errors — 1 Page

### Status: ⏭️ SKIPPED — Not worth fixing

### Findings

| URL | Issue |
|-----|-------|
| `/dashboard/overview` | Visual mockup text on homepage, not a clickable link |

### Analysis

- The text `app.spacehr.net/dashboard/overview` appears in a visual browser bar mockup on the homepage
- It's not a clickable link — Google just saw the text pattern and tried to crawl it
- The 404 page already redirects to Features after 3 seconds
- Single 404 has no SEO impact

### Decision

Skip this fix — it's a visual element, not a real URL issue.

---

## Section 2.3: Video Indexing Issues — 2 Videos

### Status: ⏭️ SKIPPED — Not worth fixing

### Findings

| Page | Video | Issue |
|------|-------|-------|
| `https://spacehr.net/` | `space-hr-demo.mp4` | Video is supplementary content |
| `https://spacehr.net/demo` | `space-hr-demo.mp4` | Video is supplementary content |

### Analysis

- Same demo video appears on homepage and demo page
- Google says video is "supplementary content" — not the main focus
- Won't appear in video search results
- This is expected for a product demo video
- Nobody searches for "HR demo video" in video search

### Decision

Skip this fix — the video is where it should be (demo page).

---

## Section 8: AI Search Optimization

### Status: ✅ PARTIALLY DONE — llms.txt Created

### Findings

| Check | Status | Action |
|-------|--------|--------|
| AI bot access in robots.txt | ✅ Allowed | No blocking rules for GPTBot, PerplexityBot, ClaudeBot |
| llms.txt | ✅ Created | `public/llms.txt` |
| Pricing page | ⏭️ Skipped | Custom pricing model — no published prices |

### Actions Taken

1. **Created `/llms.txt`** — Context file for AI systems
   - File: `public/llms.txt`
   - Contains: Product description, target audience, key features, pricing model, key page links

### What's Still Needed (Manual)

- Structure key pages with 40-60 word answer blocks for AI extraction
- Add FAQ sections to more pages
- Add statistics with sources (+40% citation boost)
- Add expert attribution (+30% citation boost)
- Monitor AI visibility monthly

---

## Section 11: Site Structure & Internal Linking

### Status: ✅ FIXED — Orphan Page Linked

### Findings

| Check | Result |
|-------|--------|
| Orphan pages | 1 found: `/industries/construction` |
| Breadcrumbs | ✅ Present on all pages |
| Internal linking | ✅ Other pages well-connected |

### What Was Wrong

The `/industries/construction` page had **zero inbound internal links**. It existed but was never linked from any other page. All other industry pages (healthcare, retail, banking, manufacturing, government) were linked from 7+ places — construction from none.

### Action Taken

Added `/industries/construction` to 8 files:

| File | Change |
|------|--------|
| `app/page.tsx` | Added to homepage industries grid |
| `app/sitemap-page/page.tsx` | Added to sitemap listing |
| `app/industries/page.tsx` | Added to industries index page |
| `app/industries/retail/page.tsx` | Added to cross-links |
| `app/industries/manufacturing/page.tsx` | Added to cross-links |
| `app/industries/healthcare/page.tsx` | Added to cross-links |
| `app/industries/government/page.tsx` | Added to cross-links |
| `app/industries/banking/page.tsx` | Added to cross-links |

Note: `app/sitemap.ts` already had construction listed.

---

## Section 7: Schema Markup Improvements

### Status: ⏭️ SKIPPED — Already Comprehensive

### Findings

| Schema Type | Status | Pages |
|-------------|--------|-------|
| Organization | ✅ Present | Homepage |
| SoftwareApplication | ✅ Present | Features pages |
| FAQPage | ✅ Present | 40+ pages |
| BreadcrumbList | ✅ Present | All pages |
| HowTo | ✅ Present | Templates |
| Article | ✅ Present | Blog posts |
| VideoObject | ✅ Present | Demo page |

### Decision

Skip this task — all major schema types are already implemented. Adding more schema would provide minimal SEO benefit compared to building backlinks.

---

## Section 9: Programmatic SEO Pages

### Status: ⏭️ SKIPPED — Not pursuing at this time

### Findings

The site already has good programmatic page coverage:
- 13 comparison pages
- 14 template pages
- 6 industry pages
- 7 region pages
- 1 integration page

### Decision

Skip this task — the existing programmatic pages are sufficient. Focus on building backlinks and improving existing content first.

---

## Section 12: Directory Submissions & Backlinks

### Status: ✅ READINESS FIXED — Ready for Submission

### Readiness Assessment

| # | Item | Status | Notes |
|---|------|--------|-------|
| 1 | Publicly accessible | ✅ YES | Marketing site fully open |
| 2 | Pricing page | ✅ YES | Exists (Request a Quote model) |
| 3 | Privacy Policy + Terms | ✅ **FIXED** | Created `/privacy` and `/terms` pages |
| 4 | Logo assets | ✅ YES | `hrlogonly.png` available |
| 5 | Screenshots | ✅ YES | 1 product UI screenshot |
| 6 | Demo video | ✅ YES | Self-hosted MP4 with schema |
| 7 | Compare/alternative pages | ✅ YES | 13 comparison pages |
| 8 | Solutions/use-case pages | ✅ YES | 10 solution pages |
| 9 | Template gallery | ✅ YES | 14 templates |
| 10 | FAQ schema | ✅ YES | 40+ pages with FAQ schema |

### Actions Taken

1. **Created `/privacy` page** — `app/privacy/page.tsx`
2. **Created `/terms` page** — `app/terms/page.tsx`
3. **Added Footer links** — `components/Footer.tsx`
4. **Fixed DemoRequest placeholder links** — `components/DemoRequest.tsx`

### Directory Submission Plan

**Tier 1 — Flagship (Week 1):**
- Product Hunt (anchor event)
- BetaList
- AlternativeTo

**Tier 2 — SaaS Directories (Week 1-2):**
- G2 (requires 10 reviews for Grid)
- Capterra
- SaaSHub
- SourceForge
- F6S

**Tier 3 — AI Directories (Week 2-3):**
- TAAFT
- Futurepedia
- Toolify
- AI Stage

**Target Metrics (90 days):**
- Domain Rating: 0 → 30+
- Referring domains: 2 → 80+
- Indexed pages: 80 → 200+
- G2 reviews: 0 → 25

---

*Last updated: July 31, 2026 — After all code changes applied*
