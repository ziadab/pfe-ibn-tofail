export const ProgramCards = ({ title, imgLink }: ProgramCardsProps) => {
  return (
    <div className="w-full h-full">
      <div className="h-56">
        <img src={imgLink} alt="img" className="w-full h-full object-cover" />
      </div>
      <p className="font-sans font-semibold">{title}</p>
    </div>
  );
};

export interface ProgramCardsProps {
  title: string;
  imgLink: string;
}
