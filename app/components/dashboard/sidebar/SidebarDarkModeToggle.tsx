import React from "react";
import { MoonIcon } from "../Icons";

interface SidebarDarkModeToggleProps {
  collapsed: boolean;
  darkMode?: boolean;
  onToggleDarkMode?: () => void;
}

export function SidebarDarkModeToggle({
  collapsed,
  darkMode = false,
  onToggleDarkMode,
}: SidebarDarkModeToggleProps) {
  return (
    <div
      className={`w-full flex items-center rounded-lg text-sm ${
        collapsed
          ? "justify-center h-10 px-0"
          : "justify-between px-3.5 py-2.5"
      } text-zinc-600 hover:bg-zinc-50 cursor-pointer transition-colors`}
      onClick={onToggleDarkMode}
      title={collapsed ? "Dark Mode" : undefined}
    >
      <div className="flex items-center gap-3">
        <span className="shrink-0">
          <MoonIcon className="w-4.5 h-4.5 text-zinc-500" />
        </span>
        {!collapsed && <span className="tracking-tight">Dark Mode</span>}
      </div>

      {!collapsed && (
        <div
          className={`relative inline-flex h-5 w-9 shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out ${
            darkMode ? "bg-blue-600" : "bg-zinc-200"
          }`}
          role="switch"
          aria-checked={darkMode}
        >
          <span
            aria-hidden="true"
            className={`pointer-events-none inline-block h-4 w-4 transform rounded-full bg-white shadow-sm ring-0 transition duration-200 ease-in-out ${
              darkMode ? "translate-x-4" : "translate-x-0"
            }`}
          />
        </div>
      )}
    </div>
  );
}
