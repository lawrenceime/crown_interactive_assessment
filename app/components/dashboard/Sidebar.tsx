"use client";

import React from "react";
import {
  GridIcon,
  BankIcon,
  FxTransferIcon,
  TransactionsIcon,
  PayoutIcon,
  LinkIcon,
  CardIcon,
  ApiIcon,
  SettingsIcon,
  MoonIcon,
  VerifiedCheckIcon,
  ChevronRightIcon,
} from "./Icons";

export interface SidebarProps {
  collapsed: boolean;
  onToggleCollapse: () => void;
  activeItem: string;
  onSelectItem: (id: string) => void;
  isMobileOpen?: boolean;
  onCloseMobile?: () => void;
  darkMode?: boolean;
  onToggleDarkMode?: () => void;
}

interface NavItem {
  id: string;
  label: string;
  icon: React.ReactNode;
  activeIcon?: React.ReactNode;
}

export function Sidebar({
  collapsed,
  activeItem,
  onSelectItem,
  isMobileOpen = false,
  onCloseMobile,
  darkMode = false,
  onToggleDarkMode,
}: SidebarProps) {
  const mainNavItems: NavItem[] = [
    {
      id: "dashboard",
      label: "Dashboard",
      icon: <GridIcon className="w-4.5 h-4.5 text-zinc-500" />,
      activeIcon: <GridIcon className="w-4.5 h-4.5 text-blue-600" />,
    },
    {
      id: "account",
      label: "Account",
      icon: <BankIcon className="w-4.5 h-4.5 text-zinc-500" />,
      activeIcon: <BankIcon className="w-4.5 h-4.5 text-blue-600" />,
    },
    {
      id: "fx-transfer",
      label: "FX Transfer",
      icon: <FxTransferIcon className="w-4.5 h-4.5 text-blue-600" />,
      activeIcon: <FxTransferIcon className="w-4.5 h-4.5 text-blue-600" />,
    },
    {
      id: "transactions",
      label: "Transactions",
      icon: <TransactionsIcon className="w-4.5 h-4.5 text-zinc-500" />,
      activeIcon: <TransactionsIcon className="w-4.5 h-4.5 text-blue-600" />,
    },
    {
      id: "payout",
      label: "Payout",
      icon: <PayoutIcon className="w-4.5 h-4.5 text-zinc-500" />,
      activeIcon: <PayoutIcon className="w-4.5 h-4.5 text-blue-600" />,
    },
    {
      id: "payment-link",
      label: "Payment Link",
      icon: <LinkIcon className="w-4.5 h-4.5 text-zinc-500" />,
      activeIcon: <LinkIcon className="w-4.5 h-4.5 text-blue-600" />,
    },
    {
      id: "cards",
      label: "Cards",
      icon: <CardIcon className="w-4.5 h-4.5 text-zinc-500" />,
      activeIcon: <CardIcon className="w-4.5 h-4.5 text-blue-600" />,
    },
    {
      id: "apis",
      label: "APIs",
      icon: <ApiIcon className="w-4.5 h-4.5 text-zinc-500" />,
      activeIcon: <ApiIcon className="w-4.5 h-4.5 text-blue-600" />,
    },
  ];

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
        <div className="flex flex-col flex-1 min-h-0 overflow-y-auto overflow-x-hidden">
          {/* Logo Header */}
          <div
            className={`h-[68px] flex items-center px-6 border-b border-zinc-100 ${
              collapsed ? "justify-center px-2" : "justify-between"
            }`}
          >
            {collapsed ? (
              <span className="font-extrabold text-lg tracking-tight text-blue-600">
                TM
              </span>
            ) : (
              <div className="flex items-center gap-1.5 tracking-tight font-black text-[18px]">
                <span className="text-blue-600 font-extrabold tracking-wide">
                  TORUS
                </span>
                <span className="text-zinc-900 font-extrabold tracking-wide">
                  MARA
                </span>
              </div>
            )}
          </div>

          {/* Navigation section: MAIN */}
          <div className="px-3 pt-6 pb-2">
            {!collapsed && (
              <div className="px-3 mb-2.5 text-[11px] font-semibold tracking-wider text-zinc-400 uppercase">
                MAIN
              </div>
            )}
            <nav className="space-y-1">
              {mainNavItems.map((item) => {
                const isActive = activeItem === item.id;
                return (
                  <button
                    key={item.id}
                    onClick={() => {
                      onSelectItem(item.id);
                      if (onCloseMobile) onCloseMobile();
                    }}
                    title={collapsed ? item.label : undefined}
                    className={`w-full group flex items-center rounded-lg text-sm transition-all duration-150 ${
                      collapsed
                        ? "justify-center h-10 px-0"
                        : "gap-3 px-3.5 py-2.5"
                    } ${
                      isActive
                        ? "bg-zinc-100/90 text-zinc-900 font-semibold shadow-2xs"
                        : "text-zinc-600 hover:text-zinc-900 hover:bg-zinc-50 font-normal"
                    }`}
                  >
                    <span className="shrink-0 transition-transform group-hover:scale-105">
                      {isActive ? item.activeIcon || item.icon : item.icon}
                    </span>
                    {!collapsed && (
                      <span className="truncate tracking-tight">
                        {item.label}
                      </span>
                    )}
                  </button>
                );
              })}
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
              {/* Settings */}
              <button
                onClick={() => {
                  onSelectItem("settings");
                  if (onCloseMobile) onCloseMobile();
                }}
                title={collapsed ? "Settings" : undefined}
                className={`w-full group flex items-center rounded-lg text-sm transition-all duration-150 ${
                  collapsed
                    ? "justify-center h-10 px-0"
                    : "gap-3 px-3.5 py-2.5"
                } ${
                  activeItem === "settings"
                    ? "bg-zinc-100 text-zinc-900 font-semibold"
                    : "text-zinc-600 hover:text-zinc-900 hover:bg-zinc-50 font-normal"
                }`}
              >
                <span className="shrink-0 group-hover:scale-105 transition-transform">
                  <SettingsIcon className="w-4.5 h-4.5 text-zinc-500" />
                </span>
                {!collapsed && (
                  <span className="truncate tracking-tight">Settings</span>
                )}
              </button>

              {/* Dark Mode toggle item */}
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
                  {!collapsed && (
                    <span className="tracking-tight">Dark Mode</span>
                  )}
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
            </nav>
          </div>
        </div>

        {/* Bottom Profile Section */}
        <div className="p-3 border-t border-zinc-100">
          <div
            className={`w-full flex items-center rounded-xl p-2 transition-colors hover:bg-zinc-50 cursor-pointer ${
              collapsed ? "justify-center" : "justify-between"
            }`}
          >
            <div className="flex items-center gap-3 min-w-0">
              {/* Profile icon box */}
              <div className="w-9 h-9 shrink-0 rounded-lg bg-white border border-zinc-200/90 flex items-center justify-center text-zinc-700 shadow-2xs">
                <BankIcon className="w-4.5 h-4.5 text-zinc-700" />
              </div>

              {!collapsed && (
                <div className="flex flex-col min-w-0 text-left">
                  <div className="flex items-center gap-1.5 leading-none">
                    <span className="font-semibold text-xs text-zinc-900 truncate">
                      Akomod8
                    </span>
                    <VerifiedCheckIcon className="w-3.5 h-3.5 shrink-0" />
                  </div>
                  <span className="text-[11px] text-zinc-400 truncate mt-1">
                    barron@torusmara.com
                  </span>
                </div>
              )}
            </div>

            {!collapsed && (
              <ChevronRightIcon className="w-3.5 h-3.5 text-zinc-400 shrink-0 ml-1" />
            )}
          </div>
        </div>
      </aside>
    </>
  );
}
