interface ButtonProps {
  text: string;
  type?: "button" | "submit" | "reset";
}

export function Button({ text, type = "button" }: ButtonProps) {
  return (
    <button
      type={type}
      className="w-full bg-green-700 text-white py-2 px-4 rounded-full hover:bg-green-800transition-all"
    >
      {text}
    </button>
  );
}
