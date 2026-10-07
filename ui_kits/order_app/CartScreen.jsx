const { QuantityStepper, Button, Card, DietDot, Ornament, Checkbox } = window.HotelMudaliyarDesignSystem_f1309a;

function CartScreen({ lines, onQty, onPlace }) {
  const [pack, setPack] = React.useState(false);
  const subtotal = lines.reduce((n, l) => n + l.price * l.qty, 0);
  const packing = pack ? lines.length * 10 : 0;
  return (
    <div style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
      <div style={{ padding: 'var(--space-4)', background: 'var(--maroon-800)', color: 'var(--cream-100)' }}>
        <div style={{ fontFamily: 'var(--font-display)', fontSize: 'var(--text-lg)' }}>Your order</div>
        <div style={{ fontFamily: 'var(--font-tamil)', fontSize: 'var(--text-xs)', color: 'var(--maroon-200)' }}>ஆர்டர் விவரம்</div>
      </div>
      <div style={{ flex: 1, overflowY: 'auto', padding: 'var(--space-4)', display: 'flex', flexDirection: 'column', gap: 'var(--space-3)' }}>
        {lines.length === 0 ? <div style={{ color: 'var(--text-muted)', textAlign: 'center', padding: 'var(--space-7) 0' }}>Nothing added yet.</div> : null}
        {lines.map((l) => (
          <Card key={l.name} padding="sm">
            <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-3)' }}>
              <DietDot diet={l.diet} size={12} />
              <div style={{ minWidth: 0 }}>
                <div style={{ fontWeight: 'var(--weight-semibold)', color: 'var(--text-strong)', fontSize: 'var(--text-base)' }}>{l.name}</div>
                <div style={{ fontSize: 'var(--text-sm)', color: 'var(--text-muted)' }}>₹{l.price} each</div>
              </div>
              <div style={{ marginLeft: 'auto', display: 'flex', alignItems: 'center', gap: 'var(--space-3)' }}>
                <QuantityStepper value={l.qty} size="sm" onChange={(v) => onQty(l.name, v)} />
                <span style={{ fontWeight: 'var(--weight-semibold)', color: 'var(--text-price)', fontVariantNumeric: 'tabular-nums', minWidth: 54, textAlign: 'right' }}>₹{l.price * l.qty}</span>
              </div>
            </div>
          </Card>
        ))}
        {lines.length ? <Checkbox label="Pack for takeaway (₹10 per item)" checked={pack} onChange={setPack} /> : null}
      </div>
      <div style={{ borderTop: '1px solid var(--border-hairline)', background: 'var(--surface-card)', padding: 'var(--space-4)' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 'var(--text-sm)', color: 'var(--text-muted)' }}><span>Subtotal</span><span>₹{subtotal}</span></div>
        <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 'var(--text-sm)', color: 'var(--text-muted)' }}><span>Packing</span><span>₹{packing}</span></div>
        <Ornament tone="cream" style={{ margin: 'var(--space-3) 0' }} />
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: 'var(--space-3)' }}>
          <span style={{ fontFamily: 'var(--font-display)', fontSize: 'var(--text-lg)', color: 'var(--text-heading)' }}>Total</span>
          <span style={{ fontWeight: 700, fontSize: 'var(--text-xl)', color: 'var(--text-price)', fontVariantNumeric: 'tabular-nums' }}>₹{subtotal + packing}</span>
        </div>
        <Button variant="primary" block iconRight="arrow-right" disabled={!lines.length} onClick={() => onPlace(subtotal + packing)}>Send to kitchen</Button>
      </div>
    </div>
  );
}
Object.assign(window, { CartScreen });
