"use client";

import { useCallback, useEffect, useState } from "react";

/**
 * State for the off-canvas sidebar the subject pages show below `md`.
 *
 * The drawer sits over the content, so while it is open the page behind it is
 * frozen and Escape closes it — otherwise a reader who opened the chapter list
 * on a phone has no way back to the solution they were reading.
 */
export function useMobileNav() {
  const [open, setOpen] = useState(false);

  const close = useCallback(() => setOpen(false), []);

  useEffect(() => {
    if (!open) return;

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [open]);

  return { open, setOpen, close };
}
