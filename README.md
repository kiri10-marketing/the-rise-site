# The Rise, 275 Montreal Street

Luxury pitch site for six residences (five full floors plus a garden residence) (Bayleys, Angela Webb). Next.js + Tailwind.

- All words: `src/content/copy.ts` ([DRAFT] = Claude-drafted copy, [PLACEHOLDER] = still to confirm).
- `/marketing`: 100 ad concepts, go-to-market plan, traditional media mock-ups (`public/marketing.html`).
- `/the-rise-brochure.pdf`: 12-page A3 brochure (source in the project files, the-rise/brochure).
- Whole site is noindex. Form leads go to `LEAD_WEBHOOK_URL` when set; otherwise they are not kept on Vercel.

Run locally: `npm ci && npm run dev` (port 3102).
