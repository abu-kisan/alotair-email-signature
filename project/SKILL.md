---
name: alateer-design
description: Use this skill to generate well-branded interfaces and assets for Al-Ateer Real Estate Group (مجموعة العطير العقارية), either for production or throwaway prototypes/mocks/etc. Contains essential design guidelines, colors, type, fonts, logo assets, and a ready RTL Arabic email-signature template for prototyping.
user-invocable: true
---

Read the README.md file within this skill, and explore the other available files.

This is an Arabic-first, RTL real-estate brand. Core palette: navy `#0B1D3B` + gold `#AC975F` on offwhite `#F3F2ED`. Arabic type = Helvetica Neue LT Arabic; Latin = Roboto. The hero deliverable is `templates/email-signature/` (a Gmail/Outlook-ready signature).

If creating visual artifacts (slides, mocks, throwaway prototypes, etc), copy assets out (`assets/logos/`, `assets/fonts/`) and create static HTML files for the user to view. Always set `dir="rtl"` and `lang="ar"` for Arabic content; keep Latin runs (URLs, phones, emails) `dir="ltr"`. For email/HTML-signature work, use table-based layout with fully inline CSS, no JavaScript, no external fonts (fall back to Tahoma for Arabic).

If working on production code, copy assets and read the rules here to become an expert in designing with this brand.

If the user invokes this skill without any other guidance, ask them what they want to build or design, ask some questions, and act as an expert designer who outputs HTML artifacts _or_ production code, depending on the need.
