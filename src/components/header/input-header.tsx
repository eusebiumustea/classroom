import { useState } from "react";

export function InputHeader({
  id,
  value,
  onChange,
  children,
}: {
  id: string;
  value: string;
  onChange: (value: string) => void;
  children: string;
}) {
  const [isFocused, setIsFocused] = useState(false);

  return (
    <div className="relative mb-6">
      <input
        type="text"
        id={id}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={children}
        className={`w-full border-b-2 pl-3 bg-gray-100 focus:outline-none focus:ring-0 transition-all duration-200 focus:border-blue-500 h-10 border-gray-300 placeholder-transparent pt-4 text-base ${
          isFocused ? "border-blue-500" : ""
        }`}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
      />
      <label
        htmlFor={id}
        className={`absolute left-3 transition-all duration-200 ${
          value || isFocused
            ? "-top-1 text-sm text-blue-500"
            : "top-4 text-base text-gray-500"
        }`}
      >
        {children}
      </label>
    </div>
  );
}
