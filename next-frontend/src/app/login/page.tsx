"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState<string | null>(null);

  const onSubmit: React.FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const registered = localStorage.getItem("auth.registered") === "1";
      const approved = localStorage.getItem("auth.approved") === "1";

      if (!registered) {
        setMessage("まず閲覧申請を行ってください。");
        router.push("/access");
        return;
      }
      if (!approved) {
        setMessage("現在審査中です。承認後にログイン可能になります。");
        router.push("/access");
        return;
      }

      // approved users can log in
      localStorage.setItem("auth.loggedIn", "1");
      router.push("/secret");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-black text-white overflow-hidden">
      <main className="relative z-10 pt-28 md:pt-36 pb-20">
        <section className="px-6">
          <div className="max-w-md mx-auto">
            <div className="text-center mb-8">
              <h1 className="text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-indigo-300 via-sky-300 to-purple-300 bg-clip-text text-transparent">Login</h1>
              <p className="mt-2 text-sm text-gray-400">デモ用のUIです。任意の情報でログインできます。</p>
            </div>

            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-3xl blur-3xl" />
              <form onSubmit={onSubmit} className="relative bg-white/5 backdrop-blur-sm rounded-3xl p-6 md:p-8 border border-white/10 space-y-5">
                <div>
                  <label htmlFor="email" className="block text-sm text-gray-300 mb-1">メールアドレス</label>
                  <input
                    id="email"
                    type="email"
                    autoComplete="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full rounded-xl bg-white/5 border border-white/10 px-4 py-3 outline-none focus:border-sky-400 focus:ring-2 focus:ring-sky-400/30"
                    placeholder="you@example.com"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="password" className="block text-sm text-gray-300 mb-1">パスワード</label>
                  <input
                    id="password"
                    type="password"
                    autoComplete="current-password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full rounded-xl bg-white/5 border border-white/10 px-4 py-3 outline-none focus:border-purple-400 focus:ring-2 focus:ring-purple-400/30"
                    placeholder="••••••••"
                    required
                  />
                </div>
                <button
                  type="submit"
                  className="w-full group inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 transition-colors shadow-lg shadow-purple-500/25 disabled:opacity-60"
                  disabled={loading}
                >
                  {loading ? "Logging in..." : "ログイン"}
                </button>
                {message && <p className="text-xs text-rose-300">{message}</p>}
                <div className="pt-2 flex items-center justify-between gap-3 text-sm">
                  <button
                    type="button"
                    onClick={() => router.push("/access")}
                    className="text-sky-300 hover:text-sky-200 underline underline-offset-4"
                  >
                    申請していない方はこちら（閲覧申請）
                  </button>
                  <button
                    type="button"
                    onClick={() => router.push("/")}
                    className="text-gray-400 hover:text-gray-200"
                  >
                    トップへ戻る
                  </button>
                </div>
              </form>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
