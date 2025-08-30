import { useEffect } from "react";

export const useScrollToTop = () => {
  useEffect(() => {
    // Force scroll to top on mount
    window.scrollTo(0, 0);

    // Also handle any hash in URL
    const hash = window.location.hash;
    if (hash) {
      // Small delay to ensure content is loaded
      setTimeout(() => {
        const element = document.querySelector(hash);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }, 100);
    }
  }, []);
};
