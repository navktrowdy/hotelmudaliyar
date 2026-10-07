import * as React from 'react';

/**
 * @startingPoint section="Core" subtitle="Maroon and gold action buttons in all variants" viewport="700x220"
 */
export interface ButtonProps extends Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, 'style'> {
  /** primary = maroon plate, secondary = gold plate, outline/ghost = cream surfaces, onDark = gold hairline on maroon. */
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'onDark';
  size?: 'sm' | 'md' | 'lg';
  /** Lucide icon name shown before the label. */
  iconLeft?: string;
  /** Lucide icon name shown after the label. */
  iconRight?: string;
  block?: boolean;
  disabled?: boolean;
  style?: React.CSSProperties;
}
export declare function Button(props: ButtonProps): JSX.Element;
