# Hotel Mudaliyar — Design System

A Madurai breakfast house with a sixty-year lineage and a brand new building.

**Mudaliyar Idly Kadai** was established at **Goripalayam, Madurai in the 1960s** by Late Thiru **Kandasamy Mudaliyar**, and is run today by **Mr K. Tamilselvan**. When the Goripalayam bridge works began, the government acquired the restaurant premises; the family built a new three-floor restaurant at **Melamadai, Pandi Kovil Ring Road** and opened it as **Hotel Mudaliyar** on **22 February 2026**. The first floor is the air-conditioned **Ammaiyappan Hall** function room. The kitchen is South Indian and Chettinad, with an Indo-Chinese section — 79 dishes on the current card, from ₹45 idly to ₹350 mutton muttai idli.

## Sources given to me

| Source | What it gave |
|---|---|
| `uploads/Hotel Mudaliyar Menu_Final Rev.xlsx` | Sheet 1: the full menu — section names, dish names, prices (kept verbatim in `data/menu.json`). Sheet 2: COGS purchase categories. Sheet 3: a POS product-master schema (`ProOnlineRate`, `SwiggyProid`, `ZomatoPrid`) — evidence of Swiggy/Zomato channels. Copy preserved at `data/menu-source.xlsx`. |
| `uploads/WhatsApp Image 2026-08-20 at 22.09.18.jpeg` | The **only** logo artwork: gold-on-maroon crest + "Hotel Mudaliyar" lettering. Raster, no vector. Cropped into `assets/logo-*.png`. |
| `uploads/IMG_2870.JPG` | Opening-day photograph of the Melamadai premises — fascia boards in English and Tamil, the rooftop hoarding, the Grand Opening banner ("Experience the Taste of South India! Authentic Chettinad & South Indian Delicacies"), the address plate. |
| Brief (chat) | Founding history, ownership, the Goripalayam→Melamadai move. |

No website, app, Figma file or codebase exists yet. **Everything visual here is derived from the logo artwork, the signage in the photograph and the menu spreadsheet** — nothing is copied from another restaurant brand, and no logo has been redrawn.

## Index

- `styles.css` — the single entry point consumers link. `@import`s only.
- `tokens/` — `fonts.css`, `colors.css`, `typography.css`, `spacing.css`, `elevation.css`, `motion.css`, `base.css`.
- `guidelines/` — 21 foundation specimen cards (Colors, Type, Spacing, Brand).
- `assets/` — `logo-full-maroon.png`, `logo-emblem-maroon.png`, `logo-wordmark-maroon.png`, `logo-lockup-maroon.jpeg` (original), `photo-storefront-melamadai.jpg`, `icons/*.svg` (29 Lucide glyphs).
- `data/menu.json` — the menu, structured; `data/menu-source.xlsx` — the original workbook.
- `components/` — 19 primitives:
  - `core/` — `Button`, `IconButton`, `Icon`, `Logo`, `Badge`, `Tag`, `Card`, `Ornament`, `SectionHeading`
  - `menu/` — `MenuItemRow`, `MenuSection`, `DishCard`, `DietDot`
  - `forms/` — `Input`, `Select`, `Checkbox`, `QuantityStepper`
  - `navigation/` — `NavBar`, `TabBar`
  - `feedback/` — `Dialog`, `Notice`
- `ui_kits/website/` — the marketing site (hero, signatures, full menu, story, hall enquiry, footer).
- `ui_kits/menu_card/` — three printed A4 menu pages from the same primitives.
- `ui_kits/order_app/` — 390×780 table-side ordering flow.
- `SKILL.md` — Agent-Skills wrapper.

