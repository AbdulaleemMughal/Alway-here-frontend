import type { ChangeEvent } from "react";
import { useSelector } from "react-redux";
import type { RootState } from "../../store/appStore";

interface InputProps {
  type?: "text" | "password" | "email" | "number";
  className?: string;
  value: string;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
}

export const Input = ({ type, className, value, onChange }: InputProps) => {
  const textColor = useSelector((store: RootState) => store.memorial.textColor);
  const fontWeight = useSelector(
    (store: RootState) => store.memorial.fontWeight,
  );

  return (
    <input
      type={type}
      className={`px-3.75 py-1.25 border-dashed border-2 border-(--input-border-color) outline-none bg-transparent font-[Spectral] text-[40px] max-lg:text-[30px] max-sm:text-[16px] ${className}`}
      style={{ color: textColor, fontWeight: fontWeight }}
      value={value}
      onChange={onChange}
    />
  );
};
