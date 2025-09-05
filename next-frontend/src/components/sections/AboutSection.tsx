import React from "react";
import Image from "next/image";

export default function AboutSection() {
  return (
    <section id="about" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="mb-6">
              <h2 className="text-4xl md:text-5xl font-bold leading-tight bg-gradient-to-r from-yellow-400 to-pink-400 bg-clip-text text-transparent">
                About Me
              </h2>
              <p className="text-gray-400 mt-2 text-base md:text-lg tracking-wide">私について</p>
            </div>
            {/* Simple text only (no card design) */}
            <p className="mb-6 text-2xl md:text-3xl font-semibold leading-snug tracking-wide">
              <span className="bg-gradient-to-r from-purple-300 via-pink-300 to-yellow-300 bg-clip-text text-transparent drop-shadow-[0_1px_6px_rgba(236,72,153,0.25)]">
                Sano
              </span>
              <span className="mx-2 text-gray-500">/</span>
              <span className="text-xl md:text-lg text-gray-300">生年月日</span>
              <span className="mx-1 text-xl md:text-lg text-gray-500">：</span>
              <span className="text-xl md:text-lg text-gray-100">2003年9月</span>
            </p>
            <div className="space-y-4 text-gray-300 leading-relaxed text-base md:text-lg">
              <p>しがない情報系の学生やってます。</p>
              <p>神童でもなければ、路上の伝説でもありません。。</p>
              <p>きらびやかな経歴とは無縁の、ただの平凡な人生を謳歌しています。</p>
              <p>気軽に見てもらえると嬉しいです。よろしくお願いします！</p>
            </div>
          </div>

          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-3xl blur-3xl" />
            <div className="relative bg-white/5 backdrop-blur-sm rounded-3xl p-3 md:p-4 border border-white/10">
              <div className="relative aspect-square rounded-2xl overflow-hidden">
                <Image
                  src="/top.jpg"
                  alt="About me photo"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
