export default function StatsCard({
  title,
  value,
}: {
  title: string;
  value: string | number;
}) {
  return (
    <div className="group rounded-[28px] border border-white/10 bg-white/5 backdrop-blur-xl p-8 shadow-[0_0_50px_rgba(79,234,71,0.05)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_0_70px_rgba(79,234,71,0.12)]">
      <p className="text-zinc-400 text-sm uppercase tracking-[0.2em] mb-4">
        {title}
      </p>

      <h3 className="text-4xl xl:text-5xl font-bold leading-tight">
  {value}
</h3>



      <div className="mt-6 h-1 rounded-full bg-zinc-800 overflow-hidden">
        <div className="h-full w-3/4 rounded-full bg-[#4fea47] transition-all duration-500 group-hover:w-full" />
      </div>
    </div>
  );
}