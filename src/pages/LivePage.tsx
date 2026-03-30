import { useParams } from "react-router-dom";
import { useMemorial } from "../hook/useMemorial";
import { useEffect, useState } from "react";
import type { MemorialType } from "../@types/memorial.type";
import { UserDetail } from "../components/LivePage/UserDetail";
import { useSelector } from "react-redux";
import type { RootState } from "../store/appStore";
import { Header } from "../components/Memorial/Header";
import { MyStory } from "../components/LivePage/MyStory";
import { Favourite } from "../components/LivePage/Favourite";
import { Timeline } from "../components/LivePage/Timeline";
import { Loader2 } from "lucide-react";

export const LivePage = () => {
  const { memorialId } = useParams();
  const { getMemorialById } = useMemorial();
  const { textColor, backgroundColor } = useSelector(
    (store: RootState) => store.memorial,
  );
  const [data, setData] = useState<MemorialType>({} as MemorialType);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchDetail = async () => {
      try {
        const response = await getMemorialById(memorialId as string);
        setData(response);
      } catch (err) {
        console.log(err);
      } finally {
        setLoading(false);
      }
    };

    fetchDetail();
  }, [memorialId]);

  if(loading) {
    return (
      <div
        style={{ backgroundColor: backgroundColor }}
        className="h-screen flex justify-center items-center"
      >
        <Loader2 size={60} className="animate-spin" color={textColor} />
      </div>
    )
  }

  if (data.isActive) {
    return (
      <div
        style={{ backgroundColor: backgroundColor }}
        className="h-screen flex justify-center items-center"
      >
        <h1
          style={{
            color: textColor,
          }}
          className="text-4xl font-[Poppins]"
        >
          Sorry, this page is unavailable right now.
        </h1>
      </div>
    );
  }

  return (
    <div
      style={{
        backgroundColor: backgroundColor,
      }}
    >
      <UserDetail data={data} />
      <div>
        <Header />
      </div>
      <div className="mx-auto max-w-6xl max-lg:px-5">
        <section id="#obituary">
          <MyStory />
        </section>
        <section id="#favourite">
          <Favourite />
        </section>
        <section id="#timeline">
          <Timeline />
        </section>
      </div>
    </div>
  );
};
