"use client";
import React from "react";
import NavItem from "./NavItem";
import { Home, Calendar, BookOpen, FileText, Settings } from "lucide-react";

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
        <NavItem href="/" label="Home" icon={<Home className="w-full h-full" />} />
        <NavItem href="/schedule" label="Schedule" icon={<Calendar className="w-full h-full" />} />
        <NavItem href="/mashov" label="Mashov" icon={<BookOpen className="w-full h-full" />} />
        <NavItem href="/google-docs" label="Google Docs" icon={<FileText className="w-full h-full" />} />
        <div className="mt-3 border-t border-zinc-900/40 pt-3">
          <NavItem href="/settings" label="Settings" icon={<Settings className="w-full h-full" />} />
        </div>
      </nav>
    </div>
  );
}
