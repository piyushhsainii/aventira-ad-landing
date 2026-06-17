# Integration Notes — Aventira Hero + Pixel Updates

## Files changed

- `Hero.tsx` — Calendly inline embed in card, Meta Pixel events
- `Hero.module.css` — mobile card ordering fix, Calendly wrapper styles

---

## 1. Calendly embed

The `<CalendlyInline />` component is now self-contained inside `Hero.tsx`.
It initialises the Calendly inline widget with your site's cream background:

```
background_color=faf7f2   ← matches card bg
text_color=101925
primary_color=baa375
```

No separate `CalendlyEmbed` component import needed on this page.

---

## 2. Meta Pixel events fired automatically

| Trigger                               | Pixel event         |
| ------------------------------------- | ------------------- |
| User completes Calendly booking       | `Schedule` + `Lead` |
| "Book Strategy Call" nav button click | `Contact`           |

The `window.fbq` guard means nothing breaks if the pixel hasn't loaded yet.

---

## 3. "Book Strategy Call" nav button — add pixel fire

In your `Navbar` / `Header` component, add `onClick`:

```tsx
import { firePixel } from "@/lib/pixel"; // or inline the fbq call

<a
  href="tel:+1XXXXXXXXXX"
  onClick={() =>
    window.fbq?.("track", "Contact", {
      content_name: "Book Strategy Call – Nav",
      content_category: "Admissions Consulting",
    })
  }
>
  Book Strategy Call
</a>;
```

If it's a Calendly popup link instead of a tel: link, also listen for
`calendly.event_scheduled` on `window` (already done inside the Hero embed).

---

## 4. Mobile card ordering — how it works

`display: contents` on `.left` flattens its children into the flex parent,
then CSS `order` values slot the card between the divider and body copy:

```
order 1 → eyebrow
order 2 → headline
order 3 → divider
order 4 → .card  ← card jumps here on mobile
order 5 → tagline
order 6 → stakes
order 7 → body
order 8 → actions (buttons)
order 9 → trust bar
```

This keeps the DOM order intact (card is still after .left in HTML, good for
SEO and screen readers) while visually it appears right below the headline
on narrow viewports.

---

## 5. Env variable

Make sure your `.env.local` (or hosting env) has:

```
NEXT_PUBLIC_CALENDLY_URL=https://calendly.com/jake-aventiraadmissionsconsulting/30min
```
