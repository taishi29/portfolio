import React from "react";
import Image from "next/image";
import { ExternalLink } from "lucide-react";
import type { Work } from "@/types/work";

type Props = { works: Work[] };

export default function WorksSection({ works }: Props) {
  return (
    <section id="works" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Works
          </h2>
          <p className="text-gray-400">制作物</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {works.map((work, i) => (
            <a
              key={i}
              href={work.href}
              className="group relative block rounded-2xl focus:outline-none focus:ring-2 focus:ring-purple-500"
            >
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-purple-500/10 to-pink-500/10 blur-xl transition-all duration-500 group-hover:opacity-70" />
              <div
                className="relative card-shine border-glow bg-white/5 backdrop-blur-sm rounded-2xl overflow-hidden border border-white/10 transition-all duration-300 will-change-transform
                           hover:border-white/30 hover:-translate-y-1 hover:shadow-[0_16px_40px_-12px_rgba(168,85,247,.35)]"
                style={{ animationDelay: `${i * 120}ms` }}
              >
                <div className="relative aspect-video bg-gradient-to-br from-gray-800 to-gray-900 overflow-hidden">
                  {work.imageSrc ? (
                    <Image
                      src={work.imageSrc}
                      alt={work.title}
                      fill
                      sizes="(max-width: 768px) 100vw, 50vw"
                      className="object-cover transition-transform duration-500 will-change-transform group-hover:scale-105"
                      priority={false}
                    />
                  ) : (
                    <Image
                      src="/image_not_found.png"
                      alt="No image"
                      fill
                      sizes="(max-width: 768px) 100vw, 50vw"
                      className="object-cover opacity-80"
                      priority={false}
                    />
                  )}
                </div>

                <div className="p-6">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm text-purple-300/90">{work.category}</span>
                    <ExternalLink size={16} className="text-gray-400 group-hover:text-white transition-colors" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3 transition-colors group-hover:text-purple-300">
                    {work.title}
                  </h3>
                  <p className="text-gray-400 text-sm leading-relaxed transition-colors group-hover:text-gray-300">
                    {work.description}
                  </p>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
