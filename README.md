# Player Studio

A sister site concept to characters.agency, tuned for a younger, internet-native audience (crypto, AI, devtools). Dark-first, with a light mode toggle.

## Quick start

```bash
npm install
npm run dev
```

Open http://localhost:3000

## Newsletter (Loops)

Newsletter signup posts to `/api/subscribe`.

To enable real subscriptions via Loops, set:

```bash
LOOPS_API_KEY=YOUR_LOOPS_API_KEY
```

This uses the Loops server-side client to create/update a contact.

If the key is not set, the endpoint returns success (demo mode for internal review).

## Notes

- Case studies, client names, and metrics are fictional sample content designed for internal review.
- Imagery is generated artwork stored in `public/work/**`.
- Default theme is dark. The toggle stores preference in `localStorage`.
