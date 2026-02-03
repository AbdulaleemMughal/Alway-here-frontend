import { MessagesSquare } from "lucide-react";
import { Banner } from "../components/Banner";
import { Accordian } from "../UI/Accordion";
import { useState } from "react";

const faqs = [
  {
    id: 1,
    question: "What is Online Memorial?",
    answer:
      "An online memorial is a digital space dedicated to honoring and preserving the memory of a loved one who has passed away. It allows family and friends to share stories, photos, videos, and personal tributes, creating a lasting and interactive tribute that can be accessed and updated from anywhere. This virtual memorial provides a way for people to come together, even across distances, to celebrate and remember the life and legacy of the deceased.",
  },
  {
    id: 2,
    question: "Do you display ads on Memorial pages?",
    answer:
      "We are committed to maintaining the sanctity and respect of your loved one's memory, which is why we will never display ads on your memorial page. Our priority is to provide a peaceful, ad-free space where you and others can honor and remember your loved one without distraction.",
  },
  {
    id: 3,
    question: "How long will the Memorial website stay online?",
    answer:
      "Your memorial page will remain live for as long as our website is active. We are dedicated to ensuring that your loved one's tribute endures, offering a lasting space for remembrance and reflection for years to come..",
  },
  {
    id: 4,
    question: "How can I share the Memorial page with others?",
    answer:
      "You can easily share your memorial page with others through social media, WhatsApp, email, and Messenger. This allows friends and family to connect, view, and contribute to the tribute, no matter where they are.",
  },
];

export const FAQ = () => {
  const [openId, setOpenId] = useState<number | null>(null);

  const toggleId = (id: number) => {
    setOpenId(openId === id ? null : id);
  };
  console.log(openId);
  return (
    <>
      <Banner title="Frequently Asked Questions" desc="Need Help?" />
      <div className="px-60.75 max-2xl:px-40 max-xl:px-30 max-lg:px-10 max-sm:px-6">
        <div className="mt-30 flex flex-col items-center">
          <span>
            <MessagesSquare
              size={40}
              strokeWidth={1.5}
              className="text-(--primary-color)"
            />
          </span>
          <p className="text-(--secondary-color) text-[16px] font-[Poppins] text-center my-5">
            Need help using Always-here? Find the most frequent questions /
            answers below. <br /> Please also don't hesitate to Contact Us for
            any further help.
          </p>
          <div className="w-25 h-0.5 bg-gray-300 "></div>
        </div>
        <div className="mb-30">
          {faqs.map((faq) => (
            <Accordian
              key={faq.id}
              faq={faq}
              open={openId}
              toggleId={toggleId}
            />
          ))}
        </div>
      </div>
    </>
  );
};
