const { Logo, Ornament, Icon } = window.HotelMudaliyarDesignSystem_f1309a;

function Footer() {
  return (
    <footer style={{ background: 'var(--maroon-900)', padding: 'var(--space-8) var(--gutter-page) var(--space-6)', color: 'var(--cream-200)' }}>
      <div style={{ maxWidth: 'var(--container-wide)', margin: '0 auto' }}>
        <div style={{ display: 'flex', gap: 'var(--space-8)', alignItems: 'flex-start' }}>
          <Logo variant="wordmark" height={64} style={{ borderRadius: 'var(--radius-sm)' }} />
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, minmax(0,1fr))', gap: 'var(--space-6)', marginLeft: 'auto', fontSize: 'var(--text-sm)', lineHeight: 1.9 }}>
            <div>
              <div className="hm-eyebrow" style={{ color: 'var(--gold-400)' }}>Visit</div>
              <div style={{ display: 'flex', gap: 8, marginTop: 8 }}><Icon name="map-pin" size={16} color="var(--gold-500)" /><span>No. 1-A, Pandi Kovil Ring Road,<br />Melamadai, Near PC Perungudi,<br />Madurai 625020</span></div>
            </div>
            <div>
              <div className="hm-eyebrow" style={{ color: 'var(--gold-400)' }}>Hours</div>
              <div style={{ marginTop: 8 }}>Breakfast 7:00–11:30 am<br />Meals 12:00–3:30 pm<br />Dinner 6:00–11:00 pm</div>
            </div>
            <div>
              <div className="hm-eyebrow" style={{ color: 'var(--gold-400)' }}>Order</div>
              <div style={{ marginTop: 8 }}>Takeaway at the counter<br />Delivery on Swiggy & Zomato<br />Hall bookings by phone</div>
            </div>
          </div>
        </div>
        <Ornament tone="gold" style={{ margin: 'var(--space-6) 0 var(--space-4)' }} />
        <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 'var(--text-xs)', color: 'var(--maroon-200)' }}>
          <span>Mudaliyar Idly Kadai, Goripalayam · since the 1960s</span>
          <span className="hm-tamil">ஹோட்டல் முதலியார்</span>
        </div>
      </div>
    </footer>
  );
}
Object.assign(window, { Footer });
