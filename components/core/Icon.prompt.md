Monochrome Lucide glyph that inherits text colour — the only icon primitive in the system.

```jsx
<Icon name="map-pin" size={20} />
<Icon name="flame" color="var(--spicy)" size={16} />
```

Icons are local SVGs in `assets/icons/`, fetched once and inlined (cached on `window.__hmIconCache`). Set `window.HM_ASSET_BASE` to the relative path of the project root before mounting if the page is not at the root. Never colour an icon with a gradient; use `--gold-500` on maroon and `--maroon-700` on cream.
