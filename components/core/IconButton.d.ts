import * as React from 'react';

export interface IconButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  /** Lucide icon name. */
  icon: string;
  /** Accessible label — required, the control has no visible text. */
  label: string;
  variant?: 'ghost' | 'outline' | 'solid' | 'onDark';
  /** sm 32px, md 44px (default, minimum touch target), lg 52px. */
  size?: 'sm' | 'md' | 'lg';
}
export declare function IconButton(props: IconButtonProps): JSX.Element;
