"use client";
import React, { useEffect, useState } from "react";

const WEEKDAYS = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
const MONTHS = ["January","February","March","April","May","June","July","August","September","October","November","December"];

export default function DateCard() {
  const [today, setToday] = useState(() => new Date());

  useEffect(() => {
    const id = setInterval(() => {
      // update daily at midnight would be ideal, but minute interval is fine for UI
      setToday(new Date());
    }, 60_000);
    return () => clearInterval(id);
  }, []);

  const weekday = WEEKDAYS[today.getDay()];
  const month = MONTHS[today.getMonth()];
  const day = today.getDate();
  const year = today.getFullYear();

  return (
    <div className="rounded-2xl bg-zinc-900/60 p-4">
      <div className="text-sm text-zinc-400">{weekday}</div>
      <div className="mt-1 text-2xl font-semibold">{month} {day}</div>
      <div className="text-xs text-zinc-500 mt-1">{year}</div>
    </div>
  );
}
