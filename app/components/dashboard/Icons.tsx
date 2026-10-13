import React from "react";

export function GridIcon({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="3" width="7" height="7" rx="1.5" />
      <rect x="14" y="3" width="7" height="7" rx="1.5" />
      <rect x="14" y="14" width="7" height="7" rx="1.5" />
      <rect x="3" y="14" width="7" height="7" rx="1.5" />
    </svg>
  );
}

export function BankIcon({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M3 21h18" />
      <path d="M3 10h18" />
      <path d="M5 10v11" />
      <path d="M9 10v11" />
      <path d="M15 10v11" />
      <path d="M19 10v11" />
      <path d="M12 3L2 10h20L12 3z" />
    </svg>
  );
}

export function FxTransferIcon({ className = "w-5 h-5" }: { className?: string }) {
  // Triangular delta/play outline icon pointing right as in the screenshot
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M6 4.5l14 7.5-14 7.5V4.5z" />
    </svg>
  );
}

export function TransactionsIcon({ className = "w-5 h-5" }: { className?: string }) {
  // Clock / history icon with circular arrow
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8" />
      <path d="M3 3v5h5" />
      <path d="M12 7v5l3 3" />
    </svg>
  );
}

export function PayoutIcon({ className = "w-5 h-5" }: { className?: string }) {
  // Paper airplane tilted top-right
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <line x1="22" y1="2" x2="11" y2="13" />
      <polygon points="22 2 15 22 11 13 2 9 22 2" />
    </svg>
  );
}

export function LinkIcon({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />
      <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
    </svg>
  );
}

export function CardIcon({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="5" width="20" height="14" rx="2" />
      <line x1="2" y1="10" x2="22" y2="10" />
    </svg>
  );
}

export function ApiIcon({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
      <polyline points="15 3 21 3 21 9" />
      <line x1="10" y1="14" x2="21" y2="3" />
    </svg>
  );
}

export function SettingsIcon({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="3" />
      <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z" />
    </svg>
  );
}

export function MoonIcon({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
    </svg>
  );
}

export function SearchIcon({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="11" cy="11" r="8" />
      <line x1="21" y1="21" x2="16.65" y2="16.65" />
    </svg>
  );
}

export function BellIcon({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9" />
      <path d="M13.73 21a2 2 0 0 1-3.46 0" />
    </svg>
  );
}

export function GlobeIcon({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10" />
      <line x1="2" y1="12" x2="22" y2="12" />
      <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
    </svg>
  );
}

export function ChevronDownIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="6 9 12 15 18 9" />
    </svg>
  );
}

export function ChevronRightIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="9 18 15 12 9 6" />
    </svg>
  );
}

export function ChevronsLeftIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="11 17 6 12 11 7" />
      <polyline points="18 17 13 12 18 7" />
    </svg>
  );
}

export function ChevronsRightIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="13 17 18 12 13 7" />
      <polyline points="6 17 11 12 6 7" />
    </svg>
  );
}

export function RefreshIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21.5 2v6h-6M21.34 15.57a10 10 0 1 1-.57-8.38l5.67-5.19" />
    </svg>
  );
}

