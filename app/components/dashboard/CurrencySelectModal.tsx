"use client";

import React, { useState } from "react";
import {
  UsFlag,
  NgFlag,
  EuFlag,
  GbpFlag,
  CadFlag,
  KesFlag,
  GhsFlag,
  SearchIcon,
} from "./Icons";

export interface CurrencyOption {
  code: string;
  name: string;
  symbol: string;
  rateAgainstUSD: number; // rate for 1 USD
  flag: React.ReactNode;
}

export const CURRENCIES: CurrencyOption[] = [
  {
    code: "USD",
    name: "United States Dollar",
    symbol: "$",
    rateAgainstUSD: 1,
    flag: <UsFlag />,
  },
  {
    code: "NGN",
    name: "Nigerian Naira",
    symbol: "₦",
    rateAgainstUSD: 740,
    flag: <NgFlag />,
  },
  {
    code: "EUR",
    name: "Euro",
    symbol: "€",
    rateAgainstUSD: 0.92,
    flag: <EuFlag />,
  },
  {
    code: "GBP",
    name: "British Pound Sterling",
    symbol: "£",
    rateAgainstUSD: 0.79,
    flag: <GbpFlag />,
  },
  {
    code: "CAD",
    name: "Canadian Dollar",
    symbol: "C$",
    rateAgainstUSD: 1.36,
    flag: <CadFlag />,
  },
  {
    code: "KES",
    name: "Kenyan Shilling",
    symbol: "KSh",
    rateAgainstUSD: 130,
    flag: <KesFlag />,
  },
  {
    code: "GHS",
    name: "Ghanaian Cedi",
    symbol: "GH₵",
    rateAgainstUSD: 14.5,
    flag: <GhsFlag />,
  },
];

interface CurrencySelectModalProps {
  isOpen: boolean;
  onClose: () => void;
  selectedCode: string;
  onSelect: (currency: CurrencyOption) => void;
  title?: string;
}

export function CurrencySelectModal({
  isOpen,
  onClose,
  selectedCode,
  onSelect,
  title = "Select Currency",
}: CurrencySelectModalProps) {
  const [search, setSearch] = useState("");

  if (!isOpen) return null;

  const filtered = CURRENCIES.filter(
    (c) =>
      c.code.toLowerCase().includes(search.toLowerCase()) ||
      c.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/40 backdrop-blur-xs transition-opacity animate-in fade-in duration-150">
      <div
        className="fixed inset-0"
        onClick={onClose}
        aria-hidden="true"
      />
      <div className="relative w-full max-w-sm bg-white rounded-2xl shadow-2xl border border-zinc-200 overflow-hidden z-10 flex flex-col max-h-[85vh]">
        <div className="flex items-center justify-between px-5 pt-5 pb-3 border-b border-zinc-100">
          <h3 className="font-semibold text-zinc-900 text-base">{title}</h3>
          <button
            onClick={onClose}
            className="w-8 h-8 rounded-full flex items-center justify-center text-zinc-400 hover:text-zinc-600 hover:bg-zinc-100 transition-colors"
          >
            ✕
          </button>
        </div>

        <div className="p-3 border-b border-zinc-100">
          <div className="relative flex items-center">
            <span className="absolute left-3 text-zinc-400">
              <SearchIcon className="w-4 h-4" />
            </span>
            <input
              type="text"
              placeholder="Search currency..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full pl-9 pr-3 py-2 text-sm bg-zinc-50 border border-zinc-200 rounded-lg text-zinc-900 placeholder:text-zinc-400 focus:outline-none focus:bg-white focus:border-blue-500 focus:ring-2 focus:ring-blue-100 transition-all"
              autoFocus
            />
          </div>
        </div>

        <div className="overflow-y-auto divide-y divide-zinc-50 py-1">
          {filtered.map((curr) => {
            const isSelected = curr.code === selectedCode;
            return (
              <button
                key={curr.code}
                onClick={() => {
                  onSelect(curr);
                  onClose();
                }}
                className={`w-full flex items-center justify-between px-5 py-3 text-left transition-colors hover:bg-zinc-50 ${
                  isSelected ? "bg-blue-50/60" : ""
                }`}
              >
                <div className="flex items-center gap-3">
                  <span className="w-6 h-6 shrink-0">{curr.flag}</span>
                  <div>
                    <span className="font-semibold text-sm text-zinc-900 mr-2">
                      {curr.code}
                    </span>
                    <span className="text-xs text-zinc-500">{curr.name}</span>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-xs font-mono text-zinc-400">
                    {curr.symbol}
                  </span>
                  {isSelected && (
                    <span className="text-blue-600 text-sm font-bold">✓</span>
                  )}
                </div>
              </button>
            );
          })}
          {filtered.length === 0 && (
            <div className="py-8 text-center text-sm text-zinc-400">
              No currencies found
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
