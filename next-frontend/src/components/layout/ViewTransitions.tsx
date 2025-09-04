"use client";

import React, { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function ViewTransitions() {
  const router = useRouter();

  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null;
      if (!target) return;
      const anchor = target.closest("a") as HTMLAnchorElement | null;
      if (!anchor) return;

      const url = new URL(anchor.href, location.href);
      const isInternal = url.origin === location.origin;
      const isLeftClick = e.button === 0;
      const hasModifier = e.metaKey || e.ctrlKey || e.altKey || e.shiftKey;
      const openNewTab = anchor.target === "_blank" || anchor.rel.includes("noopener") || anchor.rel.includes("noreferrer");

      if (!isInternal || !isLeftClick || hasModifier || openNewTab) return;

      e.preventDefault();
      const go = () => router.push(url.pathname + url.search + url.hash);
      // Prefer reduced motion users: no animation
      const mq = matchMedia("(prefers-reduced-motion: reduce)");
      if (mq.matches || !(document as any).startViewTransition) {
        go();
        return;
      }
      (document as any).startViewTransition(() => {
        go();
      });
    };

    document.addEventListener("click", onClick);
    return () => document.removeEventListener("click", onClick);
  }, [router]);

  return null;
}