**Intentional additions.** No source defined a component inventory, so the set above is a standard restaurant kit. Two additions are brand-specific rather than generic: `Ornament` (the rule–glyph–rule divider, taken from the crest's crossed spoons and the signage rules) and `DietDot` (the FSSAI-style veg/egg/non-veg mark that Indian menus legally carry).

## Content fundamentals

**Voice: a family business stating facts.** Plain, warm, unhurried. The brand's own words, from the banner, are the register: *"Experience the Taste of South India! Authentic Chettinad & South Indian Delicacies."* Confident, a little formal, no wink.

- **Bilingual, always in this order.** English first, Tamil second — matching the fascia (`Hotel Mudaliyar` · `ஹோட்டல் முதலியார்`). Tamil is never a translation afterthought and never smaller than 13px; it is the second line of a heading or the sub-line of a dish name.
- **Person.** *We* for the house ("We will call you back"), *you* for the guest. Never "I". Never "the customer".
- **Dish names are never edited.** They come from the menu card exactly as written — "Seeraga Samba Mutton Biryani", "Madurai Spl. Parotta", "Chicken 65 Boneless", "Muttai Idli". Do not correct spellings, expand abbreviations, or anglicise ("Idly" stays "Idly" in the Idly Corner and "Idli" in Muttai Idli — the source spells both ways; follow the source per item).
- **Casing.** Title Case for dish and section names. UPPERCASE with wide tracking only for eyebrows, badges and buttons ("BREAKFAST / DINNER", "SIGNATURE", "RESERVE A TABLE"). Never all-caps a sentence.
- **Prices.** Whole rupees with the ₹ sign: `₹130`. Never `Rs. 130`, never `₹130.00`, never `130/-`.
- **Time is stated as service windows,** not adjectives: "Breakfast 7:00–11:30 am", "Kothu parotta from 6:00 pm". "Served until the batter runs out" is on-brand; "all-day dining" is not.
- **Heritage is stated once, factually.** "Since the 1960s", "Goripalayam", "the second generation". No "legendary", "iconic", "world-famous", no invented awards, ratings or footfall numbers.
- **No emoji.** Not in UI, not in copy, not in badges. The one decorative glyph vocabulary is the icon set.
- **Sentence length.** Short. Two clauses maximum. Example paragraph: *"Idli batter steamed with egg, finished with kheema masala. Served from 7 am until the batter runs out."*
- **What we never write:** "delicious", "mouth-watering", "authentic" as a standalone claim (the banner earns it because it names the cuisines), "experience the flavours of", exclamation marks outside the banner quote.

## Visual foundations

**The whole system is three materials: maroon lacquer, gold leaf, cream paper** — read straight off the logo and the fascia board.

- **Colour.** Maroon (`--maroon-700` #5E0D11, deepening to #2E0508) is the brand field: headers, footers, hero, primary buttons. Gold (`--gold-500` #E0A526 → `--gold-300` #F8D66B) is ornament and emphasis only — rules, crests, eyebrows, the secondary CTA — **never body text and never a large fill**. Cream (#FDF6E7/#FFFCF4) is every page and card surface. Teak browns come from the fascia timber; the carpet red, banana-leaf green and chilli orange are accents for status and dietary marks. **Two background colours per layout, maximum** (cream + maroon), with `--surface-sunken` as the only third tone.
- **Type.** Display: **Yeseva One**, weight 400 only, for headlines and menu section titles. Script: **Grand Hotel**, only for the wordmark and one hero flourish — never a paragraph. Body/UI: **Mukta Malar** (300–700), which also carries Tamil in running text. Tamil display: **Noto Serif Tamil**. Mono: **JetBrains Mono**, for token labels and bill numbers. Prices are tabular semibold maroon.
- **Backgrounds.** Flat colour first. The one photograph is used full-bleed at 18–25% opacity behind the hero under a bottom scrim (`--scrim-bottom`). The maroon field uses a *soft radial* (`--grad-maroon-field`) copied from the lockup — lighter at 30% height, dark at the edges. Gold appears as a gradient only as foil on text or a rule (`--grad-gold-foil`). **No purple, no blue-violet, no mesh gradients, no noise, no repeating pattern tiles** — the brand has no textile motif in its assets.
- **Cards.** Cream plate, 10px radius, 1px `#E4D6BC` hairline, `--shadow-xs` at rest. No coloured left-border accents. Interactive cards lift 2px and go to `--shadow-md` over 200ms. Inverse cards are the maroon field with a `--maroon-600` hairline.
- **Borders and rules.** Hairlines are warm brown-cream, never grey. Gold hairlines mark ceremony (dialogs, outlined cards, the nav underline). Section breaks are the `Ornament`: a rule fading into a centred glyph and fading out.
- **Corner radii.** 0 for full-bleed bands, 3px for badges, 6px for controls, 10px for cards, 16px only for large frames. Pills (`999px`) exist for exactly one component: the `Tag` filter chip.
- **Shadows.** All maroon-tinted (`rgba(46,5,8,…)`), never black, never larger than `--shadow-lg` (18px/44px) and only on modals. Inner shadow is used once, as the press state of solid controls. Focus is a gold ring: `--shadow-gold-glow` + a 2px `--gold-500` outline — **never the browser blue**.
- **Animation.** Restrained and flat-eased: `cubic-bezier(.32,.08,.24,1)`. 120ms for control hover/press, 200ms for card lift and tab change, 360ms for dialogs, one 620ms 16px fade-up per section on first view. **No bounce, no spring, no parallax, no auto-playing carousels, no counters ticking up.**
- **Hover / press.** Hover *lightens* the maroon (700→600) and *lightens* the gold (400→300); ghost and outline buttons pick up a `--gold-100` wash. Press moves the control 1px down — nothing scales, nothing changes hue.
- **Transparency and blur.** Only two places: the dialog scrim (maroon at 62% with a 12px blur) and the hero photograph. No frosted panels, no translucent cards over content.
- **Layout.** Centred containers: 720 / 940 / 1200px. Page gutter 32px, section rhythm 88px. The nav is the only fixed element (sticky, with a gold hairline and a small shadow). The menu is a single centred column at 940px — two-column menus break the leader-dot reading pattern.
- **Imagery.** Warm, bright, midday daylight; saturated maroon-and-gold signage; no filters, no grade, no black-and-white, no grain. Real premises and real plates only. **No food photography was supplied**, so dish tiles show a labelled "Photograph" placeholder rather than stock imagery — replace them with real photographs before anything ships.
- **Protection.** Type over photography sits on a scrim, not a capsule. The logo always sits on a maroon plate (the artwork carries its own maroon ground) — never knocked out, recoloured or outlined.

### Font substitutions — please confirm

No font binaries were supplied. The signage lettering is custom/unknown, so `tokens/fonts.css` loads the closest Google Fonts and this is a **flagged substitution**:

| Role | Substitute | Matching |
|---|---|---|
| Display | Yeseva One | the heavy high-contrast gold "Mudaliyar" lettering |
| Script | Grand Hotel | the calligraphic "Hotel" word and fascia script |
| Body / Tamil UI | Mukta Malar | the fascia's Tamil grotesque; carries both scripts |
| Tamil display | Noto Serif Tamil | headline Tamil |
| Mono | JetBrains Mono | no source equivalent |

**If the signwriter's or printer's fonts exist, please send the files** and I will swap them in and re-tune the scale.

## Iconography

- **No brand icon set was supplied.** The system uses **Lucide** (2px stroke, rounded caps, monochrome) — **a flagged substitution**, chosen because its stroke weight sits comfortably beside the thin gold rules without competing with the ornate crest.
- 29 glyphs are **copied into the project** at `assets/icons/*.svg` — no CDN dependency. Food glyphs: `utensils`, `utensils-crossed`, `soup`, `coffee`, `wheat`, `drumstick`, `fish`, `egg`, `leaf`, `flame`, `ice-cream-cone`. Service: `map-pin`, `phone`, `clock`, `users`, `bike`, `shopping-bag`, `receipt`, `printer`. UI: `menu`, `x`, `search`, `check`, `plus`, `minus`, `chevron-right`, `chevron-down`, `arrow-right`, `star`.
- Rendered through the `Icon` component as a **CSS mask**, so a glyph always inherits `currentColor` — gold on maroon, maroon on cream. Icons are never multicoloured, never filled, never gradient.
- Sizes: 16 inline, 20 in controls, 22–24 in navigation, 32 for feature marks.
- **Emoji are never used.** The only non-Lucide symbols are the rupee sign `₹` and the middot `·` (used as a separator in addresses, service windows and sub-lines). The dietary mark is a drawn square-and-dot (`DietDot`), matching Indian menu convention, not an icon.
- The crest's own motifs — the lotus, the crossed spoons, the wheat wreath, the vel/spear — exist **only** inside the supplied logo raster. They are not extracted, redrawn or used as standalone icons; `Ornament` evokes them with `utensils-crossed` instead.
