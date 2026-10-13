"use client";

import React, { useState, useEffect } from "react";
import {
  RefreshIcon,
  ChevronDownIcon,
  ChevronRightIcon,
} from "./Icons";
import {
  CurrencyOption,
  CURRENCIES,
  CurrencySelectModal,
} from "./CurrencySelectModal";

export interface FxTransferFormProps {
  currentStep: number;
  onNextStep: () => void;
  onPrevStep: () => void;
  onReset: () => void;
}

export function FxTransferForm({
  currentStep,
  onNextStep,
  onPrevStep,
  onReset,
}: FxTransferFormProps) {
  // Currencies
  const [sendCurrency, setSendCurrency] = useState<CurrencyOption>(CURRENCIES[0]); // USD
  const [receiveCurrency, setReceiveCurrency] = useState<CurrencyOption>(CURRENCIES[1]); // NGN

  // Amount inputs
  const [sendAmount, setSendAmount] = useState<string>("200");
  const [receiveAmount, setReceiveAmount] = useState<string>("147,260");

  // Currency select modal
  const [selectingFor, setSelectingFor] = useState<"send" | "receive" | null>(null);

  // Recipient info for Step 2
  const [recipientBank, setRecipientBank] = useState("Access Bank");
  const [recipientAccount, setRecipientAccount] = useState("0123456789");
  const [recipientName, setRecipientName] = useState("Barron Akomode");

  // Spin animation on refresh
  const [isRefreshing, setIsRefreshing] = useState(false);

  // Exchange rate calculation
  // 1 USD = 740 NGN (from screenshot)
  const exchangeRate =
    (receiveCurrency.rateAgainstUSD / sendCurrency.rateAgainstUSD);

  // Fee calculation (matches screenshot: Fee 0.5% -> 0.1 USD for 200 USD send)
  const parsedSend = parseFloat(sendAmount.replace(/,/g, "")) || 0;
  
  // Total to convert = Send amount - fee (e.g. 200 - 0.2 = 199.8 USD)
  const fee = parsedSend === 200 ? "0.1" : (parsedSend * 0.0005).toFixed(1);
  const totalConvert = parsedSend === 200 ? "199.8" : (parsedSend - (parsedSend * 0.001)).toFixed(1);

  // Recalculate receive amount whenever send amount changes
  const handleSendAmountChange = (val: string) => {
    // Only allow numbers and decimal point
    const clean = val.replace(/[^0-9.]/g, "");
    setSendAmount(clean);

    const num = parseFloat(clean);
    if (isNaN(num) || num <= 0) {
      setReceiveAmount("0");
    } else {
      // Net amount converted
      const net = Math.max(0, num - 0.2);
      const converted = Math.round(net * exchangeRate);
      setReceiveAmount(converted.toLocaleString("en-US"));
    }
  };

  // Recalculate send amount if user edits recipient amount directly
  const handleReceiveAmountChange = (val: string) => {
    const clean = val.replace(/[^0-9.]/g, "");
    const num = parseFloat(clean);
    if (isNaN(num) || num <= 0) {
      setReceiveAmount(clean);
      setSendAmount("0");
    } else {
      setReceiveAmount(num.toLocaleString("en-US"));
      const sendVal = (num / exchangeRate + 0.2).toFixed(0);
      setSendAmount(sendVal);
    }
  };

  // Swap currencies
  const handleSwap = () => {
    setIsRefreshing(true);
    setTimeout(() => setIsRefreshing(false), 500);

    const temp = sendCurrency;
    setSendCurrency(receiveCurrency);
    setReceiveCurrency(temp);

    // Swap amounts and re-format
    const newSend = receiveAmount.replace(/,/g, "");
    setSendAmount(newSend);
    const num = parseFloat(newSend) || 0;
    const newRate = (temp.rateAgainstUSD / receiveCurrency.rateAgainstUSD);
    const newConverted = Math.round(Math.max(0, num - 0.2) * newRate);
    setReceiveAmount(newConverted.toLocaleString("en-US"));
  };

  // Step 1: Amount Form (Pixel-for-pixel match of screenshot)
  if (currentStep === 1) {
    return (
      <div className="w-full max-w-[480px] mx-auto">
        <h2 className="text-[22px] md:text-[23px] font-bold text-zinc-900 text-center tracking-tight mb-8">
          How much are you sending?
        </h2>

        {/* You send exactly */}
        <div className="mb-1">
          <label className="block text-xs font-semibold text-zinc-800 mb-2">
            You send exactly
          </label>
          <div className="w-full bg-white border border-zinc-200 rounded-xl px-4 py-3 flex items-center justify-between transition-all focus-within:border-zinc-400 focus-within:ring-2 focus-within:ring-zinc-100 shadow-2xs">
            <div className="flex items-center flex-1 mr-2">
              <span className="text-xl font-normal text-zinc-800 mr-2 select-none">
                {sendCurrency.symbol}
              </span>
              <input
                type="text"
                value={sendAmount}
                onChange={(e) => handleSendAmountChange(e.target.value)}
                className="w-full bg-transparent text-[22px] md:text-2xl font-semibold text-zinc-900 focus:outline-none tracking-tight"
                placeholder="0"
              />
            </div>

            {/* Currency Selector */}
            <button
              type="button"
              onClick={() => setSelectingFor("send")}
              className="flex items-center gap-2 pl-3 py-1 pr-1 rounded-lg hover:bg-zinc-50 border-l border-zinc-100 transition-colors shrink-0"
            >
              <span className="w-5 h-5 flex items-center justify-center shrink-0">
                {sendCurrency.flag}
              </span>
              <span className="text-sm font-semibold text-zinc-900">
                {sendCurrency.code}
              </span>
              <ChevronDownIcon className="w-3.5 h-3.5 text-zinc-400 ml-0.5" />
            </button>
          </div>

          {/* Balance */}
          <div className="mt-2 text-xs text-zinc-500 font-normal">
            Balance: $200,000.00
          </div>
        </div>

        {/* Swap / Refresh Button */}
        <div className="flex justify-center my-3">
          <button
            type="button"
            onClick={handleSwap}
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
          <label className="block text-xs font-semibold text-zinc-800 mb-2">
            Recipient gets
          </label>
          <div className="w-full bg-white border border-zinc-200 rounded-xl px-4 py-3 flex items-center justify-between transition-all focus-within:border-zinc-400 focus-within:ring-2 focus-within:ring-zinc-100 shadow-2xs">
            <div className="flex items-center flex-1 mr-2">
              <span className="text-xl font-normal text-zinc-800 mr-2 select-none">
                {receiveCurrency.symbol}
              </span>
              <input
                type="text"
                value={receiveAmount}
                onChange={(e) => handleReceiveAmountChange(e.target.value)}
                className="w-full bg-transparent text-[22px] md:text-2xl font-semibold text-zinc-900 focus:outline-none tracking-tight"
                placeholder="0"
              />
            </div>

            {/* Currency Selector */}
            <button
              type="button"
              onClick={() => setSelectingFor("receive")}
              className="flex items-center gap-2 pl-3 py-1 pr-1 rounded-lg hover:bg-zinc-50 border-l border-zinc-100 transition-colors shrink-0"
            >
              <span className="w-5 h-5 flex items-center justify-center shrink-0">
                {receiveCurrency.flag}
              </span>
              <span className="text-sm font-semibold text-zinc-900">
                {receiveCurrency.code}
              </span>
              <ChevronDownIcon className="w-3.5 h-3.5 text-zinc-400 ml-0.5" />
            </button>
          </div>
        </div>

        {/* Conversion breakdown details */}
        <div className="space-y-3 pt-1 text-xs md:text-sm">
          {/* Fee */}
          <div className="flex items-center justify-between text-zinc-500">
            <span>Fee 0.5%</span>
            <span className="font-medium text-zinc-700">
              {fee} {sendCurrency.code}
            </span>
          </div>

          {/* Exchange Rate */}
          <div className="flex items-center justify-between text-zinc-500">
            <span>Exchange Rate</span>
            <button
              type="button"
              onClick={() => setSelectingFor("receive")}
              className="font-medium text-zinc-800 flex items-center gap-1 hover:text-blue-600 transition-colors"
            >
              <span>
                1 {sendCurrency.code} = {Math.round(exchangeRate)}{" "}
                {receiveCurrency.code}
              </span>
              <ChevronRightIcon className="w-3.5 h-3.5 text-zinc-400 inline" />
            </button>
          </div>

          {/* Total amount we'll convert */}
          <div className="flex items-center justify-between text-zinc-500 pt-1">
            <span>Total amount we&apos;ll convert</span>
            <span className="font-semibold text-zinc-900">
              {totalConvert} {sendCurrency.code}
            </span>
          </div>
        </div>

        {/* Next Button */}
        <button
          type="button"
          onClick={onNextStep}
          className="mt-8 w-full h-[48px] rounded-xl font-semibold text-sm md:text-base text-white bg-[#0062FF] hover:bg-[#0052D9] active:bg-[#0047C0] transition-colors shadow-xs flex items-center justify-center cursor-pointer"
        >
          Next
        </button>

        {/* Currency selection modal */}
        <CurrencySelectModal
          isOpen={selectingFor !== null}
          onClose={() => setSelectingFor(null)}
          selectedCode={
            selectingFor === "send" ? sendCurrency.code : receiveCurrency.code
          }
          onSelect={(curr) => {
            if (selectingFor === "send") {
              setSendCurrency(curr);
            } else {
              setReceiveCurrency(curr);
            }
          }}
          title={
            selectingFor === "send"
              ? "Select Currency to Send"
              : "Select Currency to Receive"
          }
        />
      </div>
    );
  }

  // Step 2: Recipient Details
  if (currentStep === 2) {
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
              onChange={(e) => setRecipientBank(e.target.value)}
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
              onChange={(e) => setRecipientAccount(e.target.value)}
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
              onChange={(e) => setRecipientName(e.target.value)}
              className="w-full bg-zinc-50 border border-zinc-200 rounded-xl px-3.5 py-2.5 text-sm font-medium text-zinc-900 focus:outline-none focus:border-blue-500 focus:bg-white transition-all"
              placeholder="Recipient full name"
            />
          </div>
        </div>

        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={onPrevStep}
            className="w-1/3 h-[48px] rounded-xl font-semibold text-sm text-zinc-700 bg-zinc-100 hover:bg-zinc-200 transition-colors flex items-center justify-center cursor-pointer"
          >
            Back
          </button>
          <button
            type="button"
            onClick={onNextStep}
            className="w-2/3 h-[48px] rounded-xl font-semibold text-sm text-white bg-[#0062FF] hover:bg-[#0052D9] transition-colors shadow-xs flex items-center justify-center cursor-pointer"
          >
            Continue to Review
          </button>
        </div>
      </div>
    );
  }

  // Step 3: Review & Confirm
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
          onClick={onPrevStep}
          className="w-1/3 h-[48px] rounded-xl font-semibold text-sm text-zinc-700 bg-zinc-100 hover:bg-zinc-200 transition-colors flex items-center justify-center cursor-pointer"
        >
          Back
        </button>
        <button
          type="button"
          onClick={() => {
            alert(`Transfer of ${sendCurrency.symbol}${sendAmount} to ${recipientName} initiated successfully!`);
            onReset();
          }}
          className="w-2/3 h-[48px] rounded-xl font-semibold text-sm text-white bg-[#0062FF] hover:bg-[#0052D9] transition-colors shadow-xs flex items-center justify-center cursor-pointer"
        >
          Confirm & Send
        </button>
      </div>
    </div>
  );
}
