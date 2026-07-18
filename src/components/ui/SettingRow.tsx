"use client";
import React from "react";

type SettingRowProps = {
  label: string;
  description?: string;
  value?: React.ReactNode;
  action?: React.ReactNode;
  disabled?: boolean;
};

export default function SettingRow({ label, description, value, action, disabled }: SettingRowProps) {
  return (
    <div className={`rounded-3xl border border-white/10 bg-zinc-950/80 p-4 transition duration-200 ${disabled ? "opacity-80" : "hover:border-white/15 hover:bg-zinc-900/90"}`}>
      <div className="flex flex-col gap-4 sm:gap-6 sm:flex-row sm:items-center sm:justify-between">
        <div className="min-w-0">
          <div className="text-sm font-semibold text-zinc-100">{label}</div>
          {description ? <p className="mt-1 text-sm text-zinc-500">{description}</p> : null}
        </div>
        <div className="flex flex-col gap-3 items-start sm:items-end">
          {value ? <div className="text-sm text-zinc-200">{value}</div> : null}
          {action ? <div>{action}</div> : null}
        </div>
      </div>
    </div>
  );
}
