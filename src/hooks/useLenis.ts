import { useEffect, useRef } from 'react';
import Lenis from '@studio-freight/lenis';

/**
 * Hook that sets up Lenis smooth scrolling.
 * Returns a ref that should be attached to the root element.
 */
export const useLenis = () => {
  const lenisRef = useRef<Lenis | null>(null);

  useEffect(() => {
    lenisRef.current = new Lenis({
      duration: 1.2,
      easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    });

    const raf = (time: number) => {
      lenisRef.current?.raf(time);
      requestAnimationFrame(raf);
    };
    requestAnimationFrame(raf);

    return () => {
      // Lenis does not have a destroy method, but we can nullify the ref.
      lenisRef.current = null;
    };
  }, []);

  return lenisRef;
};

