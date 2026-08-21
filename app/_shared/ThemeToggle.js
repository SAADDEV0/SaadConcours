"use client";

import { useEffect, useState } from "react";

// Standalone theme toggle for pages that don't render the full chrome
// header (admin, admin/login) but should still support light/dark and
// remember the choice the same way the public pages do (localStorage
// "theme", data-theme attribute on <html>).
export default function ThemeToggle() {
  const [theme, setTheme] = useState(null);

  useEffect(() => {
    const saved = localStorage.getItem("theme");
    const prefersLight = window.matchMedia("(prefers-color-scheme: light)").matches;
    const initial = saved || (prefersLight ? "light" : "dark");
    document.documentElement.setAttribute("data-theme", initial);
    setTheme(initial);
  }, []);

  function toggle() {
    const next = theme === "light" ? "dark" : "light";
    document.documentElement.setAttribute("data-theme", next);
    localStorage.setItem("theme", next);
    setTheme(next);
  }

  if (!theme) return <button className="theme-toggle" aria-hidden="true" />;

  return (
    <button className="theme-toggle" onClick={toggle} title="Changer de thème" aria-label="Changer de thème" type="button">
      {theme === "light" ? "☀️" : "🌙"}
    </button>
  );
}
