"use client";

import { useEffect, useState } from "react";

/** Light by default whatever the OS says; this button is the only way into the night theme. */
export default function ThemeToggle() {
  const [dark, setDark] = useState(false);

  useEffect(() => {
    setDark(document.documentElement.getAttribute("data-theme") === "dark");
  }, []);

  function toggle() {
    const next = dark ? "light" : "dark";
    document.documentElement.setAttribute("data-theme", next);
    try { localStorage.setItem("theme", next); } catch {}
    setDark(!dark);
  }

  return (
    <button className="theme-toggle" type="button" onClick={toggle}
      aria-pressed={dark} aria-label={dark ? "Switch to light theme" : "Switch to dark theme"}>
      <svg className="sun" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round"><circle cx="12" cy="12" r="4.2"/><path d="M12 2v2.5M12 19.5V22M2 12h2.5M19.5 12H22M4.9 4.9l1.8 1.8M17.3 17.3l1.8 1.8M4.9 19.1l1.8-1.8M17.3 6.7l1.8-1.8"/></svg>
      <svg className="moon" viewBox="0 0 24 24" fill="currentColor" stroke="#17141C" strokeWidth="1.6" strokeLinejoin="round"><path d="M13 2 5 13.5h5.5L9 22l9-12.5h-5.7z"/></svg>
    </button>
  );
}
