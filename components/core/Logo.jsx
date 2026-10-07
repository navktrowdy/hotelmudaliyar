import React from 'react';

const BASE = () => (typeof window !== 'undefined' && window.HM_ASSET_BASE) || '../..';
const SRC = {
  emblem: '/assets/logo-emblem-maroon.png',
  wordmark: '/assets/logo-wordmark-maroon.png',
  lockup: '/assets/logo-full-maroon.png',
};

/** The Hotel Mudaliyar mark. Always on a maroon field — the artwork carries its own maroon ground. */
export function Logo({ variant = 'lockup', height = 96, style, ...rest }) {
  return (
    <img
      src={BASE() + SRC[variant]}
      alt="Hotel Mudaliyar"
      style={{ height, width: 'auto', display: 'block', ...style }}
      {...rest}
    />
  );
}
