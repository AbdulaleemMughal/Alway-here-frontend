interface SocialMediaCardProps {
  name: string;
  icon: React.ElementType;
}

export const SocialMediaCard = ({ name, icon: Icon }: SocialMediaCardProps) => {
  return (
    <div className="py-4 px-5 flex items-center gap-5 rounded-sm cursor-pointer shadow-(--shadow-sm)">
      <span className="text-(--primary-color)">
        <Icon size={18} />
      </span>
      <h3 className="text-[20px] font-[Spectral] text-(--secondary-color) font-semibold">
        {name}
      </h3>
    </div>
  );
};
