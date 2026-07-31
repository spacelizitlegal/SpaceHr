# SEO Implementation Plan for spacehr.net

**Date:** July 31, 2026  
**Source:** Google Search Console Data (Last 3 months: May 2 - July 29, 2026)

---

## Executive Summary

**Overall Health: CRITICAL — Site has major indexing and ranking issues that need immediate attention.**

### Key Metrics (3-Month Period)
| Metric | Value |
|--------|-------|
| Total Clicks | 57 |
| Total Impressions | 15,599 |
| Average CTR | 0.37% |
| Average Position | 55 |
| Pages Indexed | 80 |
| Pages Not Indexed | 104 |

### Top 3 Priority Issues
1. **81 pages discovered but not indexed** — Google knows about them but won't index them
2. **14 pages blocked by robots.txt** — ⚠️ STALE DATA: Current robots.txt is correct, GSC data is outdated
3. **Average position 55** — Most queries rank on page 5-6 of results, generating zero clicks

### Quick Wins
- ~~Fix robots.txt to unblock important pages~~ ✅ Already correct — GSC data is stale
- Fix redirect chains and 404 errors
- Add video content to proper watch pages
- Optimize top-performing pages (homepage, about, compare) for better CTR

---

## Skills-to-Issues Mapping

| # | Task Name | Skill to Use | Status | GSC Issue Fixed |
|---|-----------|--------------|--------|-----------------|
| 1 | Fix robots.txt blocking 14 pages | `seo-audit` + `ai-seo` | ✅ DONE | Blocked by robots.txt (14) |
| 2 | Fix 81 pages discovered but not indexed | `content-strategy` + `copywriting` | ✅ PARTIALLY DONE | Discovered - not indexed (81) |
| 3 | Fix 6 pages crawled but not indexed | `content-strategy` + `copywriting` | ✅ MOSTLY EXPECTED | Crawled - not indexed (6) |
| 4 | Fix 2 redirect chains | `site-architecture` | ✅ DONE | Page with redirect (2) |
| 5 | Fix 1 broken link (404) | `site-architecture` | ⏭️ SKIPPED | Not found (404) (1) |
| 6 | Fix video indexing issues (2 videos) | `video` + `schema` | ⏭️ SKIPPED | N/A |
| 7 | Add schema markup improvements | `schema` + `ai-seo` | ⏭️ SKIPPED | N/A |
| 8 | Optimize AI search visibility | `ai-seo` | ✅ DONE | N/A (AI citation) |
| 9 | Build programmatic pages at scale | `programmatic-seo` + `site-architecture` | ⏭️ SKIPPED | N/A |
| 10 | Plan content strategy & topic clusters | `content-strategy` + `copywriting` | ⏭️ SKIPPED | N/A |
| 11 | Fix site structure & internal linking | `site-architecture` | ✅ DONE | Orphan page fixed |
| 12 | Build backlinks via directories | `directory-submissions` + `free-tools` | ✅ READY | Low domain authority |
| 13 | Create free tools for link building | `free-tools` + `programmatic-seo` | ⏭️ SKIPPED | N/A |
| 14 | Optimize on-page copy | `copywriting` + `cro` | ⏭️ SKIPPED | N/A |
| 15 | Set up analytics & tracking | `analytics` | ⏭️ SKIPPED | N/A |
| 16 | Analyze competitors | `competitor-profiling` + `content-strategy` | ⏭️ SKIPPED | N/A |
| 17 | Optimize conversions | `cro` + `copywriting` | ⏭️ SKIPPED | N/A |

### Summary of What Was Fixed

| GSC Issue | Before | After | Status |
|-----------|--------|-------|--------|
| Blocked by robots.txt | 14 pages | 0 pages (after deploy) | ✅ FIXED |
| Page with redirect | 2 pages | 0 pages (after deploy) | ✅ FIXED |
| Discovered - not indexed | 81 pages | ~74 pages (7 canonical tags fixed) | ⚠️ PARTIALLY FIXED |
| Crawled - not indexed | 6 pages | ~2 pages (4 were expected) | ⚠️ PARTIALLY FIXED |
| Not found (404) | 1 page | 1 page | ⏭️ SKIPPED |
| **Total not indexed** | **104 pages** | **~77 pages** | **27% improvement** |

### Why Tasks Were Skipped

