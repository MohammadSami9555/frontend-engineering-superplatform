"use client";

import { useState } from "react";

export default function CounterAppLab() {
  const [count, setCount] = useState(0);

  return (
    <div className="flex justify-center">
      <div className="w-full max-w-3xl rounded-[32px] border border-white/10 bg-gradient-to-br from-zinc-950/90 via-zinc-900/80 to-zinc-950/90 backdrop-blur-xl p-12 shadow-[0_0_60px_rgba(79,234,71,0.12)]">
        <p className="text-zinc-400 text-lg mb-4">Current Count</p>

        <h2 className="text-8xl font-black mb-10 bg-gradient-to-r from-white to-[#4fea47] bg-clip-text text-transparent">
          {count}
        </h2>

        <div className="flex flex-wrap gap-4">
          <button
            onClick={() => setCount(count - 1)}
            className="px-6 py-3 rounded-xl bg-zinc-800 hover:bg-zinc-700 transition-all hover:scale-105"
          >
            ➖ Decrease
          </button>

          <button
            onClick={() => setCount(0)}
            className="px-6 py-3 rounded-xl bg-zinc-800 hover:bg-zinc-700 transition-all hover:scale-105"
          >
            🔄 Reset
          </button>

          <button
            onClick={() => setCount(count + 1)}
            className="px-6 py-3 rounded-xl bg-[#4fea47] text-black font-bold hover:scale-105 transition-all shadow-lg"
          >
            ➕ Increase
          </button>
        </div>
      </div>
    </div>
  );
}