import { useEffect, useState } from "react";
import { useVideo } from "../../hook/useVideo";
import { InputAndSwitch } from "../../shared/InputAndSwitch";
import {
  type UpdateVideoPayload,
  type VideoType,
} from "../../@types/video.type";
import ReactPlayer from "react-player";
import { FaTrash } from "react-icons/fa";
import { Button } from "../../UI/Memorial/Button";
import { AddVideoModal } from "../../UI/Modals/AddVideoModal";
import { useParams } from "react-router-dom";

export const Video = () => {
  const { memorialId } = useParams();
  const { getAllVideos, deleteVideo, updateVideo } = useVideo();
  const [openModal, setOpenModal] = useState<boolean>(false);
  const [videos, setVideos] = useState<VideoType>({} as VideoType);

  useEffect(() => {
    const fetchVideos = async () => {
      const data = await getAllVideos();
      setVideos(data);
    };

    fetchVideos();
  }, [deleteVideo, memorialId]);

  const handleDelete = async (id: string) => {
    try {
      await deleteVideo(id).then((response) => {
        setVideos(response);
      });
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div>
      <InputAndSwitch<VideoType, UpdateVideoPayload>
        data={videos}
        setData={setVideos}
        updateSection={updateVideo}
      />
      {videos?.isActive && (
        <>
          <div className="grid grid-cols-12 gap-3">
            {videos?.videos?.map((video) => {
              return (
                <div
                  key={video._id}
                  className="col-span-6 relative max-md:col-span-12"
                >
                  <ReactPlayer
                    controls={true}
                    src={video.url}
                    style={{
                      width: "100%",
                      height: "280px",
                    }}
                  />
                  <div
                    className="p-1.5 absolute top-5 right-6 rounded-full z-9999 cursor-pointer hover:bg-gray-600"
                    onClick={() => handleDelete(video._id)}
                  >
                    <FaTrash color="white" />
                  </div>
                </div>
              );
            })}
          </div>

          <Button
            text="Add Videos"
            className="text-[16px] mt-12 px-6 py-2.5"
            onClick={() => setOpenModal(true)}
          />
        </>
      )}
      <AddVideoModal
        open={openModal}
        setOpen={setOpenModal}
        setData={setVideos}
      />
    </div>
  );
};
