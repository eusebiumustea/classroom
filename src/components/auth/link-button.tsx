import { Link } from "react-router-dom";

interface LinkButtonProps {
  text: string;
  to: string;
  description: string;
}

export function LinkButton({ text, to, description }: LinkButtonProps) {
  return (
    <p className="mt-4 text-center text-sm text-gray-600">
      {description}{" "}
      <Link to={to} className="text-green-600 hover:underline">
        {text}
      </Link>
    </p>
  );
}
