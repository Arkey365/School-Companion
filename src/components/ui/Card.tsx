import React from "react";

type CardProps = {
  children: React.ReactNode;
  className?: string;
};

export default function Card({ children, className = "" }: CardProps) {
  return (
    <div className={`rounded-2xl bg-zinc-900/60 p-4 shadow-sm ${className}`}>{children}</div>
  );
}
