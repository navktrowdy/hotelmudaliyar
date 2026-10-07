import * as React from 'react';

export interface SectionHeadingProps extends React.HTMLAttributes<HTMLElement> {
  /** Uppercase gold eyebrow, e.g. "Since the 1960s". */
  eyebrow?: string;
  title: string;
  /** Tamil rendering of the title — the fascia board pairs both scripts. */
  tamil?: string;
  align?: 'center' | 'left';
  /** Set on maroon fields so the type flips to cream/gold. */
  onDark?: boolean;
  ornament?: boolean;
}
export declare function SectionHeading(props: SectionHeadingProps): JSX.Element;
