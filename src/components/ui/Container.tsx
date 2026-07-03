import React, { PropsWithChildren } from 'react';
import clsx from 'clsx';

/**
 * Simple container that applies max‑width and horizontal padding.
 * Used to keep content aligned with the design grid.
 */
export const Container: React.FC<PropsWithChildren<{ className?: string }>> = ({ children, className }) => {
  return (
    <div className={clsx('mx-auto max-w-7xl px-4 md:px-8 lg:px-12', className)}>
      {children}
    </div>
  );
};
