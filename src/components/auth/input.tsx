import { forwardRef, memo } from "react";

interface CustomInputProps {
  id: string;
  type: "email" | "text" | "password" | "date";
  label: string;
  placeholder?: string;
  errorMessage?: string;
}

export const Input = memo(
  forwardRef<HTMLInputElement, CustomInputProps>(
    ({ id, type, label, placeholder, errorMessage, ...props }, ref) => (
      <div className="w-full mb-6">
        <label
          htmlFor={id}
          className="block text-sm font-medium text-gray-700 mb-1"
        >
          {label}
        </label>
        <input
          id={id}
          type={type}
          placeholder={placeholder}
          ref={ref}
          className={`w-full border rounded-full px-3 py-2 focus:outline-none ${
            errorMessage
              ? "border-red-500 focus:ring-red-500"
              : "border-gray-300 focus:ring-green-500"
          }`}
          {...props}
        />
        {errorMessage && (
          <p className="text-sm text-red-500 mt-1">{errorMessage}</p>
        )}
      </div>
    )
  )
);
