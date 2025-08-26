"use client";

import { useState, useEffect } from "react";

export function ClientDate() {
  const [date, setDate] = useState("");

  useEffect(() => {
    setDate(
      new Date().toLocaleDateString("fa-IR", {
        year: "numeric",
        month: "long",
        day: "numeric",
      })
    );
  }, []);

  if (!date) {
    // Render a placeholder or nothing while waiting for client-side rendering
    return <span className="inline-block w-32 h-5 bg-muted rounded-md animate-pulse"></span>;
  }

  return <>{date}</>;
}
