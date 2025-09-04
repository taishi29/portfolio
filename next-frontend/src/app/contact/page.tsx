"use client";

import React from "react";
import ContactSection from "@/components/sections/ContactSection";

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-black text-white overflow-hidden">
      <main className="relative z-10 pt-28 md:pt-36">
        <ContactSection />
      </main>
      <footer className="relative z-10 py-8 px-6 border-t border-blue-400/20">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-gray-400">© 2025 Sano Portfolio. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
