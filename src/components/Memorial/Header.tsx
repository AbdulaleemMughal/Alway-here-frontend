import { BookOpenText, ListStart, MessageSquareText, Star } from "lucide-react";
import { useSelector } from "react-redux";
import { FaTimeline, FaPhotoFilm } from "react-icons/fa6";
import { IoVideocamOutline } from "react-icons/io5";
import type { RootState } from "../../store/appStore";
import { handleScroll } from "../../utils/pageScroll";

const navItems = [
  {
    id: 1,
    name: "My Story",
    icon: BookOpenText,
    path: "obituary",
  },
  {
    id: 2,
    name: "Favourite",
    icon: Star,
    path: "favourite",
  },
  {
    id: 3,
    name: "Timeline",
    icon: FaTimeline,
    path: "timeline",
  },
  {
    id: 4,
    name: "Gallery",
    icon: FaPhotoFilm,
    path: "gallery",
  },
  {
    id: 5,
    name: "Memory Wall",
    icon: MessageSquareText,
    path: "memory",
  },
  {
    id: 6,
    name: "Videos",
    icon: IoVideocamOutline,
    path: "videos",
  },
  {
    id: 7,
    name: "Family Tree",
    icon: ListStart,
    path: "familytree",
  },
];

export const Header = () => {
  const pageColor = useSelector(
    (store: RootState) => store.memorial.accentColor,
  );
  const textColor = useSelector((store: RootState) => store.memorial.textColor);
  const fontWeight = useSelector(
    (store: RootState) => store.memorial.fontWeigth,
  );

  return (
    <div className="shadow-(--shadow-lg) top-0">
      <div className="mx-auto py-3 max-w-6xl flex items-center justify-between overflow-x-auto whitespace-nowrap flex-nowrap">
        {navItems.map((item) => {
          const Icon = item.icon;
          return (
            <div
            key={item.id}
              onClick={() => handleScroll(item.path)}
              className="py-2.5 px-3.75 flex items-center gap-2 cursor-pointer"
            >
              <span>
                <Icon color={pageColor} size={19} strokeWidth={1.5} />
              </span>
              <p
                className={`text-[16px] font-[Poppins]`}
                style={{ color: textColor, fontWeight: fontWeight }}
              >
                {item.name}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
};
