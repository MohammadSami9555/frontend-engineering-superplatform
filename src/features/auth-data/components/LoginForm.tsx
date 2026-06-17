"use client";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useAuthStore } from "../store/authStore";

export default function LoginForm() {
  const router = useRouter();
  const login = useAuthStore((state) => state.login);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
  const expiresAt = Date.now() + 60000;

  login(
    {
      id: 1,
      name: "Mohammad Sami",
      email,
      role:
        email === "admin@test.com"
          ? "admin"
          : "user",
    },
    "fake-jwt-token",
    expiresAt
  );

  console.log("AFTER LOGIN:", useAuthStore.getState());

  alert("Login Successful!");

  if (email === "admin@test.com") {
    router.push("/lab/auth-data/admin");
  } else {
    router.push("/lab/auth-data/dashboard");
  }
};
  

  return (
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
        shadow-[0_0_30px_rgba(79,234,71,0.08)]
      "
    >
      <h2 className="text-4xl font-bold mb-6">
        Login
      </h2>

      <div className="space-y-4">

        <input
          type="email"
          placeholder="Email Address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="
            w-full
            rounded-xl
            border border-white/10
            bg-white/5
            px-4 py-3
            outline-none
            transition
            focus:border-[#4fea47]
          "
        />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="
            w-full
            rounded-xl
            border border-white/10
            bg-white/5
            px-4 py-3
            outline-none
            transition
            focus:border-[#4fea47]
          "
        />

        <div className="flex justify-end">
          <button
            type="button"
            onClick={() =>
              alert("Forgot Password feature coming soon!")
            }
            className="
              text-sm
              text-[#4fea47]
              hover:underline
              transition
            "
          >
            Forgot Password?
          </button>
        </div>

        <button
          onClick={handleLogin}
          className="
            w-full
            rounded-xl
            bg-[#4fea47]
            py-3
            font-semibold
            text-black
            transition-all
            duration-300
            hover:scale-[1.02]
            hover:shadow-[0_0_20px_rgba(79,234,71,0.35)]
          "
        >
          Login
        </button>

      </div>
    </div>
  );
}