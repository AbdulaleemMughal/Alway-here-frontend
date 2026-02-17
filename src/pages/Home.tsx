import { Brush, Users, Pencil, Scan } from "lucide-react";
import { Button } from "../UI/Button";
import type { CardType } from "../@types/Card.type";
import { HowItWork } from "../shared/HowItWork";
import { WhyUseAlway } from "../shared/WhyUseAlway";
import { useNavigate } from "react-router-dom";

const qualityItems = [
  {
    id: 1,
    title: "Modern & Sophisticated",
    desc: "Professionally designed templates that look stunning on any device.",
    icon: Brush,
  },
  {
    id: 2,
    title: "Share & Smile",
    desc: "Allow friends and family to share photos and messages from fun times together.",
    icon: Users,
  },
  {
    id: 3,
    title: "Highly Customizable",
    desc: "Choose colours, add photos and videos, and customize the layout easily. It takes 5 mins to set up and customize.",
    icon: Pencil,
  },
  {
    id: 4,
    title: "QR Memorial Code",
    desc: "A specially generated code that can be placed on headstones, plaques, and memorial benches, when scanned it will load your memorial page.",
    icon: Scan,
  },
];

export const Home = () => {

  const navigate = useNavigate();

  return (
    <>
      <div className="py-20 px-10 flex items-center justify-center gap-20 bg-[#f2f2f2] max-sm:px-6">
        <div className="flex flex-col items-center">
          <h6 className="font-[Poppins] text-[14px] leading-4 tracking-wider text-[#b883e2] mb-5">
            Keep Their Memory Alive...
          </h6>
          <h1 className="text-(--primary-color) font-[Spectral] text-center text-[46px] font-light mb-5 max-md:text-[28px] max-md:font-medium">
            Elegant and Personalized Memorial <br /> Websites
          </h1>
          <p className="text-[16px] font-[Poppins] text-(--secondary-color) text-center max-md:text-[14px]">
            Create a beautiful, timeless online tribute to celebrate your loved{" "}
            <br />
            one's life. Share their story, photos, and special moments and
            invite <br />
            friends and family to share their memories.
          </p>
          <Button text="Get Started" className="mt-5" onClick={() => navigate('/design')} />
        </div>
      </div>
      <div className="my-10 mx-56.75 px-10 max-sm:px-6 max-2xl:mx-40 max-xl:mx-30 max-lg:mx-10 max-md:mx-0">
        <div className="grid grid-cols-12 gap-4">
          {qualityItems.map((item) => (
            <Card data={item} key={item.id} />
          ))}
        </div>
        <div className="my-20">
          <HowItWork />
        </div>
        <div className="my-20">
          <WhyUseAlway />
        </div>
      </div>
    </>
  );
};

interface CardProps {
  data: CardType;
}

const Card = ({ data }: CardProps) => {
  const Icon = data.icon;
  return (
    <div className="col-span-3 p-5 flex flex-col items-center justify-center shadow-xl max-lg:col-span-6 max-sm:col-span-12">
      <Icon
        size={40}
        strokeWidth={1.25}
        className="text-(--primary-color) mb-4"
      />
      <h5 className="text-[22px] font-[Poppins] text-(--primary-color) text-center mb-2">
        {data.title}
      </h5>
      <p className="text-[15px] text-(--secondary-color) font-[Poppins] text-center mb-4">
        {data.desc}
      </p>
    </div>
  );
};
