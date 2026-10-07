import * as React from 'react';

export interface DialogProps extends React.HTMLAttributes<HTMLDivElement> {
  open?: boolean;
  title: string;
  tamilTitle?: string;
  onClose?: () => void;
  /** Action row, right-aligned. */
  footer?: React.ReactNode;
  /** Max width in px. Default 460. */
  width?: number;
}
export declare function Dialog(props: DialogProps): JSX.Element;