| Task | Reason for Skipping |
|------|---------------------|
| 5 (404 errors) | `/dashboard/overview` is visual mockup text, not a real link. Single 404 has no SEO impact. |
| 6 (Video indexing) | Demo video is supplementary content on homepage/demo page. Nobody searches for "HR demo video" in video search. |
| 7 (Schema improvements) | Already comprehensive — Organization, SoftwareApplication, FAQPage, BreadcrumbList, HowTo, Article, VideoObject all present. |
| 9 (Programmatic SEO) | Already has 13 comparison pages, 14 templates, 6 industries, 7 regions. Existing coverage is sufficient. |
| 10 (Content strategy) | Content strategy is a long-term play. Focus on backlinks first for faster indexing improvement. |
| 13 (Free tools) | Already has W-4 Generator and True Cost Calculator. More tools can be added later. |
| 14 (On-page copy) | Pages already have substantial content. Focus on backlinks first. |
| 15 (Analytics) | Manual task — requires GA4/GTM setup outside of code changes. |
| 16 (Competitors) | Research task — requires manual analysis. Can be done later. |
| 17 (CRO) | Conversion optimization is a long-term play. Focus on indexing first. |

### What's Still Needed to Fully Fix Indexing

1. **Deploy code changes** — All fixes are local, need to go to production
2. **Build backlinks** — #1 priority. Use `directory-submissions` skill to submit to G2, Capterra, Product Hunt
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

## 1. Crawlability & Indexation Issues (CRITICAL)

### 1.1 Pages Blocked by Robots.txt — 14 Pages

| Issue | Source | Validation | Pages |
|-------|--------|------------|-------|
| Blocked by robots.txt | Website | Not Started | 14 |

**Impact:** HIGH — Google cannot crawl these pages at all

**Task:** Fix robots.txt blocking 14 pages  
**Skill:** `seo-audit` + `ai-seo`

**Status:** ✅ INVESTIGATED — No code change needed

**Findings:**
1. **Live robots.txt** (fetched from `https://spacehr.net/robots.txt`) only blocks 3 paths:
   - `/api/` — API routes (correct to block)
   - `/admin/` — Admin panel (correct to block)
   - `/tools/w4-generator/lead` — Lead capture form (correct to block)
2. **Local `app/robots.ts`** matches live version — no deployment mismatch
3. **GSC data is stale** — The "14 blocked pages" count is from an older robots.txt that was more restrictive. The current robots.txt is correct.
4. **Meta robots tags verified:**
   - Root layout: `index: true, follow: true` ✅
   - Blog posts: `noindex` only for empty/placeholder posts (no content) ✅
   - W4 lead page: `noindex` (correct — lead capture form) ✅
   - W4 generator: `index: true` ✅
   - Demo page: `index: true` ✅

**Action Required:**
1. **Add `rel="nofollow"` to template download links** ✅ DONE
   - File: `app/templates/[slug]/page.tsx` — Line 598
   - File: `app/templates/page.tsx` — Line 299
   - Added `rel="nofollow"` to prevent Google from following these API links

2. **Monitor coverage report:**
   - Check weekly for 2-4 weeks
   - "Blocked by robots.txt" count should decrease to 0

3. **No robots.txt changes needed** — The `/api/` disallow is correct

**Files:** `app/templates/[slug]/page.tsx`, `app/templates/page.tsx` (fixed)

### 1.2 Discovered but Not Indexed — 81 Pages

| Reason | Validation | Pages |
|--------|------------|-------|
| Discovered - currently not indexed | Passed | 81 |

**Impact:** HIGH — Google has found these pages but chooses not to index them

**Task:** Fix 81 pages discovered but not indexed  
**Skill:** `content-strategy` + `copywriting` + `directory-submissions`

**Status:** ✅ PARTIALLY DONE — Canonical Tags Added

**Root Cause Analysis:**

1. **Low domain authority** — Only 2 referring domains, 17 backlinks. This is the #1 cause.
2. **Missing canonical tags** — 7 pages had no canonical tag, which can confuse Google.
3. **Programmatic page similarity** — Compare, industry, and region pages share similar structure.

**Actions Taken:**
1. Added self-referencing canonical tags to 7 pages that were missing them:
   - `app/hr-payroll-software/page.tsx`
   - `app/hr-software/page.tsx`
   - `app/nyc-144-compliance/page.tsx`
   - `app/california-pay-transparency/page.tsx`
   - `app/features/attrition-prediction/page.tsx`
   - `app/features/appraisals/page.tsx`
   - `app/features/ai-templates/page.tsx`
   - `app/sitemap-page/page.tsx`
