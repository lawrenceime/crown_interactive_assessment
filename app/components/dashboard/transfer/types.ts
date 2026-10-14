import { CurrencyOption } from "../CurrencySelectModal";

export interface FxTransferFormProps {
  currentStep: number;
  onNextStep: () => void;
  onPrevStep: () => void;
  onReset: () => void;
}

export interface Step1AmountProps {
  sendCurrency: CurrencyOption;
  receiveCurrency: CurrencyOption;
  sendAmount: string;
  receiveAmount: string;
  exchangeRate: number;
  fee: string;
  totalConvert: string;
  isRefreshing: boolean;
  onSendAmountChange: (val: string) => void;
  onReceiveAmountChange: (val: string) => void;
  onSwap: () => void;
  onSelectCurrency: (type: "send" | "receive", currency: CurrencyOption) => void;
  onNext: () => void;
}

export interface Step2RecipientProps {
  recipientBank: string;
  recipientAccount: string;
  recipientName: string;
  onBankChange: (bank: string) => void;
  onAccountChange: (account: string) => void;
  onNameChange: (name: string) => void;
  onPrev: () => void;
  onNext: () => void;
}

export interface Step3ReviewProps {
  sendCurrency: CurrencyOption;
  receiveCurrency: CurrencyOption;
  sendAmount: string;
  receiveAmount: string;
  exchangeRate: number;
  fee: string;
  recipientBank: string;
  recipientAccount: string;
  recipientName: string;
  onPrev: () => void;
  onConfirm: () => void;
}
