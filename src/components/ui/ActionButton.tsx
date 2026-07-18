"use client";
import Link from "next/link";
import React from "react";

type ActionButtonProps = {
  href: string;
  label: string;
  icon: React.ReactNode;
  variant?: "primary" | "secondary";
  className?: string;
};

const buttonStyles = {
  primary:
    "border-transparent bg-gradient-to-r from-indigo-600 to-pink-500 text-white hover:from-indigo-500 hover:to-pink-400",
  secondary:
    "border-white/10 bg-zinc-900 text-zinc-100 hover:bg-zinc-800",
};

export default function ActionButton({
  href,
  label,
  icon,
  variant = "secondary",
  className = "",
}: ActionButtonProps) {
  return (
    <Link
      href={href}
      className={`inline-flex w-full min-h-[3.5rem] items-center justify-center gap-3 rounded-3xl border px-5 py-4 text-sm font-semibold transition duration-200 ease-out focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-400 active:scale-[0.98] active:opacity-95 ${buttonStyles[variant]} ${className}`}
      aria-label={label}
    >
      {icon}
      <span>{label}</span>
    </Link>
  );
}
