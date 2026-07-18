"use client";
import React from "react";

export default function CurrentLessonCard() {
  return (
    <div className="rounded-2xl bg-zinc-900/60 p-4">
      <div className="flex items-center justify-between">
        <div>
          <div className="text-sm text-zinc-400">Subject</div>
          <div className="text-lg font-semibold mt-1">Loading...</div>
        </div>
        <div className="text-xs text-zinc-500">Ends in: --</div>
      </div>

      <div className="mt-3 grid grid-cols-2 gap-3 text-sm text-zinc-400">
        <div>
          <div className="text-xs">Teacher</div>
          <div className="text-sm text-zinc-300">—</div>
        </div>
        <div>
          <div className="text-xs">Room</div>
          <div className="text-sm text-zinc-300">—</div>
        </div>
      </div>
    </div>
  );
}
