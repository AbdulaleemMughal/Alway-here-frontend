import { useParams } from "react-router-dom";
import { Header } from "../components/Dashboard/Header";
import { MemorialDetail } from "../components/Dashboard/MemorialDetail";
import { ShareYourPage } from "../components/Dashboard/ShareYourPage";
import { Statistics } from "../components/Dashboard/Statistics";
import { useEffect, useState } from "react";
import { useMemorial } from "../hook/useMemorial";
import type { MemorialType } from "../@types/memorial.type";
import { Loader } from "lucide-react";

export const Dashboard = () => {
  const { memorialId } = useParams();
  const { getMemorialById } = useMemorial();
  const [loading, setLoading] = useState<boolean>(true);
  const [memorialData, setMemorialData] = useState<MemorialType>(
    {} as MemorialType,
  );

  useEffect(() => {
    if (memorialId) {
      const fetchMemorial = async () => {
        const data = await getMemorialById(memorialId);
        setMemorialData(data);
        setLoading(false);
      };
      fetchMemorial();
    }
  }, [memorialId]);

  if (loading) {
    return (
      <div className="flex items-center justify-center h-screen">
        <Loader size={60} className="animate-spin" color="#7454a9" />
      </div>
    );
  }

  return (
    <>
      <Header memorialData={memorialData} />
      <MemorialDetail memorialData={memorialData} />
      <ShareYourPage />
      <Statistics
        totalVideos={memorialData.totalVideos}
        totalTimelines={memorialData.totalTimelines}
      />
    </>
  );
};
