"use client";

import { useState } from "react";

export default function FormValidationLab() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [success, setSuccess] = useState("");

  const validate = () => {
    const newErrors: Record<string, string> = {};

    if (form.name.trim().length < 3) {
      newErrors.name = "Name must be at least 3 characters";
    }

    if (!/\S+@\S+\.\S+/.test(form.email)) {
      newErrors.email = "Enter valid email";
    }

    if (form.password.length < 6) {
      newErrors.password = "Password must be at least 6 characters";
    }

    if (form.password !== form.confirmPassword) {
      newErrors.confirmPassword = "Passwords do not match";
    }

    return newErrors;
  };

  const handleSubmit = () => {
    const validationErrors = validate();
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      setSuccess("✅ Account created successfully!");
      setForm({
        name: "",
        email: "",
        password: "",
        confirmPassword: "",
      });
    } else {
      setSuccess("");
    }
  };

  const handleChange = (field: string, value: string) => {
    setForm({ ...form, [field]: value });
  };

  return (
    <div className="flex justify-center">
      <div className="w-full max-w-md rounded-[32px] border border-purple-500/20 bg-gradient-to-br from-zinc-950 via-zinc-900 to-purple-950 p-8 shadow-2xl">
        <img
          src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f"
          alt="auth"
          className="w-full h-48 rounded-2xl object-cover mb-6"
        />

        <h2 className="text-3xl font-bold mb-2">Get Started Free</h2>
        <p className="text-zinc-400 mb-6">
          Create your account with proper validation
        </p>

        <div className="space-y-4">
          <div>
            <input
              value={form.name}
              onChange={(e) => handleChange("name", e.target.value)}
              placeholder="Full Name"
              className="w-full rounded-xl bg-white/5 border border-white/10 px-4 py-3 backdrop-blur"
            />
            {errors.name && (
              <p className="text-red-400 text-sm mt-1">{errors.name}</p>
            )}
          </div>

          <div>
            <input
              value={form.email}
              onChange={(e) => handleChange("email", e.target.value)}
              placeholder="Email"
              className="w-full rounded-xl bg-white/5 border border-white/10 px-4 py-3 backdrop-blur"
            />
            {errors.email && (
              <p className="text-red-400 text-sm mt-1">{errors.email}</p>
            )}
          </div>

          <div>
            <input
              type="password"
              value={form.password}
              onChange={(e) => handleChange("password", e.target.value)}
              placeholder="Password"
              className="w-full rounded-xl bg-white/5 border border-white/10 px-4 py-3 backdrop-blur"
            />
            {errors.password && (
              <p className="text-red-400 text-sm mt-1">{errors.password}</p>
            )}
          </div>

          <div>
            <input
              type="password"
              value={form.confirmPassword}
              onChange={(e) =>
                handleChange("confirmPassword", e.target.value)
              }
              placeholder="Confirm Password"
              className="w-full rounded-xl bg-white/5 border border-white/10 px-4 py-3 backdrop-blur"
            />
            {errors.confirmPassword && (
              <p className="text-red-400 text-sm mt-1">
                {errors.confirmPassword}
              </p>
            )}
          </div>

          <button
            onClick={handleSubmit}
            className="w-full rounded-xl bg-gradient-to-r from-pink-500 to-purple-500 py-3 font-semibold"
          >
            Sign Up
          </button>

          {success && (
            <p className="text-green-400 font-medium">{success}</p>
          )}
        </div>
      </div>
    </div>
  );
}