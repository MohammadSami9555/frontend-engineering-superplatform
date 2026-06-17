"use client";

import { useState } from "react";

const quotes = [
  "Code is like humor. When you have to explain it, it’s bad.",
  "First, solve the problem. Then, write the code.",
  "Programs must be written for people to read.",
  "Simplicity is the soul of efficiency.",
  "Fix the cause, not the symptom.",
];

export default function QuoteGeneratorLab() {
  const [quote, setQuote] = useState(quotes[0]);

  const generateQuote = () => {
    const random = quotes[Math.floor(Math.random() * quotes.length)];
    setQuote(random);
  };

  return (
    <div className="flex justify-center">
      <div className="w-full max-w-3xl rounded-[32px] border border-white/10 bg-gradient-to-br from-zinc-950 via-zinc-900 to-zinc-950 p-10 shadow-2xl relative overflow-hidden">
        
        {/* glow background */}
        <div className="absolute -top-20 -left-20 h-60 w-60 rounded-full bg-[#4fea47]/20 blur-3xl" />
        <div className="absolute -bottom-20 -right-20 h-60 w-60 rounded-full bg-purple-500/20 blur-3xl" />

        <div className="relative z-10">
          <h2 className="text-4xl font-bold mb-8 bg-gradient-to-r from-white to-zinc-400 bg-clip-text text-transparent">
            Quote Generator
          </h2>

          <div className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-10 mb-8 shadow-[0_0_40px_rgba(79,234,71,0.08)]">
            <p className="text-2xl leading-10 text-zinc-100 font-medium">
              “{quote}”
            </p>
          </div>

          <button
            onClick={generateQuote}
            className="w-full rounded-2xl bg-gradient-to-r from-[#4fea47] to-emerald-400 py-4 text-lg font-bold text-black shadow-lg hover:scale-[1.02] transition-transform"
          >
            ✨ Generate New Quote
          </button>
        </div>
      </div>
    </div>
  );
}