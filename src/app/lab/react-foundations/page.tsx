"use client";

import { useState } from "react";

export default function CounterAppLab() {
  const [count, setCount] = useState(0);

  return (
    <div className="relative mx-auto max-w-4xl rounded-[36px] border border-white/10 bg-gradient-to-br from-zinc-900/80 via-zinc-950/90 to-zinc-900/80 p-10 shadow-2xl backdrop-blur-xl overflow-hidden">
      {/* Glow effects */}
      <div className="absolute -top-10 -left-10 h-40 w-40 rounded-full bg-[#4fea47]/10 blur-3xl" />
      <div className="absolute -bottom-10 -right-10 h-40 w-40 rounded-full bg-blue-500/10 blur-3xl" />

      <div className="relative z-10">
        <p className="text-zinc-400 text-lg mb-4">Current Count</p>

        <h2 className="text-8xl font-extrabold bg-gradient-to-r from-white to-[#4fea47] bg-clip-text text-transparent mb-8">
          {count}
        </h2>

        <div className="flex flex-wrap gap-4">
          <button
            onClick={() => setCount(count - 1)}
            className="px-6 py-3 rounded-2xl bg-white/10 hover:bg-white/20 transition-all duration-300 text-white font-medium"
          >
            ➖ Decrease
          </button>

          <button
            onClick={() => setCount(0)}
            className="px-6 py-3 rounded-2xl bg-blue-500/20 hover:bg-blue-500/30 transition-all duration-300 text-white font-medium"
          >
            🔄 Reset
          </button>

          <button
            onClick={() => setCount(count + 1)}
            className="px-6 py-3 rounded-2xl bg-[#4fea47] text-black hover:scale-105 transition-all duration-300 font-bold shadow-lg shadow-[#4fea47]/30"
          >
            ➕ Increase
          </button>
        </div>

        {/* Progress strip */}
        <div className="mt-8 h-2 w-full rounded-full bg-white/5">
          <div
            className="h-full rounded-full bg-[#4fea47] transition-all duration-500"
            style={{ width: `${Math.min(Math.abs(count) * 10, 100)}%` }}
          />
        </div>
      </div>
    </div>
  );
}