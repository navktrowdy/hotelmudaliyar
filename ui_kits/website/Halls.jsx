const { SectionHeading, Card, Input, Select, Checkbox, Button, Icon } = window.HotelMudaliyarDesignSystem_f1309a;

function Halls({ onSubmit }) {
  const [ac, setAc] = React.useState(true);
  return (
    <section style={{ padding: 'var(--section-y) var(--gutter-page)', background: 'var(--maroon-800)' }}>
      <div style={{ maxWidth: 'var(--container-wide)', margin: '0 auto' }}>
        <SectionHeading onDark eyebrow="Upstairs at Melamadai" title="Ammaiyappan Hall" tamil="அம்மையப்பன் ஹால்" />
        <div style={{ display: 'grid', gridTemplateColumns: '1.1fr 1fr', gap: 'var(--space-7)', marginTop: 'var(--space-7)', alignItems: 'start' }}>
          <div style={{ color: 'var(--cream-200)' }}>
            <p style={{ fontSize: 'var(--text-md)', lineHeight: 'var(--leading-loose)' }}>
              The first floor is a fully air-conditioned function hall for weddings, reception lunches and family functions. Catering comes from the same kitchen — meals, biryani and Chettinad starters at scale.
            </p>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2,1fr)', gap: 'var(--space-4)', marginTop: 'var(--space-5)' }}>
              {[['users', '120 covers seated'], ['clock', 'Lunch & dinner slots'], ['utensils', 'Kitchen-side service'], ['map-pin', 'Lift access from the street']].map(([i, t]) => (
                <div key={t} style={{ display: 'flex', gap: 'var(--space-3)', alignItems: 'center', color: 'var(--cream-100)' }}>
                  <Icon name={i} size={20} color="var(--gold-400)" />
                  <span style={{ fontSize: 'var(--text-base)' }}>{t}</span>
                </div>
              ))}
            </div>
          </div>
          <Card padding="lg">
            <h3 style={{ fontFamily: 'var(--font-display)', fontWeight: 400, fontSize: 'var(--text-lg)', color: 'var(--text-heading)', margin: '0 0 var(--space-4)' }}>Enquire about a date</h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-4)' }}>
              <Input label="Name" placeholder="Your name" />
              <Input label="Mobile number" icon="phone" placeholder="98xx xxx xxx" />
              <Select label="Function" options={['Wedding reception', 'Betrothal lunch', 'Birthday', 'Company lunch']} />
              <Checkbox label="A/C hall required" checked={ac} onChange={setAc} />
              <Button variant="primary" block onClick={onSubmit}>Send enquiry</Button>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
}
Object.assign(window, { Halls });
