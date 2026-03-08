import type { ReactNode } from "react";
import { useSelector } from "react-redux";
import type { RootState } from "../../store/appStore";
import { Loader2 } from "lucide-react";

interface ButtonProps {
  text: string;
  type?: "button" | "submit" | "reset" | undefined;
  disable?: boolean;
  loading?: boolean;
  startIcon?: ReactNode;
  endIcon?: ReactNode;
  className?: string;
  onClick: () => void;
}

export const Button = ({
  type,
  text,
  disable,
  loading,
  startIcon,
  endIcon,
  onClick,
  className,
}: ButtonProps) => {
  const accentColor = useSelector(
    (store: RootState) => store.memorial.accentColor,
  );
  const textColor = useSelector((store: RootState) => store.memorial.textColor);

  return (
    <button
      type={type}
      disabled={disable}
      className={`px-3 py-1.25 bg-red-600 font-[Poppins] flex justify-center items-center gap-1 text-[13px] cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed ${className}`}
      onClick={onClick}
      style={{
        backgroundColor: accentColor,
        color: textColor,
      }}
    >
      {loading ? (
  <Loader2 className="animate-spin" color={textColor} />
) : (
  <>
    {startIcon && startIcon}
    <span>{text}</span>
    {endIcon && endIcon}
  </>
)}
    </button>
  );
};
