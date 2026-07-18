import React from "react";

type LoadingProps = {
  label?: string;
  size?: "sm" | "md" | "lg";
};

const sizeClasses = {
  sm: "h-6 w-6 border-2",
  md: "h-8 w-8 border-2.5",
  lg: "h-10 w-10 border-3",
};

export default function Loading({ label = "Loading...", size = "md" }: LoadingProps) {
  return (
    <div className="inline-flex flex-col items-center gap-3 rounded-3xl border border-white/10 bg-zinc-950/90 px-4 py-5 text-center text-sm text-zinc-300 shadow-lg shadow-black/50 backdrop-blur-sm">
      <div
        className={`inline-flex items-center justify-center rounded-full border-t-transparent border-r-transparent border-b-transparent border-l-white/80 ${sizeClasses[size]} animate-spin border-zinc-700`}
        aria-hidden="true"
      />
      <span className="font-medium text-zinc-100">{label}</span>
    </div>
  );
}
