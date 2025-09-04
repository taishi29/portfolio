import React from "react";
import Link from "next/link";

export default function SiteHeader() {
  return (
    <header className="fixed top-0 w-full z-50 bg-black/20 backdrop-blur-lg border-b border-white/10">
      <div className="max-w-6xl mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-3">
            <span className="h-5 w-5 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 shadow-lg shadow-purple-500/30" />
            <span className="text-lg font-semibold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Sano Portfolio
            </span>
          </div>
          <nav className="hidden md:flex gap-8">
            <Link href="/#about" className="hover:text-purple-400">About</Link>
            <Link href="/#works" className="hover:text-purple-400">Works</Link>
            <Link href="/contact" className="hover:text-purple-400">Contact</Link>
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
  );
}
