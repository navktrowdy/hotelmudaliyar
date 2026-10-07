const { Tag, MenuSection, MenuItemRow, SectionHeading, Notice, Button } = window.HotelMudaliyarDesignSystem_f1309a;

function MenuBoard({ menu }) {
  const [filter, setFilter] = React.useState('All');
  const groups = ['All', 'Breakfast', 'Biryani', 'Starters', 'Parotta', 'Chinese'];
  const match = (s) => {
    if (filter === 'All') return true;
    if (filter === 'Breakfast') return /Idly|Dosa|Uthappam|Signature/.test(s.title);
    if (filter === 'Biryani') return /Biryani|Meals/.test(s.title);
    if (filter === 'Starters') return /Starters/.test(s.title);
    if (filter === 'Parotta') return /Parotta|Bread/.test(s.title);
    return /Chinese|Noodles/.test(s.title);
  };
  const shown = menu.sections.filter(match);
  return (
    <section style={{ padding: 'var(--section-y) var(--gutter-page)', background: 'var(--surface-sunken)' }}>
      <div style={{ maxWidth: 'var(--container-text)', margin: '0 auto' }}>
        <SectionHeading eyebrow="79 dishes · prices in rupees" title="The Full Menu" tamil="உணவு பட்டியல்" />
        <div style={{ display: 'flex', gap: 'var(--space-2)', justifyContent: 'center', flexWrap: 'wrap', margin: 'var(--space-6) 0' }}>
          {groups.map((g) => <Tag key={g} selected={filter === g} onClick={() => setFilter(g)}>{g}</Tag>)}
        </div>
        <Notice tone="info" title="Service windows">Breakfast 7:00–11:30 am · Meals 12:00–3:30 pm · Dinner 6:00–11:00 pm. Kothu parotta from 6:00 pm.</Notice>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-7)', marginTop: 'var(--space-7)' }}>
          {shown.map((s) => (
            <div key={s.title} style={{ background: 'var(--surface-card)', border: '1px solid var(--border-hairline)', borderRadius: 'var(--radius-card)', padding: 'var(--space-6)', boxShadow: 'var(--shadow-xs)' }}>
              <MenuSection title={s.title} tamilTitle={s.tamilTitle} meta={s.meta} glyph={s.glyph}>
                {s.items.map((it) => <MenuItemRow key={it.name} {...it} />)}
              </MenuSection>
            </div>
          ))}
        </div>
        <div style={{ display: 'flex', justifyContent: 'center', marginTop: 'var(--space-7)' }}>
          <Button variant="outline" iconLeft="printer" onClick={() => window.print()}>Print this menu</Button>
        </div>
      </div>
    </section>
  );
}
Object.assign(window, { MenuBoard });
