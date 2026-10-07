# UI kit — table-side ordering app

A 390×780 mobile surface for counter and table-side order taking.

| File | What it is |
|---|---|
| `MenuScreen.jsx` | Maroon header with emblem and table number, horizontally scrolling `Tag` category rail, `MenuItemRow`s with add controls. |
| `CartScreen.jsx` | Order lines with `QuantityStepper`, packing opt-in, totals block, "Send to kitchen". |
| `index.html` | Wires the flow: add → cart → send → bill, with `TabBar` navigation and a `Dialog` confirmation. |

**Why this surface exists:** sheet 3 of the supplied spreadsheet is a POS product master (`ProOnlineRate`, `SwiggyProid`, `ZomatoPrid`, `ProFastMove`), so ordering and aggregator channels are part of the operation. **No screens of the existing POS were supplied** — the layout here is composed from this design system's primitives, not a recreation. Treat the Delivery tab as a deliberate blank: aggregator order flow is unknown.
