import Link from "next/link";

const labs = [
  {
    title: "REST API Dashboard",
    description:
      "Fetch, manage and visualize REST API data.",
    href: "/lab/api-collaboration/rest-api-dashboard",
  },
  {
    title: "GraphQL Blog",
    description:
      "Apollo Client powered GraphQL blog application.",
    href: "/lab/api-collaboration/graphql-blog",
  },
];

export default function ApiCollaborationPage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-5xl font-bold">
          API & Collaboration
        </h1>

        <p className="text-zinc-400 mt-3 text-lg">
          REST APIs, GraphQL, WebSockets and Team Workflows
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        {labs.map((lab) => (
          <Link
            key={lab.href}
            href={lab.href}
            className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl transition-all hover:border-[#4fea47]/50 hover:-translate-y-1"
          >
            <h2 className="text-3xl font-bold mb-3">
              {lab.title}
            </h2>

            <p className="text-zinc-400">
              {lab.description}
            </p>
          </Link>
        ))}
      </div>
    </div>
  );
}