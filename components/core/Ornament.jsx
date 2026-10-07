import React from 'react';
import { Icon } from './Icon.jsx';

/** Rule-glyph-rule separator — the brand's borrowed-from-signage section break. */
export function Ornament({ glyph = 'utensils-crossed', tone = 'gold', width = '100%', style, ...rest }) {
  const color = tone === 'gold' ? 'var(--gold-500)' : tone === 'maroon' ? 'var(--maroon-600)' : 'var(--cream-300)';
  const rule = { flex: 1, height: 1, background: 'linear-gradient(90deg, transparent, ' + color + ')' };
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-3)', width, ...style }} {...rest}>
      <div style={rule} />
      <Icon name={glyph} size={18} color={color} />
      <div style={{ ...rule, background: 'linear-gradient(90deg, ' + color + ', transparent)' }} />
    </div>
  );
}
