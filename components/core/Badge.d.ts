import * as React from 'react';

export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  tone?: 'gold' | 'maroon' | 'veg' | 'nonveg' | 'spicy' | 'neutral';
  variant?: 'soft' | 'solid' | 'outline';
  /** Lucide icon name rendered at 12px before the label. */
  icon?: string;
}
export declare function Badge(props: BadgeProps): JSX.Element;
