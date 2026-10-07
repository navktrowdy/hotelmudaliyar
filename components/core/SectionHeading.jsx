import React from 'react';
import { Ornament } from './Ornament.jsx';

/** Bilingual section title: uppercase eyebrow, display headline, Tamil line. */
export function SectionHeading({ eyebrow, title, tamil, align = 'center', onDark = false, ornament = true, style, ...rest }) {
  const centered = align === 'center';
  return (
    <header style={{
      display: 'flex', flexDirection: 'column', gap: 'var(--space-2)',
      alignItems: centered ? 'center' : 'flex-start', textAlign: centered ? 'center' : 'left', ...style,
    }} {...rest}>
      {eyebrow ? (
        <span style={{
          fontFamily: 'var(--font-sans)', fontSize: 'var(--text-xs)', fontWeight: 'var(--weight-semibold)',
          letterSpacing: 'var(--tracking-caps)', textTransform: 'uppercase',
          color: onDark ? 'var(--gold-400)' : 'var(--gold-600)',
        }}>{eyebrow}</span>
      ) : null}
      <h2 style={{
        fontFamily: 'var(--font-display)', fontSize: 'var(--text-2xl)', lineHeight: 'var(--leading-snug)',
        color: onDark ? 'var(--cream-100)' : 'var(--text-heading)', margin: 0, fontWeight: 400,
      }}>{title}</h2>
      {tamil ? (
        <span style={{
          fontFamily: 'var(--font-tamil)', fontSize: 'var(--text-md)',
          color: onDark ? 'var(--maroon-200)' : 'var(--text-muted)',
        }}>{tamil}</span>
      ) : null}
      {ornament ? <Ornament tone={onDark ? 'gold' : 'gold'} width={centered ? 180 : 120} style={{ marginTop: 'var(--space-2)' }} /> : null}
    </header>
  );
}
