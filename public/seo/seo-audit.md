# Space HR SEO Overhaul — Audit Log
_Last updated: 2026-06-23_
---

## COMPLETED

### 1. Brand Consistency — "Space HR" → "Space HR"
- Replaced all 76 instances of "Space HR" (two words) across every `.tsx` / `.ts` file
- Affects: all feature pages, compare pages, solution pages, industry pages, region pages, Navbar, Footer, JsonLd, WhatsAppButton, DemoRequest, FAQ answers, alt text, schema JSON, OG tags
- Zero remaining instances — verified with TypeScript compile

---

### 2. Blog System Overhaul

#### 2a. 50 Cluster Posts — Activated & Humanized
- `getClusterPosts()` was defined but never included in the `blogPosts` export — posts were not live
- Added `...getClusterPosts()` to the `blogPosts` export
- Wrote unique HTML content for all 50 cluster posts in `lib/clusterPostContent.ts`
- 5 clusters × 10 posts: AI HR Automation, Performance & Appraisals, Payroll/Compliance/Cost Control, Employee Experience & Retention, Recruitment & Talent Intelligence
- Each post has topic-specific sections, real facts, unique headings, and Space HR feature links
- Added `clusterName` field to `BlogPost` type — used for intra-cluster linking on post pages

#### 2b. Two 404 Blog Posts Recovered
- `employee-attrition-prediction-guide` — was ranking at position 7.87 in GSC, returning 404
- `importance-of-soft-skills` — was ranking at position 4.4 in GSC, returning 404
- Both added to `blogPosts` with ~900–1000 word unique content, feature links, and proper metadata

#### 2c. Dead Code Removed from `lib/blogData.ts`
- Removed `createLongFormContent()` function (~75 lines of generic template content)
- Removed `coreDefinitions` constant (5 post definitions never included in export)
- Removed `coreBlogPosts` constant (generated posts never included in export)
- Updated `getClusterPosts()` fallback from `createLongFormContent(...)` to `""`

#### 2d. Blog Cross-Linking — Handcrafted → Cluster
- Added "Related Reading" box at the end of all 8 handcrafted posts
- Each links to 4 topically matched cluster posts
- Mapping: attrition guide → Employee Experience cluster; soft skills → Performance cluster; chatbot guide → AI Automation cluster; payroll guide → Payroll cluster; 360 guide → Performance cluster; buying guide → Automation + Payroll; analytics guide → Employee Experience + Payroll; recruitment guide → Recruitment cluster

#### 2e. Intra-Cluster Cross-Linking on Post Pages
- Blog post page now shows "More in: [Cluster Name]" section for cluster posts
- Lists 4 peers from the same cluster, linking by slug
- Filters out `noindex` posts

#### 2f. `className=` Bug Fixed in HTML Strings
- All `className=` attributes inside `dangerouslySetInnerHTML` template literals changed to `class=`
- 51 instances fixed across table HTML in `lib/blogData.ts`

---

### 3. Blog Post Page — Server Component Conversion
**File:** `app/blogs/[slug]/page.tsx`

- Was `"use client"` — every blog URL had identical generic metadata
- Converted to async server component
- Added `generateStaticParams()` for static generation of all 58 posts
- Added `generateMetadata()` — each post now gets its own:
  - `<title>` (post title + " | Space HR")
  - `description` (post summary)
  - `openGraph` with `type: "article"`, `publishedTime`, `siteName`, `images`
  - `twitter` card
  - `canonical` URL
  - `robots: { index: false }` automatically applied to `noindex: true` posts
- Added **Article JSON-LD schema** on every post: `headline`, `description`, `datePublished`, `author`, `publisher` with logo, `mainEntityOfPage`
- Added **BreadcrumbList JSON-LD schema**: Home → HR Blog → [Post Title]
- `howToSchema` still emits alongside Article schema where defined
- Related Blogs now excludes `noindex` posts

---

### 4. `/blogs` Page Metadata
**File:** `app/blogs/layout.tsx`

- Rewrote title, description, keywords
- Added full `openGraph` block: `siteName`, `type`, `images`, canonical
- Added `twitter` card

---

### 5. `/features/ai-chatbots` Page
**File:** `app/features/ai-chatbots/page.tsx`

- Title shortened from 81 chars → 51 chars (was being rewritten by Google)
- Added `siteName`, `type`, `images` to OG; fixed alt text
- Added "AI HR Chatbot vs. Traditional HR Support" prose section (~500 words) before FAQ for featured snippet eligibility
- All "Space HR" → "Space HR" in schema, FAQs, body copy

---

### 6. `/regions/dubai` Page
**File:** `app/regions/dubai/page.tsx`

