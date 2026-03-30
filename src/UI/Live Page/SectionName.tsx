import { useSelector } from "react-redux";
import type { RootState } from "../../store/appStore";

interface SectionNameProps {
  name: string;
}

export const SectionName = ({ name }: SectionNameProps) => {
  const { textColor, accentColor } = useSelector(
    (store: RootState) => store.memorial,
  );

  return (
    <div className="pt-30 pb-12.5">
      <h2
        className="text-[32px] font-[Spectral]"
        style={{
          color: textColor,
        }}
      >
        {name ? name : "N/A"}
      </h2>
      <div
        className="h-0.75 w-15"
        style={{
          backgroundColor: accentColor,
        }}
      ></div>
    </div>
  );
};
