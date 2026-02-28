import type { ChangeEvent } from "react";

interface InputProps {
  type?: "text" | "password" | "email" | "number";
  className?: string;
  value: string;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
}

export const Input = ({ type, className, value, onChange }: InputProps) => {
  return (
    <input
      type={type}
      className={`px-3.75 py-1.25 border-dashed border-2 border-(--input-border-color) bg-transparent font-[Spectral] text-[40px] max-lg:text-[30px] max-sm:text-[16px] ${className}`}
      value={value}
      onChange={onChange}
    />
  );
};
