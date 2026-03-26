import { StatisticsCard } from "../../shared/StatisticsCard";

interface StatisticsProps {
  totalVideos: number;
  totalTimelines: number;
}

export const Statistics = ({
  totalVideos,
  totalTimelines,
}: StatisticsProps) => {
  return (
    <section id="statistics" className="bg-[#f9fafb]">
      <div className="py-5 max-w-7xl mx-auto max-lg:px-5">
        <div className="grid grid-cols-12 gap-3">
          <StatisticsCard
            title="Photo Gallery"
            value={1}
            description="Number of photos, including 0 from guests."
            name="Photos"
          />
          <StatisticsCard
            title="Memory Wall"
            value={2}
            description="Number of posts."
            name="Memories"
          />
          <StatisticsCard
            title="Videos"
            value={totalVideos}
            description="Number of videos in this section."
            name="Videos"
          />
          <StatisticsCard
            title="Timeline"
            value={totalTimelines}
            description="Number of timeline in this section."
            name="Timelines"
          />
        </div>
      </div>
    </section>
  );
};
