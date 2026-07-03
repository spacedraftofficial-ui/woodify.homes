import type { PropsWithChildren, ElementType, HTMLAttributes } from 'react';
import clsx from 'clsx';

interface TypographyProps extends HTMLAttributes<HTMLElement> {
  variant: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'p' | 'lead';
  className?: string;
}

/**
 * Consistent typography component using the heading font (Canela or Cormorant).
 * Uses Tailwind utilities for sizes, leading, and tracking.
 */
export const Typography = ({
  variant,
  className,
  children,
  ...rest
}: PropsWithChildren<TypographyProps>) => {
  const base = 'font-heading text-woodify-text';
  const variants: Record<TypographyProps['variant'], string> = {
    h1: 'text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight',
    h2: 'text-4xl md:text-5xl font-semibold tracking-tight',
    h3: 'text-3xl md:text-4xl font-medium',
    h4: 'text-2xl font-medium',
    h5: 'text-xl font-medium',
    p: 'text-base leading-relaxed',
    lead: 'text-lg font-light text-woodify-text/80',
  };

  const Component = (variant === 'lead' ? 'p' : variant) as ElementType;

  return (
    <Component className={clsx(base, variants[variant], className)} {...rest}>
      {children}
    </Component>
  );
};

