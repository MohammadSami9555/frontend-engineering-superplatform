export default function CICDDashboard() {
  return (
    <div className="space-y-8">

      <div>
        <h1 className="text-5xl font-bold">
          CI/CD Dashboard
        </h1>

        <p className="text-zinc-400 mt-2">
          Continuous Integration & Deployment Pipeline
        </p>
      </div>

      <div className="grid md:grid-cols-4 gap-6">

        <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
          <p className="text-zinc-400">Pipeline Status</p>
          <h2 className="text-4xl font-bold text-[#4fea47] mt-3">
            Active
          </h2>
        </div>

        <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
          <p className="text-zinc-400">Build Success</p>
          <h2 className="text-4xl font-bold text-[#4fea47] mt-3">
            99%
          </h2>
        </div>

        <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
          <p className="text-zinc-400">Deployments</p>
          <h2 className="text-4xl font-bold text-[#4fea47] mt-3">
            124
          </h2>
        </div>

        <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
          <p className="text-zinc-400">Environment</p>
          <h2 className="text-4xl font-bold text-[#4fea47] mt-3">
            Prod
          </h2>
        </div>

      </div>
<div className="rounded-3xl border border-white/10 bg-white/5 p-8">

  <h2 className="text-3xl font-bold mb-6">
    Deployment Pipeline
  </h2>

  <div className="grid md:grid-cols-5 gap-4">

    <div className="rounded-2xl bg-black/20 p-6 text-center border border-[#4fea47]/20 hover:border-[#4fea47]/50 hover:shadow-[0_0_20px_rgba(79,234,71,0.2)] transition-all duration-300">
      <h3 className="text-[#4fea47] font-bold">
        Git Push
      </h3>
      <p className="text-zinc-400 text-sm mt-2">
        Code Commit
      </p>
    </div>

    <div className="rounded-2xl bg-black/20 p-6 text-center border border-[#4fea47]/20 hover:border-[#4fea47]/50 hover:shadow-[0_0_20px_rgba(79,234,71,0.2)] transition-all duration-300">
      <h3 className="text-[#4fea47] font-bold">
        Build
      </h3>
      <p className="text-zinc-400 text-sm mt-2">
        Next.js Build
      </p>
    </div>

    <div className="rounded-2xl bg-black/20 p-6 text-center border border-[#4fea47]/20 hover:border-[#4fea47]/50 hover:shadow-[0_0_20px_rgba(79,234,71,0.2)] transition-all duration-300">
      <h3 className="text-[#4fea47] font-bold">
        Test
      </h3>
      <p className="text-zinc-400 text-sm mt-2">
        Lint + Type Check
      </p>
    </div>

    <div className="rounded-2xl bg-black/20 p-6 text-center border border-[#4fea47]/20 hover:border-[#4fea47]/50 hover:shadow-[0_0_20px_rgba(79,234,71,0.2)] transition-all duration-300">
      <h3 className="text-[#4fea47] font-bold">
        Deploy
      </h3>
      <p className="text-zinc-400 text-sm mt-2">
        Vercel Production
      </p>
    </div>

    <div className="rounded-2xl bg-black/20 p-6 text-center border border-[#4fea47]/20 hover:border-[#4fea47]/50 hover:shadow-[0_0_20px_rgba(79,234,71,0.2)] transition-all duration-300">
      <h3 className="text-[#4fea47] font-bold">
        Live
      </h3>
      <p className="text-zinc-400 text-sm mt-2">
        Global CDN
      </p>
    </div>

  </div>

  <div className="mt-8">
  <div className="flex justify-between mb-2">
    <span>Pipeline Health</span>
    <span className="text-[#4fea47] font-bold">
      99%
    </span>
  </div>

  <div className="h-3 bg-black/20 rounded-full overflow-hidden">
    <div className="h-full w-[99%] bg-[#4fea47]" />
  </div>
</div>

{/* Quick Metrics */}

<div className="grid md:grid-cols-5 gap-6 mt-8">

  <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
    <p className="text-zinc-400">
      Last Deployment
    </p>

    <h2 className="text-3xl font-bold text-[#4fea47] mt-3">
      2m Ago
    </h2>
  </div>

  <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
    <p className="text-zinc-400">
      Build Time
    </p>

    <h2 className="text-3xl font-bold text-[#4fea47] mt-3">
      48s
    </h2>
  </div>

  <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
    <p className="text-zinc-400">
      Test Coverage
    </p>

    <h2 className="text-3xl font-bold text-[#4fea47] mt-3">
      96%
    </h2>
  </div>

  <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
    <p className="text-zinc-400">
      Success Rate
    </p>

    <h2 className="text-3xl font-bold text-[#4fea47] mt-3">
      99%
    </h2>
  </div>

  <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
    <p className="text-zinc-400">
      Deploy Target
    </p>

    <h2 className="text-3xl font-bold text-[#4fea47] mt-3">
      Vercel
    </h2>
  </div>

</div>

{/* Analytics Section */}

<div className="grid md:grid-cols-2 gap-6 mt-8">

  {/* Deployment History */}

  <div className="rounded-3xl border border-white/10 bg-white/5 p-8 h-full">

    <h2 className="text-3xl font-bold mb-6">
      Deployment History
    </h2>

    <div className="space-y-4">

      <div className="flex justify-between items-center rounded-2xl bg-black/20 p-4">
        <span>#124 • main</span>
        <span className="text-[#4fea47]">Success</span>
        <span className="text-zinc-400">2 min ago</span>
      </div>

      <div className="flex justify-between items-center rounded-2xl bg-black/20 p-4">
        <span>#123 • dev</span>
        <span className="text-[#4fea47]">Success</span>
        <span className="text-zinc-400">15 min ago</span>
      </div>

      <div className="flex justify-between items-center rounded-2xl bg-black/20 p-4">
        <span>#122 • main</span>
        <span className="text-red-400">Failed</span>
        <span className="text-zinc-400">1 hour ago</span>
      </div>

      <div className="flex justify-between items-center rounded-2xl bg-black/20 p-4">
        <span>#121 • hotfix</span>
        <span className="text-[#4fea47]">Success</span>
        <span className="text-zinc-400">Yesterday</span>
      </div>

    </div>

<div className="mt-8 pt-6 border-t border-white/10">

  <div className="rounded-2xl bg-black/20 p-5">

    <p className="text-zinc-400">
      Deployment Success Rate
    </p>

    <h3 className="text-5xl font-bold text-[#4fea47] mt-2">
      99%
    </h3>

  </div>

</div>


  </div>
  

  {/* Build Analytics + GitHub Actions */}

  <div className="rounded-3xl border border-white/10 bg-white/5 p-8">

    <h2 className="text-3xl font-bold mb-6">
      Build Analytics
    </h2>

    <div className="grid grid-cols-2 gap-6">

      <div className="rounded-2xl bg-black/20 p-4">
        <p className="text-zinc-400">Average Build Time</p>
        <h3 className="text-3xl font-bold text-[#4fea47]">
          48s
        </h3>
      </div>

      <div className="rounded-2xl bg-black/20 p-4">
        <p className="text-zinc-400">Deployment Frequency</p>
        <h3 className="text-3xl font-bold text-[#4fea47]">
          12/day
        </h3>
      </div>

      <div className="rounded-2xl bg-black/20 p-4">
        <p className="text-zinc-400">Failed Builds</p>
        <h3 className="text-3xl font-bold text-red-400">
          1
        </h3>
      </div>

      <div className="rounded-2xl bg-black/20 p-4">
        <p className="text-zinc-400">Rollback Rate</p>
        <h3 className="text-3xl font-bold text-[#4fea47]">
          0%
        </h3>
      </div>

    </div>

    <div className="border-t border-white/10 mt-8 pt-8">

      <h3 className="text-2xl font-bold mb-6">
        GitHub Actions
      </h3>

      <div className="grid grid-cols-2 gap-6">

        <div className="rounded-2xl bg-black/20 p-4">
          <p className="text-zinc-400">Workflow Runs</p>
          <h3 className="text-3xl font-bold text-[#4fea47]">
            342
          </h3>
        </div>

        <div className="rounded-2xl bg-black/20 p-4">
          <p className="text-zinc-400">Success Rate</p>
          <h3 className="text-3xl font-bold text-[#4fea47]">
            99.2%
          </h3>
        </div>

        <div className="rounded-2xl bg-black/20 p-4">
          <p className="text-zinc-400">Failed Runs</p>
          <h3 className="text-3xl font-bold text-red-400">
            3
          </h3>
        </div>

        <div className="rounded-2xl bg-black/20 p-4">
          <p className="text-zinc-400">Avg Duration</p>
          <h3 className="text-3xl font-bold text-[#4fea47]">
            2m 14s
          </h3>
        </div>


      </div>

    </div>

  </div>
</div>
</div>

</div>
  );
}