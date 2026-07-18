"use client";
import Link from "next/link";
import LiveClock from "@/components/dashboard/LiveClock";
import DateCard from "@/components/dashboard/DateCard";
import Greeting from "@/components/dashboard/Greeting";
import CurrentLessonCard from "@/components/dashboard/CurrentLessonCard";
import NextLessonCard from "@/components/dashboard/NextLessonCard";
import Card from "@/components/ui/Card";
import ActionButton from "@/components/ui/ActionButton";
import { Calendar, BookOpen, FileText, Clock4 } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-[70vh] flex flex-col gap-6">
      <header className="flex flex-col gap-4 rounded-3xl border border-white/10 bg-zinc-950/80 p-5 shadow-sm sm:flex-row sm:items-end sm:justify-between sm:gap-6">
        <div>
          <h2 className="text-3xl font-semibold">Welcome back</h2>
          <p className="mt-2 text-sm text-zinc-400">Here's your quick overview</p>
        </div>
        <div className="grid w-full grid-cols-1 gap-3 sm:w-auto sm:grid-flow-col sm:auto-cols-min">
          <Link href="/schedule" className="inline-flex items-center justify-center rounded-full bg-zinc-800 px-4 py-3 text-sm font-medium hover:bg-zinc-700 gap-2">
            <Calendar className="w-4 h-4" />Schedule
          </Link>
          <Link href="/mashov" className="inline-flex items-center justify-center rounded-full bg-zinc-800 px-4 py-3 text-sm font-medium hover:bg-zinc-700 gap-2">
            <BookOpen className="w-4 h-4" />Mashov
          </Link>
          <Link href="/google-docs" className="inline-flex items-center justify-center rounded-full bg-zinc-800 px-4 py-3 text-sm font-medium hover:bg-zinc-700 gap-2">
            <FileText className="w-4 h-4" />Google Docs
          </Link>
        </div>
      </header>

      <section className="grid grid-cols-1 md:grid-cols-3 gap-5">
        <div className="col-span-1 md:col-span-1 flex flex-col gap-4">
          <Card title="Current Time" icon={<Clock4 className="w-5 h-5" />}>
            <Greeting />
            <div className="mt-4">
              <LiveClock />
            </div>
          </Card>
          <DateCard />
        </div>

        <div className="col-span-2 grid grid-cols-1 gap-4">
          <CurrentLessonCard />
          <NextLessonCard />
        </div>
      </section>

      <section className="mt-4">
        <div className="grid gap-3 sm:grid-cols-3">
          <ActionButton
            href="/schedule"
            label="Open Schedule"
            icon={<Calendar className="w-5 h-5" />}
            variant="primary"
          />
          <ActionButton
            href="/mashov"
            label="Open Mashov"
            icon={<BookOpen className="w-5 h-5" />}
          />
          <ActionButton
            href="/google-docs"
            label="Open Docs"
            icon={<FileText className="w-5 h-5" />}
          />
        </div>
      </section>
    </div>
  );
}
