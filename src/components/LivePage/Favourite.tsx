import { useEffect, useState } from "react";
import { useFavourite } from "../../hook/useFavourite";
import type { FavouriteType } from "../../@types/favourite.type";
import { SectionName } from "../../UI/Live Page/SectionName";
import { LiaQuoteLeftSolid } from "react-icons/lia";
import { useSelector } from "react-redux";
import type { RootState } from "../../store/appStore";

export const Favourite = () => {
  const { getFavourites } = useFavourite();
  const { accentColor, textColor } = useSelector(
    (store: RootState) => store.memorial,
  );
  const [favourite, setFavourite] = useState<FavouriteType>(
    {} as FavouriteType,
  );

  useEffect(() => {
    const fetchData = async () => {
      const response = await getFavourites();
      setFavourite(response);
    };

    fetchData();
  }, []);

  return (
    <>
      {favourite.isActive && (
        <>
          {" "}
          <SectionName name={favourite.heading} />
          <div className="grid grid-cols-12 gap-4">
            {favourite.favourites?.map((fav) => {
              return (
                <div
                  key={fav._id}
                  className="col-span-4 px-5 py-6.25 flex flex-col font-[Poppins] shadow-(--shadow-lg) max-lg:col-span-6 max-sm:col-span-12"
                >
                  <div className="flex items-center gap-2 mb-2">
                    <span>
                      <LiaQuoteLeftSolid size={18} color={accentColor} />
                    </span>
                    <h6
                      className="text-sm"
                      style={{
                        color: accentColor,
                      }}
                    >
                      {fav.question}
                    </h6>
                  </div>
                  <p
                    className="text-sm"
                    style={{
                      color: textColor,
                    }}
                  >
                    {fav.answer}
                  </p>
                </div>
              );
            })}
          </div>
        </>
      )}
    </>
  );
};
