"use client";

import React, { useMemo, useRef } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { Calendar, Code2, Tag, ArrowUpRight } from "lucide-react";
import Pagination from "@/components/ui/Pagination";

type Post = {
  date: string;
  title: string;
  href: string;
  tags: string[];
};

const basePosts: Post[] = [
  {
    date: "2025-04-10",
    title: "1日で個人開発力を高める勉強法",
    href: "#",
    tags: ["SaaS", "Next.js", "Supabase"],
  },
  {
    date: "2025-04-07",
    title: "個人開発で気をつけるべき日本の法律について",
    href: "#",
    tags: ["SaaS"],
  },
  {
    date: "2025-01-11",
    title: "エンジニア・デザイナー向けプラットフォームをリリースしました",
    href: "#",
    tags: ["Next.js", "TypeScript", "JavaScript"],
  },
  {
    date: "2023-10-25",
    title: "Next.jsで、Imageコンポーネントエラーを解消する方法",
    href: "#",
    tags: ["Next.js"],
  },
  {
    date: "2023-09-19",
    title: "CSS・Tailwind・UI設計のちょっとしたコツ",
    href: "#",
    tags: ["CSS", "Tailwind"],
  },
];

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

function BlogItem({ post, index }: { post: Post; index: number }) {
  // 3種類のアクセントを交互に
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
      {/* background layers */}
      <div
        className={`absolute inset-0 -z-10 bg-gradient-to-b ${accent}`}
      />
      <div
        className="absolute inset-0 -z-10 bg-slate-900/70"
        style={{
          // pointer 追従できるように可変の中心位置をCSS変数で持つ
          backgroundImage: `radial-gradient(600px 160px at var(--mx, ${orbDefault}) -5%, rgba(56,189,248,.16), transparent)`,
        }}
      />
      {/* left rail + dot */}
      <div className="absolute left-0 top-0 bottom-0 w-[2px] bg-gradient-to-b from-sky-400/60 to-transparent" />
      <span className="absolute left-0 top-8 -translate-x-1/2 h-2.5 w-2.5 rounded-full bg-sky-400 shadow-[0_0_15px_rgba(56,189,248,.65)]" />

      {/* content */}
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

        <Link
          href={post.href}
          className="mt-3 block text-lg md:text-xl font-semibold tracking-tight"
        >
          <span className="bg-gradient-to-r from-white via-sky-100 to-white bg-clip-text text-transparent">
            {post.title}
          </span>
          <ArrowUpRight
            size={18}
            className="inline-block ml-1 translate-y-[-1px] text-sky-300 opacity-0 group-hover:opacity-100 group-hover:translate-x-0.5 transition-all duration-200"
          />
        </Link>

        {/* watermark number removed as requested */}
      </div>
    </li>
  );
}

export default function BlogPage() {
  const searchParams = useSearchParams();
  const page = Number(searchParams.get("page") || 1);
  const pageSize = 5;

  const allPosts = useMemo<Post[]>(() => {
    // 例として記事を増やしてページングを確認できるようにします
    const repeat = 12; // total items
    return Array.from({ length: repeat }, (_, i) => {
      const p = basePosts[i % basePosts.length];
      return {
        ...p,
        title: i < basePosts.length ? p.title : `${p.title} #${i + 1}`,
      } as Post;
    });
  }, []);

  const totalPages = Math.max(1, Math.ceil(allPosts.length / pageSize));
  const safePage = Math.min(Math.max(page, 1), totalPages);
  const pagedPosts = allPosts.slice((safePage - 1) * pageSize, safePage * pageSize);
  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      <main className="relative z-10 pt-28 md:pt-36 pb-20">
        {/* Hero */}
        <section className="px-6 mb-10">
          <div className="max-w-5xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-extrabold tracking-wide leading-[1.15] md:leading-[1.1] pb-1 bg-gradient-to-r from-indigo-300 via-sky-300 to-purple-300 bg-clip-text text-transparent">
              Blog
            </h1>
            <p className="mt-2 text-sm text-gray-400">サノのブログ</p>
          </div>
        </section>

        {/* List */}
        <section className="px-6">
          <div className="max-w-5xl mx-auto rounded-2xl border border-white/10 bg-transparent">
            <ul className="flex flex-col gap-4 p-2">
              {pagedPosts.map((post, i) => (
                <BlogItem key={`${post.title}-${i}`} post={post} index={i + (safePage - 1) * pageSize} />
              ))}
            </ul>
          </div>
          <div className="max-w-5xl mx-auto px-1">
            <Pagination current={safePage} total={totalPages} basePath="/blog" />
          </div>
        </section>
      </main>

      <footer className="relative z-10 py-8 px-6 border-t border-blue-400/20">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-gray-400">c 2025 Sano Portfolio. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
