"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useAuthStore } from "../store/authStore";

export default function ProtectedRoute({
  children,
}: {
  children: React.ReactNode;
}) {
  const router = useRouter();

  const isAuthenticated = useAuthStore(
    (state) => state.isAuthenticated
  );

  const expiresAt = useAuthStore(
    (state) => state.expiresAt
  );

  const logout = useAuthStore(
    (state) => state.logout
  );

  useEffect(() => {
    if (!isAuthenticated) {
      router.push("/lab/auth-data/jwt-auth");
    }
  }, [isAuthenticated, router]);

  useEffect(() => {
    if (!expiresAt) return;

    const interval = setInterval(() => {
      if (Date.now() > expiresAt) {
        logout();
        router.push("/lab/auth-data/jwt-auth");
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [expiresAt, logout, router]);

  if (!isAuthenticated) {
    return (
      <div className="text-center py-20">
        Checking Authentication...
      </div>
    );
  }

  return <>{children}</>;
}