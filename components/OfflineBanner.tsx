"use client";

import { useOnlineStatus } from "@/hooks/useOnlineStatus";

export default function OfflineBanner() {
  const isOnline = useOnlineStatus();

  if (isOnline) return null;

  return (
    <div
      className="sticky top-0 z-[100] bg-amber-500/95 dark:bg-amber-600/95 text-amber-950 dark:text-amber-50 py-2 px-4 text-center text-sm font-medium"
      role="status"
      aria-live="polite"
    >
      You’re offline. Some content may be unavailable until you’re back online.
    </div>
  );
}
