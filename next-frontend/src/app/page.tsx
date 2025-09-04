"use client";

import React, { useEffect, useState } from "react";
import { Star, ArrowRight, Github, Mail, ExternalLink } from "lucide-react";

export default function Portfolio() {
  const [scrollY, setScrollY] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", onScroll);
    const t = setTimeout(() => setIsVisible(true), 500);
    return () => {
      window.removeEventListener("scroll", onScroll);
      clearTimeout(t);
    };
  }, []);

  const works = [
    {
      title: "企業マッチングアプリ",
      category: "Webアプリケーション | チーム開発",
      description:
        "マッチング形式で、あなたに合う企業を紹介します。",
      href: "#",
    },
    {
      title: "筋トレ記録アプリ",
      category: "モバイルアプリ | 個人開発",
      description: "日々の筋トレを記録し、進捗を可視化します。",
      href: "#",
    },
  ];

  return (
    <div className="min-h-screen bg-black text-white overflow-hidden">
      {/* 背景エフェクト */}
      <div className="fixed inset-0 bg-gradient-to-br from-black via-gray-900 to-black">
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `radial-gradient(circle at 20% 50%, rgba(120,119,198,.3) 0%, transparent 50%),
                              radial-gradient(circle at 80% 20%, rgba(255,119,198,.3) 0%, transparent 50%),
                              radial-gradient(circle at 40% 80%, rgba(120,219,226,.2) 0%, transparent 50%)`,
            transform: `translateY(${scrollY * 0.5}px)`,
          }}
        />
      </div>

      {/* 浮遊する星 */}
      <div className="fixed inset-0 pointer-events-none">
        {Array.from({ length: 20 }).map((_, i) => (
          <div
            key={i}
            className="absolute animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 3}s`,
            }}
          >
            <Star size={4} className="text-purple-300 opacity-60" />
          </div>
        ))}
      </div>

      {/* ヘッダー */}
      <header className="fixed top-0 w-full z-50 bg-black/20 backdrop-blur-lg border-b border-white/10">
        <div className="max-w-6xl mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-2">
              <Star className="text-yellow-400" size={24} />
              <span className="text-lg font-semibold bg-gradient-to-r from-yellow-400 to-pink-400 bg-clip-text text-transparent">
                Portfolio
              </span>
            </div>
            <nav className="hidden md:flex gap-8">
              <a href="#about" className="hover:text-purple-400">About</a>
              <a href="#works" className="hover:text-purple-400">Works</a>
              <a href="#contact" className="hover:text-purple-400">Contact</a>
            </nav>
            <button className="md:hidden text-white" aria-label="menu">
              <div className="w-6 h-6 flex flex-col justify-center gap-1">
                <span className="w-full h-0.5 bg-white" />
                <span className="w-full h-0.5 bg-white" />
                <span className="w-full h-0.5 bg-white" />
              </div>
            </button>
          </div>
        </div>
      </header>

      {/* メイン */}
      <main className="relative z-10">
        {/* Hero */}
        <section className="min-h-screen flex items-center justify-center px-6">
          <div className="text-center max-w-4xl mx-auto">
            <div
              className={`transform transition-all duration-700 ${
                isVisible ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
              }`}
            >
              <div className="mb-6">
                <span className="inline-block p-4 rounded-full bg-gradient-to-r from-purple-500/20 to-pink-500/20 backdrop-blur-sm border border-white/10 mb-6">
                  <Star className="text-yellow-400" size={32} />
                </span>
              </div>

              <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
                Welcome to
                <br />
                <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-yellow-400 bg-clip-text text-transparent">
                  My Portfolio
                </span>
              </h1>

              <p className="text-xl md:text-2xl text-gray-300 mb-8">
                Sano portfolio site！
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <a
                  href="#works"
                  className="group px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full hover:from-purple-700 hover:to-pink-700 transition-all duration-300 flex items-center gap-2 shadow-lg shadow-purple-500/25"
                >
                  <span className="font-semibold">View Works</span>
                  <ArrowRight className="group-hover:translate-x-1 transition-transform duration-300" size={20} />
                </a>

                <a
                  href="#contact"
                  className="px-8 py-4 border border-white/20 rounded-full hover:bg-white/10 transition-all duration-300 backdrop-blur-sm"
                >
                  Contact Me
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* About */}
        <section id="about" className="py-20 px-6">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              {/* 左カラム */}
              <div>
                <h2 className="text-4xl md:text-5xl font-bold mb-8 bg-gradient-to-r from-yellow-400 to-pink-400 bg-clip-text text-transparent">
                  About Me
                </h2>
                <p className="text-gray-400 mb-4">私について</p>
                <div className="space-y-4 text-gray-300 leading-relaxed">
                  <p>しがない情報系の学生やってます。</p>
                  <p>極平凡ですが、継続と執念で積み上げていきます。</p>
                  <p>よろしくお願いいたします。</p>
                </div>
              </div>

              {/* 右カラム */}
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-3xl blur-3xl" />
                <div className="relative bg-white/5 backdrop-blur-sm rounded-3xl p-8 border border-white/10">
                  <div className="aspect-square bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl flex items-center justify-center">
                    <Star className="text-yellow-400" size={64} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Works */}
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
                  className="group relative block focus:outline-none focus:ring-2 focus:ring-purple-500 rounded-2xl"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-300" />
                  <div className="relative bg-white/5 backdrop-blur-sm rounded-2xl overflow-hidden border border-white/10 group-hover:border-white/20 transition-all duration-300">
                    <div className="aspect-video bg-gradient-to-br from-gray-800 to-gray-900 flex items-center justify-center">
                      <span className="text-5xl">🏮</span>
                    </div>
                    <div className="p-6">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-sm text-purple-400">{work.category}</span>
                        <ExternalLink size={16} className="text-gray-400 group-hover:text-white transition-colors" />
                      </div>
                      <h3 className="text-xl font-semibold mb-3 group-hover:text-purple-400 transition-colors">
                        {work.title}
                      </h3>
                      <p className="text-gray-400 text-sm leading-relaxed">{work.description}</p>
                    </div>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* Contact */}
        <section id="contact" className="py-20 px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-8 bg-gradient-to-r from-yellow-400 to-pink-400 bg-clip-text text-transparent">
              Hello！World！
            </h2>
            <p className="text-xl text-gray-300 mb-12">
              ご覧いただきありがとうございます。お気軽にご連絡ください。
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="mailto:your@email.com"
                className="group flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full hover:from-purple-700 hover:to-pink-700 transition-all duration-300 shadow-lg shadow-purple-500/25"
              >
                <Mail size={20} />
                <span className="font-semibold">Get In Touch</span>
              </a>

              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 px-8 py-4 border border-white/20 rounded-full hover:bg-white/10 transition-all duration-300 backdrop-blur-sm"
              >
                <Github size={20} />
                <span>GitHub</span>
              </a>
            </div>
          </div>
        </section>
      </main>

      {/* フッター */}
      <footer className="relative z-10 py-8 px-6 border-t border-blue-400/20">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-gray-400">© 2025 Sano Portfolio. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
