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
    <div className="relative">
      <input
        type="text"
        id={id}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={children}
        className={`w-full bg-gray-100 px-2 focus:outline-none focus:ring-0 transition-all duration-200 focus:border-blue-500 h-10 border-gray-300 placeholder-transparent py-4 text-base ${
          isFocused ? "border-blue-500" : ""
        }`}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
      />
      <label
        htmlFor={id}
        className={`absolute select-none transition-all duration-200 ${
          value || isFocused
            ? "-top-4 text-[12px] text-blue-500 left-1"
            : "top-2 text-base text-gray-500 left-3 "
        }`}
      >
        {children}
      </label>
    </div>
  );
}
