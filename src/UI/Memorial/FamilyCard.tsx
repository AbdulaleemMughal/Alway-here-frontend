import { Trash2 } from "lucide-react";
import { useSelector } from "react-redux";
import type { RootState } from "../../store/appStore";
import type { BranchType } from "../../@types/familyTree.type";

interface FamilyCardProps {
  data: BranchType | null;
}

export const FamilyCard = ({ data }: FamilyCardProps) => {
  const { accentColor, textColor } = useSelector(
    (store: RootState) => store.memorial,
  );

  return (
    <div
      style={{
        backgroundColor: accentColor,
      }}
      className="p-2.5 w-35 h-47"
    >
      {/* <div className="w-11 h-11 rounded-full bg-white flex items-center justify-center cursor-pointer">
        <Plus strokeWidth={2} />
      </div> */}
      <div className="flex flex-col items-center">
        <div className="flex justify-end w-full">
          <div className="w-6 h-6 flex items-center justify-center bg-red-500 rounded-md cursor-pointer">
            <Trash2 size={17} strokeWidth={1.25} color="white" />
          </div>
        </div>
        <div className="m-1.5 h-26 w-26 bg-gray-300 p-1 rounded-full">
          <img
            className="rounded-full"
            src={
              data?.img
                ? data?.img
                : "https://static.vecteezy.com/system/resources/previews/018/765/757/original/user-profile-icon-in-flat-style-member-avatar-illustration-on-isolated-background-human-permission-sign-business-concept-vector.jpg"
            }
          />
        </div>
        <div className="w-full">
          <input
            type="text"
            className="p-1 text-sm text-center w-full border border-dashed border-white font-[Poppins] bg-transparent outline-none"
            value={data?.name}
            style={{
              color: textColor,
            }}
          />
        </div>
      </div>
    </div>
  );
};
