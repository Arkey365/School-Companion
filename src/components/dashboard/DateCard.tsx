"use client";
import React, { useEffect, useState } from "react";
import Card from "@/components/ui/Card";
import { CalendarDays } from "lucide-react";

const WEEKDAYS = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const MONTHS = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

export default function DateCard() {
  const [today, setToday] = useState(() => new Date());

  useEffect(() => {
    const id = setInterval(() => {
      setToday(new Date());
    }, 60_000);
    return () => clearInterval(id);
  }, []);

  const weekday = WEEKDAYS[today.getDay()];
  const month = MONTHS[today.getMonth()];
  const day = today.getDate();
  const year = today.getFullYear();

  return (
    <Card title="Date" icon={<CalendarDays className="w-5 h-5" />}>
      <div className="text-sm text-zinc-400">{weekday}</div>
      <div className="mt-2 text-2xl font-semibold tracking-tight text-zinc-100">{month} {day}</div>
      <div className="text-xs text-zinc-500 mt-2">{year}</div>
    </Card>
  );
}
