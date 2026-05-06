# Architecture Checklist

- [x] React components are split into independent files.
- [x] Event handlers and UI logic live in hooks where they cross component boundaries.
- [x] Static text, lists, and image URLs live in `src/data/mockData.ts`.
- [x] Component props use named `Readonly` TypeScript interfaces ending in `Props`.
- [x] Tailwind classes use theme tokens rather than hardcoded hex colors.
- [x] The app entry point renders the composed page.
