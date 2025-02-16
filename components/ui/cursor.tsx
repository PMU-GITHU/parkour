'use client';
import React, { useEffect, useState, useRef, useCallback } from 'react';
import {
  motion,
  SpringOptions,
  useMotionValue,
  useSpring,
  AnimatePresence,
  Transition,
  Variant,
} from 'motion/react';
import { cn } from '@/lib/utils';

export type CursorProps = {
  children: React.ReactNode;
  className?: string;
  springConfig?: SpringOptions;
  attachToParent?: boolean;
  transition?: Transition;
  variants?: {
    initial: Variant;
    animate: Variant;
    exit: Variant;
  };
  onPositionChange?: (x: number, y: number) => void;
};

export function Cursor({
  children,
  className,
  springConfig = { duration: 0 },
  attachToParent,
  variants,
  transition,
  onPositionChange,
}: CursorProps) {
  const cursorX = useMotionValue(0);
  const cursorY = useMotionValue(0);
  const cursorRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(!attachToParent);

  // Initialize position
  useEffect(() => {
    if (typeof window !== 'undefined') {
      cursorX.set(window.innerWidth / 2);
      cursorY.set(window.innerHeight / 2);
    }
  }, []);

  // Mouse movement handler
  const updatePosition = useCallback((e: MouseEvent) => {
    cursorX.set(e.clientX);
    cursorY.set(e.clientY);
    onPositionChange?.(e.clientX, e.clientY);
  }, [cursorX, cursorY, onPositionChange]);

  // Cursor visibility and event listeners
  useEffect(() => {
    document.body.style.cursor = attachToParent ? 'auto' : 'none';
    document.addEventListener('mousemove', updatePosition);
    
    return () => {
      document.removeEventListener('mousemove', updatePosition);
    };
  }, [attachToParent, updatePosition]);

  // Spring animations
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);

  // Parent element hover handling
  const handleVisibilityChange = useCallback((visible: boolean) => {
    setIsVisible(visible);
  }, []);

  useEffect(() => {
    if (!attachToParent || !cursorRef.current) return;

    const parent = cursorRef.current.parentElement;
    if (!parent) return;

    const handleMouseEnter = () => {
      parent.style.cursor = 'none';
      handleVisibilityChange(true);
    };
    const handleMouseLeave = () => {
      parent.style.cursor = 'auto';
      handleVisibilityChange(false);
    };

    parent.addEventListener('mouseenter', handleMouseEnter);
    parent.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      parent.removeEventListener('mouseenter', handleMouseEnter);
      parent.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [attachToParent, handleVisibilityChange]);

  return (
    <motion.div
      ref={cursorRef}
      className={cn('pointer-events-none fixed left-0 top-0 z-50', className)}
      style={{
        x: cursorXSpring,
        y: cursorYSpring,
        translateX: '-50%',
        translateY: '-50%',
      }}
    >
      <AnimatePresence>
        {isVisible && (
          <motion.div
            initial='initial'
            animate='animate'
            exit='exit'
            variants={variants}
            transition={transition}
          >
            {children}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
