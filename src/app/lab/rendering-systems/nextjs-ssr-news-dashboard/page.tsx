interface Post {
id: number;
title: string;
body: string;
tags: string[];
}

export default async function SSRNewsDashboard() {
const response = await fetch(
"https://dummyjson.com/posts",
{
cache: "no-store",
}
);

const data = await response.json();

const posts: Post[] = data.posts.slice(0, 12);

return (
  <div className="space-y-8">
  <div>
    <h1 className="text-5xl font-bold">
      SSR News Dashboard
    </h1>

    <p className="text-zinc-400 mt-2">
      Server Side Rendered News Feed
    </p>
  </div>

   {/* Main Stats */}
  <div className="grid md:grid-cols-3 gap-6">

    <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
      <p className="text-zinc-400">
        Total Articles
      </p>

      <h2 className="text-4xl font-bold text-[#4fea47] mt-3">
        {posts.length}
      </h2>
    </div>

    <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
      <p className="text-zinc-400">
        Rendering Type
      </p>

      <h2 className="text-4xl font-bold text-[#4fea47] mt-3">
        SSR
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

  {/* Performance Analytics */}
  <div className="grid md:grid-cols-4 gap-6">

    <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
      <p className="text-zinc-400">
        TTFB
      </p>

      <h2 className="text-4xl font-bold text-[#4fea47] mt-3">
        84ms
      </h2>
    </div>

    <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
      <p className="text-zinc-400">
        SEO Score
      </p>

      <h2 className="text-4xl font-bold text-[#4fea47] mt-3">
        100
      </h2>
    </div>

    <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
      <p className="text-zinc-400">
        Cache Status
      </p>

      <h2 className="text-4xl font-bold text-[#4fea47] mt-3">
        OFF
      </h2>
    </div>

    <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
      <p className="text-zinc-400">
        Render Type
      </p>

      <h2 className="text-4xl font-bold text-[#4fea47] mt-3">
        SSR
      </h2>
    </div>

  </div>

  {/* Rendering Comparison */}
  <div className="space-y-4">

    <h2 className="text-4xl font-bold">
      Rendering Comparison
    </h2>

    <div className="grid md:grid-cols-4 gap-6">

      <div className="rounded-3xl bg-white/5 p-6">
        <h3 className="text-2xl font-bold text-[#4fea47]">
          SSR
        </h3>

        <p className="text-zinc-400 mt-3">
          Rendered on every request.
        </p>
      </div>

      <div className="rounded-3xl bg-white/5 p-6">
        <h3 className="text-2xl font-bold text-[#4fea47]">
          SSG
        </h3>

        <p className="text-zinc-400 mt-3">
          Generated at build time.
        </p>
      </div>

      <div className="rounded-3xl bg-white/5 p-6">
        <h3 className="text-2xl font-bold text-[#4fea47]">
          ISR
        </h3>

        <p className="text-zinc-400 mt-3">
          Static with regeneration.
        </p>
      </div>

      <div className="rounded-3xl bg-white/5 p-6">
        <h3 className="text-2xl font-bold text-[#4fea47]">
          CSR
        </h3>

        <p className="text-zinc-400 mt-3">
          Client side rendering.
        </p>
      </div>

    </div>

  </div>

  {/* Articles */}
  <div className="grid md:grid-cols-2 gap-6">

    {posts.map((post) => (
      <div
        key={post.id}
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
          {post.title}
        </h2>

        <p className="text-zinc-400">
          {post.body}
        </p>

                <div className="flex gap-2 mt-4 flex-wrap">
          {post.tags.map((tag: string) => (
            <span
              key={tag}
              className="
                px-3
                py-1
                rounded-full
                bg-[#4fea47]/10
                text-[#4fea47]
                text-sm
              "
            >
              #{tag}
            </span>
          ))}
        </div>

      </div>
    ))}

  </div>

</div>

  );
}