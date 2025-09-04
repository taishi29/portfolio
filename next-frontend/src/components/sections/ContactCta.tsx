import React from "react";
import Link from "next/link";
import { Mail } from "lucide-react";

export default function ContactCta() {
  return (
    <section className="py-20 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-yellow-400 to-pink-400 bg-clip-text text-transparent">
          Contact
        </h2>
        <p className="text-lg text-gray-300 mb-8">ご覧いただきありがとうございます。お気軽にご連絡ください。</p>

        <div className="flex justify-center">
          <Link
            href="/contact"
            className="group inline-flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full hover:from-purple-700 hover:to-pink-700 transition-all duration-300 shadow-lg shadow-purple-500/25"
          >
            <Mail size={20} />
            <span className="font-semibold">Contact Page</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
