import React from "react";
import {
  GridIcon,
  BankIcon,
  FxTransferIcon,
  TransactionsIcon,
  PayoutIcon,
  LinkIcon,
  CardIcon,
  ApiIcon,
} from "../Icons";
import { NavItem } from "./types";

export const mainNavItems: NavItem[] = [
  {
    id: "dashboard",
    label: "Dashboard",
    icon: <GridIcon className="w-4.5 h-4.5 text-zinc-500" />,
    activeIcon: <GridIcon className="w-4.5 h-4.5 text-blue-600" />,
  },
  {
    id: "account",
    label: "Account",
    icon: <BankIcon className="w-4.5 h-4.5 text-zinc-500" />,
    activeIcon: <BankIcon className="w-4.5 h-4.5 text-blue-600" />,
  },
  {
    id: "fx-transfer",
    label: "FX Transfer",
    icon: <FxTransferIcon className="w-4.5 h-4.5 text-blue-600" />,
    activeIcon: <FxTransferIcon className="w-4.5 h-4.5 text-blue-600" />,
  },
  {
    id: "transactions",
    label: "Transactions",
    icon: <TransactionsIcon className="w-4.5 h-4.5 text-zinc-500" />,
    activeIcon: <TransactionsIcon className="w-4.5 h-4.5 text-blue-600" />,
  },
  {
    id: "payout",
    label: "Payout",
    icon: <PayoutIcon className="w-4.5 h-4.5 text-zinc-500" />,
    activeIcon: <PayoutIcon className="w-4.5 h-4.5 text-blue-600" />,
  },
  {
    id: "payment-link",
    label: "Payment Link",
    icon: <LinkIcon className="w-4.5 h-4.5 text-zinc-500" />,
    activeIcon: <LinkIcon className="w-4.5 h-4.5 text-blue-600" />,
  },
  {
    id: "cards",
    label: "Cards",
    icon: <CardIcon className="w-4.5 h-4.5 text-zinc-500" />,
    activeIcon: <CardIcon className="w-4.5 h-4.5 text-blue-600" />,
  },
  {
    id: "apis",
    label: "APIs",
    icon: <ApiIcon className="w-4.5 h-4.5 text-zinc-500" />,
    activeIcon: <ApiIcon className="w-4.5 h-4.5 text-blue-600" />,
  },
];
