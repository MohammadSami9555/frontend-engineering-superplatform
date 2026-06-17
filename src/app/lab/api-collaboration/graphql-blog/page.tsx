"use client";

import { useEffect, useState } from "react";
import PostCard from "@/features/api-collaboration/graphql-blog/components/PostCard";
import { getPosts } from "@/features/api-collaboration/graphql-blog/services/graphql";
import { Post } from "@/features/api-collaboration/graphql-blog/types";

export default function GraphQLBlog() {
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");

  useEffect(() => {
    async function loadPosts() {
      const data = await getPosts();
      setPosts(data);
      setLoading(false);
    }

    loadPosts();
  }, []);

  const filteredPosts = posts.filter((post) =>
    post.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="p-8">
      {/* Header */}
      <div className="mb-10">
        <h1 className="text-5xl font-bold mb-3">
          GraphQL Blog Frontend
        </h1>

        <p className="text-gray-400 text-lg">
          API & Collaboration Lab - GraphQL Module
        </p>
      </div>

      {/* Stats */}
      <div className="grid md:grid-cols-3 gap-6 mb-10">
        <div className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-6">
          <p className="text-gray-400">Total Posts</p>
          <h2 className="text-4xl font-bold text-[#4fea47]">
            {posts.length}
          </h2>
        </div>

        <div className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-6">
          <p className="text-gray-400">Filtered Posts</p>
          <h2 className="text-4xl font-bold text-[#4fea47]">
            {filteredPosts.length}
          </h2>
        </div>

        <div className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-6">
          <p className="text-gray-400">API Type</p>
          <h2 className="text-4xl font-bold text-[#4fea47]">
            GraphQL
          </h2>
        </div>
      </div>

      {/* Search */}
      <div className="mb-10">
        <input
          type="text"
          placeholder="Search posts..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="
            w-full
            max-w-xl
            rounded-2xl
            border
            border-white/10
            bg-white/5
            px-5
            py-3
            outline-none
            focus:border-[#4fea47]
          "
        />
      </div>

      {/* Posts */}
      {loading ? (
        <div className="text-xl">
          Loading Posts...
        </div>
      ) : (
        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
          {filteredPosts.map((post) => (
  <PostCard
    key={post.id}
    post={post}
  />
))}
        </div>
      )}
    </div>
  );
}