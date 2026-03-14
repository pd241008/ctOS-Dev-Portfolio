"use client";

export default function GithubIntel() {
  // Load GitHub username from env variables (statically replaced by Next.js)
  const username = process.env.NEXT_PUBLIC_GITHUB_USERNAME || "pd241008";

  return (
    <div className="p-3 h-full flex flex-col gap-3 overflow-y-auto scrollbar-thin scrollbar-thumb-purple-900/50 scrollbar-track-transparent">
      
      {/* Top Row: 50/50 Split Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-3 shrink-0">
        
        {/* GitHub Stats Card */}
        <div className="group relative overflow-hidden rounded-xl border border-purple-500/20 bg-linear-to-br from-zinc-900/80 to-zinc-950/80 p-2 transition-all duration-300 hover:border-purple-500/50 hover:bg-purple-900/10 hover:shadow-[0_0_15px_rgba(168,85,247,0.15)] flex justify-center items-center backdrop-blur-sm shadow-[inset_0_0_20px_rgba(0,0,0,0.5)]">
          <div className="absolute inset-0 bg-linear-to-br from-purple-500/10 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100 pointer-events-none" />
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={`https://github-readme-stats.vercel.app/api?username=${username}&show_icons=true&title_color=a855f7&text_color=d4d4d8&icon_color=a855f7&bg_color=00000000&hide_border=true&count_private=true&disable_animations=false`}
            alt={`${username}'s GitHub Stats`}
            className="w-full object-contain relative z-10 transition-transform duration-300 group-hover:scale-[1.03] group-hover:-translate-y-1"
          />
        </div>

        {/* Top Languages */}
        <div className="group relative overflow-hidden rounded-xl border border-purple-500/20 bg-linear-to-br from-zinc-900/80 to-zinc-950/80 p-2 transition-all duration-300 hover:border-purple-500/50 hover:bg-purple-900/10 hover:shadow-[0_0_15px_rgba(168,85,247,0.15)] flex justify-center items-center backdrop-blur-sm shadow-[inset_0_0_20px_rgba(0,0,0,0.5)]">
          <div className="absolute inset-0 bg-linear-to-br from-purple-500/10 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100 pointer-events-none" />
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={`https://github-readme-stats.vercel.app/api/top-langs/?username=${username}&layout=compact&title_color=a855f7&text_color=d4d4d8&bg_color=00000000&hide_border=true`}
            alt={`${username}'s Top Languages`}
            className="w-full object-contain relative z-10 transition-transform duration-300 group-hover:scale-[1.03] group-hover:-translate-y-1"
          />
        </div>
        
      </div>

      {/* Middle Row: Full Width Activity Graph */}
      <div className="group relative overflow-hidden rounded-xl border border-purple-500/20 bg-linear-to-br from-zinc-900/80 to-zinc-950/80 p-2 pb-0 transition-all duration-300 hover:border-purple-500/50 hover:bg-purple-900/10 hover:shadow-[0_0_15px_rgba(168,85,247,0.15)] flex justify-center items-center backdrop-blur-sm shrink-0 shadow-[inset_0_0_20px_rgba(0,0,0,0.5)]">
        <div className="absolute inset-0 bg-linear-to-t from-purple-500/10 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100 pointer-events-none" />
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={`https://github-readme-activity-graph.vercel.app/graph?username=${username}&bg_color=00000000&color=a855f7&line=a855f7&point=d4d4d8&area=true&hide_border=true`}
          alt={`${username}'s Activity Graph`}
          className="w-full min-h-35 max-h-45 object-contain relative z-10 transition-transform duration-300 group-hover:scale-[1.01] group-hover:-translate-y-1"
        />
      </div>

      {/* Bottom Row: Full Width Streak Stats */}
      <div className="group relative overflow-hidden rounded-xl border border-purple-500/20 bg-linear-to-br from-zinc-900/80 to-zinc-950/80 p-3 transition-all duration-300 hover:border-purple-500/50 hover:bg-purple-900/10 hover:shadow-[0_0_15px_rgba(168,85,247,0.15)] flex justify-center items-center backdrop-blur-sm shrink-0 mb-4 shadow-[inset_0_0_20px_rgba(0,0,0,0.5)]">
        <div className="absolute inset-0 bg-linear-to-t from-purple-500/10 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100 pointer-events-none" />
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={`https://github-readme-streak-stats.herokuapp.com/?user=${username}&theme=radical&hide_border=true&background=00000000&ring=a855f7&fire=a855f7&currStreakNum=d4d4d8&currStreakLabel=a855f7&sideNums=d4d4d8&sideLabels=a855f7&dates=d4d4d8`}
          alt={`${username}'s GitHub Streak`}
          className="w-full max-h-35 object-contain relative z-10 transition-transform duration-300 group-hover:scale-[1.01] group-hover:-translate-y-1"
        />
      </div>

    </div>
  );
}
