"use client";

export default function FloatingToggle({
  currentMode,
  onToggle,
}: {
  currentMode: "terminal" | "gui";
  onToggle: () => void;
}) {
  return (
    <button
      onClick={onToggle}
      className="fixed bottom-6 right-6 p-4 system-border hover:drop-shadow-neon-strong transition-all duration-300 z-50 flex items-center justify-center cursor-pointer"
      title="Toggle System Mode">
      {currentMode === "terminal" ? (
        <span className="text-sm font-bold tracking-widest uppercase text-purple-300">
          [ MOUNT GUI ]
        </span>
      ) : (
        <span className="text-sm font-bold tracking-widest uppercase text-purple-300">
          [ TERMINAL ]
        </span>
      )}
    </button>
  );
}
