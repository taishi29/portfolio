"use client";

import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function AccessPage() {
  const router = useRouter();
  const [requested, setRequested] = useState(false);
  const [code, setCode] = useState("");
  const [hintOpen, setHintOpen] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [age, setAge] = useState<string>("");
  const [reason, setReason] = useState("");
  const [saving, setSaving] = useState(false);
  const [msg, setMsg] = useState<string | null>(null);

  useEffect(() => {
    // Access page is available without login in this demo flow
    setRequested(localStorage.getItem("auth.requested") === "1" || localStorage.getItem("auth.registered") === "1");
  }, []);

  const handleRequest: React.FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    setSaving(true);
    try {
      // 簡易バリデーション
      if (!name.trim() || !email.trim()) {
        setMsg("名前とメールは必須です");
        return;
      }
      const payload = { name: name.trim(), email: email.trim(), age: age ? Number(age) : null, reason: reason.trim(), createdAt: new Date().toISOString() };
      localStorage.setItem("accessRequest", JSON.stringify(payload));
      localStorage.setItem("auth.requested", "1");
      localStorage.setItem("auth.registered", "1");
      setRequested(true);
      setMsg("申請を受け付けました。管理者の承認をお待ちください。");
    } finally {
      setSaving(false);
    }
  };

  const handleApprove = () => {
    // Demo approval. Accept simple code.
    if (code.trim().toLowerCase() === "letmein") {
      localStorage.setItem("auth.approved", "1");
      alert("承認されました。ログインしてください。");
      router.push("/login");
    } else {
      alert("承認コードが違います（デモ: letmein）");
    }
  };

  return (
    <div className="min-h-screen bg-black text-white overflow-hidden">
      <main className="relative z-10 pt-28 md:pt-36 pb-20">
        <section className="px-6">
          <div className="max-w-xl mx-auto">
            <div className="text-center mb-8">
              <h1 className="text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-indigo-300 via-sky-300 to-purple-300 bg-clip-text text-transparent">アクセス申請</h1>
              <p className="mt-2 text-sm text-gray-400">このページはデモ用です。実認証は未接続です。</p>
            </div>

            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-3xl blur-3xl" />
              <div className="relative bg-white/5 backdrop-blur-sm rounded-3xl p-6 md:p-8 border border-white/10 space-y-8">
                <form onSubmit={handleRequest} className="space-y-4">
                  <div>
                    <h2 className="text-lg font-semibold">新規登録（閲覧申請）</h2>
                    <p className="text-sm text-gray-400 mt-1">承認後、ログインできるようになります。</p>
                  </div>
                  <div className="grid grid-cols-1 gap-4">
                    <div>
                      <label htmlFor="name" className="block text-sm text-gray-300 mb-1">お名前</label>
                      <input id="name" value={name} onChange={(e) => setName(e.target.value)} className="w-full rounded-xl bg-white/5 border border-white/10 px-4 py-3 outline-none focus:border-purple-400 focus:ring-2 focus:ring-purple-400/30" placeholder="山田 太郎" required />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm text-gray-300 mb-1">メールアドレス</label>
                      <input id="email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} className="w-full rounded-xl bg-white/5 border border-white/10 px-4 py-3 outline-none focus:border-sky-400 focus:ring-2 focus:ring-sky-400/30" placeholder="you@example.com" required />
                    </div>
                    <div>
                      <label htmlFor="age" className="block text-sm text-gray-300 mb-1">年齢（任意）</label>
                      <input id="age" type="number" min="0" value={age} onChange={(e) => setAge(e.target.value)} className="w-full rounded-xl bg-white/5 border border-white/10 px-4 py-3 outline-none focus:border-amber-400 focus:ring-2 focus:ring-amber-400/30" placeholder="20" />
                    </div>
                    <div>
                      <label htmlFor="reason" className="block text-sm text-gray-300 mb-1">申請理由（任意）</label>
                      <textarea id="reason" rows={4} value={reason} onChange={(e) => setReason(e.target.value)} className="w-full rounded-xl bg-white/5 border border-white/10 px-4 py-3 outline-none focus:border-pink-400 focus:ring-2 focus:ring-pink-400/30" placeholder="閲覧目的や自己紹介など" />
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <button type="submit" disabled={saving} className="px-6 py-3 rounded-xl bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 transition disabled:opacity-60">{saving ? "送信中..." : requested ? "申請済み" : "申請を送信"}</button>
                    <button type="button" onClick={() => router.push("/login")} className="px-6 py-3 rounded-xl border border-white/10 text-gray-300 hover:bg-white/10 transition">ログインに戻る</button>
                  </div>
                  {msg && <p className="text-xs text-sky-300">{msg}</p>}
                </form>

                <div className="pt-2">
                  <label htmlFor="code" className="block text-sm text-gray-300 mb-1">招待/承認コード（招待メールを受け取った方のみ）</label>
                  <div className="flex gap-2">
                    <input id="code" value={code} onChange={(e) => setCode(e.target.value)} className="flex-1 rounded-xl bg-white/5 border border-white/10 px-4 py-3 outline-none focus:border-sky-400 focus:ring-2 focus:ring-sky-400/30" placeholder="コードを入力" />
                    <button type="button" onClick={handleApprove} className="px-6 py-3 rounded-xl bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 transition">承認を反映</button>
                  </div>
                  <button type="button" onClick={() => setHintOpen((v) => !v)} className="mt-2 text-xs text-sky-300 hover:text-sky-200 underline underline-offset-4">ヒントを見る</button>
                  {hintOpen && (<p className="mt-1 text-xs text-gray-400">デモコード: <span className="text-sky-300">letmein</span></p>)}
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
