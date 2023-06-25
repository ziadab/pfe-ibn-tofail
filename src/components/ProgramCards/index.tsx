import Link from "next/link";

export const ProgramCards = ({ title, imgLink, id }: ProgramCardsProps) => {
  return (
    <Link href={`/program/${id}`}>
      <div className="w-full h-full">
        <div className="h-56">
          <img src={imgLink} alt="img" className="w-full h-full object-cover" />
        </div>
        <p className="font-sans font-semibold">{title}</p>
      </div>
    </Link>
  );
};

export interface ProgramCardsProps {
  title: string;
  imgLink: string;
  id: string | number;
}
