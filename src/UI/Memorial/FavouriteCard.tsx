import { SlTrash } from "react-icons/sl";
import { LiaQuoteLeftSolid } from "react-icons/lia";
import { useSelector } from "react-redux";
import type { RootState } from "../../store/appStore";
import type { FavouriteType } from "../../@types/favourite.type";
import { useFavourite } from "../../hook/useFavourite";
import debounce from "debounce";
import { useMemo } from "react";

interface FavouriteCardProps {
  data: FavouriteType;
  setData: React.Dispatch<React.SetStateAction<FavouriteType>>;
}

export const FavouriteCard = ({ data, setData }: FavouriteCardProps) => {
  const { deleteFavourite, updateFavourite } = useFavourite();
  const pageColor = useSelector(
    (store: RootState) => store.memorial.accentColor,
  );
  const textColor = useSelector((store: RootState) => store.memorial.textColor);
  const firstName = useSelector(
    (store: RootState) => store.memorial.userDetail.firstName,
  );

  const debouncedUpdate = useMemo(
    () =>
      debounce((favId: string, question?: string, answer?: string) => {
        updateFavourite({ question, answer }, favId);
      }, 500),
    [data._id],
  );

  const handleDataChange = (
    id: string,
    key: keyof { _id: string; question: string; answer: string },
    value: string,
  ) => {
    const updatedData = {
      ...data,
      favourites: data.favourites.map((item) =>
        item._id === id ? { ...item, [key]: value } : item,
      ),
    };

    setData(updatedData);

    const item = updatedData.favourites.find((i) => i._id === id);
    if (item) {
      debouncedUpdate(id, item.question, item.answer);
    }
  };

  const handleDelete = async (id: string) => {
    const response = await deleteFavourite(id);
    setData(response);
  };

  return (
    <>
      {data.favourites.map((fav) => {
        return (
          <div
            key={fav._id}
            className="col-span-4 px-5 py-6.25 flex flex-col shadow-(--shadow-lg) max-lg:col-span-6 max-sm:col-span-12"
          >
            <div className="flex justify-end mb-2.5">
              <span
                className="cursor-pointer"
                onClick={() => handleDelete(fav._id)}
              >
                <SlTrash size={18} color="red" />
              </span>
            </div>
            <div className="flex items-center gap-2 mb-2">
              <span>
                <LiaQuoteLeftSolid size={18} color={pageColor} />
              </span>
              <input
                type="text"
                className="px-3 py-1.5 w-full font-[Poppins] border border-dashed border-gray-300 text-sm outline-none"
                placeholder={`What was ${firstName}'s favourite..`}
                style={{
                  color: textColor,
                }}
                value={fav.question}
                onChange={(e) =>
                  handleDataChange(fav._id, "question", e.target.value)
                }
              />
            </div>
            <div>
              <textarea
                placeholder="Your Response Here"
                className="px-3 py-1.5 w-full font-[Poppins] border border-dashed border-gray-300 text-sm outline-none"
                value={fav.answer}
                onChange={(e) =>
                  handleDataChange(fav._id, "answer", e.target.value)
                }
                style={{
                  color: textColor,
                }}
              ></textarea>
            </div>
          </div>
        );
      })}
    </>
  );
};
