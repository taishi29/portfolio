import React from "react";
import Pagination from "@/components/ui/Pagination";
import BlogItem, { Post } from "@/components/blog/BlogItem";
import { fetchBlogsServer } from "@/lib/api";

export default async function BlogPage({
  searchParams,
}: {
  searchParams: { page?: string };
}) {
  const page = Number(searchParams?.page || 1);
  const pageSize = 5;

  const allPosts = (await fetchBlogsServer()) as Post[];

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
            {allPosts.length === 0 && (
              <div className="p-8 text-center text-gray-400">まだブログがありません。</div>
            )}
          </div>
          <div className="max-w-5xl mx-auto px-1">
            <Pagination current={safePage} total={totalPages} basePath="/blog" />
          </div>
        </section>
      </main>

      <footer className="relative z-10 py-8 px-6 border-t border-blue-400/20">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-gray-400">© 2025 Sano Portfolio. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
