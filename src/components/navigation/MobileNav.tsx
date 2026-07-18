"use client";
import React from "react";
import NavItem from "./NavItem";

function IconHome() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="w-full h-full">
      <path d="M3 11.5L12 4l9 7.5" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" strokeLinecap="round" />
      <path d="M5 21V12h14v9" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" strokeLinecap="round" />
    </svg>
  );
}

function IconSchedule() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="w-full h-full">
      <rect x="3" y="5" width="18" height="16" rx="2" stroke="currentColor" strokeWidth="1.6" />
      <path d="M16 3v4M8 3v4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  );
}

function IconMashov() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="w-full h-full">
      <path d="M4 7h16M4 12h16M4 17h10" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  );
}

function IconDocs() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="w-full h-full">
      <path d="M7 7h6v6H7z" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M21 15V6a2 2 0 0 0-2-2H9l-2 2v9a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2z" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function IconSettings() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="w-full h-full">
      <path d="M12 15.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7z" stroke="currentColor" strokeWidth="1.6" />
    </svg>
  );
}

export default function MobileNav() {
  return (
    <div className="fixed bottom-4 left-1/2 -translate-x-1/2 w-[calc(100%-2rem)] max-w-3xl bg-[#070707] border border-zinc-900/60 rounded-2xl shadow-lg p-2">
      <div className="flex justify-between">
        <NavItem href="/" label="Home" icon={<IconHome />} />
        <NavItem href="/schedule" label="Schedule" icon={<IconSchedule />} />
        <NavItem href="/mashov" label="Mashov" icon={<IconMashov />} />
        <NavItem href="/google-docs" label="Docs" icon={<IconDocs />} />
        <NavItem href="/settings" label="Settings" icon={<IconSettings />} />
      </div>
    </div>
  );
}
