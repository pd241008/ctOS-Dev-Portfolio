"use client";

interface ProjectLinkControllerProps {
  githubUrl?: string;
  liveUrl?: string;
  docUrl?: string;
}

export default function ProjectLinkController({
  githubUrl,
  liveUrl,
  docUrl,
}: ProjectLinkControllerProps) {
  const hasRepo = githubUrl && githubUrl !== "#";
  const hasLive = liveUrl && liveUrl !== "#";

  return (
    <div className="space-y-4">
      <div className="text-[10px] text-zinc-600 font-black uppercase tracking-widest border-b border-zinc-800 pb-2">
        Infrastructure_Links
      </div>

      {/* GitHub Repo Link */}
      {hasRepo ? (
        <a
          href={githubUrl}
          target="_blank"
          rel="noreferrer"
          className="block w-full text-center py-2 bg-purple-600 hover:bg-purple-500 text-white font-black uppercase text-[10px] tracking-widest transition-all shadow-[0_4px_0_0_rgba(126,34,206,1)] active:shadow-none active:translate-y-1">
          Initialize Repo
        </a>
      ) : (
        <div className="group relative">
          <div className="absolute -inset-0.5 bg-amber-500/20 rounded-sm blur opacity-50"></div>
          <div className="relative block w-full text-center py-2 border border-amber-600/50 bg-amber-950/10 text-amber-500 font-black uppercase text-[9px] tracking-widest cursor-wait">
            <span className="animate-pulse mr-2">⚠</span> 
            REPO_PRIVATE // COOKING_IN_PRIVATE_NODE
          </div>
        </div>
      )}

      {/* Live Interface Link */}
      {hasLive ? (
        <a
          href={liveUrl}
          target="_blank"
          rel="noreferrer"
          className="block w-full text-center py-2 border border-purple-500 text-purple-400 hover:bg-purple-900/20 font-black uppercase text-[10px] tracking-widest transition-all">
          Live Interface
        </a>
      ) : (
        <div className="group relative">
          <div className="absolute -inset-0.5 bg-cyan-500/10 rounded-sm blur opacity-30"></div>
          <div className="relative block w-full text-center py-2 border border-cyan-800/50 bg-cyan-950/10 text-cyan-600 font-black uppercase text-[9px] tracking-widest cursor-help">
            <span className="animate-pulse mr-2">⚙</span>
            UPLINK_OFFLINE // PROJECT_IS_BUILDING
          </div>
        </div>
      )}

      {/* Documentation Link */}
      {docUrl && (
        <a
          href={docUrl}
          target="_blank"
          rel="noreferrer"
          className="block w-full text-center py-2 border border-amber-500 text-amber-500 hover:bg-amber-950/20 font-black uppercase text-[10px] tracking-widest transition-all">
          [ SYSTEM_DOCS ]
        </a>
      )}
    </div>
  );
}
