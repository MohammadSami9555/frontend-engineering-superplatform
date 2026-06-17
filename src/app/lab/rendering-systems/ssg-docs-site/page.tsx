export default function SSGDocsSite() {
  const docs = [
    {
      title: "Introduction",
      description: "Overview of Static Site Generation in Next.js",
    },
    {
      title: "Routing",
      description: "Understanding App Router and file-based routing",
    },
    {
      title: "Data Fetching",
      description: "Using static data during build time",
    },
    {
      title: "Performance",
      description: "Benefits of pre-rendered pages",
    },
  ];

  return (
    <div className="space-y-8">

      <div>
        <h1 className="text-5xl font-bold">
          SSG Documentation Site
        </h1>

        <p className="text-zinc-400 mt-2">
          Static Site Generation Showcase
        </p>
      </div>

      <div className="mt-6">
  <input
    type="text"
    placeholder="Search Documentation..."
    className="
      w-full
      rounded-2xl
      border
      border-white/10
      bg-white/5
      px-5
      py-4
      outline-none
      focus:border-[#4fea47]
    "
  />
</div>

<div className="flex flex-wrap gap-3 mt-6">

  <span className="px-4 py-2 rounded-full bg-[#4fea47]/10 text-[#4fea47]">
    Next.js
  </span>

  <span className="px-4 py-2 rounded-full bg-white/5">
    Routing
  </span>

  <span className="px-4 py-2 rounded-full bg-white/5">
    Data Fetching
  </span>

  <span className="px-4 py-2 rounded-full bg-white/5">
    Performance
  </span>

  <span className="px-4 py-2 rounded-full bg-white/5">
    Deployment
  </span>

</div>

<div className="rounded-3xl border border-white/10 bg-white/5 p-6 mt-6">
  <div className="flex justify-between mb-3">
    <span className="font-medium">
      Documentation Progress
    </span>

    <span className="text-[#4fea47]">
      80%
    </span>
  </div>

  <div className="h-3 rounded-full bg-black/30 overflow-hidden">
    <div
      className="
        h-full
        w-[80%]
        bg-[#4fea47]
      "
    />
  </div>
</div>

      <div className="grid md:grid-cols-3 gap-6">

        <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
          <p className="text-zinc-400">
            Build Type
          </p>

          <h2 className="text-4xl font-bold text-[#4fea47] mt-3">
            SSG
          </h2>
        </div>

        <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
          <p className="text-zinc-400">
            Pages
          </p>

          <h2 className="text-4xl font-bold text-[#4fea47] mt-3">
            {docs.length}
          </h2>
        </div>

        <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
          <p className="text-zinc-400">
            Status
          </p>

          <h2 className="text-4xl font-bold text-[#4fea47] mt-3">
            Static
          </h2>
        </div>

      </div>

      <div className="grid md:grid-cols-2 gap-6">

        {docs.map((doc) => (
          <div
            key={doc.title}
            className="
              rounded-3xl
              border
              border-white/10
              bg-white/5
              p-6
              hover:border-[#4fea47]/40
              transition-all
            "
          >
            <h2 className="text-2xl font-bold mb-3">
              {doc.title}
            </h2>

            <p className="text-zinc-400">
              {doc.description}
            </p>
          </div>
        ))}

      </div>

    </div>
  );
}