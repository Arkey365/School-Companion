import React from "react";

type CardProps = {
  children: React.ReactNode;
  className?: string;
  title?: string;
  icon?: React.ReactNode;
};

export default function Card({ children, className = "", title, icon }: CardProps) {
  return (
    <div
      className={`rounded-3xl border border-white/10 bg-zinc-950/80 p-5 shadow-[0_18px_45px_rgba(0,0,0,0.35)] transition-all duration-300 ease-out hover:-translate-y-0.5 hover:border-white/15 hover:bg-zinc-900/95 ${className}`}
    >
      {(title || icon) && (
        <div className="mb-4 flex items-center justify-between gap-3">
          <div>
            {title ? <div className="text-sm font-semibold text-zinc-100">{title}</div> : null}
          </div>
          {icon ? (
            <div className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-zinc-900/70 text-zinc-100 shadow-inner shadow-black/20">
              {icon}
            </div>
          ) : null}
        </div>
      )}
      {children}
    </div>
  );
}
