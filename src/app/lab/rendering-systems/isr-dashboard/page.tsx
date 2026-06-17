export default function ISRDashboard() {
  return (
    <div className="space-y-8">

      <div>
        <h1 className="text-5xl font-bold">
          ISR Dashboard
        </h1>

        <p className="text-zinc-400 mt-2">
          Incremental Static Regeneration Analytics
        </p>
      </div>

      {/* Main Stats */}
      <div className="grid md:grid-cols-3 gap-6">

        <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
          <p className="text-zinc-400">
            Revalidate Time
          </p>

          <h2 className="text-4xl font-bold text-[#4fea47] mt-3">
            60s
          </h2>
        </div>

        <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
          <p className="text-zinc-400">
            Cache Status
          </p>

          <h2 className="text-4xl font-bold text-[#4fea47] mt-3">
            Active
          </h2>
        </div>

        <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
          <p className="text-zinc-400">
            Rendering
          </p>

          <h2 className="text-4xl font-bold text-[#4fea47] mt-3">
            ISR
          </h2>
        </div>

      </div>

      {/* Performance Analytics */}
      <div className="grid md:grid-cols-4 gap-6">

        <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
          <p className="text-zinc-400">
            Page Views
          </p>

          <h2 className="text-4xl font-bold text-[#4fea47] mt-3">
            12.4K
          </h2>
        </div>

        <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
          <p className="text-zinc-400">
            Cache Hits
          </p>

          <h2 className="text-4xl font-bold text-[#4fea47] mt-3">
            98%
          </h2>
        </div>

        <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
          <p className="text-zinc-400">
            Regenerations
          </p>

          <h2 className="text-4xl font-bold text-[#4fea47] mt-3">
            42
          </h2>
        </div>

        <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
          <p className="text-zinc-400">
            Avg Response
          </p>

          <h2 className="text-4xl font-bold text-[#4fea47] mt-3">
            65ms
          </h2>
        </div>

      </div>
{/* Rendering Comparison */}

<div className="space-y-4">

  <h2 className="text-4xl font-bold">
    Rendering Comparison
  </h2>

  <div className="grid md:grid-cols-3 gap-6">

    <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
      <h3 className="text-2xl font-bold text-[#4fea47]">
        SSR
      </h3>

      <p className="text-zinc-400 mt-3">
        Fresh data on every request.
      </p>

      <p className="mt-4 text-sm">
        Best for real-time applications.
      </p>
    </div>

    <div className="rounded-3xl border border-[#4fea47]/30 bg-[#4fea47]/5 p-6">
      <h3 className="text-2xl font-bold text-[#4fea47]">
        ISR
      </h3>

      <p className="text-zinc-400 mt-3">
        Static pages with regeneration.
      </p>

      <p className="mt-4 text-sm">
        Best balance of speed + freshness.
      </p>
    </div>

    <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
      <h3 className="text-2xl font-bold text-[#4fea47]">
        SSG
      </h3>

      <p className="text-zinc-400 mt-3">
        Generated at build time.
      </p>

      <p className="mt-4 text-sm">
        Fastest possible delivery.
      </p>
    </div>

{/* Regeneration Timeline */}

<div className="space-y-4 mt-10">

  <h2 className="text-4xl font-bold">
    Regeneration Timeline
  </h2>

<div className="rounded-3xl border border-white/10 bg-white/5 p-8 w-full">

    <div className="space-y-6">

      <div className="flex justify-between">
        <span>Page Generated</span>
        <span className="text-[#4fea47]">
          09:00 AM
        </span>
      </div>

      <div className="flex justify-between">
        <span>Cache Served</span>
        <span className="text-[#4fea47]">
          09:30 AM
        </span>
      </div>

      <div className="flex justify-between">
        <span>Background Revalidation</span>
        <span className="text-[#4fea47]">
          10:00 AM
        </span>
      </div>

      <div className="flex justify-between">
        <span>Fresh Content Generated</span>
        <span className="text-[#4fea47]">
          10:01 AM
        </span>
      </div>

    </div>

  </div>

</div>
  </div>

</div>
    </div>
  );
}