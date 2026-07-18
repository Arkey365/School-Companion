"use client";
import React from "react";
import Card from "@/components/ui/Card";
import { Clock4 } from "lucide-react";

export default function NextLessonCard() {
  return (
    <Card title="Next Lesson" icon={<Clock4 className="w-5 h-5" />}>
      <div className="text-sm text-zinc-400">Next</div>
      <div className="mt-1 text-lg font-semibold text-zinc-100">Loading...</div>
      <div className="text-xs text-zinc-500 mt-3 rounded-2xl bg-white/5 px-3 py-2 inline-flex">Starts in: --</div>
    </Card>
  );
}
