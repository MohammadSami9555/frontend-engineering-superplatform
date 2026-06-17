"use client";

import { useEffect, useState } from "react";
import ProtectedRoute from "@/features/auth-data/components/ProtectedRoute";
import { useAuthStore } from "@/features/auth-data/store/authStore";

export default function DashboardPage() {
  const { user } = useAuthStore();

  const expiresAt = useAuthStore(
    (state) => state.expiresAt
  );

  const [timeLeft, setTimeLeft] = useState(0);

  useEffect(() => {
    if (!expiresAt) return;

    const interval = setInterval(() => {
      const remaining = Math.max(
        0,
        Math.floor((expiresAt - Date.now()) / 1000)
      );

      setTimeLeft(remaining);
    }, 1000);

    return () => clearInterval(interval);
  }, [expiresAt]);

  return (
    <ProtectedRoute>
      <div className="space-y-8">

        {/* Header */}
        <div className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-8">
          <h1 className="text-5xl font-bold mb-3">
            Welcome, {user?.name}
          </h1>

          <p className="text-zinc-400 text-lg">
            Enterprise Authentication Dashboard
          </p>
        </div>

        {/* Stats */}
        <div className="grid md:grid-cols-5 gap-6">

          <div className="rounded-3xl bg-white/5 border border-white/10 p-6">
            <p className="text-zinc-400">Users</p>
            <h2 className="text-4xl font-bold text-[#4fea47] mt-3">
              125
            </h2>
          </div>

          <div className="rounded-3xl bg-white/5 border border-white/10 p-6">
            <p className="text-zinc-400">Sessions</p>
            <h2 className="text-4xl font-bold text-[#4fea47] mt-3">
              54
            </h2>
          </div>

          <div className="rounded-3xl bg-white/5 border border-white/10 p-6">
            <p className="text-zinc-400">Security</p>
            <h2 className="text-4xl font-bold text-[#4fea47] mt-3">
              100%
            </h2>
          </div>

          <div className="rounded-3xl bg-white/5 border border-white/10 p-6">
            <p className="text-zinc-400">JWT Status</p>
            <h2 className="text-4xl font-bold text-[#4fea47] mt-3">
              Active
            </h2>
          </div>

          <div className="rounded-3xl bg-white/5 border border-white/10 p-6">
            <p className="text-zinc-400">Token Expiry</p>
            <h2 className="text-4xl font-bold text-[#4fea47] mt-3">
              {timeLeft}s
            </h2>
          </div>

        </div>

        {/* Activity */}
        <div className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-8">
          <h2 className="text-3xl font-bold mb-6">
            Recent Activity
          </h2>

          <div className="space-y-4">

            <div className="flex items-center gap-3">
              <span className="text-[#4fea47]">✓</span>
              <span>User Login Successful</span>
            </div>

            <div className="flex items-center gap-3">
              <span className="text-[#4fea47]">✓</span>
              <span>JWT Token Generated</span>
            </div>

            <div className="flex items-center gap-3">
              <span className="text-[#4fea47]">✓</span>
              <span>Protected Route Access Granted</span>
            </div>

            <div className="flex items-center gap-3">
              <span className="text-[#4fea47]">✓</span>
              <span>Zustand Store Active</span>
            </div>

          </div>
        </div>

      </div>
    </ProtectedRoute>
  );
}