"use client";

import { useState } from "react";

export default function RegisterForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleRegister = () => {
    if (password !== confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    alert("Registration Successful!");
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
        Register
      </h2>

      <div className="space-y-4">

        <input
          type="text"
          placeholder="Full Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
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
          type="tel"
          placeholder="Contact Number"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
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

        <input
          type="password"
          placeholder="Confirm Password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
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

        <button
          onClick={handleRegister}
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
          Create Account
        </button>

      </div>
    </div>
  );
}