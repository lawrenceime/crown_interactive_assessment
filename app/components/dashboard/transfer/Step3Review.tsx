"use client";

import React from "react";
import { Step3ReviewProps } from "./types";

export function Step3Review({
  sendCurrency,
  receiveCurrency,
  sendAmount,
  receiveAmount,
  exchangeRate,
  fee,
  recipientBank,
  recipientAccount,
  recipientName,
  onPrev,
  onConfirm,
}: Step3ReviewProps) {
  return (
    <div className="w-full max-w-[480px] mx-auto animate-in fade-in duration-200">
      <h2 className="text-[22px] md:text-[23px] font-bold text-zinc-900 text-center tracking-tight mb-8">
        Review Transfer Details
      </h2>

      <div className="bg-white border border-zinc-200 rounded-2xl p-6 shadow-2xs space-y-4 mb-6">
        <div className="flex justify-between items-center pb-3 border-b border-zinc-100">
          <span className="text-xs text-zinc-500">You Send</span>
          <span className="text-base font-bold text-zinc-900">
            {sendCurrency.symbol} {sendAmount} {sendCurrency.code}
          </span>
        </div>

        <div className="flex justify-between items-center pb-3 border-b border-zinc-100">
          <span className="text-xs text-zinc-500">Recipient Gets</span>
          <span className="text-base font-bold text-green-600">
            {receiveCurrency.symbol} {receiveAmount} {receiveCurrency.code}
          </span>
        </div>

        <div className="flex justify-between items-center pb-3 border-b border-zinc-100 text-xs">
          <span className="text-zinc-500">Exchange Rate</span>
          <span className="font-medium text-zinc-800">
            1 {sendCurrency.code} = {Math.round(exchangeRate)} {receiveCurrency.code}
          </span>
        </div>

        <div className="flex justify-between items-center pb-3 border-b border-zinc-100 text-xs">
          <span className="text-zinc-500">Fee</span>
          <span className="font-medium text-zinc-800">{fee} {sendCurrency.code}</span>
        </div>

        <div className="flex justify-between items-center text-xs">
          <span className="text-zinc-500">Recipient Name</span>
          <span className="font-semibold text-zinc-900">{recipientName}</span>
        </div>

        <div className="flex justify-between items-center text-xs">
          <span className="text-zinc-500">Bank & Account</span>
          <span className="font-semibold text-zinc-900">
            {recipientBank} - {recipientAccount}
          </span>
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
          onClick={onConfirm}
          className="w-2/3 h-[48px] rounded-xl font-semibold text-sm text-white bg-[#0062FF] hover:bg-[#0052D9] transition-colors shadow-xs flex items-center justify-center cursor-pointer"
        >
          Confirm & Send
        </button>
      </div>
    </div>
  );
}
