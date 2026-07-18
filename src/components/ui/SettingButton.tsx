"use client";
import React from "react";

type SettingButtonProps = {
  label: string;
  hint?: string;
  disabled?: boolean;
};

export default function SettingButton({ label, hint, disabled = false }: SettingButtonProps) {
  return (
    <button
      type="button"
      disabled={disabled}
      className={`inline-flex items-center gap-2 rounded-2xl border px-4 py-2 text-sm font-semibold transition duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-400 ${
        disabled
          ? "border-white/10 bg-white/5 text-zinc-400 cursor-not-allowed"
          : "border-transparent bg-indigo-600 text-white hover:bg-indigo-500 active:scale-[0.98]"
      }`}
    >
      <span>{label}</span>
      {hint ? <span className="rounded-full bg-white/5 px-2 py-0.5 text-xs text-zinc-300">{hint}</span> : null}
    </button>
  );
}
