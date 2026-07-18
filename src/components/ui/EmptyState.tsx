"use client";
import React from "react";
import Card from "@/components/ui/Card";

type EmptyStateProps = {
  title: string;
  description: string;
  icon: React.ReactNode;
  action?: React.ReactNode;
};

export default function EmptyState({ title, description, icon, action }: EmptyStateProps) {
  return (
    <Card className="max-w-2xl mx-auto bg-zinc-950/90"> 
      <div className="flex flex-col items-center justify-center gap-5 text-center py-8 px-4">
        <div className="inline-flex h-16 w-16 items-center justify-center rounded-3xl bg-white/5 text-zinc-100 shadow-inner shadow-black/30">
          {icon}
        </div>
        <div className="space-y-3">
          <h2 className="text-xl font-semibold text-zinc-100">{title}</h2>
          <p className="max-w-lg text-sm leading-6 text-zinc-400">{description}</p>
        </div>
        {action ? <div className="w-full sm:w-auto">{action}</div> : null}
      </div>
    </Card>
  );
}
