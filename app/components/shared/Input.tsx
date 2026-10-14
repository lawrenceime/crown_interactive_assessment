import React, { forwardRef, useId } from "react";

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    label?: string;
    error?: string;
    helperText?: string;
    leftIcon?: React.ReactNode;
    rightIcon?: React.ReactNode;
    fullWidth?: boolean;
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
    (
        {
            id,
            label,
            error,
            helperText,
            leftIcon,
            rightIcon,
            fullWidth = true,
            className = "",
            disabled,
            ...props
        },
        ref
    ) => {
        const generatedId = useId();
        const inputId = id || generatedId;
        const errorId = `${inputId}-error`;
        const helperId = `${inputId}-helper`;

        return (
            <div className={`flex flex-col gap-1.5 ${fullWidth ? "w-full" : ""}`}>
                {label && (
                    <label
                        htmlFor={inputId}
                        className="text-sm font-medium text-zinc-700"
                    >
                        {label}
                    </label>
                )}

                <div className="relative flex items-center">
                    {leftIcon && (
                        <div className="absolute left-3.5 flex items-center pointer-events-none text-zinc-400">
                            {leftIcon}
                        </div>
                    )}

                    <input
                        ref={ref}
                        id={inputId}
                        disabled={disabled}
                        aria-invalid={!!error}
                        aria-describedby={
                            error ? errorId : helperText ? helperId : undefined
                        }
                        className={`w-full rounded-lg border bg-white px-3.5 py-2.5 text-sm text-zinc-900 transition-colors placeholder:text-zinc-400 focus:outline-none focus:ring-2 disabled:cursor-not-allowed disabled:bg-zinc-50 disabled:text-zinc-500 ${leftIcon ? "pl-10" : ""
                            } ${rightIcon ? "pr-10" : ""} ${error
                                ? "border-red-500 focus:border-red-500 focus:ring-red-200"
                                : "border-zinc-300 focus:border-indigo-600 focus:ring-indigo-100"
                            } ${className}`}
                        {...props}
                    />

                    {rightIcon && (
                        <div className="absolute right-3.5 flex items-center text-zinc-400">
                            {rightIcon}
                        </div>
                    )}
                </div>

                {error ? (
                    <p id={errorId} className="text-xs text-red-600">
                        {error}
                    </p>
                ) : helperText ? (
                    <p id={helperId} className="text-xs text-zinc-500">
                        {helperText}
                    </p>
                ) : null}
            </div>
        );
    }
);

Input.displayName = "Input";
