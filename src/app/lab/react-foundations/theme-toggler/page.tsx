"use client";

import { useState } from "react";

export default function ThemeToggleLab() {
  const [dark, setDark] = useState(true);

  return (
    <div className="flex justify-center">
      <div
        className={`w-full max-w-3xl rounded-[32px] border p-12 shadow-2xl transition-all duration-500 ${
          dark
            ? "border-white/10 bg-gradient-to-br from-zinc-950/90 via-zinc-900/80 to-zinc-950/90"
            : "border-zinc-300 bg-gradient-to-br from-white via-zinc-100 to-zinc-200 text-black"
        }`}
      >
        <h2 className="text-5xl font-bold mb-6">Theme Toggle</h2>

        <p className="mb-8 text-lg opacity-80">
          Current Theme:{" "}
          <span className="font-bold">
            {dark ? "🌙 Dark" : "☀️ Light"}
          </span>
        </p>

        <button
          onClick={() => setDark(!dark)}
          className={`px-8 py-4 rounded-xl font-bold transition-all hover:scale-105 ${
            dark
              ? "bg-[#4fea47] text-black"
              : "bg-black text-white"
          }`}
        >
          Toggle Theme
        </button>
      </div>
    </div>
  );
}