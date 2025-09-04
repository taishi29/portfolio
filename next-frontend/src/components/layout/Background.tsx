"use client";

import React, { useEffect, useState } from "react";

type Props = { scrollY?: number };

export default function Background({ scrollY }: Props) {
  const [y, setY] = useState(0);

  useEffect(() => {
    if (typeof scrollY === "number") {
      setY(scrollY);
      return;
    }
    const onScroll = () => setY(window.scrollY || 0);
    window.addEventListener("scroll", onScroll);
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, [scrollY]);

  return (
    <div className="fixed inset-0 -z-10">
      {/* Unified base: near-black */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-[#0a0a0a] to-black" />
      {/* Subtle radials (very low opacity) */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `
            radial-gradient(circle at 20% 50%, rgba(110,110,210,.18) 0%, transparent 50%),
            radial-gradient(circle at 80% 20%, rgba(255,119,198,.14) 0%, transparent 50%),
            radial-gradient(circle at 40% 80%, rgba(100,200,255,.12) 0%, transparent 50%)
          `,
          transform: `translateY(${y * 0.35}px)`,
          opacity: 0.18,
        }}
      />
      {/* Darkening veil for consistency on transitions */}
      <div className="absolute inset-0 bg-black/30" />
    </div>
  );
}
