import { Brush, Globe, Pencil, Lock, Share2, Scan } from "lucide-react";
import Image1 from "../assets/image1.png";
import Image2 from "../assets/image2.png";
import Image3 from "../assets/image3.png";
import Image4 from "../assets/image4.png";
import Image5 from "../assets/image5.png";
import Image6 from "../assets/image6.png";
import type { CardType } from "../@types/Card.type";

const data = [
  {
    id: 1,
    title: "Choose a Design",
    desc: "Select your design from either the male or female design templates.. or if this is for your furry friend try our speciality animal design.",
    icon: Brush,
    image: Image1,
  },
  {
    id: 2,
    title: "Start the story..",
    desc: "Add your loved one's name, date of birth & passing, and where they lived and died. Upload a photo, and start to write their always here story.",
    icon: Pencil,
    image: Image2,
  },
  {
    id: 3,
    title: "Get your very own website address",
    desc: "Create a unique web address for your memorial like: www.always-here.co.uk/tom-freddy.",
    icon: Globe,
    image: Image3,
  },
  {
    id: 4,
    title: "Keep your page private",
    desc: "You have the option to add a password to your Memorial page to maintain privacy, or you can leave it open for everyone to view and share",
    icon: Lock,
    image: Image4,
  },
  {
    id: 5,
    title: "Share your page",
    desc: "Share your Online Memorial on Social Media (Facebook, Twitter) or send it directly via WhatsApp, Messenger, or E-mail.",
    icon: Share2,
    image: Image5,
  },
  {
    id: 6,
    title: "Unique QR Code",
    desc: "Order a QR code for your digital memorial page that can be scanned with a smartphone. When someone scans the code, it instantly opens your Always-Here memorial page. This provides easy access to a permanent, interactive memorial, allowing loved ones to engage with and share your loved ones legacy",
    icon: Scan,
    image: Image6,
  },
];

export const HowItWork = () => {
  return (
    <div>
      <div className="flex flex-col items-center justify-center">
        <h1 className="text-(--primary-color) font-[Spectral] text-center text-[40px] font-light mb-2 max-md:text-[28px] max-md:font-semibold">
          How Does It Work
        </h1>
        <div className="h-0.5 bg-gray-300 w-24"></div>
      </div>
      {data.map((item) => {
        return <Card data={item} />;
      })}
    </div>
  );
};

interface CardProps {
  data: CardType;
}

const Card = ({ data }: CardProps) => {
  const Icon = data.icon;
  return (
    <>
      {data.id % 2 !== 0 ? (
        <div className="mt-10 grid grid-cols-12 gap-10 items-center">
          <div className="col-span-6 flex flex-col items-start max-lg:col-span-12">
            <span className="mb-3 bg-(--primary-color) p-4 rounded-full flex items-center justify-center">
              <Icon color="white" />
            </span>
            <h1 className="text-[36px] font-[Spectral] text-(--primary-color) mb-5 font-light">
              {data.title}
            </h1>
            <p className="font-[Poppins] text-[16px] text-(--secondary-color)">
              {data.desc}
            </p>
          </div>
          <div className="col-span-6 max-lg:col-span-12">
            <img
              src={data.image}
              className="w-full h-full object-cover rounded-lg"
            />
          </div>
        </div>
      ) : (
        <div className="mt-10 grid grid-cols-12 gap-10 items-center">
          <div className="col-span-6 max-lg:col-span-12 max-lg:order-2">
            <img
              src={data.image}
              className="w-full h-full object-cover rounded-lg"
            />
          </div>

          <div className="col-span-6 flex flex-col items-start max-lg:col-span-12 max-lg:order-1">
            <span className="mb-3 bg-(--primary-color) p-4 rounded-full flex items-center justify-center">
              <Icon color="white" />
            </span>
            <h1 className="text-[36px] font-[Spectral] text-(--primary-color) mb-5 font-light">
              {data.title}
            </h1>
            <p className="font-[Poppins] text-[16px] text-(--secondary-color)">
              {data.desc}
            </p>
          </div>
        </div>
      )}
    </>
  );
};
