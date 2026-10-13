"use client";

import React, { useState } from "react";
import { Sidebar } from "../components/dashboard/Sidebar";
import { Header } from "../components/dashboard/Header";
import { Stepper } from "../components/dashboard/Stepper";
import { FxTransferForm } from "../components/dashboard/FxTransferForm";
import { ChevronsLeftIcon, ChevronsRightIcon } from "../components/dashboard/Icons";

export default function DashboardScreen() {
  const [collapsed, setCollapsed] = useState(false);
  const [activeItem, setActiveItem] = useState("fx-transfer");
  const [currentStep, setCurrentStep] = useState(1);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className={`min-h-screen w-full flex bg-[#FCFCFD] font-sans text-zinc-900 ${darkMode ? "dark" : ""}`}>
      {/* Collapsible Sidebar */}
      <Sidebar
        collapsed={collapsed}
        onToggleCollapse={() => setCollapsed(!collapsed)}
        activeItem={activeItem}
        onSelectItem={(item) => setActiveItem(item)}
        isMobileOpen={isMobileMenuOpen}
        onCloseMobile={() => setIsMobileMenuOpen(false)}
        darkMode={darkMode}
        onToggleDarkMode={() => setDarkMode(!darkMode)}
      />

      {/* Main Layout Area */}
      <div className="flex-1 flex flex-col min-w-0 min-h-screen">
        {/* Top Header */}
        <Header
          title={activeItem === "fx-transfer" ? "FX Transfer" : activeItem.charAt(0).toUpperCase() + activeItem.slice(1).replace("-", " ")}
          subtitle={activeItem === "fx-transfer" ? "Send money using your Torus Accounts" : "Manage your Torus account details"}
          onOpenMobileMenu={() => setIsMobileMenuOpen(true)}
        />

        {/* Content Body with Collapse Toggle Bar & Main Screen */}
        <div className="relative flex-1 p-4 md:p-8 lg:p-10">
          {/* Sidebar Collapse Toggle Button (positioned at top left of content area) */}
          <div className="absolute top-4 left-4 z-10 hidden lg:block">
            <button
              type="button"
              onClick={() => setCollapsed(!collapsed)}
              title={collapsed ? "Expand sidebar" : "Collapse sidebar"}
              aria-label={collapsed ? "Expand sidebar" : "Collapse sidebar"}
              className="w-6 h-6 rounded border border-zinc-200/90 bg-white flex items-center justify-center text-zinc-400 hover:text-zinc-700 hover:border-zinc-300 shadow-2xs transition-colors cursor-pointer"
            >
              {collapsed ? (
                <ChevronsRightIcon className="w-3.5 h-3.5" />
              ) : (
                <ChevronsLeftIcon className="w-3.5 h-3.5" />
              )}
            </button>
          </div>

          {activeItem === "fx-transfer" ? (
            /* FX Transfer Main Area */
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
          ) : (
            /* Other Views Placeholder (Clean & Consistent) */
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
                onClick={() => setActiveItem("fx-transfer")}
                className="px-4 py-2 bg-blue-600 text-white rounded-lg text-sm font-semibold hover:bg-blue-700 transition-colors"
              >
                Back to FX Transfer
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}