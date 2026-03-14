export default function ResourceBar({
  label,
  percentage,
}: {
  label: string;
  percentage: number;
}) {
  return (
    <div>
      <div className="flex justify-between text-xs mb-2">
        <span className="text-purple-300 uppercase tracking-widest">
          {label}
        </span>
        <span className="text-purple-500">{percentage}%</span>
      </div>

      <div className="h-1.5 w-full bg-zinc-900 overflow-hidden border border-purple-500/20">
        <div
          className="h-full bg-purple-500 shadow-[0_0_10px_#a855f7]"
          style={{ width: `${percentage}%` }}
        />
      </div>
    </div>
  );
}
