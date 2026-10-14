import React from "react";

interface SidebarNavItemProps {
  label: string;
  icon: React.ReactNode;
  activeIcon?: React.ReactNode;
  isActive: boolean;
  collapsed: boolean;
  onClick: () => void;
}

export function SidebarNavItem({
  label,
  icon,
  activeIcon,
  isActive,
  collapsed,
  onClick,
}: SidebarNavItemProps) {
  return (
    <button
      onClick={onClick}
      title={collapsed ? label : undefined}
      className={`w-full group flex items-center rounded-lg text-sm transition-all duration-150 ${
        collapsed ? "justify-center h-10 px-0" : "gap-3 px-3.5 py-2.5"
      } ${
        isActive
          ? "bg-zinc-100/90 text-zinc-900 font-semibold shadow-2xs"
          : "text-zinc-600 hover:text-zinc-900 hover:bg-zinc-50 font-normal"
      }`}
    >
      <span className="shrink-0 transition-transform group-hover:scale-105">
        {isActive ? activeIcon || icon : icon}
      </span>
      {!collapsed && <span className="truncate tracking-tight">{label}</span>}
    </button>
  );
}
