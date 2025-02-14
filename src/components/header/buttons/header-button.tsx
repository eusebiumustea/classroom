import { ReactNode } from "react";

export interface ButtonProps {
  onClick: () => void;
  variant?: "primary" | "secondary";
  text?: string;
  type?: "button" | "submit" | "reset";
  children?: ReactNode;
  className?: string;
}

export function ButtonHeader({
  onClick,
  variant = "primary",
  text,
  children,
  type = "button",
  iconLeft,
  iconRight,
}: ButtonProps & { iconLeft?: ReactNode; iconRight?: ReactNode }) {
  const baseStyles = "py-2 px-4 rounded focus:outline-none transition";
  const variants: Record<"primary" | "secondary", string> = {
    primary: "text-black cursor-pointer",
    secondary: "bg-gray-200 text-gray-700 hover:bg-gray-300",
  };

  return (
    <button
      type={type}
      onClick={onClick}
      className={`${baseStyles} ${variants[variant]}`}
    >
      <div className="flex items-center gap-2">
        {iconLeft}
        <span>{text || children}</span>
        {iconRight}
      </div>
    </button>
  );
}
