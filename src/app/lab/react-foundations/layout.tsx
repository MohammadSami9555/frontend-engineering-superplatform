"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import reactFoundationsLabs from "@/config/reactFoundationsLabs";

export default function ReactFoundationsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  return (
    <div>
      <h1 className="text-4xl font-bold mb-6">React Foundations Lab</h1>

      <div className="flex flex-wrap gap-3 mb-8">
        {reactFoundationsLabs.map((lab) => {
          const isActive = pathname === lab.href;

          return (
            <Link
              key={lab.href}
              href={lab.href}
              className={`px-4 py-2 rounded-lg transition-colors ${
                isActive
                  ? "bg-white text-black"
                  : "bg-zinc-900 hover:bg-zinc-800"
              }`}
            >
              {lab.label}
            </Link>
          );
        })}
      </div>

      {children}
    </div>
  );
}