"use client";

import { useRef } from "react";

interface CodeEditorProps {
  code: string;
  locked: boolean;
  onChange: (val: string) => void;
}

export default function CodeEditor({
  code,
  locked,
  onChange,
}: CodeEditorProps) {
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  const lineNumbersRef = useRef<HTMLDivElement>(null);
  const lines = code.split("\n");

  const handleScroll = () => {
    if (textareaRef.current && lineNumbersRef.current) {
      lineNumbersRef.current.scrollTop = textareaRef.current.scrollTop;
    }
  };

  return (
    <div className="h-full w-full flex overflow-hidden relative font-mono text-[13px] leading-6 translate-z-0">
      {/* Line Numbers */}
      <div 
        ref={lineNumbersRef}
        className="w-12 shrink-0 bg-zinc-900/50 border-r border-purple-500/20 text-zinc-600 text-right pr-3 select-none overflow-hidden pt-3 pb-20"
      >
        {lines.map((_, i) => (
          <div key={i} className="h-6">{i + 1}</div>
        ))}
      </div>

      {/* Editor area */}
      <div className="flex-1 relative">
        {locked && (
          <div className="absolute inset-0 z-10 bg-zinc-900/30 flex items-start justify-end p-2 pointer-events-none">
            <span className="text-[9px] bg-zinc-800/80 text-zinc-500 px-2 py-0.5 rounded-sm uppercase tracking-widest border border-zinc-700/50 backdrop-blur-sm">
              [ ACCESS_READ_ONLY ]
            </span>
          </div>
        )}
        <textarea
          ref={textareaRef}
          value={code}
          onChange={(e) => !locked && onChange(e.target.value)}
          onScroll={handleScroll}
          readOnly={locked}
          spellCheck={false}
          className={`w-full h-full bg-transparent p-3 resize-none outline-none border-none focus:ring-0 custom-scrollbar ${
            locked
              ? "text-zinc-500 cursor-not-allowed opacity-80"
              : "text-purple-200 caret-purple-400"
          }`}
          style={{ 
            tabSize: 2,
            whiteSpace: "pre",
            overflowWrap: "normal"
          }}
        />
      </div>
    </div>
  );
}
