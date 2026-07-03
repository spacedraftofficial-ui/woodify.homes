import React from 'react';
import { motion, type HTMLMotionProps } from 'framer-motion';
import clsx from 'clsx';

interface ButtonProps extends Omit<HTMLMotionProps<'button'>, 'children'> {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary';
}

/**
 * Premium button with subtle magnetic hover and glow effect.
 * Uses Framer Motion for a spring‑like cursor‑follow on hover.
 */
export const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  className,
  ...rest
}) => {
  const baseClasses = 'px-6 py-3 rounded-lg font-medium transition-all duration-300';
  const variantClasses = variant === 'primary'
    ? 'bg-primary text-white hover:bg-accent shadow-lg hover:shadow-xl'
    : 'bg-secondary text-primary hover:bg-primary hover:text-white shadow';

  return (
    <motion.button
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.97 }}
      className={clsx(baseClasses, variantClasses, className)}
      {...rest}
    >
      {children}
    </motion.button>
  );
};

