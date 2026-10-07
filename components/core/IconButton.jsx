import React from 'react';
import { Icon } from './Icon.jsx';

const BOX = { sm: 32, md: 44, lg: 52 };

/** Square icon-only control. 44px default keeps it thumb-sized on the ordering surfaces. */
export function IconButton({ icon, label, variant = 'ghost', size = 'md', disabled = false, style, ...rest }) {
  const [hover, setHover] = React.useState(false);
  const box = BOX[size] || BOX.md;
  const tone = {
    ghost: { background: hover ? 'var(--gold-100)' : 'transparent', color: 'var(--maroon-700)', border: '1px solid transparent' },
    outline: { background: hover ? 'var(--gold-100)' : 'transparent', color: 'var(--maroon-700)', border: '1px solid var(--border-hairline)' },
    solid: { background: hover ? 'var(--action-primary-bg-hover)' : 'var(--action-primary-bg)', color: 'var(--gold-200)', border: '1px solid var(--maroon-700)' },
    onDark: { background: hover ? 'rgba(224,165,38,0.16)' : 'transparent', color: 'var(--gold-300)', border: '1px solid transparent' },
  }[variant];
  return (
    <button
      type="button" aria-label={label} disabled={disabled}
      onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}
      style={{
        width: box, height: box, display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
        borderRadius: 'var(--radius-control)', cursor: disabled ? 'not-allowed' : 'pointer',
        transition: 'var(--transition-control)', opacity: disabled ? 0.45 : 1, ...tone, ...style,
      }}
      {...rest}
    >
      <Icon name={icon} size={size === 'sm' ? 16 : 20} />
    </button>
  );
}
