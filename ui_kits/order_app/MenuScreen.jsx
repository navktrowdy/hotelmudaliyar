const { Tag, MenuItemRow, Badge, Icon, Notice } = window.HotelMudaliyarDesignSystem_f1309a;

function MenuScreen({ menu, onAdd, counts }) {
  const [cat, setCat] = React.useState(menu.sections[0].title);
  const section = menu.sections.find((s) => s.title === cat) || menu.sections[0];
  return (
    <div style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
      <div style={{ background: 'var(--maroon-800)', padding: 'var(--space-4) var(--space-4) var(--space-3)', color: 'var(--cream-100)' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-3)' }}>
          <img src="../../assets/logo-emblem-maroon.png" alt="" style={{ height: 38, borderRadius: '50%' }} />
          <div style={{ lineHeight: 1.15 }}>
            <div style={{ fontFamily: 'var(--font-script)', fontSize: 'var(--text-lg)', color: 'var(--gold-300)' }}>Hotel Mudaliyar</div>
            <div style={{ fontSize: 'var(--text-2xs)', letterSpacing: 'var(--tracking-caps)', textTransform: 'uppercase', color: 'var(--maroon-200)' }}>Table 7 · Melamadai</div>
          </div>
          <Badge tone="gold" variant="outline" style={{ marginLeft: 'auto' }}>Open</Badge>
        </div>
      </div>
      <div style={{ display: 'flex', gap: 'var(--space-2)', padding: 'var(--space-3) var(--space-4)', overflowX: 'auto', background: 'var(--surface-card)', borderBottom: '1px solid var(--border-hairline)' }}>
        {menu.sections.map((s) => <Tag key={s.title} selected={s.title === cat} onClick={() => setCat(s.title)} style={{ whiteSpace: 'nowrap' }}>{s.title.replace(' Section', '').replace('Mudaliyar ', '')}</Tag>)}
      </div>
      <div style={{ flex: 1, overflowY: 'auto', padding: 'var(--space-4)' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-2)', marginBottom: 'var(--space-2)' }}>
          <Icon name={section.glyph} size={18} color="var(--gold-600)" />
          <span style={{ fontFamily: 'var(--font-display)', fontSize: 'var(--text-lg)', color: 'var(--text-heading)' }}>{section.title}</span>
          <span style={{ marginLeft: 'auto', fontSize: 'var(--text-2xs)', textTransform: 'uppercase', letterSpacing: 'var(--tracking-caps)', color: 'var(--text-muted)' }}>{section.meta}</span>
        </div>
        {section.items.map((it) => (
          <MenuItemRow key={it.name} {...it} onAdd={() => onAdd(it)} note={counts[it.name] ? counts[it.name] + ' in cart' : null} />
        ))}
        {section.title === 'Meals' ? <Notice tone="info" title="Lunch only">Veg meals are served 12:00–3:30 pm.</Notice> : null}
      </div>
    </div>
  );
}
Object.assign(window, { MenuScreen });
