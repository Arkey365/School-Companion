"use client";
import Link from "next/link";
import LiveClock from "@/components/dashboard/LiveClock";
import DateCard from "@/components/dashboard/DateCard";
import Greeting from "@/components/dashboard/Greeting";
import CurrentLessonCard from "@/components/dashboard/CurrentLessonCard";
import NextLessonCard from "@/components/dashboard/NextLessonCard";

export default function Home() {
  return (
    <div className="min-h-[70vh] flex flex-col gap-6">
      <header className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-semibold">Welcome back</h2>
          <p className="text-sm text-zinc-400">Here's your quick overview</p>
        </div>
        <div className="hidden sm:flex gap-3">
          <Link href="/schedule" className="rounded-full bg-zinc-800 px-4 py-2 text-sm font-medium hover:bg-zinc-700">Schedule</Link>
          <Link href="/mashov" className="rounded-full bg-zinc-800 px-4 py-2 text-sm font-medium hover:bg-zinc-700">Mashov</Link>
          <Link href="/google-docs" className="rounded-full bg-zinc-800 px-4 py-2 text-sm font-medium hover:bg-zinc-700">Google Docs</Link>
        </div>
      </header>

      <section className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="col-span-1 md:col-span-1 flex flex-col gap-4">
          <div className="rounded-2xl bg-zinc-900/60 p-4">
            <Greeting />
            <div className="mt-4">
              <LiveClock />
            </div>
          </div>
          <DateCard />
        </div>

        <div className="col-span-2 grid grid-cols-1 gap-4">
          <CurrentLessonCard />
          <NextLessonCard />
        </div>
      </section>

      <section className="mt-4">
        <div className="flex flex-col sm:flex-row gap-3">
          <Link href="/schedule" className="flex-1 rounded-2xl bg-gradient-to-r from-indigo-600 to-pink-500 px-4 py-3 text-center font-semibold">Open Schedule</Link>
          <Link href="/mashov" className="flex-1 rounded-2xl bg-zinc-800 px-4 py-3 text-center font-semibold">Open Mashov</Link>
          <Link href="/google-docs" className="flex-1 rounded-2xl bg-zinc-800 px-4 py-3 text-center font-semibold">Open Docs</Link>
        </div>
      </section>
    </div>
  );
}
