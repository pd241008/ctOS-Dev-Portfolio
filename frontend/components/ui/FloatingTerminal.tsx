"use client";

import { useState, useRef, useEffect } from "react";
import { useRouter, usePathname } from "next/navigation";
import SystemCard from "../ui/SystemCard";
import { executeCommand, INITIAL_BOOT_SEQUENCE } from "../../lib/terminalCommands";

let hasAnimatedBoot = false;

function TypewriterLine({ text, speed = 15, onComplete }: { text: string; speed?: number; onComplete?: () => void }) {
  const [displayed, setDisplayed] = useState("");

  useEffect(() => {
    let intervalId: NodeJS.Timeout;
    let charIndex = 0;

    intervalId = setInterval(() => {
      setDisplayed(text.slice(0, charIndex + 1));
      charIndex++;
      if (charIndex >= text.length) {
        clearInterval(intervalId);
        onComplete?.();
      }
    }, speed);

    return () => clearInterval(intervalId);
  }, [text, speed, onComplete]);

  return <span>{displayed}</span>;
}

interface FloatingTerminalProps {
  switchToGui: () => void;
  onMinimize: () => void;
  history: string[];
  setHistory: React.Dispatch<React.SetStateAction<string[]>>;
}

export default function FloatingTerminal({
  switchToGui,
  onMinimize,
  history,
  setHistory,
}: FloatingTerminalProps) {
  const [input, setInput] = useState("");
  const [cursorPos, setCursorPos] = useState(0);
  const endRef = useRef<HTMLDivElement>(null);
  const router = useRouter();
  const currentPath = usePathname();

  // Track if this is the first time booting up the terminal in the session
  const [isInitialBoot, setIsInitialBoot] = useState(
    !hasAnimatedBoot && history.length === INITIAL_BOOT_SEQUENCE.length
  );
  const [completedLines, setCompletedLines] = useState(isInitialBoot ? 0 : history.length);

  useEffect(() => {
    endRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [history, completedLines]);

  const handleCommand = (e: React.FormEvent) => {
    e.preventDefault();
    const trimmedInput = input.trim();
    if (!trimmedInput) return;

    const newHistory = [...history, `root@ctos:~$ ${trimmedInput}`];
    
    const args = trimmedInput.toLowerCase().split(/\s+/);
    const cmd = args[0];

    // Command logic
    executeCommand(cmd, {
      args,
      history: newHistory,
      router,
      currentPath,
      switchToGui,
      onMinimize,
      setHistory: (newHist: string[]) => setHistory(newHist),
      setInput: (newInput: string) => {
        setInput(newInput);
        setCursorPos(0);
      },
    });
  };

  return (
    <SystemCard
      title="ctOS // TERMINAL"
      onMinimize={onMinimize}
      onClose={switchToGui}>
      <div className="h-112 max-h-[80vh] bg-zinc-950/95 backdrop-blur-md p-4 flex flex-col font-mono text-sm border-t border-purple-500/50">
        <div className="flex-1 overflow-y-auto space-y-1 mb-4 scrollbar-thin scrollbar-thumb-purple-500 pr-2">
          {history.map((line, i) => {
            const isAnimated = isInitialBoot && i < INITIAL_BOOT_SEQUENCE.length;
            
            // If we're animating and haven't reached this line yet, don't show it
            if (isAnimated && i > completedLines) return null;

            return (
              <div
                key={i}
                className={
                  line.startsWith("root@")
                    ? "text-purple-300 font-semibold mt-2"
                    : "text-purple-400 opacity-90"
                }>
                {isAnimated && i === completedLines ? (
                  <TypewriterLine
                    text={line}
                    onComplete={() => {
                      const nextLine = completedLines + 1;
                      setCompletedLines(nextLine);
                      if (nextLine >= INITIAL_BOOT_SEQUENCE.length) {
                        setIsInitialBoot(false);
                        hasAnimatedBoot = true;
                      }
                    }}
                  />
                ) : (
                  line
                )}
              </div>
            );
          })}
          <div ref={endRef} />
        </div>
        
        {/* Only show prompt if NOT currently booting */}
        {completedLines >= INITIAL_BOOT_SEQUENCE.length && (
          <form
            onSubmit={handleCommand}
            className="flex items-center gap-2 pt-2 border-t border-purple-500/30 animate-in fade-in duration-500">
          <span className="text-purple-500 font-bold whitespace-nowrap">
            root@ctos:~$
          </span>
          <div className="relative flex-1 flex items-center h-full">
            {/* Fake visual cursor layer */}
            <div className="absolute inset-y-0 left-0 pointer-events-none flex items-center font-mono text-purple-100 whitespace-pre overflow-hidden">
              {input.slice(0, cursorPos)}
              <span className="bg-purple-400 text-zinc-950 animate-pulse">
                {input[cursorPos] || " "}
              </span>
              {input.slice(cursorPos + 1)}
            </div>
            {/* Transparent actual input handling interactions */}
            <input
              type="text"
              value={input}
              onChange={(e) => {
                setInput(e.target.value);
                setCursorPos(e.target.selectionStart || 0);
              }}
              onSelect={(e) => {
                setCursorPos((e.target as HTMLInputElement).selectionStart || 0);
              }}
              onKeyDown={(e) => {
                setTimeout(() => setCursorPos((e.target as HTMLInputElement).selectionStart || 0), 0);
              }}
              className="w-full bg-transparent text-transparent caret-transparent border-none outline-none focus:ring-0 font-mono p-0 m-0 h-full"
              autoFocus
              spellCheck={false}
              autoComplete="off"
              suppressHydrationWarning
            />
          </div>
        </form>
        )}
      </div>
    </SystemCard>
  );
}
