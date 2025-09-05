import React from "react";
import HeroSection from "@/components/sections/HeroSection";
import AboutSection from "@/components/sections/AboutSection";
import WorksSection from "@/components/sections/WorksSection";
import ContactCta from "@/components/sections/ContactCta";
import type { Work } from "@/types/work";
import { fetchWorksServer, fetchProfileServer } from "@/lib/api";

export default async function Portfolio() {
  const works = (await fetchWorksServer()) as Work[];
  const profile = await fetchProfileServer();

  return (
    <div className="min-h-screen bg-black text-white overflow-hidden">
      <main className="relative z-10">
        <HeroSection />
        <AboutSection profile={profile || undefined} />
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
