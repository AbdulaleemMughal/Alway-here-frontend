import { Box, Modal } from "@mui/material";
import { useSelector } from "react-redux";
import type { RootState } from "../../store/appStore";
import { StethoscopeIcon, X } from "lucide-react";
import { Button } from "../Memorial/Button";
import type React from "react";
import type { FavouriteType } from "../../@types/favourite.type";
import { useState } from "react";
import { useFavourite } from "../../hook/useFavourite";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "90%",
  maxWidth: 800,
  bgcolor: "background.paper",
  boxShadow: 24,
  outline: "none",
  overflowY: "auto",
};

type ValuesType = { question: string; answer: string };

interface AddFavouriteModalProps {
  open: boolean;
  setOpen: (value: boolean) => void;
  setData: React.Dispatch<React.SetStateAction<FavouriteType>>;
}

export const AddFavouriteModal = ({
  open,
  setOpen,
  setData,
}: AddFavouriteModalProps) => {
  const { updateFavourite } = useFavourite();
  const [loading, setLoading] = useState<boolean>(false);
  const [values, setValues] = useState<ValuesType>({
    question: "",
    answer: "",
  });
  const accentColor = useSelector(
    (store: RootState) => store.memorial.accentColor,
  );
  const textColor = useSelector((store: RootState) => store.memorial.textColor);

  const handleValues = (key: keyof ValuesType, value: string) => {
    setValues((prev) => ({ ...prev, [key]: value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    try {
      const response = await updateFavourite(values);
      setData(response);
      setOpen(false);
      setValues({
        question: "",
        answer: "",
      });
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Modal open={open} onClose={() => setOpen(false)}>
      <Box sx={style}>
        <div className="p-4 flex items-center justify-between border-b border-gray-300">
          <h1
            className="text-2xl font-[Spectral]"
            style={{ color: accentColor }}
          >
            Add your Favourite here
          </h1>
          <span className="cursor-pointer" onClick={() => setOpen(false)}>
            <X color="gray" size={28} strokeWidth={2} />
          </span>
        </div>
        <form
          className="py-5 px-6.25 flex flex-col gap-3"
          onSubmit={handleSubmit}
        >
          <div>
            <label
              htmlFor="question"
              className="text-sm font-[Poppins] font-medium"
              style={{ color: accentColor }}
            >
              Question:
            </label>
            <input
              id="question"
              type="text"
              className="px-3 py-1.5 w-full font-[Poppins] border border-dashed border-gray-300 text-sm outline-none"
              placeholder="Your Question here"
              style={{
                color: textColor,
              }}
              value={values.question}
              onChange={(e) => handleValues("question", e.target.value)}
            />
          </div>
          <div>
            <label
              htmlFor="answer"
              className="text-sm font-[Poppins] font-medium"
              style={{ color: accentColor }}
            >
              Answer:
            </label>
            <textarea
              id="answer"
              placeholder="Your Response Here"
              className="px-3 py-1.5 w-full font-[Poppins] border border-dashed border-gray-300 text-sm outline-none"
              style={{
                color: textColor,
              }}
              value={values.answer}
              onChange={(e) => handleValues("answer", e.target.value)}
            ></textarea>
          </div>
          <div className="flex justify-end">
            <Button
              disable={loading}
              loading={loading}
              type="submit"
              text="Add Favourite"
              onClick={() => handleSubmit}
              className="text-[16px] py-2.5 px-6"
            />
          </div>
        </form>
      </Box>
    </Modal>
  );
};
