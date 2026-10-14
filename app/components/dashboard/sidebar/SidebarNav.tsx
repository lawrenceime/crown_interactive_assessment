import React from "react";
import { SettingsIcon } from "../Icons";
import { mainNavItems } from "./navItems";
import { SidebarNavItem } from "./SidebarNavItem";
import { SidebarDarkModeToggle } from "./SidebarDarkModeToggle";

interface SidebarNavProps {
  collapsed: boolean;
  activeItem: string;
  onSelectItem: (id: string) => void;
  onCloseMobile?: () => void;
  darkMode?: boolean;
  onToggleDarkMode?: () => void;
}

export function SidebarNav({
  collapsed,
  activeItem,
  onSelectItem,
  onCloseMobile,
  darkMode,
  onToggleDarkMode,
}: SidebarNavProps) {
  const handleSelect = (id: string) => {
    onSelectItem(id);
    if (onCloseMobile) onCloseMobile();
  };

  return (
    <div className="flex flex-col justify-between  flex-1 min-h-0 overflow-y-auto overflow-x-hidden">
      {/* Navigation section: MAIN */}
      <div className="px-3 pt-6 pb-2">
        {!collapsed && (
          <div className="px-3 mb-2.5 text-[11px] font-semibold tracking-wider text-zinc-400 uppercase">
            MAIN
          </div>
        )}
        <nav className="space-y-1">
          {mainNavItems.map((item) => (
            <SidebarNavItem
              key={item.id}
              label={item.label}
              icon={item.icon}
              activeIcon={item.activeIcon}
              isActive={activeItem === item.id}
              collapsed={collapsed}
              onClick={() => handleSelect(item.id)}
            />
          ))}
        </nav>
      </div>

      {/* Navigation section: OTHER */}
      <div className="px-3 pt-4 pb-2">
        {!collapsed && (
          <div className="px-3 mb-2.5 text-[11px] font-semibold tracking-wider text-zinc-400 uppercase">
            OTHER
          </div>
        )}
        <nav className="space-y-1">
          <SidebarNavItem
            label="Settings"
            icon={<SettingsIcon className="w-4.5 h-4.5 text-zinc-500" />}
            isActive={activeItem === "settings"}
            collapsed={collapsed}
            onClick={() => handleSelect("settings")}
          />

          <SidebarDarkModeToggle
            collapsed={collapsed}
            darkMode={darkMode}
            onToggleDarkMode={onToggleDarkMode}
          />
        </nav>
      </div>
    </div>
  );
}
