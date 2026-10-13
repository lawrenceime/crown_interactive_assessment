"use client";

import React, { useState } from "react";
import {
  SearchIcon,
  BellIcon,
  GlobeIcon,
  ChevronDownIcon,
} from "./Icons";

export interface HeaderProps {
  title?: string;
  subtitle?: string;
  onOpenMobileMenu?: () => void;
}

export function Header({
  title = "FX Transfer",
  subtitle = "Send money using your Torus Accounts",
  onOpenMobileMenu,
}: HeaderProps) {
  const [isLanguageOpen, setIsLanguageOpen] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState("ENG");
  const [showSearchInput, setShowSearchInput] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [showNotifications, setShowNotifications] = useState(false);

  const languages = [
    { code: "ENG", label: "English" },
    { code: "FRA", label: "Français" },
    { code: "SPA", label: "Español" },
    { code: "DEU", label: "Deutsch" },
  ];

  return (
    <header className="sticky top-0 z-30 h-[68px] bg-white border-b border-zinc-200/90 px-6 flex items-center justify-between">
      {/* Left: Mobile Toggle & Page Titles */}
      <div className="flex items-center gap-3">
        {onOpenMobileMenu && (
          <button
            onClick={onOpenMobileMenu}
            className="lg:hidden p-1.5 rounded-lg text-zinc-600 hover:text-zinc-900 hover:bg-zinc-100 transition-colors"
            aria-label="Open navigation menu"
          >
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        )}

        <div>
          <h1 className="text-[19px] font-bold text-zinc-900 tracking-tight leading-none">
            {title}
          </h1>
          <p className="text-xs text-zinc-400 font-normal mt-1 leading-none">
            {subtitle}
          </p>
        </div>
      </div>

      {/* Right: Actions */}
      <div className="flex items-center gap-4">
        {/* Search */}
        <div className="relative">
          {showSearchInput ? (
            <div className="flex items-center bg-zinc-50 border border-zinc-200 rounded-lg px-2.5 py-1 text-sm animate-in fade-in duration-150">
              <SearchIcon className="w-4 h-4 text-zinc-400 mr-2" />
              <input
                type="text"
                placeholder="Search..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="bg-transparent text-xs text-zinc-900 focus:outline-none w-32 md:w-44"
                autoFocus
                onBlur={() => !searchQuery && setShowSearchInput(false)}
              />
              <button
                onClick={() => {
                  setSearchQuery("");
                  setShowSearchInput(false);
                }}
                className="text-xs text-zinc-400 hover:text-zinc-600 ml-1"
              >
                ✕
              </button>
            </div>
          ) : (
            <button
              onClick={() => setShowSearchInput(true)}
              className="p-1.5 rounded-lg text-zinc-500 hover:text-zinc-800 hover:bg-zinc-50 transition-colors"
              aria-label="Search"
              title="Search"
            >
              <SearchIcon className="w-4.5 h-4.5 text-zinc-600" />
            </button>
          )}
        </div>

        {/* Notifications */}
        <div className="relative">
          <button
            onClick={() => setShowNotifications(!showNotifications)}
            className="p-1.5 rounded-lg text-zinc-500 hover:text-zinc-800 hover:bg-zinc-50 transition-colors relative"
            aria-label="Notifications"
            title="Notifications"
          >
            <BellIcon className="w-4.5 h-4.5 text-zinc-600" />
            <span className="absolute top-1 right-1 w-1.5 h-1.5 bg-blue-600 rounded-full" />
          </button>

          {showNotifications && (
            <div className="absolute right-0 mt-2 w-72 bg-white rounded-xl shadow-lg border border-zinc-200 p-3 z-50 text-xs">
              <div className="flex items-center justify-between font-semibold pb-2 border-b border-zinc-100 text-zinc-800">
                <span>Notifications</span>
                <span className="text-[10px] text-blue-600 bg-blue-50 px-1.5 py-0.5 rounded">
                  1 New
                </span>
              </div>
              <div className="py-2.5">
                <p className="font-medium text-zinc-800">
                  Exchange rate updated
                </p>
                <p className="text-zinc-400 text-[11px] mt-0.5">
                  1 USD is now equivalent to 740 NGN
                </p>
              </div>
            </div>
          )}
        </div>

        {/* Language selector */}
        <div className="relative">
          <button
            onClick={() => setIsLanguageOpen(!isLanguageOpen)}
            className="flex items-center gap-1.5 text-xs font-semibold text-zinc-600 hover:text-zinc-900 py-1.5 px-2 rounded-lg hover:bg-zinc-50 transition-colors"
          >
            <GlobeIcon className="w-4 h-4 text-zinc-500" />
            <span>{selectedLanguage}</span>
            <ChevronDownIcon className="w-3 h-3 text-zinc-400" />
          </button>

          {isLanguageOpen && (
            <div className="absolute right-0 mt-2 w-32 bg-white rounded-xl shadow-lg border border-zinc-200 py-1 z-50 text-xs">
              {languages.map((lang) => (
                <button
                  key={lang.code}
                  onClick={() => {
                    setSelectedLanguage(lang.code);
                    setIsLanguageOpen(false);
                  }}
                  className={`w-full text-left px-3 py-2 flex items-center justify-between hover:bg-zinc-50 transition-colors ${
                    selectedLanguage === lang.code
                      ? "text-blue-600 font-semibold"
                      : "text-zinc-700"
                  }`}
                >
                  <span>{lang.label}</span>
                  <span className="text-[10px] text-zinc-400">{lang.code}</span>
                </button>
              ))}
            </div>
          )}
        </div>
      </div>
    </header>
  );
}
