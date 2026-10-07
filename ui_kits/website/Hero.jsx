const { Button, Logo, Badge } = window.HotelMudaliyarDesignSystem_f1309a;

function Hero({ onMenu, onReserve }) {
  return (
    <section style={{ position: 'relative', background: 'var(--grad-maroon-field)', overflow: 'hidden' }}>
      <img src="../../assets/photo-storefront-melamadai.jpg" alt="" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', opacity: 0.22 }} />
      <div style={{ position: 'absolute', inset: 0, background: 'var(--scrim-bottom)' }} />
      <div style={{ position: 'relative', maxWidth: 'var(--container-wide)', margin: '0 auto', padding: '88px var(--gutter-page) 96px', display: 'flex', gap: 'var(--space-8)', alignItems: 'center' }}>
        <div style={{ maxWidth: 620 }}>
          <Badge tone="gold" variant="outline">Melamadai, Madurai · Open since 22 Feb 2026</Badge>
          <h1 style={{ fontFamily: 'var(--font-display)', fontWeight: 400, fontSize: 'var(--text-4xl)', lineHeight: 'var(--leading-tight)', color: 'var(--cream-50)', margin: 'var(--space-4) 0 var(--space-3)' }}>
            Madurai’s late-night idly kadai, in a new home
          </h1>
          <p style={{ fontFamily: 'var(--font-tamil)', fontSize: 'var(--text-lg)', color: 'var(--gold-300)', margin: '0 0 var(--space-4)' }}>ஹோட்டல் முதலியார் · மேலமடை</p>
          <p style={{ fontSize: 'var(--text-md)', color: 'var(--cream-200)', lineHeight: 'var(--leading-loose)', maxWidth: 520 }}>
            Started in the 1960s by Late Thiru P. Kandasamy Mudaliyar as an evening stall beside the Goripalayam bus stand. It stayed open till 3 am for GH, American College and the Court. Same batter and same kheema, now on Pandi Kovil Ring Road.
          </p>
          <div style={{ display: 'flex', gap: 'var(--space-3)', marginTop: 'var(--space-6)' }}>
            <Button variant="secondary" size="lg" iconRight="arrow-right" onClick={onMenu}>See the menu</Button>
            <Button variant="onDark" size="lg" iconLeft="phone" onClick={onReserve}>Reserve a table</Button>
          </div>
        </div>
        <div style={{ marginLeft: 'auto', display: 'grid', placeItems: 'center' }}>
          <Logo variant="emblem" height={230} style={{ borderRadius: '50%', boxShadow: 'var(--shadow-lg)' }} />
        </div>
      </div>
    </section>
  );
}
Object.assign(window, { Hero });
