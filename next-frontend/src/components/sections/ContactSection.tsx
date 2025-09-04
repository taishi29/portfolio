"use client";

import React, { useMemo, useState } from "react";
import { Github, Mail, Send, Copy, Check } from "lucide-react";
import { motion } from "framer-motion";

export default function ContactSection() {
  const EMAIL = useMemo(() => "your@email.com", []);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(EMAIL);
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    } catch {}
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = `[Portfolio] ${name || "お問い合わせ"}`;
    const body = `お名前: ${name}\nご連絡先: ${email}\n\n${message}`;
    const href = `mailto:${EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.location.href = href;
  };

  return (
    <section id="contact" className="relative py-24 px-6">

      <motion.div
        className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-10 items-start"
        initial="hidden"
        animate="show"
        variants={{
          hidden: { opacity: 0, y: 12, scale: 0.98, filter: "blur(6px)" },
          show: {
            opacity: 1,
            y: 0,
            scale: 1,
            filter: "blur(0px)",
            transition: { duration: 0.55, ease: [0.2, 0.7, 0.2, 1], staggerChildren: 0.08 },
          },
        }}
      >
        {/* Left: Title and quick contacts */}
        <motion.div variants={{ hidden: { opacity: 0, y: 12 }, show: { opacity: 1, y: 0 } }}>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-yellow-400 to-pink-400 bg-clip-text text-transparent leading-[1.2] pb-2">
            Let’s Work Together
          </h2>
          <p className="text-gray-300 mb-8">
            ご覧いただきありがとうございます。案件のご相談・ご質問など、お気軽にご連絡ください。
          </p>

          <div className="grid sm:grid-cols-2 gap-4">
            {/* Email card */}
            <a
              href={`mailto:${EMAIL}`}
              className="group relative p-[1px] rounded-2xl bg-gradient-to-r from-purple-500/50 via-pink-500/40 to-yellow-400/40 transition-transform hover:-translate-y-1"
            >
              <div className="rounded-2xl h-full w-full bg-black/50 backdrop-blur-sm p-4 flex items-center gap-3">
                <div className="h-10 w-10 rounded-xl bg-gradient-to-br from-purple-500 to-pink-500 grid place-items-center text-white shadow-lg shadow-purple-500/30">
                  <Mail size={18} />
                </div>
                <div className="text-left">
                  <p className="text-sm text-gray-400">Email</p>
                  <p className="font-medium">{EMAIL}</p>
                </div>
              </div>
            </a>

            {/* GitHub card */}
            <a
              href="https://github.com/taishi29"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative p-[1px] rounded-2xl bg-gradient-to-r from-sky-400/40 via-purple-500/40 to-pink-500/40 transition-transform hover:-translate-y-1"
            >
              <div className="rounded-2xl h-full w-full bg-black/50 backdrop-blur-sm p-4 flex items-center gap-3">
                <div className="h-10 w-10 rounded-xl bg-white/10 grid place-items-center text-white">
                  <Github size={18} />
                </div>
                <div className="text-left">
                  <p className="text-sm text-gray-400">GitHub</p>
                  <p className="font-medium">View Profile</p>
                </div>
              </div>
            </a>

            {/* Copy email */}
            <button
              type="button"
              onClick={handleCopy}
              className="group relative p-[1px] rounded-2xl bg-gradient-to-r from-purple-500/50 via-pink-500/40 to-yellow-400/40 transition-transform hover:-translate-y-1"
            >
              <div className="rounded-2xl h-full w-full bg-black/50 backdrop-blur-sm p-4 flex items-center gap-3">
                <div className="h-10 w-10 rounded-xl bg-white/10 grid place-items-center text-white">
                  {copied ? <Check size={18} /> : <Copy size={18} />}
                </div>
                <div className="text-left">
                  <p className="text-sm text-gray-400">Copy</p>
                  <p className="font-medium">{copied ? "Copied!" : "Email address"}</p>
                </div>
              </div>
            </button>
          </div>
        </motion.div>

        {/* Right: Form */}
        <motion.div variants={{ hidden: { opacity: 0, y: 12 }, show: { opacity: 1, y: 0 } }} className="relative rounded-3xl overflow-hidden">
          {/* Scoped glow strictly inside the card */}
          <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-purple-500/15 via-pink-500/10 to-yellow-400/8 blur-md opacity-90 pointer-events-none" />
          <form
            onSubmit={handleSubmit}
            className="relative bg-white/5 backdrop-blur-sm rounded-3xl p-6 md:p-8 border border-white/5"
          >
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label htmlFor="name" className="block text-sm text-gray-300 mb-1">お名前</label>
                <input
                  id="name"
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full rounded-xl bg-white/5 border border-white/10 px-4 py-3 outline-none focus:border-purple-400 focus:ring-2 focus:ring-purple-400/30"
                  placeholder="山田 太郎"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm text-gray-300 mb-1">メール</label>
                <input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full rounded-xl bg-white/5 border border-white/10 px-4 py-3 outline-none focus:border-sky-400 focus:ring-2 focus:ring-sky-400/30"
                  placeholder="you@example.com"
                />
              </div>
            </div>

            <div className="mt-4">
              <label htmlFor="message" className="block text-sm text-gray-300 mb-1">メッセージ</label>
              <textarea
                id="message"
                rows={6}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="w-full rounded-xl bg-white/5 border border-white/5 px-4 py-3 outline-none focus:border-pink-300 focus:ring-2 focus:ring-pink-300/30 resize-y"
                placeholder="ご相談内容などをご記入ください..."
              />
            </div>

            <div className="mt-6 flex items-center gap-3">
              <button
                type="submit"
                className="group inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 transition-colors shadow-lg shadow-purple-500/25"
              >
                <Send size={18} className="group-hover:translate-x-0.5 transition-transform" />
                <span className="font-semibold">メールを作成</span>
              </button>
              <span className="text-xs text-gray-400">送信するとメールアプリが開きます</span>
            </div>
          </form>
        </motion.div>
      </motion.div>
    </section>
  );
}
