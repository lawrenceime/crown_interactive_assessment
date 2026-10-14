"use client";

import React from "react";
import { Step2RecipientProps } from "./types";

export function Step2Recipient({
  recipientBank,
  recipientAccount,
  recipientName,
  onBankChange,
  onAccountChange,
  onNameChange,
  onPrev,
  onNext,
}: Step2RecipientProps) {
  return (
    <div className="w-full max-w-[480px] mx-auto animate-in fade-in duration-200">
      <h2 className="text-[22px] md:text-[23px] font-bold text-zinc-900 text-center tracking-tight mb-8">
        Who are you sending to?
      </h2>

      <div className="space-y-4 bg-white border border-zinc-200 rounded-2xl p-6 shadow-2xs mb-6">
        <div>
          <label className="block text-xs font-semibold text-zinc-700 mb-1.5">
            Recipient Bank
          </label>
          <select
            value={recipientBank}
            onChange={(e) => onBankChange(e.target.value)}
            className="w-full bg-zinc-50 border border-zinc-200 rounded-xl px-3.5 py-2.5 text-sm font-medium text-zinc-900 focus:outline-none focus:border-blue-500 focus:bg-white transition-all"
          >
            <option value="Access Bank">Access Bank</option>
            <option value="Zenith Bank">Zenith Bank</option>
            <option value="Guaranty Trust Bank (GTB)">Guaranty Trust Bank (GTB)</option>
            <option value="First Bank of Nigeria">First Bank of Nigeria</option>
            <option value="United Bank for Africa (UBA)">United Bank for Africa (UBA)</option>
          </select>
        </div>

        <div>
          <label className="block text-xs font-semibold text-zinc-700 mb-1.5">
            Account Number
          </label>
          <input
            type="text"
            value={recipientAccount}
            onChange={(e) => onAccountChange(e.target.value)}
            className="w-full bg-zinc-50 border border-zinc-200 rounded-xl px-3.5 py-2.5 text-sm font-medium text-zinc-900 focus:outline-none focus:border-blue-500 focus:bg-white transition-all"
            placeholder="Enter 10-digit account number"
          />
        </div>

        <div>
          <label className="block text-xs font-semibold text-zinc-700 mb-1.5">
            Account Name
          </label>
          <input
            type="text"
            value={recipientName}
            onChange={(e) => onNameChange(e.target.value)}
            className="w-full bg-zinc-50 border border-zinc-200 rounded-xl px-3.5 py-2.5 text-sm font-medium text-zinc-900 focus:outline-none focus:border-blue-500 focus:bg-white transition-all"
            placeholder="Recipient full name"
          />
        </div>
      </div>

      <div className="flex items-center gap-3">
        <button
          type="button"
          onClick={onPrev}
          className="w-1/3 h-[48px] rounded-xl font-semibold text-sm text-zinc-700 bg-zinc-100 hover:bg-zinc-200 transition-colors flex items-center justify-center cursor-pointer"
        >
          Back
        </button>
        <button
          type="button"
          onClick={onNext}
          className="w-2/3 h-[48px] rounded-xl font-semibold text-sm text-white bg-[#0062FF] hover:bg-[#0052D9] transition-colors shadow-xs flex items-center justify-center cursor-pointer"
        >
          Continue to Review
        </button>
      </div>
    </div>
  );
}