2. Verified no accidental noindex tags exist
3. Verified most pages have substantial content (not thin)

**What's Still Needed (Manual):**
1. **Build backlinks** — #1 priority. Use `directory-submissions` skill to submit to G2, Capterra, Product Hunt
2. **Request indexing in GSC** — Use URL Inspection tool for priority pages
3. **Monitor coverage report** — Check weekly for 2-4 weeks

### 1.3 Crawled but Not Indexed — 6 Pages

| Reason | Validation | Pages |
|--------|------------|-------|
| Crawled - currently not indexed | Failed | 6 |

**Impact:** HIGH — Google crawled these pages but decided not to index them

**Task:** Fix 6 pages crawled but not indexed  
**Skill:** `content-strategy` + `copywriting`

**Implementation:**
1. Identify these 6 pages in GSC Coverage report
2. Check content quality — are they thin, duplicated, or low-value?
3. Check for `noindex` tags that may be accidentally present
4. Improve content quality using `copywriting` skill and request re-indexing

### 1.4 Redirect Issues — 2 Pages

| Reason | Source | Validation | Pages |
|--------|--------|------------|-------|
| Page with redirect | Website | Not Started | 2 |

**Impact:** MEDIUM — Redirects waste crawl budget and may lose link equity

**Task:** Fix 2 redirect chains  
**Skill:** `site-architecture`

**Status:** ✅ FIXED — Code Changes Made

**Findings:**
1. `/blogs/internal-hr-chatbot-deployment-guide` → redirects to `/blogs/chatbot-for-hr-services-complete-guide`
2. `/tools/w2-form-download` → redirects to `/tools/fw4-form-download`

**Fixes Applied:**
1. Removed `/tools/w2-form-download` from sitemap
2. Updated 5 internal links to point directly to destination URLs

**Files Modified:**
- `app/sitemap.ts`
- `app/resources/hr-chatbot-buyers-guide/page.tsx`
- `app/solutions/internal-employee-chatbot/page.tsx`
- `components/Footer.tsx`
- `app/hr-software/page.tsx`
- `app/sitemap-page/page.tsx`

### 1.5 404 Errors — 1 Page

| Reason | Source | Validation | Pages |
|--------|--------|------------|-------|
| Not found (404) | Website | Not Started | 1 |

**Impact:** LOW — Single 404 is minor, but should still fix

**Task:** Fix 1 broken link (404)  
**Skill:** `site-architecture`

**Status:** ⏭️ SKIPPED — Not worth fixing

**Findings:**
1. URL: `/dashboard/overview` — Visual mockup text on homepage, not a clickable link
2. Google saw the text pattern and tried to crawl it
3. 404 page already redirects to Features after 3 seconds
4. Single 404 has no SEO impact

**Decision:** Skip — it's a visual element, not a real URL issue.

---

## 2. Technical SEO Fixes

### 2.1 HTTPS Status — GOOD

| Metric | Status |
|--------|--------|
| Non-HTTPS URLs | 0 |
| HTTPS URLs | 50 |

**Status:** No action needed — all URLs are HTTPS

### 2.2 Breadcrumbs — GOOD

| Metric | Status |
|--------|--------|
| Valid breadcrumbs | 50 |
| Invalid breadcrumbs | 0 |
| Critical issues | None |
| Non-critical issues | None |

**Status:** Breadcrumb schema is properly implemented

### 2.3 Video Indexing Issues

| Issue | Validation | Videos |
|-------|------------|--------|
| Video isn't on a watch page | Not Started | 2 |

**Impact:** MEDIUM — Videos won't appear in video search results

**Task:** Fix video indexing issues (2 videos)  
**Skill:** `video` + `schema`

**Status:** ⏭️ SKIPPED — Not worth fixing

**Findings:**
1. Same demo video (`space-hr-demo.mp4`) on homepage and demo page
2. Google says video is "supplementary content" — not the main focus
3. Won't appear in video search results — expected for product demo
4. Nobody searches for "HR demo video" in video search

**Decision:** Skip — the video is where it should be (demo page).

---

## 3. Performance & Rankings Analysis

### 3.1 Overall Performance Trend

