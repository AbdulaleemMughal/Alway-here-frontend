import { ChevronDown } from "lucide-react";

type FAQType = {
  id: number;
  question: string;
  answer: string;
};

interface AccordianProps {
  faq: FAQType;
  open: number | null;
  toggleId: (id: number) => void;
}

export const Accordian = ({ faq, open, toggleId }: AccordianProps) => {
  return (
    <div className="border-b border-gray-300">
      <div
        className="flex justify-between items-center py-5 cursor-pointer"
        onClick={() => toggleId(faq.id)}
      >
        <h3 className="text-[22px] max-sm:text-[18px] font-[Spectral] text-(--primary-color) font-light">
          {faq.question}
        </h3>
        <span>
          <ChevronDown
            size={30}
            strokeWidth={1.5}
            color="gray"
            className={`${open === faq.id ? "rotate-180" : ""} transition-transform duration-300`}
          />
        </span>
      </div>
      {faq.id === open && (
        <div className="pb-5">
          <p className="text-[14px] font-[Poppins] text-(--secondary-color)">
            {faq.answer}
          </p>
        </div>
      )}
    </div>
  );
};
