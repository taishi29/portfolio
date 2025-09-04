"use client";

import React, { useEffect, useMemo, useState } from "react";
import HeroSection from "@/components/sections/HeroSection";
import AboutSection from "@/components/sections/AboutSection";
import WorksSection from "@/components/sections/WorksSection";
import ContactCta from "@/components/sections/ContactCta";
import type { Work } from "@/types/work";

export default function Portfolio() {
  const [heroVisible, setHeroVisible] = useState(false);

  useEffect(() => {
    setHeroVisible(true);
  }, []);

  const works: Work[] = useMemo(
    () => [
      {
        title: "企業マッチングアプリ",
        category: "Webアプリケーション | チーム開発",
        description: "マッチング形式で、あなたに合う企業を紹介します。",
        href: "#",
        imageSrc: "/com_match.png",
      },
      {
        title: "筋トレ記録アプリ",
        category: "モバイルアプリ | 個人開発",
        description: "日々の筋トレを記録し、進捗を可視化します。",
        href: "#",
        imageSrc: "/gym_log.png",
      },
    ],
    []
  );

  return (
    <div className="min-h-screen bg-black text-white overflow-hidden">
      <main className="relative z-10">
        <HeroSection heroVisible={heroVisible} />
        <AboutSection />
        <WorksSection works={works} />
        <ContactCta />
      </main>

      <footer className="relative z-10 py-8 px-6 border-t border-blue-400/20">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-gray-400">© 2025 Sano Portfolio. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
