"use client";

import { arrayCheck, journey } from "@/utils";
import type { JourneyItem } from "@/types";
import { motion } from "framer-motion";
import { useRef, useEffect, useCallback } from "react";
import { spring, slideInLeft, cardHover, cardTap } from "@/lib/motion";

function JourneyItemDescription({
  item,
  index,
}: {
  item: JourneyItem;
  index: number;
}) {
  const desc = item.description;
  if (!arrayCheck(desc)) return null;
  return (
    <ul className="list-disc list-inside text-muted text-sm mt-3 space-y-1">
      {desc.map((point, idx) => (
        <motion.li
          key={idx}
          initial={{ opacity: 0, x: -8 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{
            delay: 0.03 + index * 0.04 + idx * 0.02,
            duration: 0.16,
          }}
        >
          {point}
        </motion.li>
      ))}
    </ul>
  );
}

const JourneySection = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const lineRef = useRef<HTMLDivElement>(null);
  const firstDotRef = useRef<HTMLDivElement>(null);
  const lastDotRef = useRef<HTMLDivElement>(null);

  const updateLinePosition = useCallback(() => {
    const container = containerRef.current;
    const line = lineRef.current;
    const firstDot = firstDotRef.current;
    const lastDot = lastDotRef.current;
    if (!container || !line || !firstDot || !lastDot) return;

    const containerRect = container.getBoundingClientRect();
    const firstRect = firstDot.getBoundingClientRect();
    const lastRect = lastDot.getBoundingClientRect();

    const top = firstRect.top + firstRect.height / 2 - containerRect.top;
    const bottom = containerRect.bottom - (lastRect.top + lastRect.height / 2);

    line.style.top = `${top}px`;
    line.style.bottom = `${bottom}px`;
  }, []);

  useEffect(() => {
    const run = () => requestAnimationFrame(() => updateLinePosition());
    run();
    const ro = new ResizeObserver(run);
    if (containerRef.current) ro.observe(containerRef.current);
    window.addEventListener("resize", run);
    const t = setTimeout(run, 400);
    return () => {
      clearTimeout(t);
      ro.disconnect();
      window.removeEventListener("resize", run);
    };
  }, [updateLinePosition, journey?.length ?? 0]);

  return (
    <section className="pt-0">
      <motion.h2
        className="text-xl font-bold text-foreground mb-5 tracking-tight"
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={spring.gentle}
      >
        My Journey
      </motion.h2>
      <motion.div
        ref={containerRef}
        className="relative pl-6 pr-2"
        initial="hidden"
        animate="visible"
        transition={{ staggerChildren: 0.03, delayChildren: 0.02 }}
      >
        <div
          ref={lineRef}
          className="absolute left-[19px] w-0.5 bg-accent/50 -translate-x-1/2"
          style={{ top: 0, bottom: 0 }}
          aria-hidden
        />
        {arrayCheck(journey) &&
          journey.map((item, index) => (
            <motion.div
              key={`${item.institution}-${item.title}`}
              className="mb-4 last:mb-0 relative"
              variants={slideInLeft}
            >
              <motion.div
                ref={
                  index === 0
                    ? firstDotRef
                    : index === (journey?.length ?? 0) - 1
                      ? lastDotRef
                      : undefined
                }
                className="absolute w-3.5 h-3.5 rounded-full mt-1.5 -left-[9px] bg-accent ring-4 ring-card dark:ring-card z-10 shadow-glow-sm"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.02 + index * 0.04, duration: 0.2 }}
              />
              <motion.div
                className="ml-6 pl-5 pr-5 py-3 rounded-2xl border-l-2 border-accent/50 bg-accent-soft/20 dark:bg-accent-soft/10 border border-border/50 hover:border-accent/40 dark:hover:border-accent/60 hover:bg-accent-soft/30 dark:hover:bg-accent-soft-hover transition-all duration-200 ease-out min-w-0 overflow-hidden"
                whileHover={cardHover}
                whileTap={cardTap}
              >
                <div className="flex flex-wrap items-baseline justify-between gap-x-2 gap-y-1">
                  <div className="min-w-0">
                    <h3 className="text-base font-semibold text-foreground">
                      {item.title}
                    </h3>
                    <p className="text-accent font-medium text-sm mt-0.5">
                      {item.institution}
                    </p>
                  </div>
                  {item.startDate && item.endDate && (
                    <p className="text-muted text-sm whitespace-nowrap shrink-0 mt-0.5 sm:mt-0">
                      {item.startDate} — {item.endDate}
                    </p>
                  )}
                </div>
                {arrayCheck(item.projects) ? (
                  <div className="mt-3 space-y-4">
                    {(item.projects ?? []).map((project, pIdx) => (
                      <div key={pIdx}>
                        <p className="text-foreground/90 font-medium text-sm mb-1.5">
                          {project.name ?? "Project"}
                        </p>
                        <ul className="list-disc list-inside text-muted text-sm space-y-1">
                          {arrayCheck(project.description) &&
                            project.description.map((point, idx) => (
                              <motion.li
                                key={idx}
                                initial={{ opacity: 0, x: -8 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{
                                  delay: 0.03 + index * 0.04 + pIdx * 0.02 + idx * 0.01,
                                  duration: 0.16,
                                }}
                              >
                                {point}
                              </motion.li>
                            ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                ) : (
                  <JourneyItemDescription item={item} index={index} />
                )}
              </motion.div>
            </motion.div>
          ))}
      </motion.div>
    </section>
  );
};

export default JourneySection;
