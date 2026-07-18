"use client";
import React, { useEffect, useState } from "react";

export default function Greeting() {
  const [hour, setHour] = useState<number>(() => new Date().getHours());

  useEffect(() => {
    // Update at least once every minute
    const id = setInterval(() => {
      setHour(new Date().getHours());
    }, 60_000);

    // Ensure immediate accuracy when component mounts
    setHour(new Date().getHours());

    return () => clearInterval(id);
  }, []);

  let text = "Good Evening";
  if (hour >= 5 && hour < 12) text = "Good Morning";
  else if (hour >= 12 && hour < 18) text = "Good Afternoon";

  return <div className="text-lg font-medium">{text}</div>;
}
