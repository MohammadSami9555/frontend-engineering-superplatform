export default function SecurityTestingPage() {
  return (
    <div className="space-y-8">

      <div>
        <h1 className="text-5xl font-bold">
          Security & Testing
        </h1>

        <p className="text-zinc-400 mt-2">
          Application Security & Quality Assurance
        </p>
      </div>

      <div className="grid md:grid-cols-4 gap-6">

        <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
          <p className="text-zinc-400">Security Score</p>
          <h2 className="text-4xl font-bold text-[#4fea47] mt-3">
            98%
          </h2>
        </div>

        <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
          <p className="text-zinc-400">Test Coverage</p>
          <h2 className="text-4xl font-bold text-[#4fea47] mt-3">
            95%
          </h2>
        </div>

        <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
          <p className="text-zinc-400">Vulnerabilities</p>
          <h2 className="text-4xl font-bold text-[#4fea47] mt-3">
            0
          </h2>
        </div>

        <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
          <p className="text-zinc-400">Status</p>
          <h2 className="text-4xl font-bold text-[#4fea47] mt-3">
            Secure
          </h2>
        </div>

      </div>
<div className="rounded-3xl border border-white/10 bg-white/5 p-8">

  <h2 className="text-3xl font-bold mb-6">
    Authentication & Authorization
  </h2>

  <div className="grid md:grid-cols-3 gap-6">

    <div className="rounded-2xl bg-black/20 p-6">
      <h3 className="text-[#4fea47] text-xl font-bold">
        JWT Auth
      </h3>

      <p className="text-zinc-400 mt-2">
        Secure token-based authentication
      </p>
    </div>

    <div className="rounded-2xl bg-black/20 p-6">
      <h3 className="text-[#4fea47] text-xl font-bold">
        RBAC
      </h3>

      <p className="text-zinc-400 mt-2">
        Role Based Access Control
      </p>
    </div>

    <div className="rounded-2xl bg-black/20 p-6">
      <h3 className="text-[#4fea47] text-xl font-bold">
        Protected Routes
      </h3>

      <p className="text-zinc-400 mt-2">
        Route Guards & Middleware
      </p>
    </div>

  </div>

</div>
<div className="rounded-3xl border border-white/10 bg-white/5 p-8">

  <h2 className="text-3xl font-bold mb-6">
    Testing Dashboard
  </h2>

  <div className="grid md:grid-cols-3 gap-6">

    <div className="rounded-2xl bg-black/20 p-6">
      <h3 className="text-[#4fea47] text-xl font-bold">
        Unit Tests
      </h3>

      <p className="text-zinc-400 mt-2">
        145 Passing Tests
      </p>
    </div>

    <div className="rounded-2xl bg-black/20 p-6">
      <h3 className="text-[#4fea47] text-xl font-bold">
        Integration Tests
      </h3>

      <p className="text-zinc-400 mt-2">
        API & Component Validation
      </p>
    </div>

    <div className="rounded-2xl bg-black/20 p-6">
      <h3 className="text-[#4fea47] text-xl font-bold">
        E2E Tests
      </h3>

      <p className="text-zinc-400 mt-2">
        Cypress User Flow Coverage
      </p>
    </div>

  </div>

</div>
<div className="rounded-3xl border border-white/10 bg-white/5 p-8">

  <h2 className="text-3xl font-bold mb-6">
    OWASP Security Checks
  </h2>

  <div className="grid md:grid-cols-4 gap-6">

    <div className="rounded-2xl bg-black/20 p-6">
      <h3 className="text-[#4fea47] font-bold">
        XSS Protection
      </h3>

      <p className="text-zinc-400 mt-2">
        Enabled
      </p>
    </div>

    <div className="rounded-2xl bg-black/20 p-6">
      <h3 className="text-[#4fea47] font-bold">
        CSRF Protection
      </h3>

      <p className="text-zinc-400 mt-2">
        Active
      </p>
    </div>

    <div className="rounded-2xl bg-black/20 p-6">
      <h3 className="text-[#4fea47] font-bold">
        Rate Limiting
      </h3>

      <p className="text-zinc-400 mt-2">
        Configured
      </p>
    </div>

    <div className="rounded-2xl bg-black/20 p-6">
      <h3 className="text-[#4fea47] font-bold">
        Input Validation
      </h3>

      <p className="text-zinc-400 mt-2">
        Strict Mode
      </p>
    </div>

  </div>

</div>
<div className="rounded-3xl border border-white/10 bg-white/5 p-8">

  <div className="flex justify-between items-center mb-6">
    <h2 className="text-3xl font-bold">
      Security Health
    </h2>

    <span className="text-[#4fea47] font-bold">
      99%
    </span>
  </div>

  <div className="h-4 rounded-full bg-black/20 overflow-hidden">
    <div className="h-full w-[99%] bg-[#4fea47]" />
  </div>

  <div className="grid md:grid-cols-4 gap-4 mt-6">

    <div className="rounded-2xl bg-black/20 p-4">
      <p className="text-zinc-400">
        Critical
      </p>

      <p className="text-[#4fea47] font-bold">
        0
      </p>
    </div>

    <div className="rounded-2xl bg-black/20 p-4">
      <p className="text-zinc-400">
        High
      </p>

      <p className="text-[#4fea47] font-bold">
        0
      </p>
    </div>

    <div className="rounded-2xl bg-black/20 p-4">
      <p className="text-zinc-400">
        Medium
      </p>

      <p className="text-[#4fea47] font-bold">
        1
      </p>
    </div>

    <div className="rounded-2xl bg-black/20 p-4">
      <p className="text-zinc-400">
        Low
      </p>

      <p className="text-[#4fea47] font-bold">
        2
      </p>
    </div>

  </div>

</div>
<div className="rounded-3xl border border-white/10 bg-white/5 p-8">

  <h2 className="text-3xl font-bold mb-6">
    Security Compliance
  </h2>

  <div className="grid md:grid-cols-4 gap-6">

    <div className="rounded-2xl bg-black/20 p-6 text-center">
      <h3 className="text-[#4fea47] text-xl font-bold">
        OWASP Top 10
      </h3>

      <p className="text-zinc-400 mt-2">
        Compliant
      </p>
    </div>

    <div className="rounded-2xl bg-black/20 p-6 text-center">
      <h3 className="text-[#4fea47] text-xl font-bold">
        SOC 2
      </h3>

      <p className="text-zinc-400 mt-2">
        Verified
      </p>
    </div>

    <div className="rounded-2xl bg-black/20 p-6 text-center">
      <h3 className="text-[#4fea47] text-xl font-bold">
        GDPR
      </h3>

      <p className="text-zinc-400 mt-2">
        Enabled
      </p>
    </div>

    <div className="rounded-2xl bg-black/20 p-6 text-center">
      <h3 className="text-[#4fea47] text-xl font-bold">
        ISO 27001
      </h3>

      <p className="text-zinc-400 mt-2">
        Certified
      </p>
    </div>

  </div>

</div>
<div className="rounded-3xl border border-[#4fea47]/20 bg-[#4fea47]/10 p-8 mt-8 text-center">

  <h2 className="text-4xl font-bold text-[#4fea47]">
    Security & Testing Module Complete ✅
  </h2>

  <p className="text-zinc-300 mt-4">
    Authentication • Authorization • Testing • OWASP • Compliance
  </p>

</div>
    </div>
  );
}