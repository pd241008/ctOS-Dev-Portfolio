export default function DeploymentRow({
  name,
  status,
  type,
}: {
  name: string;
  status: string;
  type: string;
}) {
  const isOnline = status === "LIVE" || status === "DEPLOYED";

  return (
    <div className="flex items-center justify-between p-3 border border-purple-500/20 bg-purple-900/10 hover:bg-purple-900/30 transition-colors font-mono">
      <div>
        <div className="text-purple-200 text-sm font-bold uppercase tracking-widest">
          {name}
        </div>

        <div className="text-zinc-500 text-[10px] uppercase mt-1 tracking-widest">
          {type}
        </div>
      </div>

      <div className="flex items-center gap-2">
        <span
          className="text-[10px] tracking-widest font-bold"
          style={{ color: isOnline ? "#4ade80" : "#eab308" }}>
          [{status}]
        </span>

        <span
          className={`w-2 h-2 rounded-full ${
            isOnline ? "bg-green-500" : "bg-yellow-500"
          }`}
        />
      </div>
    </div>
  );
}
