# ZuriHac Time

A tiny TypeScript-first sketch for a Pebble / PebbleOS-style schedule app for the ZuriHac 2026 week in Rapperswil.

The schedule covers:

- Haskell Ecosystem Workshop — 2026-06-04, placeholder until the public program is finalized.
- Haskell Implementors' Workshop — 2026-06-05.
- ZuriHac 2026 — 2026-06-06 to 2026-06-08.

The app model is intentionally watch-first: show `Now`, `Next`, day browsing, favorites, and vibration reminders instead of trying to reproduce a full conference website on a tiny screen.

## Current status

This is a scaffold, not a finished Pebble package. The source is written in TypeScript so it can later target either:

1. a PebbleKit JS / pebble.js-style app, where JS runs in the phone-side Pebble app context, or
2. an embedded JavaScript PebbleOS-compatible runtime, if that is the practical route for Pebble Time 2.

## Files

- `src/schedule.ts` — typed event data.
- `src/model.ts` — time and filtering helpers.
- `src/app.ts` — minimal app-flow sketch for a Pebble-style UI.
- `src/index.ts` — simple CLI smoke test for the model.

## Development

```sh
npm install
npm run check
npm run build
npm run demo
```

## Design notes

Times are stored as Swiss local civil time, using minutes after midnight, not UTC timestamps. This is deliberate: the watch UI cares about the local event timetable, and avoiding UTC conversion prevents off-by-one-day bugs around `Date.prototype.toISOString()`.

Schedule source URLs:

- https://zfoh.ch/zurihac2026/
- https://haskell.foundation/events/2026-haskell-implementors-workshop.html
