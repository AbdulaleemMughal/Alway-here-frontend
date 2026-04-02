import { useParams } from "react-router-dom";
import { Banner } from "../components/Memorial/Banner";
import { UserDetail } from "../components/Memorial/UserDetail";
import { useMemorial } from "../hook/useMemorial";
import { useEffect, useState } from "react";
import type { MemorialType } from "../@types/memorial.type";
import { Loader } from "lucide-react";
import { Header } from "../components/Memorial/Header";
import { Video } from "../components/Memorial/Video";
import { useSelector } from "react-redux";
import type { RootState } from "../store/appStore";
import { Timeline } from "../components/Memorial/Timeline";
import { Favourite } from "../components/Memorial/Favourite";
// import { Obituary } from "../components/Memorial/Obituary";
import { FamilyTree } from "../components/Memorial/FamilyTree";

export const Memorial = () => {
  const { getMemorialById } = useMemorial();
  const { memorialId } = useParams();
  const [loading, setLoading] = useState<boolean>(true);
  const [memorialData, setMemorialData] = useState<MemorialType>(
    {} as MemorialType,
  );

  const { backgroundColor, accentColor } = useSelector(
    (store: RootState) => store.memorial,
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
        backgroundColor: backgroundColor,
        scrollbarColor: accentColor + " transparent",
        scrollbarWidth: "thin",
      }}
    >
      <Banner data={memorialData} />
      <div className="relative bottom-16 flex justify-center">
        <UserDetail data={memorialData} setData={setMemorialData} />
      </div>
      <div>
        <Header />
      </div>
      <div className="mx-auto max-w-6xl max-lg:px-5">
        <section id="#videos">
          <Video />
        </section>
        <section id="#favourite">
          <Favourite />
        </section>
        {/* <section id="#obituary">
          <Obituary />
        </section> */}
        <section id="#timeline">
          <Timeline />
        </section>
        <section id="#familytree">
          <FamilyTree />
        </section>
      </div>
    </div>
  );
};
