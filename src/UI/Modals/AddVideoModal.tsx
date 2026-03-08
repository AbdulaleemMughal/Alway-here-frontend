import { Box, Modal } from "@mui/material";
import { X } from "lucide-react";
import { useSelector } from "react-redux";
import type { RootState } from "../../store/appStore";
import { Input } from "../Input";
import { Button } from "../Memorial/Button";
import { useState } from "react";
import { useVideo } from "../../hook/useVideo";
import type { VideoType } from "../../@types/video.type";

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

interface AddVideoModalProps {
  open: boolean;
  setOpen: (value: boolean) => void;
  setData: React.Dispatch<React.SetStateAction<VideoType>>;
}

export const AddVideoModal = ({
  open,
  setOpen,
  setData,
}: AddVideoModalProps) => {
  const { updateVideo } = useVideo();
  const [videoUrl, setVideoUrl] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const accentColor = useSelector(
    (store: RootState) => store.memorial.accentColor,
  );

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    try {
      await updateVideo({ videoUrl: videoUrl }).then((response) => {
        setData(response);
      });
      setVideoUrl("");
      setOpen(false);
    } catch (error) {
      console.log(error);
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
            Add a Video
          </h1>
          <span className="cursor-pointer" onClick={() => setOpen(false)}>
            <X color="gray" size={28} strokeWidth={2} />
          </span>
        </div>
        <div className="py-5 px-6.25 flex flex-col">
          <form className="flex flex-col gap-2" onSubmit={handleSubmit}>
            <label className="text-base font-[Poppins]">Youtube URL</label>
            <Input
              type="text"
              value={videoUrl}
              className="py-3"
              onChange={(e) => setVideoUrl(e.target.value)}
              placeholder="Enter the Email address of your video"
            />
            <p className="mb-2 pb-3 text-base font-[Poppins] border-b border-gray-300">
              The format should be like{" "}
              <span className="underline">
                https://www.youtube.com/watch?v=JGwWNGJdvx
              </span>
            </p>
            <div className="py-3 flex justify-end">
              <Button
                disable={!videoUrl || loading}
                text="Submit"
                className="text-[16px] py-2.5 px-6"
                onClick={() => handleSubmit}
              />
            </div>
          </form>
        </div>
      </Box>
    </Modal>
  );
};
