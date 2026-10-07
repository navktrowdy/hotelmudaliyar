import React from 'react';

const PADS = { none: 0, sm: 'var(--space-4)', md: 'var(--space-5)', lg: 'var(--space-6)' };

/** Surface container: cream plate, 10px radius, hairline border, soft maroon-tinted shadow. */
export function Card({ variant = 'plain', padding = 'md', interactive = false, children, style, ...rest }) {
  const [hover, setHover] = React.useState(false);
  const skins = {
    plain: { background: 'var(--surface-card)', border: '1px solid var(--border-hairline)', color: 'var(--text-body)' },
    outlined: { background: 'transparent', border: '1px solid var(--border-gold)', color: 'var(--text-body)' },
    inverse: { background: 'var(--surface-inverse-field)', border: '1px solid var(--maroon-600)', color: 'var(--text-on-inverse)' },
    sunken: { background: 'var(--surface-sunken)', border: '1px solid var(--border-hairline)', color: 'var(--text-body)' },
  };
  return (
    <div
      onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}
      style={{
        borderRadius: 'var(--radius-card)', padding: PADS[padding],
        boxShadow: interactive && hover ? 'var(--shadow-md)' : 'var(--shadow-xs)',
        transform: interactive && hover ? 'translateY(-2px)' : 'none',
        transition: 'box-shadow var(--dur-base) var(--ease-out), transform var(--dur-base) var(--ease-out)',
        cursor: interactive ? 'pointer' : 'default', overflow: 'hidden',
        ...skins[variant], ...style,
      }}
      {...rest}
    >
      {children}
    </div>
  );
}
