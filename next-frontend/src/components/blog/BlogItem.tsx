"use client";

import React, { useRef } from "react";
import Link from "next/link";
import { Calendar, Tag, ArrowUpRight } from "lucide-react";

export type Post = {
  date: string;
  title: string;
  href: string;
  tags: string[];
  description?: string;
};

function TagPill({ label }: { label: string }) {
  return (
    <span
      className="inline-flex items-center gap-1 rounded-full border px-2.5 py-1 text-xs
                 border-white/15 bg-white/5 text-sky-100/90 backdrop-blur-sm
                 shadow-[inset_0_0_0_1px_rgba(56,189,248,.15)]
                 hover:shadow-[inset_0_0_0_2px_rgba(56,189,248,.35)] transition-shadow"
    >
      <Tag size={12} className="text-sky-300/80" />
      {label}
    </span>
  );
}

export default function BlogItem({ post, index }: { post: Post; index: number }) {
  const accents = [
    "from-sky-500/20 to-indigo-500/20",
    "from-emerald-400/20 to-teal-500/20",
    "from-fuchsia-500/20 to-pink-500/20",
  ];
  const accent = accents[index % accents.length];
  const orbDefault = index % 2 === 0 ? "20%" : "80%";
  const ref = useRef<HTMLLIElement>(null);

  const onMove: React.MouseEventHandler<HTMLLIElement> = (e) => {
    if (!ref.current) return;
    const r = ref.current.getBoundingClientRect();
    const x = ((e.clientX - r.left) / r.width) * 100;
    ref.current.style.setProperty("--mx", `${x}%`);
  };

  return (
    <li ref={ref} onMouseMove={onMove} className="group relative overflow-hidden rounded-2xl p-0">
      <div className={`absolute inset-0 -z-10 bg-gradient-to-b ${accent}`} />
      <div
        className="absolute inset-0 -z-10 bg-slate-900/70"
        style={{
          backgroundImage: `radial-gradient(600px 160px at var(--mx, ${orbDefault}) -5%, rgba(56,189,248,.16), transparent)`,
        }}
      />
      <div className="absolute left-0 top-0 bottom-0 w-[2px] bg-gradient-to-b from-sky-400/60 to-transparent" />
      <span className="absolute left-0 top-8 -translate-x-1/2 h-2.5 w-2.5 rounded-full bg-sky-400 shadow-[0_0_15px_rgba(56,189,248,.65)]" />

      <div className="relative p-6 md:p-7 border border-white/10 rounded-2xl bg-white/5 backdrop-blur-sm card-shine transition-transform duration-200 group-hover:-translate-y-0.5">
        <div className="flex flex-wrap items-center gap-3 text-sm text-gray-300/90">
          <span className="inline-flex items-center gap-1">
            <Calendar size={14} className="opacity-80" />
            {post.date}
          </span>
          <div className="flex flex-wrap gap-2">
            {post.tags.map((t) => (
              <TagPill key={t} label={t} />
            ))}
          </div>
        </div>

        <Link href={post.href} className="mt-3 block text-lg md:text-xl font-semibold tracking-tight" target="_blank" rel="noopener noreferrer">
          <span className="bg-gradient-to-r from-white via-sky-100 to-white bg-clip-text text-transparent">
            {post.title}
          </span>
          <ArrowUpRight
            size={18}
            className="inline-block ml-1 translate-y-[-1px] text-sky-300 opacity-0 group-hover:opacity-100 group-hover:translate-x-0.5 transition-all duration-200"
          />
        </Link>

        {/* Hover-revealed description + CTA */}
        <div className="overflow-hidden transition-all duration-300 max-h-0 opacity-0 group-hover:max-h-40 group-hover:opacity-100 group-focus-within:max-h-40 group-focus-within:opacity-100">
          {post.description && (
            <p className="mt-2 text-sm text-gray-300/90 leading-relaxed max-h-24 overflow-hidden">
              {post.description}
            </p>
          )}
          <a
            href={post.href}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-3 inline-flex items-center gap-1 text-sm text-sky-300 hover:text-sky-200 underline underline-offset-4"
            aria-label="Qiitaで続きを読む"
          >
            続きをQiitaで読む
            <ArrowUpRight size={16} />
          </a>
        </div>
      </div>
    </li>
  );
}
