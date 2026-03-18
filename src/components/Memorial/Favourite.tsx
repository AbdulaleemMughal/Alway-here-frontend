import { useEffect, useState } from "react";
import { useFavourite } from "../../hook/useFavourite";
import type {
  FavouriteType,
  UpdateFavouritePayload,
} from "../../@types/favourite.type";
import { InputAndSwitch } from "../../shared/InputAndSwitch";
import { Button } from "../../UI/Memorial/Button";
import { Plus } from "lucide-react";
import { FavouriteCard } from "../../UI/Memorial/FavouriteCard";
import { useParams } from "react-router-dom";
import { AddFavouriteModal } from "../../UI/Modals/AddFavouriteModal";

export const Favourite = () => {
    const { memorialId } = useParams();
  const { getFavourites, updateFavourite } = useFavourite();
  const [openModal, setOpenModal] = useState<boolean>(false);
  const [favourites, setFavourites] = useState<FavouriteType>(
    {} as FavouriteType,
  );

  useEffect(() => {
    const fetchData = async () => {
      const data = await getFavourites();
      setFavourites(data);
    };
    fetchData();
  }, [memorialId]);

  return (
    <>
    <div>
      <InputAndSwitch<FavouriteType, UpdateFavouritePayload>
        data={favourites}
        setData={setFavourites}
        updateSection={updateFavourite}
      />
      {favourites.isActive && (
        <>
          <div className="grid grid-cols-12 gap-4">
            <FavouriteCard data={favourites} setData={setFavourites} />
          </div>
          <Button
            text="Add More"
            startIcon={<Plus />}
            className="text-[16px] mt-8 px-6 py-2.5"
            onClick={() => setOpenModal(true)}
          />
        </>
      )}
    </div>
    <AddFavouriteModal open={openModal} setOpen={setOpenModal} setData={setFavourites} />
    </>
  );
};