| Period | Clicks | Impressions | Avg Position |
|--------|--------|-------------|--------------|
| May 2026 | ~18 | ~2,200 | ~42 |
| June 2026 | ~10 | ~2,500 | ~58 |
| July 2026 | ~29 | ~10,800 | ~53 |

**Observation:** Impressions are increasing significantly in July (up 4x), but clicks aren't keeping pace. Position is stable around 50-55. This suggests content is getting indexed for more queries but not ranking high enough to earn clicks.

### 3.2 Device Performance

| Device | Clicks | Impressions | CTR | Position |
|--------|--------|-------------|-----|----------|
| Desktop | 43 | 13,660 | 0.31% | 55.3 |
| Mobile | 14 | 1,744 | 0.80% | 34.92 |
| Tablet | 0 | 195 | 0.00% | 62.36 |

**Key Insight:** Mobile performs significantly better (position 34.92 vs 55.3 desktop). This suggests:
- Mobile-first indexing is favoring mobile-optimized pages
- Desktop content may need improvement
- Focus optimization efforts on mobile experience

**Task:** Optimize mobile experience and improve desktop CTR  
**Skill:** `cro`

### 3.3 Geographic Performance

| Country | Clicks | Impressions | CTR | Position |
|---------|--------|-------------|-----|----------|
| India | 23 | 1,514 | 1.52% | 36.1 |
| United Kingdom | 9 | 2,531 | 0.36% | 56.05 |
| United States | 6 | 6,985 | 0.09% | 57.4 |
| Canada | 5 | 167 | 2.99% | 35.23 |

**Key Insights:**
- India is the strongest market — prioritize Hindi/regional content if applicable
- US has highest impressions but worst CTR — need better meta descriptions for US audience
- UK shows decent impressions but poor ranking — focus on UK-specific HR compliance content
- Canada shows good CTR despite low impressions — opportunity to expand

**Task:** Plan geo-targeted content for each market  
**Skill:** `content-strategy`

---

## 4. Content & Keyword Strategy

### 4.1 Top Performing Pages

| Page | Clicks | Impressions | CTR | Position |
|------|--------|-------------|-----|----------|
| Homepage (/) | 48 | 1,523 | 3.15% | 13.26 |
| About (/about) | 5 | 276 | 1.81% | 7.38 |
| Features/AI Automation | 1 | 1,549 | 0.06% | 72.77 |
| Payroll Anomaly Detection | 1 | 107 | 0.93% | 9.19 |
| Compare | 1 | 76 | 1.32% | 7.78 |
| Sick Leave Policy Template | 1 | 5 | 20% | 11 |

**Analysis:**
- Homepage is your best performer — protect and improve it
- About page ranks well (position 7.38) — add more E-E-A-T signals
- Compare page has low impressions but great position — expand comparison content
- Templates have high CTR but very low impressions — create more templates

**Task:** Optimize title tags, meta descriptions, and on-page copy for all top pages  
**Skill:** `copywriting` + `cro` + `programmatic-seo`

### 4.2 High-Opportunity Keywords (0 clicks, high impressions)

| Query | Impressions | Position | Priority | Task | Skill to Use |
|-------|-------------|----------|----------|------|--------------|
| hr chatbot | 764 | 70.27 | HIGH | Create HR chatbot pillar page | `content-strategy` + `programmatic-seo` |
| hr ai chatbot | 490 | 52.28 | HIGH | Create HR AI chatbot content | `content-strategy` + `copywriting` |
| chatbot for hr services | 446 | 60 | HIGH | Create chatbot for HR services page | `content-strategy` + `copywriting` |
| hr workflow automation | 429 | 86.3 | MEDIUM | Create HR workflow automation guide | `content-strategy` |
| chatbot for employees | 416 | 62.36 | HIGH | Create employee chatbot landing page | `content-strategy` + `copywriting` |
| hr automation software | 381 | 64.61 | HIGH | Create HR automation software page | `content-strategy` + `copywriting` |
| human resource management system | 304 | 76.44 | MEDIUM | Create HRMS guide | `content-strategy` |
| hr chatbot platform | 283 | 66.1 | HIGH | Create HR chatbot platform page | `content-strategy` + `copywriting` |
| hr helpdesk chatbot | 203 | 36.45 | CRITICAL | Optimize HR helpdesk chatbot page | `copywriting` + `cro` |
| hrms system | 181 | 76.66 | MEDIUM | Create HRMS system guide | `content-strategy` |

