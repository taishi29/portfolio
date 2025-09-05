import React from "react";
import Image from "next/image";
import type { UiProfile } from "@/lib/api";

type Props = { profile?: UiProfile };

export default function AboutSection({ profile }: Props) {
  const bioLines = profile?.bio
    ? profile.bio.split(/\r?\n/).map((s) => s.trim()).filter(Boolean)
    : [];

  return (
    <section id="about" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className={`grid gap-12 items-center ${profile?.coverImageUrl ? "md:grid-cols-2" : "md:grid-cols-1"}`}>
          <div>
            <div className="mb-6">
              <h2 className="text-4xl md:text-5xl font-bold leading-tight bg-gradient-to-r from-yellow-400 to-pink-400 bg-clip-text text-transparent">
                About Me
              </h2>
              <p className="text-gray-400 mt-2 text-base md:text-lg tracking-wide">私について</p>
            </div>

            { (profile?.name || profile?.headline) && (
              <p className="mb-6 text-2xl md:text-3xl font-semibold leading-snug tracking-wide">
                {profile?.name && (
                  <span className="bg-gradient-to-r from-purple-300 via-pink-300 to-yellow-300 bg-clip-text text-transparent drop-shadow-[0_1px_6px_rgba(236,72,153,0.25)]">
                    {profile.name}
                  </span>
                )}
                {profile?.name && profile?.headline && <span className="mx-2 text-gray-500">/</span>}
                {profile?.headline && (
                  <span className="text-xl md:text-2xl text-gray-300">{profile.headline}</span>
                )}
              </p>
            )}

            {bioLines.length > 0 && (
              <div className="space-y-4 text-gray-300 leading-relaxed text-base md:text-lg">
                {bioLines.map((line, i) => (
                  <p key={i}>{line}</p>
                ))}
              </div>
            )}
          </div>

          {profile?.coverImageUrl && (
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-3xl blur-3xl" />
              <div className="relative bg-white/5 backdrop-blur-sm rounded-3xl p-3 md:p-4 border border-white/10">
                <div className="relative aspect-square rounded-2xl overflow-hidden">
                  <Image
                    src={profile.coverImageUrl}
                    alt="About me photo"
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover"
                    priority
                  />
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
