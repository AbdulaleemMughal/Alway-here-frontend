import type { ReactNode } from "react";
import { useSelector } from "react-redux";
import type { RootState } from "../../store/appStore";

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
  const accentColor = useSelector(
    (store: RootState) => store.memorial.accentColor,
  );
  const textColor = useSelector((store: RootState) => store.memorial.textColor);

  return (
    <button
      className={`px-3 py-1.25 bg-red-600 font-[Poppins] flex justify-center items-center gap-1 text-[13px] cursor-pointer ${className}`}
      onClick={onClick}
      style={{
        backgroundColor: accentColor,
        color: textColor,
      }}
    >
      {startIcon} {text} {endIcon}
    </button>
  );
};
