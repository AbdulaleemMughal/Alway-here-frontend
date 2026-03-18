import { useParams } from "react-router-dom";
import { useMemorial } from "../hook/useMemorial";
import { useEffect, useState } from "react";
import type { MemorialType } from "../@types/memorial.type";

export const LivePage = () => {
  const { memorialId } = useParams();
  const { getMemorialById } = useMemorial();
  const [data, setData] = useState<MemorialType>({} as MemorialType);

  useEffect(() => {
    const fetchDetail = async () => {
      try {
        const response = await getMemorialById(memorialId as string);
        setData(response);
      } catch (err) {
        console.log(err);
      }
    };

    fetchDetail();
  }, [memorialId]);

  return (
    <h1>
      {memorialId}
      <p>memorial page is {data.isActive ? "true" : "false"}</p>
    </h1>
  );
};
