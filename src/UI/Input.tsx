import type { ChangeEvent } from "react";

interface InputProps {
  type?: string;
  placeholder?: string;
  className?: string;
  value: string;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
}

export const Input = ({
  type = "text",
  placeholder,
  className,
  value,
  onChange,
}: InputProps) => {
  return (
    <input
      type={type}
      placeholder={placeholder}
      className={`px-5 py-2.5 bg-[#f2f2f2] w-full rounded-lg mb-5 outline-none text-[16px] ${className}`}
      value={value}
      onChange={onChange}
    />
  );
};
