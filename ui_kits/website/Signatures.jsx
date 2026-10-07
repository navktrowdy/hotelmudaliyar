const { SectionHeading, DishCard, Ornament } = window.HotelMudaliyarDesignSystem_f1309a;

const DISHES = [
  { name: 'Muttai Idli', tamilName: 'முட்டை இட்லி', price: 130, diet: 'egg', badge: 'Signature', note: 'The Goripalayam original. Idli steamed with egg.' },
  { name: 'Mutton Muttai Idli', price: 350, diet: 'nonveg', note: 'Muttai idli finished with mutton kheema masala.' },
  { name: 'Seeraga Samba Mutton Biryani', price: 300, diet: 'nonveg', badge: 'Signature', note: 'Short-grain seeraga samba, dum-cooked to order.' },
  { name: 'Madurai Spl. Parotta', price: 80, diet: 'veg', note: 'Two pieces, layered and slapped on the tawa.' },
];

function Signatures({ onOpen }) {
  return (
    <section style={{ padding: 'var(--section-y) var(--gutter-page)', background: 'var(--surface-page)' }}>
      <div style={{ maxWidth: 'var(--container-wide)', margin: '0 auto' }}>
        <SectionHeading eyebrow="What people come for" title="Mudaliyar Signature Dishes" tamil="சிறப்பு உணவுகள்" />
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 'var(--space-5)', marginTop: 'var(--space-7)' }}>
          {DISHES.map((d) => <DishCard key={d.name} {...d} onClick={() => onOpen && onOpen(d)} />)}
        </div>
        <Ornament glyph="star" style={{ marginTop: 'var(--space-7)' }} />
      </div>
    </section>
  );
}
Object.assign(window, { Signatures });