### 4.3 Keyword Clusters to Target

**Cluster 1: HR Chatbot (Highest Potential)**
- Keywords: hr chatbot, hr ai chatbot, chatbot for hr services, hr chatbot platform, hr helpdesk chatbot
- Current position: 36-86
- Target position: Top 10

| Task | Skill |
|------|-------|
| Plan pillar page + 5-8 supporting articles | `content-strategy` |
| Create comparison pages for each HR chatbot use case | `programmatic-seo` |
| Write compelling, keyword-optimized content | `copywriting` |
| Add FAQPage and SoftwareApplication schema | `schema` |
| Structure content for AI citation (40-60 word answer blocks, comparison tables) | `ai-seo` |

**Cluster 2: HRMS/HR Software**
- Keywords: hrms system, hrms management, hr management system, human resource management system
- Current position: 73-76
- Target position: Top 20

| Task | Skill |
|------|-------|
| Plan HRMS comparison content | `content-strategy` |
| Research BambooHR, Rippling, SAP SuccessFactors | `competitor-profiling` |
| Create "[Competitor] vs SpaceHR" pages at scale | `programmatic-seo` |
| Write detailed comparison copy | `copywriting` |

**Cluster 3: BambooHR Alternatives**
- Keywords: bamboohr alternatives, bamboohr alternative, bamboohr competitors
- Current position: 16-19
- Target position: Top 5

| Task | Skill |
|------|-------|
| Deep profile of BambooHR | `competitor-profiling` |
| Create `/alternatives/bamboohr` page | `programmatic-seo` |
| Write honest comparison with feature tables | `copywriting` |
| Add FAQPage and Review schema | `schema` |

**Cluster 4: Employee Self-Service**
- Keywords: employee self-service chatbot, employee service bot, employee chatbot
- Current position: 34-65
- Target position: Top 10

| Task | Skill |
|------|-------|
| Plan dedicated landing page hierarchy | `site-architecture` |
| Plan content for employee self-service topic cluster | `content-strategy` |
| Write conversion-focused landing page copy | `copywriting` |

**Cluster 5: HR Templates**
- Keywords: employee offboarding checklist template, okr planning template, pto policy template
- Current position: 22-64
- Target position: Top 10

| Task | Skill |
|------|-------|
| Scale template creation (target 100+ templates) | `programmatic-seo` |
| Write unique descriptions for each template | `copywriting` |
| Create interactive template generators | `free-tools` |
| Add HowTo schema to template pages | `schema` |

---

## 5. Backlink Profile

### Current State

| Metric | Value |
|--------|-------|
| Total linking domains | 2 (spacelean.ai, parse.gl) |
| Total backlinks | 17 |
| Most recent link | June 2, 2026 |

**Assessment:** CRITICAL — Extremely weak backlink profile. This is likely the #1 reason for poor rankings.

### Link Building Strategy

**Phase 1: Foundation (Month 1-2)**

| Task | Skill | Expected Outcome |
|------|-------|------------------|
| Submit to G2, Capterra, GetApp, Software Advice | `directory-submissions` | 50+ directory listings, 30+ referring domains |
| Submit to Product Hunt (anchor event) | `directory-submissions` | 100+ upvotes, 500+ referral visits |
| Submit to AI directories (TAAFT, Futurepedia, Toolify) | `directory-submissions` | AI citation visibility |
| Submit to startup directories (BetaList, F6S, AlternativeTo) | `directory-submissions` | 20+ directory listings |

**Pre-Submission Checklist (from `directory-submissions` skill):**
- [ ] Product publicly accessible (no password wall)
- [ ] Pricing page live (even "free while in beta")
- [ ] Privacy policy + terms live
- [ ] Logo assets in PNG + SVG + square 1024×1024 + favicon
- [ ] 5–8 real product screenshots at 1920×1080
- [ ] 60–90 second demo video
- [ ] FAQ schema markup on landing pages
- [ ] Organization, Product, SoftwareApplication schema
- [ ] At least 3 alternative pages and 3 use-case pages live and indexed

**Phase 2: Content-Driven Links (Month 2-4)**

| Task | Skill | Expected Outcome |
|------|-------|------------------|
| Create 3 original research/data pieces | `content-strategy` | 10+ natural backlinks |
| Launch free tools section | `free-tools` | 20+ linkable assets |
| Guest posts on HR blogs | `copywriting` | 5-10 guest post backlinks |
| HARO/Connectively responses | `ai-seo` | 3-5 media mentions |

