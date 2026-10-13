"use client";

import React, { createContext, useContext, useState, ReactNode } from "react";
import { Sidebar } from "./Sidebar";
import { Header } from "./Header";
import { ChevronsLeftIcon, ChevronsRightIcon } from "./Icons";

interface DashboardContextType {
  activeItem: string;
  setActiveItem: (item: string) => void;
  collapsed: boolean;
  setCollapsed: React.Dispatch<React.SetStateAction<boolean>>;
  isMobileOpen: boolean;
  setIsMobileOpen: React.Dispatch<React.SetStateAction<boolean>>;
  darkMode: boolean;
  setDarkMode: React.Dispatch<React.SetStateAction<boolean>>;
  title?: string;
  setTitle: (title?: string) => void;
  subtitle?: string;
  setSubtitle: (subtitle?: string) => void;
}

const DashboardContext = createContext<DashboardContextType | undefined>(undefined);

export function useDashboard() {
  const context = useContext(DashboardContext);
  if (!context) {
    throw new Error("useDashboard must be used within a DashboardProvider / DashboardShell");
  }
  return context;
}

export interface DashboardShellProps {
  children: ReactNode;
}

export function DashboardShell({ children }: DashboardShellProps) {
  const [collapsed, setCollapsed] = useState(false);
  const [activeItem, setActiveItem] = useState("fx-transfer");
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const [customTitle, setCustomTitle] = useState<string | undefined>(undefined);
  const [customSubtitle, setCustomSubtitle] = useState<string | undefined>(undefined);

  const defaultTitle =
    activeItem === "fx-transfer"
      ? "FX Transfer"
      : activeItem.charAt(0).toUpperCase() + activeItem.slice(1).replace("-", " ");

  const defaultSubtitle =
    activeItem === "fx-transfer"
      ? "Send money using your Torus Accounts"
      : `Manage your Torus ${activeItem.replace("-", " ")} details`;

  const title = customTitle ?? defaultTitle;
  const subtitle = customSubtitle ?? defaultSubtitle;

  return (
    <DashboardContext.Provider
      value={{
        activeItem,
        setActiveItem,
        collapsed,
        setCollapsed,
        isMobileOpen,
        setIsMobileOpen,
        darkMode,
        setDarkMode,
        title: customTitle,
        setTitle: setCustomTitle,
        subtitle: customSubtitle,
        setSubtitle: setCustomSubtitle,
      }}
    >
      <div className={`min-h-screen w-full flex bg-[#FCFCFD] font-sans text-zinc-900 ${darkMode ? "dark" : ""}`}>
        {/* Collapsible Sidebar */}
        <Sidebar
          collapsed={collapsed}
          onToggleCollapse={() => setCollapsed(!collapsed)}
          activeItem={activeItem}
          onSelectItem={(item) => setActiveItem(item)}
          isMobileOpen={isMobileOpen}
          onCloseMobile={() => setIsMobileOpen(false)}
          darkMode={darkMode}
          onToggleDarkMode={() => setDarkMode(!darkMode)}
        />

        {/* Main Content Layout Area */}
        <div className="flex-1 flex flex-col min-w-0 min-h-screen">
          {/* Top Sticky Header */}
          <Header
            title={title}
            subtitle={subtitle}
            onOpenMobileMenu={() => setIsMobileOpen(true)}
          />

          {/* Content Body with Collapse Toggle Bar */}
          <main className="relative flex-1 p-4 md:p-8 lg:p-10">
            {/* Sidebar Collapse Toggle Button (desktop) */}
            <div className="absolute top-4 left-4 z-10 hidden lg:block">
              <button
                type="button"
                onClick={() => setCollapsed(!collapsed)}
                title={collapsed ? "Expand sidebar" : "Collapse sidebar"}
                aria-label={collapsed ? "Expand sidebar" : "Collapse sidebar"}
                className="w-6 h-6 rounded border border-zinc-200/90 bg-white flex items-center justify-center text-zinc-400 hover:text-zinc-700 hover:border-zinc-300 shadow-2xs transition-colors cursor-pointer"
              >
                {collapsed ? (
                  <ChevronsRightIcon className="w-3.5 h-3.5" />
                ) : (
                  <ChevronsLeftIcon className="w-3.5 h-3.5" />
                )}
              </button>
            </div>

            {children}
          </main>
        </div>
      </div>
    </DashboardContext.Provider>
  );
}