- New title: `"HR Software for Dubai & UAE | WPS Payroll, MOHRE & HRMS"`
- Added `images`, `siteName`, `type` to OG
- Added Twitter card from scratch
- Added ~600-word prose section: WPS mechanics, EOSB gratuity (Federal Decree-Law No. 33 of 2021), Emiratization, multi-nationality workforce document tracking

---

### 7. Sitewide Metadata Pass

All pages now have complete OpenGraph blocks (`title`, `description`, `url`, `siteName`, `type`, `images`) and Twitter card blocks.

| Page group | Pages fixed |
|---|---|
| Compare pages | 14 (bamboohr, orangehrm, rippling had no OG at all) |
| Industry pages | 6 |
| Solution pages | 10 |
| Feature pages | 18 (16 missing `siteName`; 4 missing `twitter`) |
| Region pages | 7 (6 missing `siteName`, `twitter`, `images`) |
| Tools pages | `fw4-form-download`, `w4-generator/layout`, `true-cost-calculator/layout` |
| Glossary | Added `siteName`, `type`, `images`, `twitter` |
| Courses `[slug]/layout` | Added `images` to OG and twitter |
| Templates index | Added `siteName`, `type`, `images`, `twitter` |
| Template `[slug]` pages | 14 new pages, each with full metadata |

---

### 8. Templates Page Overhaul
**Files:** `app/templates/page.tsx`, `app/templates/[slug]/page.tsx`, `app/api/template-download/route.ts`

- All 16 template download files expanded from 5-line skeletons to complete, usable documents (real sections, instructions, field placeholders, examples)
- Created 14 individual landing pages at `/templates/[slug]` — each with unique title/description targeting the specific template keyword, "What's Included" + "Best Used For" sections, Space HR CTA, related template cross-links, and download button
- Template card titles on the index page now link to individual pages
- All 14 template slug pages added to `sitemap.ts`

---

### 9. Sitemap (`app/sitemap.ts`)
- Added 14 template detail page URLs (`/templates/[slug]`)
- Blog posts already dynamically included (filtered by `noindex`)
- All static page groups present: core, SEO landing, features, solutions, compare, industries, regions, tools, resources, courses

---

### 10. `robots.ts`
- Sitemap URL declared: `https://spacehr.net/sitemap.xml`
- `allow: "/"`, `disallow: ["/api/", "/admin/", "/tools/w4-generator/lead"]`
- Lead capture form page excluded from index

---

### 11. Root Layout (`app/layout.tsx`)
- Already had: `metadataBase`, `siteName`, OG, twitter, hreflang (en/en-US/en-IN/en-GB/en-AE), Google Search Console verification token
- No changes needed

---

### 12. Dynamic OG Image Generation ✅
**Files:** `app/opengraph-image.tsx`, `app/blogs/[slug]/opengraph-image.tsx`

- Created `app/opengraph-image.tsx` — Next.js App Router file-based OG image generator using `ImageResponse` API (edge runtime). Generates a branded 1200×630 image: dark navy gradient background, teal left accent bar, Space HR logo, "AI-Powered HR Software for Modern Teams" headline, tagline, spacehr.net URL.
- Created `app/blogs/[slug]/opengraph-image.tsx` — per-post OG image generator. Shows: Space HR Blog label, category badge in teal, full post title in large white text, dynamic font size (38–50px based on title length).
- Removed all 68 instances of `/og-image.jpg` from metadata across 42 files (40 via PowerShell batch + `app/layout.tsx` + `app/courses/[slug]/layout.tsx`).
- Pages with custom images (e.g., `desktop-design-showcase.webp` on feature/compare pages, course cover images) were preserved — only the broken `/og-image.jpg` references were stripped.
- Net result: All pages now have working social cards. Blog posts get unique per-post images with the post title. All other pages inherit the branded default.

---

### 13. Feature Page Prose — Featured Snippet Eligibility ✅
**Files:** `app/features/payroll/page.tsx`, `app/features/attendance/page.tsx`, `app/features/leave-management/page.tsx`, `app/features/goals/page.tsx`

- `/features/payroll` — "How AI Payroll Automation Works" (~550 words): 5-step wizard, anomaly detection, gross-to-net sequence (FICA rates, FUTA mechanics, NACHA ACH), multi-state updates, liability ledger
- `/features/attendance` — "GPS Attendance vs. Traditional Time Clocks" (~530 words): geofencing mechanics, remote/hybrid IP verification, FLSA overtime rules (daily OT in CA/NV/AK), payroll integration
- `/features/leave-management` — "Why Leave Management Software Replaces Spreadsheets" (~550 words): approval workflow validation, statutory entitlements by region (UK 28 days, India 15 days, Singapore EA), accrual accuracy, payroll sync, pattern detection
- `/features/goals` — "OKR-Based Goal Management" (~530 words): cascade architecture, parent-child goal relationships, AI check-in alerts, cross-functional visibility, weekly review frequency research

