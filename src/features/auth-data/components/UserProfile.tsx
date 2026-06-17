"use client";

import { useAuthStore } from "../store/authStore";

export default function UserProfile() {
  const { user, logout } = useAuthStore();

  return (
    <div className="space-y-6">

      {/* Profile Card */}
      <div
        className="
          w-full
          max-w-xl
          mx-auto
          rounded-3xl
          border border-white/10
          bg-white/5
          backdrop-blur-xl
          p-8
        "
      >
        <div className="text-center mb-8">

          <div
            className="
              w-24
              h-24
              mx-auto
              rounded-full
              bg-[#4fea47]/20
              flex
              items-center
              justify-center
              text-5xl
              mb-4
            "
          >
            👤
          </div>

          <h2 className="text-4xl font-bold">
            {user?.name}
          </h2>

          <p className="text-gray-400 mt-2">
            {user?.email}
          </p>
        </div>

        <div
          className="
            rounded-2xl
            bg-[#4fea47]/10
            border border-[#4fea47]/20
            p-4
            text-center
            mb-6
          "
        >
          JWT Token Active ✓
        </div>

        <button
          onClick={logout}
          className="
            w-full
            rounded-xl
            bg-red-500
            py-3
            font-semibold
            hover:bg-red-600
            transition
          "
        >
          Logout
        </button>
      </div>

      {/* Security Dashboard */}
      <div
        className="
          w-full
          max-w-xl
          mx-auto
          rounded-3xl
          border border-white/10
          bg-white/5
          backdrop-blur-xl
          p-6
        "
      >
        <h3 className="text-2xl font-bold mb-5">
          Security Dashboard
        </h3>

        <div className="grid grid-cols-2 gap-4">

          <div className="rounded-xl bg-white/5 p-4">
            <p className="text-gray-400 text-sm">
              Security Score
            </p>

            <h4 className="text-3xl font-bold text-[#4fea47]">
              100%
            </h4>
          </div>

          <div className="rounded-xl bg-white/5 p-4">
            <p className="text-gray-400 text-sm">
              JWT Status
            </p>

            <h4 className="text-3xl font-bold text-[#4fea47]">
              Active
            </h4>
          </div>

          <div className="rounded-xl bg-white/5 p-4">
            <p className="text-gray-400 text-sm">
              Session
            </p>

            <h4 className="text-3xl font-bold text-[#4fea47]">
              Secure
            </h4>
          </div>

          <div className="rounded-xl bg-white/5 p-4">
            <p className="text-gray-400 text-sm">
              Routes
            </p>

            <h4 className="text-3xl font-bold text-[#4fea47]">
              Protected
            </h4>
          </div>

        </div>
      </div>

      {/* Activity */}
      <div
        className="
          w-full
          max-w-xl
          mx-auto
          rounded-3xl
          border border-white/10
          bg-white/5
          backdrop-blur-xl
          p-6
        "
      >
        <h3 className="text-2xl font-bold mb-5">
          Recent Activity
        </h3>

        <div className="space-y-4">

          <div className="flex items-center gap-3">
            <span className="text-[#4fea47]">✓</span>
            <span>Login Successful</span>
          </div>

          <div className="flex items-center gap-3">
            <span className="text-[#4fea47]">✓</span>
            <span>JWT Token Generated</span>
          </div>

          <div className="flex items-center gap-3">
            <span className="text-[#4fea47]">✓</span>
            <span>Session Created</span>
          </div>

          <div className="flex items-center gap-3">
            <span className="text-[#4fea47]">✓</span>
            <span>Protected Route Access Granted</span>
          </div>

        </div>
      </div>

    </div>
  );
}