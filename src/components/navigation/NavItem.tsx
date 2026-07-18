"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

type NavItemProps = {
  href: string;
  label: string;
  icon: React.ReactNode;
};

export default function NavItem({ href, label, icon }: NavItemProps) {
  const pathname = usePathname() || "/";
  const active = pathname === href;

  return (
    <Link
      href={href}
      className={`flex items-center gap-3 px-3 py-2 rounded-lg transition-colors duration-150 ${
        active
          ? "bg-zinc-800 text-white shadow-md"
          : "text-zinc-300 hover:bg-zinc-900/60"
      }`}
      aria-current={active ? "page" : undefined}
    >
      <div className="w-6 h-6 flex-shrink-0">{icon}</div>
      <span className="text-sm font-medium">{label}</span>
    </Link>
  );
}