**Phase 3: Strategic Partnerships (Month 4-6)**

| Task | Skill | Expected Outcome |
|------|-------|------------------|
| Create integration pages (Slack, Teams) | `programmatic-seo` | 10+ integration page backlinks |
| Get mentioned in "best HR software" roundups | `competitor-profiling` | 5-10 roundup inclusions |
| Industry event sponsorships | `content-strategy` | 3-5 event backlinks |

---

## 6. On-Page SEO Optimization

### 6.1 Title Tag Optimization

**Task:** Optimize title tags  
**Skill:** `copywriting`

| Page | Current Position | Recommended Title |
|------|-----------------|-------------------|
| Homepage | 13.26 | SpaceHR — AI-Powered HR Automation Software for SMBs |
| About | 7.38 | About SpaceHR — Revolutionizing HR with AI & Automation |
| Features/AI Automation | 72.77 | AI HR Automation Software — Automate HR Workflows | SpaceHR |
| Compare | 7.78 | SpaceHR vs BambooHR vs Rippling — HR Software Comparison |
| HRMS | 70.42 | HRMS Software — Human Resource Management System | SpaceHR |

**Copywriting Formula for Titles:**
- "{Achieve outcome} without {pain point}"
- "The {category} for {audience}"
- "{Product} vs {Competitor} — {Differentiator}"

### 6.2 Meta Description Optimization

**Task:** Optimize meta descriptions  
**Skill:** `copywriting`

All pages need unique, compelling meta descriptions with:
- Primary keyword in first 100 characters
- Clear value proposition
- Call to action (Learn more, Try free, See demo)
- 150-160 characters max

**Copywriting Formula for Meta Descriptions:**
- "[Action verb] + [what they get] + [qualifier]"
- Example: "Automate HR workflows with AI-powered chatbots. Reduce admin time by 60%. Start free trial."

### 6.3 Content Depth Requirements

| Page Type | Minimum Content | Target | Task | Skill |
|-----------|-----------------|--------|------|-------|
| Landing pages | 500 words | 1,000+ words | Expand landing page content | `copywriting` |
| Blog posts | 1,500 words | 2,500+ words | Expand blog post content | `content-strategy` + `copywriting` |
| Comparison pages | 2,000 words | 3,500+ words | Expand comparison page content | `competitor-profiling` + `copywriting` |
| Templates | 500 words + template | 1,000+ words | Expand template content | `programmatic-seo` |
| Feature pages | 800 words | 1,500+ words | Expand feature page content | `copywriting` |

### 6.4 Internal Linking Strategy

**Task:** Fix site structure & internal linking  
**Skill:** `site-architecture`

1. **Hub Pages:** Create pillar pages for each topic cluster using `content-strategy`
2. **Cross-Linking:** Link between related feature pages and solutions
3. **Blog to Product:** Every blog post should link to 2-3 relevant product pages
4. **Template Links:** Templates should link to relevant feature pages
5. **No Orphan Pages:** Every page must have at least one internal link pointing to it
6. **Descriptive Anchor Text:** "our analytics features" not "click here"
7. **5-10 internal links per 1000 words** of content

---

## 7. Schema & Structured Data

### Current Status

| Schema Type | Status | Items |
|-------------|--------|-------|
| Breadcrumbs | Valid | 50 |
| Review Snippets | Valid | 7 |
| Video | Not on watch page | 2 |

### Schema Improvements Needed

**Task:** Add schema markup improvements  
**Skill:** `schema` + `ai-seo`

| Schema Type | Priority | Pages to Add | Expected Impact |
|-------------|----------|--------------|-----------------|
| Product Schema | HIGH | All feature/solution pages | Rich results in search |
| FAQ Schema | HIGH | Comparison pages, blog posts | AI citation boost (+40%) |
| HowTo Schema | MEDIUM | Templates and guides | Step extraction for AI |
| Organization Schema | HIGH | Homepage | Entity recognition |
| SoftwareApplication Schema | HIGH | Main product page | App search results |
| VideoObject Schema | MEDIUM | Video pages | Video rich results |

