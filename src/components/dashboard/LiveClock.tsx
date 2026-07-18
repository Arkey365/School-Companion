"use client";
import React, { useEffect, useState } from "react";

export default function LiveClock() {
  const [now, setNow] = useState(() => new Date());

  useEffect(() => {
    const id = setInterval(() => setNow(new Date()), 1000);
    return () => clearInterval(id);
  }, []);

  const hours = now.getHours().toString().padStart(2, "0");
  const minutes = now.getMinutes().toString().padStart(2, "0");
  const seconds = now.getSeconds().toString().padStart(2, "0");

  return (
    <div className="flex flex-col items-start">
      <div className="text-5xl font-extrabold leading-none tracking-tight">{hours}:{minutes}</div>
      <div className="text-sm text-zinc-400 mt-1">{seconds} sec</div>
    </div>
  );
}
