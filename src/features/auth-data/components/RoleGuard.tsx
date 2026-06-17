"use client";

import { useAuthStore } from "../store/authStore";

export type RoleGuardProps = {
  role: "admin" | "user";
  children: React.ReactNode;
};

export default function RoleGuard({
  role,
  children,
}: RoleGuardProps) {
  const user = useAuthStore((state) => state.user);

  if (user?.role !== role) {
    return (
      <div className="text-center py-20">
        <h1 className="text-4xl font-bold text-red-500">
          Access Denied
        </h1>
      </div>
    );
  }

  return <>{children}</>;
}