import React from 'react';
import { Icon } from './Icon.jsx';

const TONES = {
  gold: ['var(--gold-100)', 'var(--gold-700)', 'var(--gold-500)'],
  maroon: ['var(--maroon-100)', 'var(--maroon-700)', 'var(--maroon-200)'],
  veg: ['#E7F2E6', 'var(--veg)', '#BFDCBD'],
  nonveg: ['#F7E5E5', 'var(--nonveg)', '#E4BDBD'],
  spicy: ['#FBE6E0', 'var(--spicy)', '#F0C2B4'],
  neutral: ['var(--cream-200)', 'var(--ink-500)', 'var(--border-hairline)'],
};

/** Small status/dietary marker. Soft by default; solid for one-per-card emphasis such as "Signature". */
export function Badge({ tone = 'gold', variant = 'soft', icon, children, style, ...rest }) {
  const [bg, fg, line] = TONES[tone] || TONES.gold;
  const skin = variant === 'solid'
    ? { background: fg, color: 'var(--cream-50)', border: '1px solid ' + fg }
    : variant === 'outline'
      ? { background: 'transparent', color: fg, border: '1px solid ' + line }
      : { background: bg, color: fg, border: '1px solid ' + line };
  return (
    <span style={{
      display: 'inline-flex', alignItems: 'center', gap: 'var(--space-1)',
      padding: '3px 9px', borderRadius: 'var(--radius-xs)',
      fontFamily: 'var(--font-sans)', fontSize: 'var(--text-2xs)', fontWeight: 'var(--weight-semibold)',
      letterSpacing: 'var(--tracking-caps)', textTransform: 'uppercase', lineHeight: 1.6,
      whiteSpace: 'nowrap', ...skin, ...style,
    }} {...rest}>
      {icon ? <Icon name={icon} size={12} /> : null}
      {children}
    </span>
  );
}