export function VerifiedCheckIcon({ className = "w-3.5 h-3.5" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none">
      <circle cx="12" cy="12" r="10" fill="#0062FF" />
      <path d="M8 12.5l2.5 2.5 5.5-5.5" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function UsFlag({ className = "w-5 h-5 rounded-full overflow-hidden shrink-0" }: { className?: string }) {
  return (
    <span className={`inline-flex items-center justify-center ${className}`}>
      <svg viewBox="0 0 64 64" className="w-full h-full">
        <circle cx="32" cy="32" r="32" fill="#d9222a" />
        <path d="M0 8h64v8H0zM0 24h64v8H0zM0 40h64v8H0zM0 56h64v8H0z" fill="#ffffff" />
        <path d="M0 0h32v32H0z" fill="#1b356d" />
        {/* Stars */}
        <circle cx="8" cy="8" r="1.5" fill="#ffffff" />
        <circle cx="16" cy="8" r="1.5" fill="#ffffff" />
        <circle cx="24" cy="8" r="1.5" fill="#ffffff" />
        <circle cx="12" cy="16" r="1.5" fill="#ffffff" />
        <circle cx="20" cy="16" r="1.5" fill="#ffffff" />
        <circle cx="8" cy="24" r="1.5" fill="#ffffff" />
        <circle cx="16" cy="24" r="1.5" fill="#ffffff" />
        <circle cx="24" cy="24" r="1.5" fill="#ffffff" />
      </svg>
    </span>
  );
}

export function NgFlag({ className = "w-5 h-5 rounded-full overflow-hidden shrink-0" }: { className?: string }) {
  return (
    <span className={`inline-flex items-center justify-center ${className}`}>
      <svg viewBox="0 0 64 64" className="w-full h-full">
        <circle cx="32" cy="32" r="32" fill="#008751" />
        <rect x="21.33" y="0" width="21.34" height="64" fill="#ffffff" />
      </svg>
    </span>
  );
}

export function EuFlag({ className = "w-5 h-5 rounded-full overflow-hidden shrink-0" }: { className?: string }) {
  return (
    <span className={`inline-flex items-center justify-center ${className}`}>
      <svg viewBox="0 0 64 64" className="w-full h-full">
        <circle cx="32" cy="32" r="32" fill="#003399" />
        <circle cx="32" cy="14" r="2" fill="#ffcc00" />
        <circle cx="32" cy="50" r="2" fill="#ffcc00" />
        <circle cx="14" cy="32" r="2" fill="#ffcc00" />
        <circle cx="50" cy="32" r="2" fill="#ffcc00" />
        <circle cx="19" cy="19" r="2" fill="#ffcc00" />
        <circle cx="45" cy="19" r="2" fill="#ffcc00" />
        <circle cx="19" cy="45" r="2" fill="#ffcc00" />
        <circle cx="45" cy="45" r="2" fill="#ffcc00" />
      </svg>
    </span>
  );
}

export function GbpFlag({ className = "w-5 h-5 rounded-full overflow-hidden shrink-0" }: { className?: string }) {
  return (
    <span className={`inline-flex items-center justify-center ${className}`}>
      <svg viewBox="0 0 64 64" className="w-full h-full">
        <circle cx="32" cy="32" r="32" fill="#012169" />
        <path d="M0 0l64 64m0-64L0 64" stroke="#ffffff" strokeWidth="8" />
        <path d="M0 0l64 64m0-64L0 64" stroke="#c8102e" strokeWidth="4" />
        <path d="M32 0v64M0 32h64" stroke="#ffffff" strokeWidth="12" />
        <path d="M32 0v64M0 32h64" stroke="#c8102e" strokeWidth="7" />
      </svg>
    </span>
  );
}

export function CadFlag({ className = "w-5 h-5 rounded-full overflow-hidden shrink-0" }: { className?: string }) {
  return (
    <span className={`inline-flex items-center justify-center ${className}`}>
      <svg viewBox="0 0 64 64" className="w-full h-full">
        <circle cx="32" cy="32" r="32" fill="#ff0000" />
        <rect x="16" y="0" width="32" height="64" fill="#ffffff" />
        <polygon points="32 16 35 26 43 25 38 31 41 38 32 34 23 38 26 31 21 25 29 26" fill="#ff0000" />
      </svg>
    </span>
  );
}

export function KesFlag({ className = "w-5 h-5 rounded-full overflow-hidden shrink-0" }: { className?: string }) {
  return (
    <span className={`inline-flex items-center justify-center ${className}`}>
      <svg viewBox="0 0 64 64" className="w-full h-full">
        <circle cx="32" cy="32" r="32" fill="#000000" />
        <rect x="0" y="20" width="64" height="24" fill="#bb0000" />
        <rect x="0" y="44" width="64" height="20" fill="#006600" />
        <rect x="0" y="18" width="64" height="3" fill="#ffffff" />
        <rect x="0" y="43" width="64" height="3" fill="#ffffff" />
      </svg>
    </span>
  );
}

export function GhsFlag({ className = "w-5 h-5 rounded-full overflow-hidden shrink-0" }: { className?: string }) {
  return (
    <span className={`inline-flex items-center justify-center ${className}`}>
      <svg viewBox="0 0 64 64" className="w-full h-full">
        <circle cx="32" cy="32" r="32" fill="#ce1126" />
        <rect x="0" y="21" width="64" height="22" fill="#fcd116" />
        <rect x="0" y="43" width="64" height="21" fill="#006b3f" />
        <polygon points="32 23 35 29 42 29 36 33 38 40 32 36 26 40 28 33 22 29 29 29" fill="#000000" />
      </svg>
    </span>
  );
}
