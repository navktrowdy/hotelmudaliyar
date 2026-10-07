const { SectionHeading, Card, Badge } = window.HotelMudaliyarDesignSystem_f1309a;
const STORY_BASE = window.HM_ASSET_BASE || '../..';

const STEPS = [
  { year: '1960s', title: 'An evening stall at Goripalayam', body: 'Late Thiru P. Kandasamy Mudaliyar opened Mudaliyar Idly Kadai right next to the Goripalayam bus stand. It was a stall that opened in the evening and stayed open late.' },
  { year: 'The regulars', title: 'GH, American College, the Court', body: 'Doctors and attendants from the Government Hospital, students from American College, lawyers and clerks from the Court. The neighbourhood ate here after work.' },
  { year: 'Till 3 am', title: 'Madurai’s late-night idly', body: 'The kadai served until 3 in the morning. Film stars and public figures stopped in to eat or came by for takeaway.' },
  { year: '2004', title: 'On screen in Kadhal', body: 'முதலியார் இட்லி கடை appears in Kadhal, starring Bharath and Sandhya. Directed by Balaji Sakthivel, music by Joshua Sridhar.' },
  { year: 'In the press', title: 'The muttai idli, written up', body: 'The Tamil press wrote up the muttai idli, idlis fried with egg and masala, when a set cost ₹20. The kadai was also covered by Kumudam, Vasantham TV Singapore and Kairali TV.' },
  { year: '22 Feb 2026', title: 'Hotel Mudaliyar, Melamadai', body: 'The Goripalayam premises were acquired for the bridge construction. Mr K. Tamilselvan now runs the restaurant in a new three-floor building on Pandi Kovil Ring Road.' },
];

const PRESS = [
  { src: '/assets/press-goripalayam-poster.png', caption: 'Goripalayam menu board, with press and TV features', fit: 'cover', pos: 'top' },
  { src: '/assets/film-kadhal-2004.png', caption: 'The kadai in Kadhal (2004)', fit: 'cover', pos: 'center' },
  { src: '/assets/press-muttai-idli-column.png', caption: 'Newspaper column on the muttai idli', fit: 'cover', pos: 'top' },
];

function Story() {
  return (
    <section style={{ padding: 'var(--section-y) var(--gutter-page)', background: 'var(--surface-page)' }}>
      <div style={{ maxWidth: 'var(--container-wide)', margin: '0 auto' }}>
        <SectionHeading eyebrow="Goripalayam · since the 1960s" title="The idly kadai by the bus stand" tamil="எங்கள் கதை" />
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 'var(--space-5)', marginTop: 'var(--space-7)' }}>
          {STEPS.map((s) => (
            <Card key={s.year} padding="lg">
              <Badge tone="maroon">{s.year}</Badge>
              <h3 style={{ fontFamily: 'var(--font-display)', fontWeight: 400, fontSize: 'var(--text-lg)', color: 'var(--text-heading)', margin: 'var(--space-3) 0 var(--space-2)' }}>{s.title}</h3>
              <p style={{ margin: 0, fontSize: 'var(--text-base)', color: 'var(--text-body)', textWrap: 'pretty' }}>{s.body}</p>
            </Card>
          ))}
        </div>
        <div className="hm-eyebrow" style={{ marginTop: 'var(--space-8)', color: 'var(--text-muted)' }}>As seen in</div>
        <div style={{ display: 'grid', gridTemplateColumns: '1.1fr 1.6fr 0.7fr', gap: 'var(--space-4)', marginTop: 'var(--space-3)' }}>
          {PRESS.map((p) => (
            <figure key={p.src} style={{ margin: 0 }}>
              <div style={{ height: 300, borderRadius: 'var(--radius-md)', overflow: 'hidden', boxShadow: 'var(--shadow-md)', background: 'var(--maroon-900)' }}>
                <img src={STORY_BASE + p.src} alt={p.caption} style={{ width: '100%', height: '100%', objectFit: p.fit, objectPosition: p.pos, display: 'block' }} />
              </div>
              <figcaption style={{ marginTop: 'var(--space-2)', fontSize: 'var(--text-sm)', color: 'var(--text-muted)' }}>{p.caption}</figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
Object.assign(window, { Story });
