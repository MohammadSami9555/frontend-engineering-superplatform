"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import sidebarLinks from "@/config/sidebarLinks";

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="w-72 border-r border-white/10 bg-black/20 backdrop-blur-xl p-6">
      <h2 className="text-3xl font-bold mb-8">Labs</h2>

      <nav className="space-y-3">
        {sidebarLinks.map((link) => {
          const isActive = pathname === link.href;

          return (
            <Link
              key={link.href}
              href={link.href}
              className={`block rounded-2xl px-4 py-3 transition-all duration-300 ${
                isActive
                  ? "bg-gradient-to-r from-[#4fea47]/30 to-emerald-500/10 border border-[#4fea47]/30 shadow-[0_0_25px_rgba(79,234,71,0.12)]"
                  : "hover:bg-white/5 hover:translate-x-1"
              }`}
            >
              {link.label}
            </Link>
          );
        })}
      </nav>
    </aside>
  );
}