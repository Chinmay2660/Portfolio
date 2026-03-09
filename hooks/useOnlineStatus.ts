"use client";

import { useEffect, useState } from "react";

export function useOnlineStatus(): boolean {
  // Start true so SSR and first client paint match (no banner flash). Real value set in useEffect.
  const [isOnline, setIsOnline] = useState(true);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const getOnline = () => navigator.onLine;
    const sync = () => setIsOnline(getOnline());

    // Set real value as soon as we're on the client
    sync();

    const handleOnline = () => setIsOnline(true);
    const handleOffline = () => setIsOnline(false);
    window.addEventListener("online", handleOnline);
    window.addEventListener("offline", handleOffline);
    document.addEventListener("visibilitychange", sync);

    const interval = window.setInterval(sync, 2000);

    return () => {
      window.removeEventListener("online", handleOnline);
      window.removeEventListener("offline", handleOffline);
      document.removeEventListener("visibilitychange", sync);
      clearInterval(interval);
    };
  }, []);

  return isOnline;
}
