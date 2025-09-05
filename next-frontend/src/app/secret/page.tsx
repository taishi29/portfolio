"use client";

import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function SecretPage() {
  const router = useRouter();
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const loggedIn = localStorage.getItem("auth.loggedIn") === "1";
    const approved = localStorage.getItem("auth.approved") === "1";
    if (!loggedIn || !approved) {
      router.replace("/login");
      return;
    }
    setReady(true);
  }, [router]);

  const logout = () => {
    localStorage.removeItem("auth.loggedIn");
    localStorage.removeItem("auth.approved");
    localStorage.removeItem("auth.requested");
    router.push("/login");
  };

  if (!ready) return null;

  return (
    <div className="min-h-screen bg-black text-white overflow-hidden">
      <main className="relative z-10 pt-28 md:pt-36 pb-20">
        <section className="px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-10">
              <h1 className="text-4xl md:text-6xl font-extrabold bg-gradient-to-r from-fuchsia-300 via-pink-300 to-amber-300 bg-clip-text text-transparent">
                Secret
              </h1>
              <p className="mt-2 text-sm text-gray-400">認証 + 承認済みのユーザーのみ閲覧できます（デモ）。</p>
            </div>

            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-fuchsia-500/20 to-amber-500/20 rounded-3xl blur-3xl" />
              <div className="relative bg-white/5 backdrop-blur-sm rounded-3xl p-6 md:p-8 border border-white/10">
                <p className="text-gray-200 text-lg leading-relaxed">
                  ここにシークレットなコンテンツを表示します。API連携やダッシュボードなど、認可が必要なUIを配置してください。
                </p>

                <div className="mt-6 flex gap-3">
                  <button
                    type="button"
                    className="px-6 py-3 rounded-xl border border-white/10 bg-white/5 hover:bg-white/10 transition"
                    onClick={() => router.push("/")}
                  >
                    トップへ
                  </button>
                  <button
                    type="button"
                    className="px-6 py-3 rounded-xl bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 transition"
                    onClick={logout}
                  >
                    ログアウト
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
