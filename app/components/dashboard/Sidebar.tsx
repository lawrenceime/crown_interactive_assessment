"use client";

import React from "react";
import { SidebarProps } from "./sidebar/types";
import { SidebarLogo } from "./sidebar/SidebarLogo";
import { SidebarNav } from "./sidebar/SidebarNav";
import { SidebarProfile } from "./sidebar/SidebarProfile";

export type { SidebarProps };

export function Sidebar({
  collapsed,
  activeItem,
  onSelectItem,
  isMobileOpen = false,
  onCloseMobile,
  darkMode = false,
  onToggleDarkMode,
}: SidebarProps) {
  return (
    <>
      {/* Mobile backdrop */}
      {isMobileOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/40 backdrop-blur-xs lg:hidden transition-opacity"
          onClick={onCloseMobile}
          aria-hidden="true"
        />
      )}

      {/* Sidebar container */}
      <aside
        className={`fixed lg:sticky top-0 left-0 z-40 h-screen bg-white border-r border-zinc-200/90 flex flex-col justify-between select-none transition-all duration-200 ease-in-out ${
          collapsed ? "w-[72px]" : "w-[248px]"
        } ${
          isMobileOpen
            ? "translate-x-0"
            : "-translate-x-full lg:translate-x-0"
        }`}
      >
        {/* Top: Logo & Nav items */}
        <div className="flex flex-col flex-1 min-h-0">
          <SidebarLogo collapsed={collapsed} />
          <SidebarNav
            collapsed={collapsed}
            activeItem={activeItem}
            onSelectItem={onSelectItem}
            onCloseMobile={onCloseMobile}
            darkMode={darkMode}
            onToggleDarkMode={onToggleDarkMode}
          />
        </div>

        {/* Bottom Profile Section */}
        <SidebarProfile collapsed={collapsed} />
      </aside>
    </>
  );
}
