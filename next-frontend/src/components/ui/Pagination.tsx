"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronRight, ChevronLeft } from "lucide-react";

type Props = {
  current: number;
  total: number;
  basePath?: string;
};

function buildPages(total: number, current: number): (number | "…")[] {
  const pages: (number | "…")[] = [];
  const add = (n: number) => {
    if (!pages.includes(n)) pages.push(n);
  };
  const window = 1; // show current ±1
  for (let i = 1; i <= total; i++) {
    if (i === 1 || i === total || (i >= current - window && i <= current + window)) {
      add(i);
    } else if (pages[pages.length - 1] !== "…") {
      pages.push("…");
    }
  }
  return pages;
}

export default function Pagination({ current, total, basePath }: Props) {
  const pathname = usePathname();
  const path = basePath ?? pathname ?? "/";
  const to = (p: number) => `${path}?page=${p}`;
  const pages = buildPages(total, current);

  return (
    <div className="relative mt-10 flex items-center gap-2">
      {/* subtle progress rail behind chips */}
      <div className="absolute inset-x-0 top-1/2 -z-10 h-10 -translate-y-1/2">
        <div className="h-full rounded-xl bg-white/5 border border-white/10" />
        <div
          className="absolute inset-y-0 left-0 rounded-xl bg-gradient-to-r from-indigo-500/20 via-sky-400/20 to-transparent"
          style={{ width: `${(current / Math.max(total, 1)) * 100}%` }}
        />
      </div>

      {/* Prev */}
      <Link
        aria-label="前のページへ"
        href={to(Math.max(1, current - 1))}
        className={`inline-flex items-center gap-1 rounded-xl border px-3 py-2 text-sm transition-all duration-200 backdrop-blur-sm
        ${current === 1 ? "pointer-events-none opacity-40 border-white/10 bg-white/5" : "border-white/15 bg-white/5 hover:bg-white/10 hover:-translate-y-0.5"}`}
      >
        <ChevronLeft size={16} />
        前へ
      </Link>

      {/* Number chips */}
      {pages.map((p, i) =>
        p === "…" ? (
          <span
            key={`dots-${i}`}
            className="mx-1 w-9 text-center text-sm text-gray-400 select-none"
          >
            …
          </span>
        ) : (
          <Link
            key={p}
            href={to(p)}
            aria-current={p === current ? "page" : undefined}
            className={`relative inline-flex h-10 w-10 items-center justify-center rounded-xl border text-sm transition-all duration-200 backdrop-blur-sm
              ${p === current
                ? "border-sky-400/40 bg-gradient-to-br from-indigo-500/20 to-sky-500/20 text-white shadow-[inset_0_0_0_1px_rgba(56,189,248,.25)]"
                : "border-white/15 bg-white/5 hover:bg-white/10 hover:-translate-y-0.5"}
            `}
          >
            {p}
            {p === current && (
              <span className="absolute -right-1 -top-1 h-2.5 w-2.5 rounded-full bg-gradient-to-br from-sky-400 to-indigo-400 shadow-lg shadow-sky-500/30" />
            )}
          </Link>
        )
      )}

      {/* Next */}
      <Link
        aria-label="次のページへ"
        href={to(Math.min(total, current + 1))}
        className={`inline-flex items-center gap-2 rounded-xl border px-3 py-2 text-sm transition-all duration-200 backdrop-blur-sm
        ${current === total ? "pointer-events-none opacity-40 border-white/10 bg-white/5" : "border-white/15 bg-white/5 hover:bg-white/10 hover:-translate-y-0.5"}`}
      >
        次のページへ
        <ChevronRight size={16} />
      </Link>
    </div>
  );
}

