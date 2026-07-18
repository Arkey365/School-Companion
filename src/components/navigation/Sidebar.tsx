"use client";
import React from "react";
import NavItem from "./NavItem";
import Link from "next/link";

function IconHome() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="w-full h-full">
      <path d="M3 11.5L12 4l9 7.5" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" strokeLinecap="round" />
      <path d="M5 21V12h14v9" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" strokeLinecap="round" />
    </svg>
  );
}

function IconSchedule() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="w-full h-full">
      <rect x="3" y="5" width="18" height="16" rx="2" stroke="currentColor" strokeWidth="1.5" />
      <path d="M16 3v4M8 3v4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

function IconMashov() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="w-full h-full">
      <path d="M4 7h16M4 12h16M4 17h10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

function IconDocs() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="w-full h-full">
      <path d="M7 7h6v6H7z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M21 15V6a2 2 0 0 0-2-2H9l-2 2v9a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function IconSettings() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="w-full h-full">
      <path d="M12 15.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7z" stroke="currentColor" strokeWidth="1.5" />
      <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09a1.65 1.65 0 0 0-1-1.51 1.65 1.65 0 0 0-1.82.33l-.06.06A2 2 0 0 1 2.28 16.9l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09c.7 0 1.27-.42 1.51-1a1.65 1.65 0 0 0-.33-1.82L4.3 4.28A2 2 0 0 1 7.12 1.45l.06.06a1.65 1.65 0 0 0 1.82.33h.01c.48-.28 1.04-.28 1.52 0 .27.16.58.25.9.25s.63-.09.9-.25c.48-.28 1.04-.28 1.52 0 .27.16.58.25.9.25s.63-.09.9-.25c.48-.28 1.04-.28 1.52 0 .27.16.58.25.9.25H21a2 2 0 0 1 0 4h-.09c-.7 0-1.27.42-1.51 1-.16.4-.16.85 0 1.25.24.58.81 1 1.51 1H21a2 2 0 0 1 0 4h-.09c-.7 0-1.27.42-1.51 1-.16.4-.16.85 0 1.25z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export default function Sidebar() {
  return (
    <div className="w-64 h-screen bg-[#080808] border-r border-zinc-900/50 px-4 py-6 flex flex-col gap-6">
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 bg-gradient-to-br from-indigo-500 to-pink-500 rounded-xl flex items-center justify-center">SC</div>
        <div>
          <h1 className="text-lg font-semibold">School Companion</h1>
          <p className="text-xs text-zinc-400">Student dashboard</p>
        </div>
      </div>

      <nav className="flex-1 flex flex-col gap-1">
        <NavItem href="/" label="Home" icon={<IconHome />} />
        <NavItem href="/schedule" label="Schedule" icon={<IconSchedule />} />
        <NavItem href="/mashov" label="Mashov" icon={<IconMashov />} />
        <NavItem href="/google-docs" label="Google Docs" icon={<IconDocs />} />
        <div className="mt-3 border-t border-zinc-900/40 pt-3">
          <NavItem href="/settings" label="Settings" icon={<IconSettings />} />
        </div>
      </nav>
    </div>
  );
}