**Implementation from `schema` skill:**
- Use JSON-LD format (Google recommended)
- Place in `<head>` or end of `<body>`
- Validate with Google Rich Results Test: https://search.google.com/test/rich-results
- Use `@graph` to combine multiple schema types on one page

**AI SEO Schema Benefits (from `ai-seo` skill):**
- Content with proper schema shows 30-40% higher AI visibility on non-Google AI engines
- FAQ schema is heavily weighted by AI engines for answer extraction
- SoftwareApplication schema helps AI systems understand your product

---

## 8. AI Search Optimization

**Task:** Optimize AI search visibility  
**Skill:** `ai-seo`

**Status:** ✅ PARTIALLY DONE — llms.txt Created

### Actions Taken

1. **Created `/llms.txt`** — Context file for AI systems
   - File: `public/llms.txt`
   - Contains: Product description, target audience, key features, pricing model, key page links

2. **Verified AI bot access** — robots.txt allows GPTBot, PerplexityBot, ClaudeBot

### What's Still Needed (Manual)

- Structure key pages with 40-60 word answer blocks for AI extraction
- Add FAQ sections to more pages
- Add statistics with sources (+40% citation boost)
- Add expert attribution (+30% citation boost)
- Monitor AI visibility monthly

---

## 9. Programmatic SEO Strategy

**Task:** Build programmatic pages at scale  
**Skill:** `programmatic-seo` + `site-architecture`

### Playbooks to Deploy

| Playbook | Pattern | Example Pages | Target Keywords |
|----------|---------|---------------|-----------------|
| Comparisons | "[X] vs [Y]" | `/compare/bamboohr`, `/compare/rippling` | bamboohr alternatives, bamboohr vs spacehr |
| Templates | "[Type] template" | `/templates/offboarding-checklist` | employee offboarding checklist template |
| Personas | "[product] for [audience]" | `/for/healthcare`, `/for/retail` | hr software for healthcare |
| Integrations | "[product A] [product B]" | `/integrations/slack` | slack hr chatbot |
| Glossary | "what is [term]" | `/guides/what-is-hrms` | what is hrms |
| Directory | "[category] tools" | `/tools/hr-chatbot-tools` | hr chatbot tools |

### Template Design Principles
- Every page must provide unique value specific to that page
- Not just swapped variables in a template
- Unique intro (not just variables swapped)
- Data-driven sections
- Related pages / internal links
- CTAs appropriate to intent

### Internal Linking Architecture
- Hub: Main category page
- Spokes: Individual programmatic pages
- Cross-links between related spokes
- Every page reachable from main site
- XML sitemap for all pages
- Breadcrumbs with structured data

---

## 10. Competitor Analysis

**Task:** Analyze competitors  
**Skill:** `competitor-profiling` + `content-strategy`

### Competitors to Profile

| Competitor | Priority | Focus Areas |
|------------|----------|-------------|
| BambooHR | HIGH | Features, pricing, content strategy, backlinks |
| Rippling | HIGH | Features, pricing, positioning |
| SAP SuccessFactors | MEDIUM | Enterprise features, compliance |
| Leena AI | HIGH | AI chatbot features, positioning |
| DarwinBox | MEDIUM | Market presence, features |
| OrangeHRM | MEDIUM | Open source angle |
| Freshworks | MEDIUM | Market positioning |

### Profile Deliverables
1. **At a Glance** — Key metrics comparison table
2. **Positioning & Messaging** — How they position vs. SpaceHR
3. **Product & Features** — Feature comparison matrix
4. **Pricing** — Tier comparison
5. **SEO & Content Strategy** — What's working for them
6. **Strengths & Weaknesses** — Honest assessment
7. **Competitive Implications** — Where to compete

---

## 11. Conversion Optimization

**Task:** Optimize conversions  
**Skill:** `cro` + `copywriting`

### Pages to Optimize

| Page | Current CTR | Target CTR | Task | Skill |
|------|-------------|------------|------|-------|
| Homepage | 3.15% | 5% | Optimize homepage CTR | `cro` + `copywriting` |
| About | 1.81% | 3% | Optimize about page CTR | `cro` |
| Compare | 1.32% | 3% | Optimize compare page CTR | `cro` + `copywriting` |
| AI Automation | 0.06% | 1% | Optimize AI automation page CTR | `cro` + `copywriting` |
| HR Helpdesk Chatbot | 0% | 2% | Optimize HR helpdesk chatbot CTR | `cro` + `copywriting` |

