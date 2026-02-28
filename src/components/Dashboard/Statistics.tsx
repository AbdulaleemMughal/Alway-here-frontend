import { StatisticsCard } from "../../shared/StatisticsCard";

export const Statistics = () => {
  return (
    <section id="statistics" className="bg-[#f9fafb]">
      <div className="py-5 max-w-7xl mx-auto max-lg:px-5">
        <div className="grid grid-cols-12 gap-3">
          <StatisticsCard
            title="Photo Gallery"
            value="1"
            description="Number of photos, including 0 from guests."
          />
          <StatisticsCard
            title="Memory Wall"
            value="2"
            description="Number of posts."
          />
          <StatisticsCard
            title="Videos"
            value="0"
            description="Number of videos in this section."
          />
        </div>
      </div>
    </section>
  );
};
