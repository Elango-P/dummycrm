# Vezewire Technologies — Quotation Workflow CRM

This project is a demo CRM for Vezewire Technologies built with Next.js, TypeScript, and Firebase-ready data structures. The app reproduces the quotation workflow interfaces in the supplied references and is structured so it can be connected to Firebase Firestore and Zoho ERP.

## Project structure

- `app/` — app routes and shared layout
- `components/` — UI components for dashboard, RFQs, and handoff flow
- `lib/` — mock business logic, types, and dashboard metrics
- `scripts/` — demo data seeding and automation scripts
- `public/` — static assets

## Implementation plan

1. Phase 1: Recreate reference screens with realistic fictional data.
2. Phase 2: Connect to Firestore and enforce authentication and roles.
3. Phase 3: Add RFQ workflow, approvals, documents, and sales orders.
4. Phase 4: Implement dashboard metrics API.
5. Phase 5: Add Zoho OAuth and synchronization jobs.
6. Phase 6: Extend to quotations, sales orders, and invoice sync.
7. Phase 7: Build a Zoho dashboard extension.
8. Phase 8: Test and document the full deployment.

## Current phase

The app now includes:

- Dashboard matching the Vezewire CRM KPI treatment
- All RFQs page with search, filter, and pagination
- Handoff flow page with eight workflow stages
- Realistic fictional data seeded in code

## Run locally

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Notes

This is a demo implementation and not yet connected to a live Firebase project or Zoho ERP account. The codebase is laid out to support those integrations securely in later phases.
