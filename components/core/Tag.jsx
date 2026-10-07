import React from 'react';

/** Selectable filter chip — the one place the brand uses a pill radius. */
export function Tag({ selected = false, onClick, children, style, ...rest }) {
  const [hover, setHover] = React.useState(false);
  return (
    <button
      type="button" onClick={onClick} aria-pressed={selected}
      onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}
      style={{
        padding: '8px 18px', borderRadius: 'var(--radius-pill)', cursor: 'pointer',
        fontFamily: 'var(--font-sans)', fontSize: 'var(--text-sm)', fontWeight: 'var(--weight-medium)',
        letterSpacing: '0.02em', transition: 'var(--transition-control)',
        background: selected ? 'var(--maroon-700)' : hover ? 'var(--gold-100)' : 'var(--surface-card)',
        color: selected ? 'var(--gold-200)' : 'var(--maroon-700)',
        border: '1px solid ' + (selected ? 'var(--maroon-700)' : 'var(--border-hairline)'),
        ...style,
      }}
      {...rest}
    >
      {children}
    </button>
  );
}
