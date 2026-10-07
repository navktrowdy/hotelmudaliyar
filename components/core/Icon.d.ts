import * as React from 'react';

export interface IconProps extends React.HTMLAttributes<HTMLSpanElement> {
  /** Lucide icon file name, e.g. "utensils", "map-pin". See assets/icons/. */
  name: string;
  /** Pixel box. Brand sizes: 16 inline, 20 control, 24 nav, 32 feature. */
  size?: number;
  /** Any CSS colour; defaults to currentColor. */
  color?: string;
}
export declare function Icon(props: IconProps): JSX.Element;
