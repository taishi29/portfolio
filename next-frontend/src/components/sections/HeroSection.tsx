"use client";

import React from "react";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

type Props = { heroVisible: boolean };

export default function HeroSection({ heroVisible }: Props) {
  return (
    <section className="min-h-screen flex items-center justify-center px-6">
      <div className="text-center max-w-4xl mx-auto">
        <div
          className={`transition-all duration-700 ${
            heroVisible ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
          }`}
        >
          <h1 className="text-5xl md:text-7xl font-extrabold mb-6 leading-tight float-slow">
            Welcome to
            <br />
            <span className="shimmer-text bg-gradient-to-r from-purple-400 via-pink-400 to-yellow-400 bg-clip-text text-transparent">
              My Portfolio
            </span>
          </h1>

          <p className="text-xl md:text-2xl text-gray-300 mb-10 fade-up" style={{animationDelay: "120ms"}}>
            Sano portfolio site！
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center fade-up" style={{animationDelay: "220ms"}}>
            <Link
              href="/#works"
              className="group px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full hover:from-purple-700 hover:to-pink-700 transition-all duration-300 flex items-center gap-2 shadow-lg shadow-purple-500/25"
            >
              <span className="font-semibold">View Works</span>
              <ArrowRight className="group-hover:translate-x-1 transition-transform duration-300" size={20} />
            </Link>

            <Link
              href="/contact"
              className="px-8 py-4 border border-white/20 rounded-full hover:bg-white/10 transition-all duration-300 backdrop-blur-sm"
            >
              Contact Me
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
