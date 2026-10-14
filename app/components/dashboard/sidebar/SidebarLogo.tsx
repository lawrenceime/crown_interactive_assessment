import React from "react";

interface SidebarLogoProps {
  collapsed: boolean;
}

export function SidebarLogo({ collapsed }: SidebarLogoProps) {
  return (
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
  );
}
