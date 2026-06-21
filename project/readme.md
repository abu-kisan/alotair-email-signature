# مجموعة العطير العقارية — Al-Ateer Real Estate Group
### Design System

A brand & design system for **Al-Ateer Real Estate Group** (مجموعة العطير العقارية), a Saudi real-estate company. This project packages the brand's colors, typography, logo assets, and a production-ready **RTL Arabic HTML email signature** that works in Gmail and Outlook.

> The headline deliverable is the email signature in `templates/email-signature/`. Open `templates/email-signature/index.html` for the full preview + paste instructions.

---

## Sources provided
- `uploads/Colors_Digital.pdf`, `uploads/Colors_Print.pdf` — official brand palette (RGB/HEX + CMYK + Pantone).
- `uploads/Bold.ttf`, `Light.ttf`, `Regular.ttf` — **Helvetica Neue LT Arabic** (45 Light / Regular / 75 Bold), the Arabic brand face.
- `uploads/Roboto-*.ttf` — **Roboto** (Light / Regular / Bold), the Latin brand face.
- `uploads/*@4x.png` — the logo mark in 6 brand colorways (Blue/Navy, Gold, Grey, Light Blue, Light Grey, Offwhite). The mark is a hexagonal stylised **"A"** (a diamond cut out of a rounded hexagon).

---

## CONTENT FUNDAMENTALS
- **Language & direction:** Primary language is **Arabic**, set **right-to-left (RTL)**. Latin (English) is secondary — used for URLs, phone numbers, and email addresses, which stay **LTR** even inside Arabic text (`dir="ltr"` on those spans).
- **Tone:** Formal, corporate, understated luxury. Real-estate professional — trustworthy and premium, never casual or playful.
- **Casing:** Latin labels/eyebrows are often **UPPERCASE with wide letter-spacing** (e.g. `AL-ATEER REAL ESTATE`). Arabic has no case; emphasis comes from weight (Bold) and the gold accent color.
- **Voice:** Third-person / institutional ("مجموعة العطير العقارية"), not "we/you" marketing chatter.
- **Numerals:** Western Arabic numerals (0-9) for phone/contact data; phone numbers grouped (`+966 50 000 0000`).
- **Emoji:** **Not** part of the brand. (Emoji appear only as small wayfinding glyphs inside the internal instructions page — never in brand-facing output like the signature itself.)
- **Example copy:** `مجموعة العطير العقارية` · `مدير التطوير العقاري` · `طريق الملك فهد، الرياض، المملكة العربية السعودية`.

---

## VISUAL FOUNDATIONS
- **Colors:** A restrained 6-color palette — deep **navy `#0B1D3B`** (primary) and warm **gold `#AC975F`** (accent) carry the brand; **offwhite `#F3F2ED`** is the page surface; **charcoal `#373737`** and **slate `#6F7A88`** for text; **light blue `#C0D9E5`** as a soft cool tint. Navy + gold is the signature pairing (trust + luxury).
- **Type:** Helvetica Neue LT Arabic for Arabic; Roboto for Latin. Headings = Bold navy; eyebrows/labels = gold; body = charcoal; secondary = slate. In email clients (no webfonts) the Arabic falls back to **Tahoma** for reliable cross-client rendering.
- **Backgrounds:** Flat, calm solids — offwhite or white. **No gradients, no photos-as-texture, no patterns.** Premium = restraint.
- **The gold rule:** A 2px gold vertical/horizontal divider is the brand's signature separator (used in the signature between logo and details, and under the page header).
- **Shadows:** Soft, navy-tinted, low-spread (`0 6px 18px rgba(11,29,59,.06-.10)`) — subtle elevation, never heavy.
- **Corner radius:** Documents/cards use 10–14px rounded corners; the email signature itself uses square corners (email-client safe).
- **Cards:** White fill, 1px `#E2E0D8` subtle border, soft navy shadow, generous padding. An accent variant adds a 4px gold right-border (RTL).
- **Animation / hover:** Minimal. Links shift navy → gold on hover. No bounces or decorative motion — the brand is still and confident.
- **Imagery vibe:** Cool, architectural, premium (where used). The palette skews cool (navy/light-blue) warmed by gold.
- **Logo clear space & usage:** Navy mark on light surfaces; gold or offwhite mark on navy. Keep clear space ≈ the width of the diamond cut-out around the mark.

---

## ICONOGRAPHY
The brand has **no proprietary icon set**. Approach:
- **Logo mark** is the primary brand graphic (`assets/logos/`, 6 colorways).
- The email signature deliberately uses **zero icons** — only typographic labels (`جوال:` `البريد:` `الموقع:` `العنوان:`) and a gold `•` bullet between social links. This is intentional: external icon images are blocked by default in many mail clients, so a text-only signature is the robust choice.
- Social links are **text labels** (لينكدإن / إنستغرام / إكس) rather than logo icons, for the same reason.
- For richer surfaces (web/app, if built later), pair with a thin-stroke line icon set (e.g. Lucide via CDN) to match the understated aesthetic. _No such set is shipped here — flag if needed._

---

## INDEX / MANIFEST
**Root**
- `styles.css` — DS entry point (`@import` list only). Consumers link this one file.
- `tokens/colors.css` · `tokens/typography.css` · `tokens/spacing.css` · `tokens/fonts.css` — design tokens + `@font-face`.
- `readme.md` (this file) · `SKILL.md` — Agent Skill manifest.

**Assets** — `assets/fonts/` (6 TTFs), `assets/logos/` (6 PNG colorways).

**Foundation cards** (`guidelines/`, shown in the Design System tab)
- `colors-primary.card.html`, `colors-neutral.card.html`, `type-arabic.card.html`, `type-latin.card.html`, `logo.card.html`, `spacing.card.html`.

**Templates** (`templates/`)
- `email-signature/` — ⭐ the primary deliverable.
  - `index.html` — preview + paste instructions + editing guide + plain-text version (the template entry).
  - `signature.html` — the clean, copy-ready signature (open this to copy/paste).
  - `logo.png` / `logo-gold.png` — signature logo (upload to a public URL before sending).
  - `ds-base.js` — links the DS into the template preview.

> **Not yet built:** reusable React components and product UI kits — Al-Ateer has no product/app UI in the provided materials, so these were intentionally omitted. Add them if a website or app design context becomes available.
