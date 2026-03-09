import { useState, useEffect } from "react";
import { Moon, Sun } from "lucide-react";

const ThemeToggle = () => {
  const [isDark, setIsDark] = useState(true);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", isDark);
  }, [isDark]);

  // Set dark mode on mount
  useEffect(() => {
    document.documentElement.classList.add("dark");
  }, []);

  return (
    <button
      onClick={() => setIsDark(!isDark)}
      className="p-2 rounded-md border border-border hover:border-primary/50 transition-colors bg-card"
      aria-label="Toggle theme"
    >
      {isDark ? <Sun className="w-4 h-4 text-primary" /> : <Moon className="w-4 h-4 text-primary" />}
    </button>
  );
};

export default ThemeToggle;
