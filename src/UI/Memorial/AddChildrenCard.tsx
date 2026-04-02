import { Plus } from "lucide-react";
import type { RootState } from "../../store/appStore";
import { useSelector } from "react-redux";

interface AddChildrenCardProps {
  onClick: () => void;
}

export const AddChildrenCard = ({ onClick }: AddChildrenCardProps) => {
  const { accentColor } = useSelector((store: RootState) => store.memorial);

  return (
    <div
      style={{
        backgroundColor: accentColor,
      }}
      className="p-2.5 w-35 h-47 flex items-center justify-center cursor-pointer"
      onClick={onClick}
    >
      <div className="w-11 h-11 rounded-full bg-white flex items-center justify-center">
        <Plus strokeWidth={2} />
      </div>
    </div>
  );
};
