"use client";

import React, { useMemo, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";

export default function SetPasswordPage() {
  const router = useRouter();
  const sp = useSearchParams();
  const token = useMemo(() => sp.get("token") || "", [sp]);
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const validToken = token.length > 0; // デモでは存在チェックのみ

  const onSubmit: React.FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();
    setError(null);
    if (!validToken) {
      setError("無効な招待リンクです。");
      return;
    }
    if (password.length < 8) {
      setError("パスワードは8文字以上にしてください。");
      return;
    }
    if (password !== confirm) {
      setError("パスワードが一致しません。");
      return;
    }
    setLoading(true);
    try {
      // デモ: トークンがあれば承認・ログイン済みにする
      localStorage.setItem("auth.registered", "1");
      localStorage.setItem("auth.approved", "1");
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
              <h1 className="text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-indigo-300 via-sky-300 to-purple-300 bg-clip-text text-transparent">パスワード設定</h1>
              <p className="mt-2 text-sm text-gray-400">招待メールのリンクからアクセスしてください。</p>
            </div>

            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-3xl blur-3xl" />
              <form onSubmit={onSubmit} className="relative bg-white/5 backdrop-blur-sm rounded-3xl p-6 md:p-8 border border-white/10 space-y-5">
                {!validToken && (
                  <div className="rounded-xl border border-rose-500/30 bg-rose-900/20 p-3 text-rose-200 text-sm">
                    無効なトークンです。招待メールのリンクを再度ご確認ください。
                  </div>
                )}
                <div>
                  <label htmlFor="password" className="block text-sm text-gray-300 mb-1">新しいパスワード</label>
                  <input id="password" type="password" value={password} onChange={(e) => setPassword(e.target.value)} className="w-full rounded-xl bg-white/5 border border-white/10 px-4 py-3 outline-none focus:border-sky-400 focus:ring-2 focus:ring-sky-400/30" placeholder="8文字以上" required />
                </div>
                <div>
                  <label htmlFor="confirm" className="block text-sm text-gray-300 mb-1">確認</label>
                  <input id="confirm" type="password" value={confirm} onChange={(e) => setConfirm(e.target.value)} className="w-full rounded-xl bg-white/5 border border-white/10 px-4 py-3 outline-none focus:border-purple-400 focus:ring-2 focus:ring-purple-400/30" placeholder="もう一度入力" required />
                </div>
                {error && <p className="text-sm text-rose-300">{error}</p>}
                <button type="submit" disabled={!validToken || loading} className="w-full px-6 py-3 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 transition disabled:opacity-60">{loading ? "設定中..." : "パスワードを設定"}</button>
                <button type="button" onClick={() => router.push("/login")} className="w-full mt-2 px-6 py-3 rounded-xl border border-white/10 text-gray-300 hover:bg-white/10 transition">ログインに戻る</button>
              </form>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

