"use client";
import React from "react";
import Card from "@/components/ui/Card";
import { BookOpen } from "lucide-react";

export default function CurrentLessonCard() {
  return (
    <Card title="Current Lesson" icon={<BookOpen className="w-5 h-5" />}>
      <div className="flex items-start justify-between gap-4">
        <div>
          <div className="text-sm text-zinc-400">Subject</div>
          <div className="text-lg font-semibold mt-1 text-zinc-100">Loading...</div>
        </div>
        <div className="rounded-2xl bg-white/5 px-3 py-2 text-xs text-zinc-300">Ends in: --</div>
      </div>

      <div className="mt-4 grid grid-cols-2 gap-4 text-sm text-zinc-400">
        <div className="rounded-2xl bg-white/5 p-3">
          <div className="text-xs uppercase tracking-[0.2em] text-zinc-500">Teacher</div>
          <div className="text-sm text-zinc-200 mt-2">—</div>
        </div>
        <div className="rounded-2xl bg-white/5 p-3">
          <div className="text-xs uppercase tracking-[0.2em] text-zinc-500">Room</div>
          <div className="text-sm text-zinc-200 mt-2">—</div>
        </div>
      </div>
    </Card>
  );
}
