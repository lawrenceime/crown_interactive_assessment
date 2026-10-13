"use client";

import React from "react";

export interface StepItem {
  id: number;
  label: string;
}

export interface StepperProps {
  currentStep: number;
  onStepClick?: (step: number) => void;
}

export const STEPS: StepItem[] = [
  { id: 1, label: "Amount" },
  { id: 2, label: "Recipient" },
  { id: 3, label: "Review" },
];

export function Stepper({ currentStep = 1, onStepClick }: StepperProps) {
  return (
    <div className="flex flex-row md:flex-col gap-6 md:gap-9 select-none">
      {STEPS.map((step) => {
        const isActive = step.id === currentStep;
        const isPast = step.id < currentStep;

        return (
          <div
            key={step.id}
            onClick={() => onStepClick && onStepClick(step.id)}
            className={`flex items-center gap-3 cursor-pointer group transition-all duration-150`}
          >
            {/* Step circle / number */}
            <div
              className={`w-6 h-6 rounded-full text-xs font-semibold flex items-center justify-center shrink-0 transition-colors ${
                isActive
                  ? "bg-zinc-900 text-white"
                  : isPast
                  ? "bg-zinc-200 text-zinc-800"
                  : "text-zinc-400 font-medium"
              }`}
            >
              {step.id}
            </div>

            {/* Step label */}
            <span
              className={`text-sm transition-colors ${
                isActive
                  ? "font-semibold text-zinc-900"
                  : isPast
                  ? "font-medium text-zinc-700"
                  : "font-normal text-zinc-400 group-hover:text-zinc-600"
              }`}
            >
              {step.label}
            </span>
          </div>
        );
      })}
    </div>
  );
}
