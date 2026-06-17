import StatsCard from "@/components/shared/StatsCard";
import reactFoundationsLabs from "@/config/reactFoundationsLabs";

export default function LabDashboardPage() {
  const totalLabs = 24;
  const completedLabs = reactFoundationsLabs.length;
  const progress = Math.round((completedLabs / totalLabs) * 100);

  const phase =
    completedLabs < 6
      ? "React Foundations"
      : completedLabs < 12
      ? "API & Collaboration"
      : "Advanced Systems";

  return (
    <div className="space-y-10">
      {/* Heading */}
      <div>
        <h1 className="text-5xl font-bold tracking-tight">
          Welcome to your Engineering Lab
        </h1>
        <p className="text-zinc-400 mt-3 text-lg">
          Build, test, and scale 24 frontend systems inside one unified
          platform.
        </p>
      </div>

      {/* Stats */}
      <div className="grid gap-6 md:grid-cols-3">
        <StatsCard title="Total Labs" value={String(totalLabs)} />
        <StatsCard title="Completed" value={String(completedLabs)} />
        <StatsCard title="Current Phase" value={phase} />
      </div>

      {/* Learning Roadmap */}
      <div className="rounded-[32px] border border-white/10 bg-white/5 backdrop-blur-xl p-8">
        <h2 className="text-2xl font-bold mb-6">Learning Roadmap</h2>

        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          <div className="rounded-2xl bg-[#4fea47]/20 border border-[#4fea47]/30 p-6">
            <p className="text-sm text-zinc-300">Completed</p>
            <h3 className="text-xl font-bold mt-2">React Foundations</h3>
          </div>

          <div className="rounded-2xl bg-blue-500/20 border border-blue-500/30 p-6">
            <p className="text-sm text-zinc-300">In Progress</p>
            <h3 className="text-xl font-bold mt-2">API & Collaboration</h3>
          </div>

          <div className="rounded-2xl bg-white/5 border border-white/10 p-6">
            <p className="text-sm text-zinc-400">Upcoming</p>
            <h3 className="text-xl font-bold mt-2">Auth & Data</h3>
          </div>

          <div className="rounded-2xl bg-white/5 border border-white/10 p-6">
            <p className="text-sm text-zinc-400">Upcoming</p>
            <h3 className="text-xl font-bold mt-2">Rendering Systems</h3>
          </div>

          <div className="rounded-2xl bg-white/5 border border-white/10 p-6">
            <p className="text-sm text-zinc-400">Upcoming</p>
            <h3 className="text-xl font-bold mt-2">Frontend Architecture</h3>
          </div>
        </div>
      </div>

      {/* Overall Progress */}
      <div className="rounded-[32px] border border-white/10 bg-white/5 backdrop-blur-xl p-8">
        <h2 className="text-2xl font-bold mb-4">Overall Progress</h2>

        <div className="flex justify-between text-sm text-zinc-400 mb-2">
          <span>
            {completedLabs} / {totalLabs} Completed
          </span>
          <span>{progress}%</span>
        </div>

        <div className="w-full h-3 rounded-full bg-zinc-800 overflow-hidden">
          <div
            className="h-full bg-[#4fea47] transition-all duration-700"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>

      {/* Recent Activity Timeline */}
      <div className="rounded-[32px] border border-white/10 bg-gradient-to-br from-zinc-950/80 to-zinc-900/80 backdrop-blur-xl p-8 shadow-2xl">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-2xl font-bold">Recent Engineering Activity</h2>
          <span className="text-sm text-zinc-400">Live Progress</span>
        </div>

        <div className="space-y-8 border-l border-white/10 pl-6">
          <div className="relative">
            <div className="absolute -left-[31px] top-1 h-4 w-4 rounded-full bg-[#4fea47]" />
            <h3 className="text-lg font-semibold">
              React Foundations Completed
            </h3>
            <p className="text-zinc-400 mt-1">
              Counter, Todo, Theme Toggle, Tabs, Form Validation, Quote Generator
            </p>
          </div>

          <div className="relative">
            <div className="absolute -left-[31px] top-1 h-4 w-4 rounded-full bg-blue-500" />
            <h3 className="text-lg font-semibold">
              API & Collaboration Started
            </h3>
            <p className="text-zinc-400 mt-1">
              REST integration, GraphQL blog frontend, shared services layer
            </p>
          </div>

          <div className="relative">
            <div className="absolute -left-[31px] top-1 h-4 w-4 rounded-full bg-zinc-500" />
            <h3 className="text-lg font-semibold">
              Auth & Data Systems Upcoming
            </h3>
            <p className="text-zinc-400 mt-1">
              JWT auth, React Query, SWR, Google OAuth, protected routes
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}