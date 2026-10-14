"use client";

import React from "react";
import { LoginForm } from "./LoginForm";

export default function LoginScreen() {
  return (
    <div className="w-full px-3 py-6 sm:px-4 sm:py-8 flex justify-center items-center my-auto">
      {/* Outer box that covers the login box */}
      <div className="w-full max-w-[460px] p-2.5 sm:p-3.5 bg-white border border-zinc-200/90 shadow-xl">
        {/* Inner login box */}
        <div className="w-full p-5 sm:p-7 bg-white border border-zinc-200/80 rounded-xl sm:rounded-2xl">
          <div className="mb-6">
            <p className="mt-1.5 text-lg font-semibold text-zinc-900">
              Sign in to your platform
            </p>
          </div>

          <LoginForm />

          <div className="flex text-sm text-zinc-500 mt-5">
            Not registered?{" "}
            <span className="text-blue-600 pl-2 font-medium cursor-pointer">
              Create an account
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}