### 14. Region Page Prose — Compliance Depth ✅
**Files:** `app/regions/india/page.tsx`, `app/regions/uk/page.tsx`, `app/regions/singapore/page.tsx`, `app/regions/canada/page.tsx`, `app/regions/united-states/page.tsx`

- `/regions/india` — PF (12%/12% split, ₹15,000 wage ceiling, EPS 8.33%, ECR files), ESIC (3.25%/0.75%, ₹21,000 threshold, ₹137/day exemption), TDS Section 192 (Form 24Q, 26AS, Form 16, AIS), Gratuity (15/26 formula, ₹20 lakh ceiling)
- `/regions/uk` — PAYE tax codes (1257L, NI Category A rates), RTI FPS submission requirements, auto-enrolment (5%+3%, £10K threshold, re-enrolment cycles), IR35 SDS obligations
- `/regions/singapore` — CPF rates by age bracket (37% under 55 decreasing in steps), OW ceiling $6,000, AIS IR8A filing, SDL (0.25%/$11.25 cap), Part IV Employment Act salary threshold
- `/regions/canada` — CPP (5.95%, $3,500–$68,500, CPP2 at 4%), EI (1.66%/2.324%, ROE timing requirements), provincial tax stacking, T4 EFW2 electronic filing
- `/regions/united-states` — FLSA OT (regular rate definition, daily OT states), FUTA/SUTA wage bases ($7,000–$56,700), ACA employer mandate (50 FTE threshold, 1094-C/1095-C), W-2 EFW2 multi-state filing

### D. Dynamic OG Image Generation
Implement `app/opengraph-image.tsx` with Next.js ImageResponse API. Generates branded social cards with page/post title overlaid on a Space HR branded background — automatically used by all pages without per-page image files.

---

## OUTSTANDING — LOW PRIORITY

### E. Blog Post `author` Field
Article JSON-LD currently sets `author` as the Space HR organization. Adding named authors (e.g., `"Space HR Editorial Team"`) with a dedicated author page at `/about` would improve E-E-A-T signals for Google.

### F. FAQ Schema on Blog Posts
Some handcrafted blog posts contain Q&A-style sections that could be marked up with `FAQPage` JSON-LD for FAQ rich results. Currently only feature/solution/compare pages have FAQ schema.

### G. `dateModified` in Article Schema
Blog post Article schema uses `post.date` for both `datePublished` and `dateModified`. Adding a `lastModified` field to `BlogPost` type and updating it when posts are refreshed would improve freshness signals.

### H. Internal Linking from Homepage
Check whether the homepage (`app/page.tsx`) links to the blog, templates, glossary, and compare pages. Hub pages with strong internal link equity should distribute it to cluster content.

### I. Course Page — Server Component
`app/courses/[slug]/page.tsx` is still `"use client"`. The layout handles metadata but the page itself can't emit JSON-LD. Adding `Course` structured data (schema.org) would be a minor improvement.

---

## FILE MAP — KEY CHANGED FILES

```
lib/
  blogData.ts              — cluster posts activated, dead code removed, clusterName field added
  clusterPostContent.ts    — NEW: unique HTML content for all 50 cluster posts

app/
  layout.tsx               — root metadata (no changes needed — already complete)
  robots.ts                — added /tools/w4-generator/lead to disallow
  sitemap.ts               — added 14 template slug pages

  blogs/
    layout.tsx             — new metadata (title, OG, twitter)
    [slug]/page.tsx        — server component, generateMetadata, Article + BreadcrumbList JSON-LD

  features/
    ai-chatbots/page.tsx   — title fix, prose section, OG complete
    */page.tsx             — siteName + type added to all 16; twitter added to 4

  regions/
    dubai/page.tsx         — new title, prose section, full OG + twitter
    */page.tsx             — siteName, type, images, twitter added to all 6

  compare/*/page.tsx       — full OG + twitter on bamboohr, orangehrm, rippling; siteName on all
  industries/*/page.tsx    — siteName, type, images, twitter on all
  solutions/*/page.tsx     — siteName, type, images, twitter on all

  templates/
    page.tsx               — OG complete; card titles link to slug pages
    [slug]/page.tsx        — NEW: 14 individual landing pages with full metadata

  tools/
    fw4-form-download/page.tsx        — siteName, images, twitter added
    w4-generator/layout.tsx           — siteName, images, twitter added
    true-cost-calculator/layout.tsx   — images, twitter added

  glossary/page.tsx        — siteName, type, images, twitter added
  courses/[slug]/layout.tsx — images added to OG + twitter

app/api/template-download/route.ts   — all 16 template downloads expanded to real content
```
