"use client";

import React from "react";
import { ChevronDownIcon } from "../Icons";
import { CurrencyOption } from "../CurrencySelectModal";

interface CurrencyInputProps {
  label: string;
  amount: string;
  onChangeAmount: (val: string) => void;
  currency: CurrencyOption;
  onOpenCurrencySelect: () => void;
  helperText?: string;
}

export function CurrencyInput({
  label,
  amount,
  onChangeAmount,
  currency,
  onOpenCurrencySelect,
  helperText,
}: CurrencyInputProps) {
  return (
    <div className="mb-1">
      <label className="block text-xs font-semibold text-zinc-800 mb-2">{label}</label>
      <div className="w-full bg-white border border-zinc-200 rounded-xl px-4 py-3 flex items-center justify-between transition-all focus-within:border-zinc-400 focus-within:ring-2 focus-within:ring-zinc-100 shadow-2xs">
        <div className="flex items-center flex-1 mr-2">
          <span className="text-xl font-normal text-zinc-800 mr-2 select-none">{currency.symbol}</span>
          <input
            type="text"
            value={amount}
            onChange={(e) => onChangeAmount(e.target.value)}
            className="w-full bg-transparent text-[22px] md:text-2xl font-semibold text-zinc-900 focus:outline-none tracking-tight"
            placeholder="0"
          />
        </div>

        <button
          type="button"
          onClick={onOpenCurrencySelect}
          className="flex items-center gap-2 pl-3 py-1 pr-1 rounded-lg hover:bg-zinc-50 border-l border-zinc-100 transition-colors shrink-0"
        >
          <span className="w-5 h-5 flex items-center justify-center shrink-0">{currency.flag}</span>
          <span className="text-sm font-semibold text-zinc-900">{currency.code}</span>
          <ChevronDownIcon className="w-3.5 h-3.5 text-zinc-400 ml-0.5" />
        </button>
      </div>

      {helperText && <div className="mt-2 text-xs text-zinc-500 font-normal">{helperText}</div>}
    </div>
  );
}
