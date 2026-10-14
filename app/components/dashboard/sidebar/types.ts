import React from "react";

export interface SidebarProps {
  collapsed: boolean;
  onToggleCollapse?: () => void;
  activeItem: string;
  onSelectItem: (id: string) => void;
  isMobileOpen?: boolean;
  onCloseMobile?: () => void;
  darkMode?: boolean;
  onToggleDarkMode?: () => void;
}

export interface NavItem {
  id: string;
  label: string;
  icon: React.ReactNode;
  activeIcon?: React.ReactNode;
}
