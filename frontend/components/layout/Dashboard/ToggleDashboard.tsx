"use client";

import React from "react";

interface DashboardProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
  children: React.ReactNode;
}

export default function ToggleDashboard({
  activeTab,
  setActiveTab,
  children,
}: DashboardProps) {
  return (
    <div className="h-screen w-full flex text-purple-100 font-mono relative z-10">
      {/* 1. THE SIDEBAR NAVIGATION */}
      <aside className="w-64 h-full border-r-2 border-purple-500/50 bg-zinc-950/90 backdrop-blur-md hidden md:flex flex-col drop-shadow-[5px_0_15px_rgba(168,85,247,0.15)] shrink-0">
        {/* Sidebar Header */}
        <div className="p-6 border-b-2 border-purple-500/30">
          <h1 className="text-2xl font-bold text-purple-400 tracking-widest drop-shadow-[0_0_8px_rgba(168,85,247,0.8)]">
            DEV_CP
          </h1>
          <p className="text-xs text-purple-500 mt-1 uppercase tracking-widest">
            v2.0 // Online
          </p>
        </div>

        {/* Navigation Links */}
        <nav className="flex-1 p-4 space-y-2 mt-4">
          <NavButton
            label="SYS_OVERVIEW"
            id="home"
            activeTab={activeTab}
            setTab={setActiveTab}
          />
          <NavButton
            label="ARCHIVE_NODES"
            id="archive"
            activeTab={activeTab}
            setTab={setActiveTab}
          />
          <NavButton
            label="SANDBOX_ENV"
            id="labs"
            activeTab={activeTab}
            setTab={setActiveTab}
          />
          <NavButton
            label="COMM_UPLINK"
            id="uplink"
            activeTab={activeTab}
            setTab={setActiveTab}
          />
        </nav>

        {/* Bottom Status Indicator */}
        <div className="p-4 border-t border-purple-500/30 text-xs flex items-center gap-3">
          <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse shadow-[0_0_5px_#22c55e]"></span>
          <span className="text-zinc-400 uppercase font-bold tracking-widest">
            Sys. Integrity: 100%
          </span>
        </div>
      </aside>

      {/* 2. THE MAIN CONTENT AREA */}
      <main className="flex-1 h-full overflow-y-auto p-6 md:p-12 relative">
        {/* This is where your page.tsx content will render */}
        {children}
      </main>
    </div>
  );
}

// Reusable Navigation Button
function NavButton({
  label,
  id,
  activeTab,
  setTab,
}: {
  label: string;
  id: string;
  activeTab: string;
  setTab: (id: string) => void;
}) {
  const isActive = activeTab === id;
  return (
    <button
      onClick={() => setTab(id)}
      className={`w-full text-left px-4 py-3 rounded-sm text-sm uppercase tracking-widest transition-all duration-200 border-l-2 ${
        isActive
          ? "bg-purple-900/40 text-purple-300 border-purple-400 drop-shadow-[0_0_8px_rgba(168,85,247,0.4)]"
          : "border-transparent text-zinc-500 hover:text-purple-400 hover:bg-purple-900/20 hover:border-purple-500/50"
      }`}>
      {isActive ? `> ${label}` : `  ${label}`}
    </button>
  );
}
