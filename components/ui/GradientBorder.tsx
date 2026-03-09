"use client";

import { type ReactNode } from "react";

type GradientBorderProps = {
  children: ReactNode;
  className?: string;
  innerClassName?: string;
};

/**
 * Wrapper that adds an animated gradient border (Aceternity UI style).
 * Use for hero card, contact card, etc.
 */
export default function GradientBorder({
  children,
  className = "",
  innerClassName = "",
}: GradientBorderProps) {
  return (
    <div className={`effect-gradient-border ${className}`}>
      <div className={`effect-gradient-border-inner ${innerClassName}`}>
        {children}
      </div>
    </div>
  );
}
