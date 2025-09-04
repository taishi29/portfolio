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
            <div className="space-y-4 text-gray-300 leading-relaxed text-base md:text-lg">
              <p>しがない情報系の学生やってます。</p>
              <p>極平凡ですが、継続と執念で積み上げていきます。</p>
              <p>よろしくお願いいたします。</p>
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
