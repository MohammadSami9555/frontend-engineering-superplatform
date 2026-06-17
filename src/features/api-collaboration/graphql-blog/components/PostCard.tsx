import { Post } from "../types";

interface Props {
  post: Post;
}

export default function PostCard({ post }: Props) {
  return (
    <div
      className="
        rounded-3xl
        border border-white/10
        bg-white/5
        backdrop-blur-xl
        p-6
        min-h-[220px]
        transition-all
        duration-300
        hover:scale-[1.03]
        hover:border-[#4fea47]/50
        hover:shadow-[0_0_35px_rgba(79,234,71,0.25)]
      "
    >
      <div className="mb-4">
        <span className="px-3 py-1 rounded-full bg-[#4fea47]/20 text-[#4fea47] text-xs font-semibold">
          GraphQL
        </span>
      </div>

      <h2 className="text-2xl font-bold mb-4">
        {post.title}
      </h2>

      <p className="text-gray-400 leading-relaxed">
        {post.body}
      </p>
    </div>
  );
}