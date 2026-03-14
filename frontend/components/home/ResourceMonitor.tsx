import ResourceBar from "../ui/ResourceBar";

export default function ResourceMonitor() {
  return (
    <div className="p-5 bg-zinc-950 flex flex-col gap-6 h-full min-h-64 justify-center font-mono">
      <ResourceBar
        label="CPU CORE USAGE"
        percentage={42}
      />

      <ResourceBar
        label="MEMORY ALLOCATION"
        percentage={68}
      />

      <ResourceBar
        label="NETWORK BANDWIDTH"
        percentage={14}
      />

      <ResourceBar
        label="ACTIVE THREADS"
        percentage={31}
      />
    </div>
  );
}