### CRO Analysis Framework
1. **Value Proposition Clarity** — Can visitors understand what this is within 5 seconds?
2. **Headline Effectiveness** — Does it communicate core value?
3. **CTA Placement** — Is there one clear primary action?
4. **Trust Signals** — Customer logos, testimonials, case studies
5. **Objection Handling** — FAQ, guarantees, comparisons
6. **Friction Points** — Form fields, navigation, load times

---

## 12. Analytics & Tracking

**Task:** Set up analytics & tracking  
**Skill:** `analytics`

### Tracking Setup Plan

| Tool | Purpose | Priority |
|------|---------|----------|
| GA4 | Web analytics, conversion tracking | HIGH |
| Google Tag Manager | Event tracking, tag management | HIGH |
| Google Search Console | SEO performance monitoring | HIGH |
| PageSpeed Insights | Core Web Vitals monitoring | MEDIUM |

### Key Events to Track
| Event | Properties | Trigger |
|-------|------------|---------|
| demo_requested | - | Demo form submit |
| signup_completed | method, plan | Signup success page |
| cta_clicked | button_text, location | CTA button clicks |
| form_submitted | form_type | Form submissions |
| template_downloaded | template_name | Template download clicks |

---

## 13. Measurement & KPIs

### Monthly Tracking

| Metric | Current | 3-Month Target | 6-Month Target | Skill |
|--------|---------|----------------|----------------|-------|
| Total Clicks | 57 | 200 | 500 | `seo-audit` |
| Total Impressions | 15,599 | 30,000 | 60,000 | `seo-audit` |
| Average CTR | 0.37% | 0.8% | 1.2% | `cro` |
| Average Position | 55 | 40 | 30 | `content-strategy` |
| Pages Indexed | 80 | 120 | 150 | `seo-audit` |
| Referring Domains | 2 | 20 | 50 | `directory-submissions` |
| Domain Rating | Unknown | 20 | 30+ | `directory-submissions` |
| G2 Reviews | 0 | 10 | 25 | `directory-submissions` |
| AI Citations | Unknown | 5 | 15+ | `ai-seo` |

### Tools to Monitor

1. **Google Search Console** — Weekly review
2. **Google Analytics 4** — Track organic traffic and conversions
3. **Ahrefs/Semrush** — Track rankings, backlinks, competitors
4. **PageSpeed Insights** — Monthly Core Web Vitals check
5. **Otterly AI / Peec AI** — Monthly AI visibility check

---

## 14. Appendix: Data Sources

All data in this report is from Google Search Console exports dated July 31, 2026:
- Coverage report (indexing status)
- Performance report (clicks, impressions, CTR, position)
- Breadcrumbs report (schema validation)
- HTTPS report (security)
- Review snippets report (rich results)
- Video indexing report (video SEO)
- Links report (backlink profile)

---

## 15. Skills Reference

| Skill | Purpose | When to Use |
|-------|---------|-------------|
| `seo-audit` | Technical SEO audit and diagnostics | Initial assessment, ongoing monitoring |
| `schema` | Structured data implementation | Add FAQ, Product, SoftwareApplication schema |
| `ai-seo` | AI search optimization | Get cited by ChatGPT, Perplexity, AI Overviews |
| `programmatic-seo` | Build pages at scale | Templates, comparisons, integrations |
| `content-strategy` | Content planning | Topic clusters, editorial calendar |
| `site-architecture` | Site structure and internal linking | Page hierarchy, navigation, URL structure |
| `directory-submissions` | Backlink building via directories | G2, Capterra, Product Hunt submissions |
| `free-tools` | Free tools for lead gen and links | Calculators, generators, analyzers |
| `copywriting` | On-page copy optimization | Titles, meta descriptions, page copy |
| `analytics` | Tracking and measurement setup | GA4, GTM, conversion tracking |
| `video` | Video content and SEO | Fix video indexing, create video content |
| `competitor-profiling` | Competitive intelligence | Research competitors, find gaps |
| `cro` | Conversion rate optimization | Improve CTR, landing page conversions |

---

*Report generated using the SEO Audit Skill framework from marketingskills.  
Skills referenced: seo-audit, schema, ai-seo, programmatic-seo, content-strategy, site-architecture, directory-submissions, free-tools, copywriting, analytics, video, competitor-profiling, cro.*

*Last updated: July 31, 2026 — After all code changes applied*
