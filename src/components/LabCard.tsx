export default function LabCard({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="w-full rounded-[32px] border border-white/10 bg-gradient-to-br from-zinc-950 via-zinc-900 to-zinc-950 p-10 shadow-2xl relative overflow-hidden">
      <div className="absolute -top-20 -left-20 h-60 w-60 rounded-full bg-[#4fea47]/20 blur-3xl" />
      <div className="absolute -bottom-20 -right-20 h-60 w-60 rounded-full bg-purple-500/20 blur-3xl" />

      <div className="relative z-10">
        <h2 className="text-4xl font-bold mb-8">{title}</h2>
        {children}
      </div>
    </div>
  );
}