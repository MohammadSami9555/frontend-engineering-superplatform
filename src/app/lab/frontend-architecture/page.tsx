export default function FrontendArchitecturePage() {
  return (
    <div className="space-y-8">

      <div>
        <h1 className="text-5xl font-bold">
          Frontend Architecture
        </h1>

        <p className="text-zinc-400 mt-2">
          Enterprise Frontend Engineering Systems
        </p>
      </div>

      <div className="grid md:grid-cols-4 gap-6">

        <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
          <p className="text-zinc-400">
            Modules
          </p>

          <h2 className="text-4xl font-bold text-[#4fea47] mt-3">
            5
          </h2>
        </div>

        <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
          <p className="text-zinc-400">
            Shared Components
          </p>

          <h2 className="text-4xl font-bold text-[#4fea47] mt-3">
            20+
          </h2>
        </div>

        <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
          <p className="text-zinc-400">
            Architecture
          </p>

          <h2 className="text-4xl font-bold text-[#4fea47] mt-3">
            A+
          </h2>
        </div>

        <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
          <p className="text-zinc-400">
            Status
          </p>

          <h2 className="text-4xl font-bold text-[#4fea47] mt-3">
            Live
          </h2>
        </div>

      </div>

      <div className="grid md:grid-cols-2 gap-6">

        <div className="rounded-3xl bg-white/5 p-8">
  <h2 className="text-3xl font-bold mb-6">
    Monorepo Architecture
  </h2>

  <div className="space-y-4">

    <div className="rounded-2xl bg-black/20 p-4 border border-white/10">
      <h3 className="font-semibold text-[#4fea47]">
        apps/
      </h3>

      <p className="text-zinc-400 text-sm">
        Next.js application routes and modules
      </p>
    </div>

    <div className="rounded-2xl bg-black/20 p-4 border border-white/10">
      <h3 className="font-semibold text-[#4fea47]">
        components/
      </h3>

      <p className="text-zinc-400 text-sm">
        Shared UI and reusable design system
      </p>
    </div>

    <div className="rounded-2xl bg-black/20 p-4 border border-white/10">
      <h3 className="font-semibold text-[#4fea47]">
        features/
      </h3>

      <p className="text-zinc-400 text-sm">
        Business modules and domain logic
      </p>
    </div>

    <div className="rounded-2xl bg-black/20 p-4 border border-white/10">
      <h3 className="font-semibold text-[#4fea47]">
        store/
      </h3>

      <p className="text-zinc-400 text-sm">
        Zustand global state management
      </p>
    </div>

  </div>
</div>

        <div className="rounded-3xl bg-white/5 p-8">
  <h2 className="text-3xl font-bold mb-6">
    CI/CD Pipeline
  </h2>

  <div className="grid grid-cols-2 gap-4">

    <div className="rounded-2xl border border-white/10 bg-black/20 p-4">
      <h3 className="text-[#4fea47] font-semibold">
        Code
      </h3>

      <p className="text-zinc-400 text-sm">
        Git Commit
      </p>
    </div>

    <div className="rounded-2xl border border-white/10 bg-black/20 p-4">
      <h3 className="text-[#4fea47] font-semibold">
        Build
      </h3>

      <p className="text-zinc-400 text-sm">
        Next.js Production Build
      </p>
    </div>

    <div className="rounded-2xl border border-white/10 bg-black/20 p-4">
      <h3 className="text-[#4fea47] font-semibold">
        Test
      </h3>

      <p className="text-zinc-400 text-sm">
        Lint + Type Check
      </p>
    </div>

    <div className="rounded-2xl border border-white/10 bg-black/20 p-4">
      <h3 className="text-[#4fea47] font-semibold">
        Deploy
      </h3>

      <p className="text-zinc-400 text-sm">
        Vercel Production
      </p>
    </div>

  </div>

  <div className="mt-6">
    <div className="h-3 rounded-full bg-black/30 overflow-hidden">
      <div className="h-full w-full bg-[#4fea47]" />
    </div>

    <p className="text-right text-[#4fea47] mt-2">
      Pipeline Healthy • 100%
    </p>
  </div>
</div>

        <div className="rounded-3xl bg-white/5 p-8">
  <h2 className="text-3xl font-bold mb-6">
    12-Factor Config
  </h2>

  <div className="space-y-4">

    <div className="rounded-2xl border border-white/10 bg-black/20 p-4">
      <p className="text-[#4fea47] font-semibold">
        NEXT_PUBLIC_API_URL
      </p>

      <p className="text-zinc-400 text-sm">
        API Endpoint Configuration
      </p>
    </div>

    <div className="rounded-2xl border border-white/10 bg-black/20 p-4">
      <p className="text-[#4fea47] font-semibold">
        NEXT_PUBLIC_APP_NAME
      </p>

      <p className="text-zinc-400 text-sm">
        Application Branding
      </p>
    </div>

    <div className="rounded-2xl border border-white/10 bg-black/20 p-4">
      <p className="text-[#4fea47] font-semibold">
        NEXT_PUBLIC_ENV
      </p>

      <p className="text-zinc-400 text-sm">
        Development / Production
      </p>
    </div>

  </div>

  <div className="mt-6 rounded-2xl bg-[#4fea47]/10 p-4">
    <p className="text-[#4fea47] font-semibold">
      Configuration Status: Healthy
    </p>
  </div>
</div>

        <div className="rounded-3xl bg-white/5 p-8">
  <h2 className="text-3xl font-bold mb-6">
    CDN Optimization
  </h2>

  <div className="grid grid-cols-2 gap-4">

    <div className="rounded-2xl border border-white/10 bg-black/20 p-4">
      <p className="text-zinc-400">
        Cache Hit
      </p>

      <h3 className="text-2xl font-bold text-[#4fea47]">
        98%
      </h3>
    </div>

    <div className="rounded-2xl border border-white/10 bg-black/20 p-4">
      <p className="text-zinc-400">
        CDN Nodes
      </p>

      <h3 className="text-2xl font-bold text-[#4fea47]">
        42
      </h3>
    </div>

    <div className="rounded-2xl border border-white/10 bg-black/20 p-4">
      <p className="text-zinc-400">
        Assets Optimized
      </p>

      <h3 className="text-2xl font-bold text-[#4fea47]">
        100%
      </h3>
    </div>

    <div className="rounded-2xl border border-white/10 bg-black/20 p-4">
      <p className="text-zinc-400">
        Response Time
      </p>

      <h3 className="text-2xl font-bold text-[#4fea47]">
        45ms
      </h3>
    </div>

  </div>

  <div className="mt-6 rounded-2xl bg-[#4fea47]/10 p-4">
    <p className="text-[#4fea47] font-semibold">
      Global Delivery Network Active
    </p>
  </div>
</div>

      </div>
<div className="rounded-3xl border border-white/10 bg-white/5 p-8">

  <h2 className="text-4xl font-bold mb-8">
    System Architecture Flow
  </h2>

  

  <div className="grid md:grid-cols-5 gap-4 text-center">

  <div className="rounded-2xl bg-black/20 p-6">
    <h3 className="text-[#4fea47] font-bold">
      Users
    </h3>
  </div>

  <div className="rounded-2xl bg-black/20 p-6">
    <h3 className="text-[#4fea47] font-bold">
      Next.js App
    </h3>
  </div>

  <div className="rounded-2xl bg-black/20 p-6">
    <h3 className="text-[#4fea47] font-bold">
      Components
    </h3>
  </div>

  <div className="rounded-2xl bg-black/20 p-6">
    <h3 className="text-[#4fea47] font-bold">
      Zustand Store
    </h3>
  </div>

  <div className="rounded-2xl bg-black/20 p-6">
    <h3 className="text-[#4fea47] font-bold">
      APIs
    </h3>
  </div>

</div>

</div>

<h2 className="text-4xl font-bold mt-10 mb-6">
  Architecture Metrics
</h2>

<div className="rounded-3xl border border-white/10 bg-white/5 p-8">

  <div className="flex justify-between items-center mb-6">
    <h2 className="text-3xl font-bold">
      Architecture Health
    </h2>

    <span className="text-[#4fea47] font-bold">
      96%
    </span>
  </div>

  <div className="h-4 rounded-full bg-black/20 overflow-hidden">
    <div className="h-full w-[96%] bg-[#4fea47]" />
  </div>

  <div className="grid md:grid-cols-4 gap-4 mt-6">

    <div className="rounded-2xl bg-black/20 p-4">
      <p className="text-zinc-400">Code Quality</p>
      <p className="text-[#4fea47] font-bold">98%</p>
    </div>

    <div className="rounded-2xl bg-black/20 p-4">
      <p className="text-zinc-400">Performance</p>
      <p className="text-[#4fea47] font-bold">95%</p>
    </div>

    <div className="rounded-2xl bg-black/20 p-4">
      <p className="text-zinc-400">Scalability</p>
      <p className="text-[#4fea47] font-bold">97%</p>
    </div>

    <div className="rounded-2xl bg-black/20 p-4">
      <p className="text-zinc-400">Maintainability</p>
      <p className="text-[#4fea47] font-bold">94%</p>
    </div>

  </div>

</div>

<div className="rounded-3xl border border-white/10 bg-white/5 p-8 mt-8">

  <h2 className="text-3xl font-bold mb-6">
    Technology Stack
  </h2>

  <div className="flex flex-wrap gap-4">

    <span className="px-4 py-2 rounded-full bg-[#4fea47]/10 text-[#4fea47]">
      Next.js
    </span>

    <span className="px-4 py-2 rounded-full bg-[#4fea47]/10 text-[#4fea47]">
      TypeScript
    </span>

    <span className="px-4 py-2 rounded-full bg-[#4fea47]/10 text-[#4fea47]">
      Tailwind CSS
    </span>

    <span className="px-4 py-2 rounded-full bg-[#4fea47]/10 text-[#4fea47]">
      Zustand
    </span>

    <span className="px-4 py-2 rounded-full bg-[#4fea47]/10 text-[#4fea47]">
      React Query
    </span>

    <span className="px-4 py-2 rounded-full bg-[#4fea47]/10 text-[#4fea47]">
      Axios
    </span>

    <span className="px-4 py-2 rounded-full bg-[#4fea47]/10 text-[#4fea47]">
      Framer Motion
    </span>

  </div>

</div>

<div className="grid md:grid-cols-4 gap-6 mt-8">

  <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
    <p className="text-zinc-400">Components</p>
    <h2 className="text-4xl font-bold text-[#4fea47] mt-3">20+</h2>
  </div>

  <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
    <p className="text-zinc-400">Routes</p>
    <h2 className="text-4xl font-bold text-[#4fea47] mt-3">24</h2>
  </div>

  <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
    <p className="text-zinc-400">State Stores</p>
    <h2 className="text-4xl font-bold text-[#4fea47] mt-3">4</h2>
  </div>

  <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
    <p className="text-zinc-400">Performance</p>
    <h2 className="text-4xl font-bold text-[#4fea47] mt-3">A+</h2>
  </div>

</div>

<div className="rounded-3xl border border-white/10 bg-white/5 p-8 mt-8">

  <div className="flex justify-between mb-4">
    <h2 className="text-3xl font-bold">
      SuperPlatform Progress
    </h2>

    <span className="text-[#4fea47] font-bold">
      100%
    </span>
  </div>

  <div className="h-4 rounded-full bg-black/20 overflow-hidden">
    <div className="h-full w-[100%] bg-[#4fea47]" />
  </div>

  <div className="grid md:grid-cols-4 gap-4 mt-6">

    <div className="rounded-2xl bg-black/20 p-4">
      React Foundations ✅
    </div>

    <div className="rounded-2xl bg-black/20 p-4">
      Auth & Data ✅
    </div>

    <div className="rounded-2xl bg-black/20 p-4">
      Rendering Systems ✅
    </div>

    <div className="rounded-2xl bg-black/20 p-4">
      Frontend Architecture ✅
    </div>

  </div>

</div>

{/* SYSTEM ARCHITECTURE */}

<div className="rounded-3xl border border-white/10 bg-white/5 p-8 mt-8">

  <h2 className="text-3xl font-bold mb-6">
    System Architecture
  </h2>

  <div className="grid md:grid-cols-5 gap-4">

    <div className="rounded-2xl bg-black/20 p-6 text-center">
      <h3 className="text-[#4fea47] font-bold">
        User
      </h3>
      <p className="text-zinc-400 mt-2">
        Browser Request
      </p>
    </div>

    <div className="rounded-2xl bg-black/20 p-6 text-center">
      <h3 className="text-[#4fea47] font-bold">
        Next.js
      </h3>
      <p className="text-zinc-400 mt-2">
        App Router
      </p>
    </div>

    <div className="rounded-2xl bg-black/20 p-6 text-center">
      <h3 className="text-[#4fea47] font-bold">
        Features
      </h3>
      <p className="text-zinc-400 mt-2">
        Modular Structure
      </p>
    </div>

    <div className="rounded-2xl bg-black/20 p-6 text-center">
      <h3 className="text-[#4fea47] font-bold">
        API Layer
      </h3>
      <p className="text-zinc-400 mt-2">
        Services & Hooks
      </p>
    </div>

    <div className="rounded-2xl bg-black/20 p-6 text-center">
      <h3 className="text-[#4fea47] font-bold">
        Backend
      </h3>
      <p className="text-zinc-400 mt-2">
        Database & APIs
      </p>
    </div>

  </div>

</div>

{/* FOLDER STRUCTURE */}

<div className="rounded-3xl border border-white/10 bg-white/5 p-8 mt-8">

  <h2 className="text-3xl font-bold mb-6">
    Folder Structure
  </h2>

  <pre className="rounded-2xl bg-black/20 p-8 font-mono text-sm text-zinc-300 overflow-x-auto whitespace-pre-wrap">
{`src/
├── app/
│   ├── dashboard/
│   ├── products/
│   └── checkout/
│
├── features/
│   ├── auth/
│   ├── cart/
│   └── products/
│
├── components/
│   ├── ui/
│   └── layouts/
│
├── services/
├── hooks/
├── stores/
├── lib/
└── types/`}

  </pre>

</div>


<div className="rounded-3xl border border-white/10 bg-white/5 p-8 mt-8">

  <h2 className="text-3xl font-bold mb-6">
    State Management Flow
  </h2>

  <div className="grid md:grid-cols-5 gap-4 text-center">

    <div className="rounded-2xl bg-black/20 p-6">
      <h3 className="text-[#4fea47] font-bold">
        User Action
      </h3>
      <p className="text-zinc-400 mt-2">
        Click / Submit
      </p>
    </div>

    <div className="rounded-2xl bg-black/20 p-6">
      <h3 className="text-[#4fea47] font-bold">
        Component
      </h3>
      <p className="text-zinc-400 mt-2">
        UI Event
      </p>
    </div>

    <div className="rounded-2xl bg-black/20 p-6">
      <h3 className="text-[#4fea47] font-bold">
        Zustand Store
      </h3>
      <p className="text-zinc-400 mt-2">
        Global State
      </p>
    </div>

    <div className="rounded-2xl bg-black/20 p-6">
      <h3 className="text-[#4fea47] font-bold">
        API Service
      </h3>
      <p className="text-zinc-400 mt-2">
        Data Request
      </p>
    </div>

    <div className="rounded-2xl bg-black/20 p-6">
      <h3 className="text-[#4fea47] font-bold">
        Backend
      </h3>
      <p className="text-zinc-400 mt-2">
        Response
      </p>
    </div>

  </div>

</div>
{/* PORTFOLIO HIGHLIGHTS */}

<div className="rounded-3xl border border-white/10 bg-white/5 p-8 mt-8">

  <h2 className="text-3xl font-bold mb-6">
    Portfolio Highlights
  </h2>

  <div className="grid md:grid-cols-3 gap-6">

    <div className="rounded-2xl bg-black/20 p-6">
      <h3 className="text-[#4fea47] text-xl font-bold">
        24 Projects
      </h3>

      <p className="text-zinc-400 mt-2">
        End-to-end frontend engineering roadmap.
      </p>
    </div>

    <div className="rounded-2xl bg-black/20 p-6">
      <h3 className="text-[#4fea47] text-xl font-bold">
        Enterprise Architecture
      </h3>

      <p className="text-zinc-400 mt-2">
        Feature-first scalable structure.
      </p>
    </div>

    <div className="rounded-2xl bg-black/20 p-6">
      <h3 className="text-[#4fea47] text-xl font-bold">
        Production Ready
      </h3>

      <p className="text-zinc-400 mt-2">
        SSR, SSG, ISR, CSR and DevOps workflow.
      </p>
    </div>

  </div>

</div>

<div className="rounded-3xl border border-[#4fea47]/20 bg-[#4fea47]/10 p-8 mt-8 text-center">

  <h2 className="text-4xl font-bold text-[#4fea47]">
    Frontend Architecture Module Complete
  </h2>

  <p className="text-zinc-300 mt-4">
    Monorepo • CI/CD • Environment Config • CDN Optimization • System Design
  </p>

</div>

</div>

  );
}