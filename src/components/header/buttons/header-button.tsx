import { ReactNode } from "react";

export interface ButtonProps {
  onClick: () => void;
  variant?: "primary" | "secondary";
  type?: "button" | "submit" | "reset";
  children?: ReactNode;
  className?: string;
}

export function ButtonHeader({
  onClick,
  variant = "primary",
  children,
  type = "button",
  iconLeft,
  iconRight,
  className,
}: ButtonProps & { iconLeft?: ReactNode; iconRight?: ReactNode }) {
  const baseStyles = `py-2 cursor-pointer px-5 rounded focus:outline-none ${className}`;
  const variants: Record<"primary" | "secondary", string> = {
    primary: "text-black",
    secondary: "bg-gray-200 text-gray-700 hover:bg-gray-300",
  };

  return (
    <button
      type={type}
      onClick={onClick}
      className={`${baseStyles} ${variants[variant]}`}
    >
      <div className="w-full flex flex-row items-center gap-2">
        {iconLeft}
        {children}
        {iconRight}
      </div>
    </button>
  );
}
