"use client";
import React from "react";
import NavItem from "./NavItem";
import { Home, Calendar, BookOpen, FileText, Settings } from "lucide-react";

export default function MobileNav() {
  return (
    <div className="fixed bottom-4 left-1/2 -translate-x-1/2 w-[calc(100%-2rem)] max-w-3xl bg-[#070707] border border-zinc-900/60 rounded-2xl shadow-lg p-2">
      <div className="flex justify-between">
        <NavItem href="/" label="Home" icon={<Home className="w-full h-full" />} />
        <NavItem href="/schedule" label="Schedule" icon={<Calendar className="w-full h-full" />} />
        <NavItem href="/mashov" label="Mashov" icon={<BookOpen className="w-full h-full" />} />
        <NavItem href="/google-docs" label="Docs" icon={<FileText className="w-full h-full" />} />
        <NavItem href="/settings" label="Settings" icon={<Settings className="w-full h-full" />} />
      </div>
    </div>
  );
}
