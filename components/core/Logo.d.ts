import * as React from 'react';

export interface LogoProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  /** emblem = circular M crest, wordmark = "Hotel Mudaliyar" lettering, lockup = both. */
  variant?: 'emblem' | 'wordmark' | 'lockup';
  /** Rendered height in px. Minimum legible: emblem 40, wordmark 28, lockup 64. */
  height?: number;
}
export declare function Logo(props: LogoProps): JSX.Element;
