"use client";

import { useState } from "react";

export default function TabsComponentLab() {
  const [activeTab, setActiveTab] = useState("overview");

  const tabContent = {
    overview: (
      <div className="space-y-4">
        <img
          src="https://images.unsplash.com/photo-1460925895917-afdab827c52f"
          alt="overview"
          className="w-full h-56 object-cover rounded-xl"
        />
        <p className="text-zinc-400">
          This is a premium product overview section with image preview.
        </p>
      </div>
    ),

    features: (
      <div className="space-y-4">
        <img
          src="https://images.unsplash.com/photo-1551288049-bebda4e38f71"
          alt="features"
          className="w-full h-56 object-cover rounded-xl"
        />
        <ul className="space-y-2 text-zinc-300">
          <li>✅ Dynamic switching</li>
          <li>✅ Premium UI</li>
          <li>✅ Reusable cards</li>
        </ul>
      </div>
    ),

    pricing: (
  <div className="space-y-6">
    <div className="text-center">
      <h2 className="text-3xl font-bold">Smart Pricing That Grows With You</h2>
      <p className="text-zinc-400 mt-2">
        Choose the perfect plan for your business.
      </p>
    </div>

    <div className="grid gap-6 md:grid-cols-3">
      <div className="rounded-2xl border border-zinc-800 bg-zinc-900 p-6">
        <p className="text-zinc-400 mb-2">Standard</p>
        <h3 className="text-4xl font-bold mb-4">$10</h3>
        <button className="w-full rounded-lg bg-zinc-800 py-3 mb-4">
          Get Started
        </button>
        <ul className="space-y-2 text-sm text-zinc-400">
          <li>✔ 5 Projects</li>
          <li>✔ Basic Analytics</li>
          <li>✔ Email Support</li>
        </ul>
      </div>

      <div className="rounded-2xl border border-violet-500 bg-gradient-to-b from-violet-950 to-zinc-900 p-6 scale-105 shadow-xl">
        <p className="text-violet-300 mb-2">Premium</p>
        <h3 className="text-4xl font-bold mb-4">$20</h3>
        <button className="w-full rounded-lg bg-violet-500 py-3 text-white mb-4">
          Get Started
        </button>
        <ul className="space-y-2 text-sm text-zinc-300">
          <li>✔ Unlimited Projects</li>
          <li>✔ Advanced Analytics</li>
          <li>✔ Priority Support</li>
        </ul>
      </div>

      <div className="rounded-2xl border border-zinc-800 bg-zinc-900 p-6">
        <p className="text-zinc-400 mb-2">Advanced</p>
        <h3 className="text-4xl font-bold mb-4">$35</h3>
        <button className="w-full rounded-lg bg-zinc-800 py-3 mb-4">
          Get Started
        </button>
        <ul className="space-y-2 text-sm text-zinc-400">
          <li>✔ Team Access</li>
          <li>✔ AI Insights</li>
          <li>✔ Dedicated Manager</li>
        </ul>
      </div>
    </div>
  </div>
),
  };

  return (
  <div className="flex justify-center">
    <div className="w-full max-w-5xl rounded-[32px] border border-white/10 bg-zinc-950 p-10 shadow-2xl">
      <div className="flex gap-3 mb-8 justify-center">
        {["overview", "features", "pricing"].map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-4 py-2 rounded-lg capitalize transition-all ${
              activeTab === tab
                ? "bg-white text-black"
                : "bg-zinc-900 hover:bg-zinc-800"
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {tabContent[activeTab as keyof typeof tabContent]}
    </div>
  </div>
);
}