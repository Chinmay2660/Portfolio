"use client";

import { type ReactNode } from "react";

type GradientBorderProps = {
  children: ReactNode;
  className?: string;
  innerClassName?: string;
};

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
