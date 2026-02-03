interface ButtonProps {
  className?: string;
  text: string;
  onClick: () => void;
}

export const Button = ({ className, text, onClick }: ButtonProps) => {
  return (
    <button
      className={`py-2.5 px-6 bg-(--primary-color) font-[Poppins] text-white text-[16px] cursor-pointer hover:opacity-80 ${className}`}
      onClick={onClick}
    >
      {text}
    </button>
  );
};
