const { MenuSection, MenuItemRow, Ornament, Badge } = window.HotelMudaliyarDesignSystem_f1309a;

function MenuPage({ sections, page, total }) {
  return (
    <div style={{ width: 794, minHeight: 1123, background: 'var(--surface-card)', padding: '48px 56px', boxShadow: 'var(--shadow-md)', display: 'flex', flexDirection: 'column' }}>
      <header style={{ textAlign: 'center', marginBottom: 'var(--space-6)' }}>
        <img src="../../assets/logo-emblem-maroon.png" alt="Hotel Mudaliyar" style={{ height: 96, borderRadius: '50%' }} />
        <div style={{ fontFamily: 'var(--font-script)', fontSize: 40, color: 'var(--maroon-700)', lineHeight: 1.1, marginTop: 8 }}>Hotel Mudaliyar</div>
        <div style={{ fontFamily: 'var(--font-tamil)', fontSize: 18, color: 'var(--gold-700)' }}>ஹோட்டல் முதலியார் · மேலமடை, மதுரை</div>
        <Ornament tone="gold" style={{ marginTop: 'var(--space-4)' }} />
      </header>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-6)', flex: 1 }}>
        {sections.map((s) => (
          <MenuSection key={s.title} title={s.title} tamilTitle={s.tamilTitle} meta={s.meta} glyph={s.glyph}>
            {s.items.map((it) => <MenuItemRow key={it.name} {...it} />)}
          </MenuSection>
        ))}
      </div>
      <footer style={{ marginTop: 'var(--space-6)', display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontSize: 'var(--text-xs)', color: 'var(--text-muted)', letterSpacing: 'var(--tracking-wide)' }}>
        <Badge tone="neutral">Prices in ₹ · taxes as applicable</Badge>
        <span>No. 1-A, Pandi Kovil Ring Road, Melamadai, Madurai 625020</span>
        <span>{page} / {total}</span>
      </footer>
    </div>
  );
}
Object.assign(window, { MenuPage });
