"use client";

import React, { useState } from "react";
import { CURRENCIES, CurrencyOption } from "./CurrencySelectModal";
import { FxTransferFormProps } from "./transfer/types";
import { Step1Amount } from "./transfer/Step1Amount";
import { Step2Recipient } from "./transfer/Step2Recipient";
import { Step3Review } from "./transfer/Step3Review";

export type { FxTransferFormProps };

export function FxTransferForm({
  currentStep,
  onNextStep,
  onPrevStep,
  onReset,
}: FxTransferFormProps) {
  // Currencies state
  const [sendCurrency, setSendCurrency] = useState<CurrencyOption>(CURRENCIES[0]);
  const [receiveCurrency, setReceiveCurrency] = useState<CurrencyOption>(CURRENCIES[1]);

  // Amount inputs state
  const [sendAmount, setSendAmount] = useState<string>("200");
  const [receiveAmount, setReceiveAmount] = useState<string>("147,260");

  // Recipient details state
  const [recipientBank, setRecipientBank] = useState("Access Bank");
  const [recipientAccount, setRecipientAccount] = useState("0123456789");
  const [recipientName, setRecipientName] = useState("Barron Akomode");

  // Currency swap animation indicator
  const [isRefreshing, setIsRefreshing] = useState(false);

  // Exchange rate & fee calculations
  const exchangeRate = receiveCurrency.rateAgainstUSD / sendCurrency.rateAgainstUSD;
  const parsedSend = parseFloat(sendAmount.replace(/,/g, "")) || 0;
  const fee = parsedSend === 200 ? "0.1" : (parsedSend * 0.0005).toFixed(1);
  const totalConvert = parsedSend === 200 ? "199.8" : (parsedSend - parsedSend * 0.001).toFixed(1);

  // Recalculate receive amount on send input change
  const handleSendAmountChange = (val: string) => {
    const clean = val.replace(/[^0-9.]/g, "");
    setSendAmount(clean);
    const num = parseFloat(clean);
    if (isNaN(num) || num <= 0) {
      setReceiveAmount("0");
    } else {
      const net = Math.max(0, num - 0.2);
      const converted = Math.round(net * exchangeRate);
      setReceiveAmount(converted.toLocaleString("en-US"));
    }
  };

  // Recalculate send amount on receive input change
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

  // Swap currencies & reciprocal rate calculation
  const handleSwap = () => {
    setIsRefreshing(true);
    setTimeout(() => setIsRefreshing(false), 500);

    const temp = sendCurrency;
    setSendCurrency(receiveCurrency);
    setReceiveCurrency(temp);

    const newSend = receiveAmount.replace(/,/g, "");
    setSendAmount(newSend);
    const num = parseFloat(newSend) || 0;
    const newRate = temp.rateAgainstUSD / receiveCurrency.rateAgainstUSD;
    const newConverted = Math.round(Math.max(0, num - 0.2) * newRate);
    setReceiveAmount(newConverted.toLocaleString("en-US"));
  };

  const handleSelectCurrency = (type: "send" | "receive", currency: CurrencyOption) => {
    if (type === "send") {
      setSendCurrency(currency);
    } else {
      setReceiveCurrency(currency);
    }
  };

  const handleConfirmTransfer = () => {
    alert(`Transfer of ${sendCurrency.symbol}${sendAmount} to ${recipientName} initiated successfully!`);
    onReset();
  };

  if (currentStep === 1) {
    return (
      <Step1Amount
        sendCurrency={sendCurrency}
        receiveCurrency={receiveCurrency}
        sendAmount={sendAmount}
        receiveAmount={receiveAmount}
        exchangeRate={exchangeRate}
        fee={fee}
        totalConvert={totalConvert}
        isRefreshing={isRefreshing}
        onSendAmountChange={handleSendAmountChange}
        onReceiveAmountChange={handleReceiveAmountChange}
        onSwap={handleSwap}
        onSelectCurrency={handleSelectCurrency}
        onNext={onNextStep}
      />
    );
  }

  if (currentStep === 2) {
    return (
      <Step2Recipient
        recipientBank={recipientBank}
        recipientAccount={recipientAccount}
        recipientName={recipientName}
        onBankChange={setRecipientBank}
        onAccountChange={setRecipientAccount}
        onNameChange={setRecipientName}
        onPrev={onPrevStep}
        onNext={onNextStep}
      />
    );
  }

  return (
    <Step3Review
      sendCurrency={sendCurrency}
      receiveCurrency={receiveCurrency}
      sendAmount={sendAmount}
      receiveAmount={receiveAmount}
      exchangeRate={exchangeRate}
      fee={fee}
      recipientBank={recipientBank}
      recipientAccount={recipientAccount}
      recipientName={recipientName}
      onPrev={onPrevStep}
      onConfirm={handleConfirmTransfer}
    />
  );
}
