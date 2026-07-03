import React from 'react';
import clsx from 'clsx';
import { motion, type HTMLMotionProps } from 'framer-motion';

interface CardProps extends Omit<HTMLMotionProps<'div'>, 'children'> {
  children: React.ReactNode;
  hoverEffect?: boolean;
}

/**
 * Premium card with glass‑morphism background and subtle lift on hover.
 */
export const Card: React.FC<CardProps> = ({ children, className, hoverEffect = true, ...rest }) => {
  const base = 'rounded-lg overflow-hidden p-4 bg-glass backdrop-blur-sm shadow-md';
  const hover = hoverEffect ? 'hover:scale-105 hover:shadow-xl transition-transform duration-300' : '';

  return (
    <motion.div
      whileHover={hoverEffect ? { scale: 1.02 } : undefined}
      className={clsx(base, hover, className)}
      {...rest}
    >
      {children}
    </motion.div>
  );
};

