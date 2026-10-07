# UI kit — Hotel Mudaliyar website

A single-page marketing site, the primary public surface. Screens/sections:

| File | What it is |
|---|---|
| `Hero.jsx` | Maroon field + storefront photograph at 22% with a bottom scrim, emblem at 230px, badge with the opening date. |
| `Signatures.jsx` | Four `DishCard`s for the Muttai Idli family and the seeraga samba biryani. Photographs were not supplied, so the tiles show the placeholder plate. |
| `MenuBoard.jsx` | The full 79-dish menu from `data/menu.json`, filterable with `Tag` chips, rendered as `MenuSection` + `MenuItemRow`. |
| `Story.jsx` | Six-card history (evening stall by Goripalayam bus stand, GH/American College/Court regulars, open till 3 am, *Kadhal* 2004, press, Melamadai 2026) plus an "As seen in" strip from the supplied press/film images. |
| `Halls.jsx` | Ammaiyappan Hall (A/C) enquiry form on the maroon field. |
| `Footer.jsx` | Address, hours, ordering channels, bilingual sign-off. |

`index.html` wires them together: nav scrolls between sections, menu chips filter, the reserve/enquiry buttons open `Dialog`.

**Source of truth:** no website exists yet — this kit is composed from the supplied logo artwork, the storefront photograph, the menu spreadsheet and the founding history in the brief. Copy is taken from those only; nothing about awards, ratings or years-in-business beyond "since the 1960s" is invented.
