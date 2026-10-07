import * as React from 'react';

export interface OrnamentProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Lucide glyph at the centre. Default utensils-crossed, echoing the crossed spoons in the crest. */
  glyph?: string;
  tone?: 'gold' | 'maroon' | 'cream';
  width?: number | string;
}
export declare function Ornament(props: OrnamentProps): JSX.Element;
