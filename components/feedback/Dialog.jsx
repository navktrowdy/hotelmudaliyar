import React from 'react';
import { IconButton } from '../core/IconButton.jsx';
import { Ornament } from '../core/Ornament.jsx';

/** Centred modal on a maroon scrim. Cream plate, gold ornament under the title. */
export function Dialog({ open = true, title, tamilTitle, onClose, footer, children, width = 460, style, ...rest }) {
  if (!open) return null;
  return (
    <div style={{
      position: 'absolute', inset: 0, display: 'grid', placeItems: 'center',
      background: 'rgba(46,5,8,0.62)', backdropFilter: 'var(--blur-glass)', padding: 'var(--space-5)', zIndex: 50,
    }} onClick={onClose}>
      <div onClick={(e) => e.stopPropagation()} role="dialog" aria-modal="true" style={{
        width: '100%', maxWidth: width, background: 'var(--surface-card)',
        border: '1px solid var(--border-gold)', borderRadius: 'var(--radius-card)',
        boxShadow: 'var(--shadow-lg)', padding: 'var(--space-6)', ...style,
      }} {...rest}>
        <div style={{ display: 'flex', alignItems: 'flex-start', gap: 'var(--space-4)' }}>
          <div>
            <h3 style={{ fontFamily: 'var(--font-display)', fontWeight: 400, fontSize: 'var(--text-xl)', color: 'var(--text-heading)', margin: 0 }}>{title}</h3>
            {tamilTitle ? <div style={{ fontFamily: 'var(--font-tamil)', fontSize: 'var(--text-sm)', color: 'var(--text-muted)' }}>{tamilTitle}</div> : null}
          </div>
          {onClose ? <IconButton icon="x" label="Close" size="sm" style={{ marginLeft: 'auto' }} onClick={onClose} /> : null}
        </div>
        <Ornament tone="gold" style={{ margin: 'var(--space-4) 0' }} />
        <div style={{ fontSize: 'var(--text-base)', color: 'var(--text-body)' }}>{children}</div>
        {footer ? <div style={{ display: 'flex', justifyContent: 'flex-end', gap: 'var(--space-3)', marginTop: 'var(--space-5)' }}>{footer}</div> : null}
      </div>
    </div>
  );
}
