"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

import LoginForm from "@/features/auth-data/components/LoginForm";
import RegisterForm from "@/features/auth-data/components/RegisterForm";
import UserProfile from "@/features/auth-data/components/UserProfile";
import { useAuthStore } from "@/features/auth-data/store/authStore";

export default function JWTAuthPage() {
  const [isLogin, setIsLogin] = useState(true);
  const [showMore, setShowMore] = useState(false);

  const isAuthenticated = useAuthStore(
    (state) => state.isAuthenticated
  );

  return (
    <div className="relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-[#4fea47]/10 blur-[150px] rounded-full pointer-events-none" />

      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-purple-500/10 blur-[180px] rounded-full pointer-events-none" />

      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-12 relative z-10"
      >
        <h1 className="text-5xl md:text-6xl font-bold mb-4">
          JWT Authentication System
        </h1>

        <p className="text-gray-400 text-xl">
          Auth & Data Systems Module
        </p>
      </motion.div>

      {/* Main Grid */}
      <div className="
grid
lg:grid-cols-2
gap-10
items-start
max-w-7xl
mx-auto
">

        {/* LEFT PANEL */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="
            rounded-3xl
            border border-white/10
            bg-white/5
            backdrop-blur-xl
            p-10
            shadow-[0_0_40px_rgba(79,234,71,0.08)]
          "
        >
          <div className="mb-8">
            <span className="px-4 py-2 rounded-full bg-[#4fea47]/20 text-[#4fea47] font-semibold">
              Enterprise Ready
            </span>
          </div>

          <div
            className="
              w-16
              h-16
              rounded-2xl
              bg-[#4fea47]/20
              flex
              items-center
              justify-center
              text-3xl
              mb-6
            "
          >
            🔐
          </div>

          <h2 className="text-3xl font-bold mb-5">
            Modern Authentication Architecture
          </h2>

          <p className="text-gray-400 leading-relaxed mb-8">
            Production-ready authentication workflow built with
            Next.js, Zustand and JWT-based state management.
          </p>

          <div className="grid grid-cols-2 gap-4 mb-8">
            <div className="rounded-xl bg-white/5 p-4">
              <p className="text-gray-400 text-sm">Security</p>
              <h3 className="text-2xl font-bold text-[#4fea47]">
                100%
              </h3>
            </div>

            <div className="rounded-xl bg-white/5 p-4">
              <p className="text-gray-400 text-sm">Auth Type</p>
              <h3 className="text-2xl font-bold text-[#4fea47]">
                JWT
              </h3>
            </div>
          </div>

          <div className="space-y-5">
            <div className="flex items-center gap-3">
              <span className="text-[#4fea47] text-xl">✓</span>
              <span>JWT Authentication Flow</span>
            </div>

            <div className="flex items-center gap-3">
              <span className="text-[#4fea47] text-xl">✓</span>
              <span>Zustand Global State</span>
            </div>

            <div className="flex items-center gap-3">
              <span className="text-[#4fea47] text-xl">✓</span>
              <span>Protected Route Support</span>
            </div>

            <AnimatePresence>
              {showMore && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.3 }}
                  className="space-y-5 overflow-hidden"
                >
                  <div className="flex items-center gap-3">
                    <span className="text-[#4fea47] text-xl">✓</span>
                    <span>Session Persistence Ready</span>
                  </div>

                  <div className="flex items-center gap-3">
                    <span className="text-[#4fea47] text-xl">✓</span>
                    <span>Enterprise Folder Structure</span>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            <button
              onClick={() => setShowMore(!showMore)}
              className="
                text-[#4fea47]
                font-semibold
                hover:underline
                transition
              "
            >
              {showMore ? "Show Less ▲" : "Load More ▼"}
            </button>
          </div>
        </motion.div>

        {/* RIGHT PANEL */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          {!isAuthenticated && (
            <div className="mb-8">
              <div
                className="
                  flex
                  rounded-2xl
                  border border-white/10
                  bg-white/5
                  backdrop-blur-xl
                  p-2
                  shadow-[0_0_30px_rgba(79,234,71,0.08)]
                "
              >
                <button
                  onClick={() => setIsLogin(true)}
                  className={`flex-1 py-4 rounded-xl font-semibold text-lg transition-all duration-300 ${
                    isLogin
                      ? "bg-[#4fea47] text-black shadow-[0_0_20px_rgba(79,234,71,0.3)]"
                      : "text-white hover:bg-white/5"
                  }`}
                >
                  Login
                </button>

                <button
                  onClick={() => setIsLogin(false)}
                  className={`flex-1 py-4 rounded-xl font-semibold text-lg transition-all duration-300 ${
                    !isLogin
                      ? "bg-[#4fea47] text-black shadow-[0_0_20px_rgba(79,234,71,0.3)]"
                      : "text-white hover:bg-white/5"
                  }`}
                >
                  Register
                </button>
              </div>
            </div>
          )}

          <AnimatePresence mode="wait">
            <motion.div
              key={
                isAuthenticated
                  ? "profile"
                  : isLogin
                  ? "login"
                  : "register"
              }
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
            >
              {isAuthenticated ? (
                <UserProfile />
              ) : isLogin ? (
                <LoginForm />
              ) : (
                <RegisterForm />
              )}
            </motion.div>
          </AnimatePresence>
        </motion.div>
      </div>
    </div>
  );
}