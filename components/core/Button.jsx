import React from 'react';
import { Icon } from './Icon.jsx';

const SIZES = {
  sm: { padding: '7px 14px', fontSize: 'var(--text-sm)', icon: 16, gap: 'var(--space-2)' },
  md: { padding: '11px 22px', fontSize: 'var(--text-base)', icon: 18, gap: 'var(--space-2)' },
  lg: { padding: '15px 32px', fontSize: 'var(--text-md)', icon: 20, gap: 'var(--space-3)' },
};

const VARIANTS = {
  primary: { background: 'var(--action-primary-bg)', color: 'var(--action-primary-fg)', border: '1px solid var(--action-primary-bg)', boxShadow: 'var(--shadow-sm)' },
  secondary: { background: 'var(--action-secondary-bg)', color: 'var(--action-secondary-fg)', border: '1px solid var(--gold-500)', boxShadow: 'var(--shadow-sm)' },
  outline: { background: 'transparent', color: 'var(--action-ghost-fg)', border: '1px solid var(--maroon-700)', boxShadow: 'none' },
  ghost: { background: 'transparent', color: 'var(--action-ghost-fg)', border: '1px solid transparent', boxShadow: 'none' },
  onDark: { background: 'transparent', color: 'var(--gold-300)', border: '1px solid var(--gold-500)', boxShadow: 'none' },
};

const HOVER = {
  primary: { background: 'var(--action-primary-bg-hover)', borderColor: 'var(--action-primary-bg-hover)' },
  secondary: { background: 'var(--action-secondary-bg-hover)' },
  outline: { background: 'var(--gold-100)' },
  ghost: { background: 'var(--gold-100)' },
  onDark: { background: 'rgba(224,165,38,0.16)' },
};

/** Primary action control. Rectangular with a 6px radius — the brand does not use pills for actions. */
export function Button({
  variant = 'primary', size = 'md', iconLeft, iconRight, block = false,
  disabled = false, children, style, onClick, type = 'button', ...rest
}) {
  const [hover, setHover] = React.useState(false);
  const [press, setPress] = React.useState(false);
  const s = SIZES[size] || SIZES.md;
  const v = VARIANTS[variant] || VARIANTS.primary;
  return (
    <button
      type={type} disabled={disabled} onClick={onClick}
      onMouseEnter={() => setHover(true)} onMouseLeave={() => { setHover(false); setPress(false); }}
      onMouseDown={() => setPress(true)} onMouseUp={() => setPress(false)}
      style={{
        display: block ? 'flex' : 'inline-flex', width: block ? '100%' : 'auto',
        alignItems: 'center', justifyContent: 'center', gap: s.gap,
        padding: s.padding, fontSize: s.fontSize, fontFamily: 'var(--font-sans)',
        fontWeight: 'var(--weight-semibold)', letterSpacing: 'var(--tracking-wide)',
        textTransform: 'uppercase', borderRadius: 'var(--radius-control)',
        cursor: disabled ? 'not-allowed' : 'pointer',
        transition: 'var(--transition-control)',
        transform: press && !disabled ? 'translateY(1px)' : 'none',
        ...v,
        ...(hover && !disabled ? HOVER[variant] : null),
        ...(disabled ? { background: 'var(--action-disabled-bg)', color: 'var(--action-disabled-fg)', border: '1px solid var(--action-disabled-bg)', boxShadow: 'none' } : null),
        ...style,
      }}
      {...rest}
    >
      {iconLeft ? <Icon name={iconLeft} size={s.icon} /> : null}
      {children}
      {iconRight ? <Icon name={iconRight} size={s.icon} /> : null}
    </button>
  );
}
