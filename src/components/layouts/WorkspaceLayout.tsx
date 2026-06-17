"use client";

import { usePathname } from "next/navigation";
import TopNavbar from "@/components/layouts/TopNavbar";
import Sidebar from "@/components/layouts/Sidebar";
import StatusBar from "@/components/layouts/StatusBar";

export default function WorkspaceLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  const backgrounds: Record<string, string> = {
    "/lab/react-foundations/counter-app":
      "bg-gradient-to-br from-emerald-950 via-black to-zinc-950",

    "/lab/react-foundations/todo-app":
      "bg-gradient-to-br from-blue-950 via-black to-zinc-950",

    "/lab/react-foundations/theme-toggler":
      "bg-gradient-to-br from-violet-950 via-black to-zinc-950",

    "/lab/react-foundations/form-validation":
      "bg-gradient-to-br from-pink-950 via-black to-zinc-950",

    "/lab/react-foundations/quote-generator":
      "bg-gradient-to-br from-purple-950 via-black to-emerald-950",

    "/lab/auth-data/jwt-auth":
      "bg-gradient-to-br from-emerald-950 via-slate-950 to-black",

    "/lab/api-collaboration/graphql-blog":
      "bg-gradient-to-br from-cyan-950 via-slate-950 to-black",
  };

  const dynamicBg =
    backgrounds[pathname] ||
    "bg-[radial-gradient(circle_at_top_left,_rgba(79,234,71,0.25),_transparent_20%),radial-gradient(circle_at_bottom_right,_rgba(168,85,247,0.30),_transparent_30%),linear-gradient(135deg,_#020617_0%,_#0f172a_45%,_#09090b_100%)]";

  return (
    <main
      className={`
        min-h-screen
        text-white
        flex
        flex-col
        overflow-hidden
        ${dynamicBg}
      `}
    >
      <TopNavbar />

      <div className="flex flex-1 overflow-hidden">
        <Sidebar />

        <section
          className="
            flex-1
            overflow-y-auto
            p-8
          "
        >
          {children}
        </section>
      </div>

      <StatusBar />
    </main>
  );
}