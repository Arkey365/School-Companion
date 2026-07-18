"use client";
import React from "react";

export default function NextLessonCard() {
  return (
    <div className="rounded-2xl bg-zinc-900/60 p-4">
      <div className="text-sm text-zinc-400">Next</div>
      <div className="mt-1 text-lg font-semibold">Loading...</div>
      <div className="text-xs text-zinc-500 mt-2">Starts in: --</div>
    </div>
  );
}
