import type { ReactNode } from "react";

interface ButtonProps {
  text: string;
  startIcon?: ReactNode;
  endIcon?: ReactNode;
  className?: string;
  onClick: () => void;
}

export const Button = ({
  text,
  startIcon,
  endIcon,
  onClick,
  className,
}: ButtonProps) => {
  return (
    <button
      className={`px-3 py-1.25 bg-red-600 font-[Poppins] flex justify-center items-center gap-1 text-[13px] cursor-pointer ${className}`}
      onClick={onClick}
    >
      {startIcon} {text} {endIcon}
    </button>
  );
};
