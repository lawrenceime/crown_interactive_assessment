"use client";

import React, { useState } from "react";
import { RefreshIcon, ChevronRightIcon } from "../Icons";
import { CurrencySelectModal } from "../CurrencySelectModal";
import { CurrencyInput } from "./CurrencyInput";
import { Step1AmountProps } from "./types";

export function Step1Amount({
  sendCurrency,
  receiveCurrency,
  sendAmount,
  receiveAmount,
  exchangeRate,
  fee,
  totalConvert,
  isRefreshing,
  onSendAmountChange,
  onReceiveAmountChange,
  onSwap,
  onSelectCurrency,
  onNext,
}: Step1AmountProps) {
  const [selectingFor, setSelectingFor] = useState<"send" | "receive" | null>(null);

  return (
    <div className="w-full max-w-[480px] mx-auto">
      <h2 className="text-[22px] md:text-[23px] font-bold text-zinc-900 text-center tracking-tight mb-8">
        How much are you sending?
      </h2>

      {/* You send exactly */}
      <CurrencyInput
        label="You send exactly"
        amount={sendAmount}
        onChangeAmount={onSendAmountChange}
        currency={sendCurrency}
        onOpenCurrencySelect={() => setSelectingFor("send")}
        helperText="Balance: $200,000.00"
      />

      {/* Currency Swap */}
      <div className="flex justify-center my-3">
        <button
          type="button"
          onClick={onSwap}
          className={`w-8 h-8 rounded-full border border-zinc-200 bg-white flex items-center justify-center text-zinc-500 hover:text-zinc-900 hover:border-zinc-300 shadow-2xs transition-all duration-300 ${
            isRefreshing ? "rotate-180" : ""
          }`}
          title="Swap currencies"
          aria-label="Swap currencies"
        >
          <RefreshIcon className="w-3.5 h-3.5 text-zinc-600" />
        </button>
      </div>

      {/* Recipient gets */}
      <div className="mb-6">
        <CurrencyInput
          label="Recipient gets"
          amount={receiveAmount}
          onChangeAmount={onReceiveAmountChange}
          currency={receiveCurrency}
          onOpenCurrencySelect={() => setSelectingFor("receive")}
        />
      </div>

      {/* Breakdown Details */}
      <div className="space-y-3 pt-1 text-xs md:text-sm">
        <div className="flex items-center justify-between text-zinc-500">
          <span>Fee 0.5%</span>
          <span className="font-medium text-zinc-700">{fee} {sendCurrency.code}</span>
        </div>

        <div className="flex items-center justify-between text-zinc-500">
          <span>Exchange Rate</span>
          <button
            type="button"
            onClick={() => setSelectingFor("receive")}
            className="font-medium text-zinc-800 flex items-center gap-1 hover:text-blue-600 transition-colors"
          >
            <span>1 {sendCurrency.code} = {Math.round(exchangeRate)} {receiveCurrency.code}</span>
            <ChevronRightIcon className="w-3.5 h-3.5 text-zinc-400 inline" />
          </button>
        </div>

        <div className="flex items-center justify-between text-zinc-500 pt-1">
          <span>Total amount we&apos;ll convert</span>
          <span className="font-semibold text-zinc-900">{totalConvert} {sendCurrency.code}</span>
        </div>
      </div>

      {/* Next Step Button */}
      <button
        type="button"
        onClick={onNext}
        className="mt-8 w-full h-[48px] rounded-xl font-semibold text-sm md:text-base text-white bg-[#0062FF] hover:bg-[#0052D9] active:bg-[#0047C0] transition-colors shadow-xs flex items-center justify-center cursor-pointer"
      >
        Next
      </button>

      {/* Currency Modal */}
      <CurrencySelectModal
        isOpen={selectingFor !== null}
        onClose={() => setSelectingFor(null)}
        selectedCode={selectingFor === "send" ? sendCurrency.code : receiveCurrency.code}
        onSelect={(curr) => {
          if (selectingFor) {
            onSelectCurrency(selectingFor, curr);
          }
        }}
        title={selectingFor === "send" ? "Select Currency to Send" : "Select Currency to Receive"}
      />
    </div>
  );
}
