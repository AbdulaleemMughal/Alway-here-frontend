import { useParams } from "react-router-dom";
import { Banner } from "../components/Memorial/Banner";
import { UserDetail } from "../components/Memorial/UserDetail";
import { useMemorial } from "../hook/useMemorial";
import { useEffect, useState } from "react";
import type { MemorialType } from "../@types/memorial.type";
import { Loader } from "lucide-react";
import { Header } from "../components/Memorial/Header";
import { Video } from "../components/Memorial/Video";

export const Memorial = () => {
  const { getMemorialById } = useMemorial();
  const { memorialId } = useParams();
  const [loading, setLoading] = useState<boolean>(true);
  const [memorialData, setMemorialData] = useState<MemorialType>(
    {} as MemorialType,
  );

  useEffect(() => {
    const fetchMemorial = async () => {
      if (memorialId) {
        const data = await getMemorialById(memorialId);
        setMemorialData(data);
        setLoading(false);
      }
    };

    fetchMemorial();
  }, [memorialId]);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <Loader size={60} className="animate-spin" color="#7454a9" />
      </div>
    );
  }

  return (
    <div
      style={{
        backgroundColor: memorialData.backgroundColor,
      }}
    >
      <Banner data={memorialData} />
      <div className="relative bottom-16 flex justify-center">
        <UserDetail data={memorialData} />
      </div>
      <div>
        <Header />
      </div>
      <div className="mx-auto max-w-6xl max-lg:px-5">
        <section id="#videos">
          <Video />
        </section>
      </div>
    </div>
  );
};
