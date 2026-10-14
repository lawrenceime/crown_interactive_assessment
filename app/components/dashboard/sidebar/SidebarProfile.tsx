import React from "react";
import { BankIcon, VerifiedCheckIcon, ChevronRightIcon } from "../Icons";

interface SidebarProfileProps {
  collapsed: boolean;
}

export function SidebarProfile({ collapsed }: SidebarProfileProps) {
  return (
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
  );
}
