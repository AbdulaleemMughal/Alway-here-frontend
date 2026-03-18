import { Loader2 } from "lucide-react";

interface ButtonProps {
  disable?: boolean;
  type?: "button" | "submit" | "reset";
  className?: string;
  text: string;
  onClick?: () => void;
};

export const Button = ({
  disable,
  type = "button",
  className,
  text,
  onClick,
}: ButtonProps) => {
  return (
    <button
      disabled={disable}
      type={type}
      className={`py-2.5 px-6 flex justify-center bg-(--primary-color) font-[Poppins] text-white text-[16px] ${className} ${disable ? "opacity-40 cursor-not-allowed" : "hover:opacity-80 cursor-pointer"}`}
      onClick={onClick}
    >
      {disable ? <Loader2 className="animate-spin" /> : text}
    </button>
  );
};
