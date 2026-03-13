"use client";

import { useState, useRef, useEffect } from "react";
import SystemCard from "./SystemCard";

export default function FloatingTerminal({
  switchToGui,
}: {
  switchToGui: () => void;
}) {
  const [isMinimized, setIsMinimized] = useState(false);
  const [history, setHistory] = useState<string[]>([
    "SYSTEM BOOT SEQUENCE INITIATED...",
    "LOADING KERNEL: Prathmesh_OS v2.0",
    "TYPE 'help' FOR COMMANDS OR 'gui' TO MOUNT VISUAL INTERFACE.",
  ]);
  const [input, setInput] = useState("");
  const endRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    endRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [history, isMinimized]);

  const handleCommand = (e: React.FormEvent) => {
    e.preventDefault();
    const cmd = input.trim().toLowerCase();
    const newHistory = [...history, `root@devcp:~$ ${cmd}`];

    if (cmd === "gui") {
      newHistory.push("MOUNTING GUI...");
      setTimeout(switchToGui, 500);
    } else if (cmd === "clear") {
      setHistory([]);
    } else {
      newHistory.push(`Command not found: ${cmd}`);
    }
    setHistory(newHistory);
    setInput("");
  };

  if (isMinimized) {
    return (
      <button
        onClick={() => setIsMinimized(false)}
        className="fixed bottom-6 left-1/2 -translate-x-1/2 p-3 bg-zinc-950 border border-purple-500 rounded-sm drop-shadow-[0_0_10px_rgba(168,85,247,0.6)] hover:bg-purple-900/50 transition-all z-50 flex items-center gap-2">
        <span className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></span>
        <span className="text-purple-300 font-mono text-sm uppercase tracking-widest">
          Restore_CLI
        </span>
      </button>
    );
  }

  return (
    <div className="absolute inset-0 w-full h-full flex flex-col items-center justify-center bg-transparent pointer-events-none p-4">
      <div className="pointer-events-auto w-full max-w-3xl">
        {/* CRITICAL FIX 1: Pass the onMinimize prop here! */}
        <SystemCard
          title="TERMINAL_EMULATOR"
          onMinimize={() => setIsMinimized(true)}>
          {/* CRITICAL FIX 2: Restored brackets for h-[28rem] and min-h-[200px] */}
          <div className="h-[28rem] w-full min-h-[200px] max-h-[80vh] resize-y overflow-hidden bg-zinc-950 p-4 flex flex-col font-mono text-sm sm:text-base">
            <div className="flex-1 overflow-y-auto space-y-2 mb-4">
              {history.map((line, i) => (
                <div
                  key={i}
                  className={
                    line.startsWith("root@")
                      ? "text-purple-300 font-semibold"
                      : "text-purple-400 opacity-90"
                  }>
                  {line}
                </div>
              ))}
              <div ref={endRef} />
            </div>

            <form
              onSubmit={handleCommand}
              className="flex items-center gap-2 mt-auto pt-2 border-t border-purple-500/30 shrink-0">
              <span className="text-purple-500 font-bold whitespace-nowrap">
                root@devcp:~$
              </span>
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                className="flex-1 bg-transparent border-none outline-none text-purple-100 focus:ring-0 w-full"
                autoFocus
                spellCheck={false}
                autoComplete="off"
              />
            </form>
          </div>
        </SystemCard>
      </div>
    </div>
  );
}
