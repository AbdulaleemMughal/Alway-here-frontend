import { useParams } from "react-router-dom";
import { Banner } from "../components/Memorial/Banner";
import { UserDetail } from "../components/Memorial/UserDetail";
import { useMemorial } from "../hook/useMemorial";
import { useEffect } from "react";

export const Memorial = () => {
  const { getMemorialById } = useMemorial();
  const { memorialId } = useParams();

  useEffect(() => {
    const fetchMemorial = async () => {
      if (memorialId) {
        await getMemorialById(memorialId);
      }
    };

    fetchMemorial();
  }, [memorialId]);

  return (
    <>
      <Banner />
      <div className="relative bottom-16 flex justify-center">
        <UserDetail />
      </div>
    </>
  );
};