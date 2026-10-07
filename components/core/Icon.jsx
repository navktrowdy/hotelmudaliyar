import React from 'react';

const BASE = () => (typeof window !== 'undefined' && window.HM_ASSET_BASE) || '../..';
const CACHE = (typeof window !== 'undefined' ? (window.__hmIconCache = window.__hmIconCache || {}) : {});

/** Lucide glyph inlined as SVG so it inherits currentColor. */
export function Icon({ name, size = 20, color = 'currentColor', style, className, ...rest }) {
  const [markup, setMarkup] = React.useState(CACHE[name] || null);
  React.useEffect(() => {
    if (CACHE[name]) { setMarkup(CACHE[name]); return; }
    let alive = true;
    fetch(BASE() + '/assets/icons/' + name + '.svg')
      .then((r) => r.text())
      .then((t) => {
        const cleaned = t.replace(/\swidth="[^"]*"/, '').replace(/\sheight="[^"]*"/, '');
        CACHE[name] = cleaned;
        if (alive) setMarkup(cleaned);
      })
      .catch(() => {});
    return () => { alive = false; };
  }, [name]);
  return (
    <span
      role="img"
      aria-label={name}
      className={className}
      style={{ display: 'inline-flex', width: size, height: size, flex: '0 0 auto', color, ...style }}
      dangerouslySetInnerHTML={markup ? { __html: markup.replace('<svg', '<svg style="width:100%;height:100%;display:block"') } : undefined}
      {...rest}
    />
  );
}
