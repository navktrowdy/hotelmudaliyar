import * as React from 'react';

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  /** plain cream plate, outlined gold hairline, inverse maroon field, sunken darker cream. */
  variant?: 'plain' | 'outlined' | 'inverse' | 'sunken';
  padding?: 'none' | 'sm' | 'md' | 'lg';
  /** Adds a hover lift + shadow. Use only when the whole card is clickable. */
  interactive?: boolean;
}
export declare function Card(props: CardProps): JSX.Element;
