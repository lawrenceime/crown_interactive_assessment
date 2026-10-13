"use client";

import React, { useState } from "react";
import { Stepper } from "../../components/dashboard/Stepper";
import { FxTransferForm } from "../../components/dashboard/FxTransferForm";
import { useDashboard } from "../../components/dashboard/DashboardShell";

export default function DashboardScreen() {
  const { activeItem, setActiveItem } = useDashboard();
  const [currentStep, setCurrentStep] = useState(1);

  if (activeItem !== "fx-transfer") {
    return (
      <div className="max-w-2xl mx-auto py-16 text-center">
        <div className="w-16 h-16 rounded-2xl bg-zinc-100 flex items-center justify-center mx-auto mb-4 text-zinc-400">
          <span className="text-2xl font-bold uppercase">{activeItem.slice(0, 2)}</span>
        </div>
        <h2 className="text-xl font-bold text-zinc-800 capitalize mb-2">
          {activeItem.replace("-", " ")}
        </h2>
        <p className="text-sm text-zinc-500 mb-6">
          This section is part of the Torus Mara dashboard. Navigate back to FX Transfer to view the main transfer flow.
        </p>
        <button
          type="button"
          onClick={() => setActiveItem("fx-transfer")}
          className="px-4 py-2 bg-blue-600 text-white rounded-lg text-sm font-semibold hover:bg-blue-700 transition-colors cursor-pointer"
        >
          Back to FX Transfer
        </button>
      </div>
    );
  }

  return (
    <div className="max-w-5xl mx-auto pt-2 md:pt-4">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-12 items-start">
        {/* Left Column: Progress Stepper */}
        <div className="md:col-span-3 lg:col-span-3 md:pt-1">
          <Stepper
            currentStep={currentStep}
            onStepClick={(step) => setCurrentStep(step)}
          />
        </div>

        {/* Right / Center Column: Amount Form */}
        <div className="md:col-span-8 lg:col-span-7 md:col-start-4 lg:col-start-4">
          <FxTransferForm
            currentStep={currentStep}
            onNextStep={() => setCurrentStep((prev) => Math.min(3, prev + 1))}
            onPrevStep={() => setCurrentStep((prev) => Math.max(1, prev - 1))}
            onReset={() => setCurrentStep(1)}
          />
        </div>
      </div>
    </div>
  );
}