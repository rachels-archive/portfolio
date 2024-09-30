interface SectionTitleProps {
  title: string;
  sectionNum: string;
}

export default function SectionTitle({ title, sectionNum }: SectionTitleProps) {
  return (
    <div>
      <h2 className="font-titleFont text-2xl font-semibold flex items-center">
        <span className="text-base md:text-lg text-textGreen mr-2">{sectionNum}</span>
        {title}
        <span className="hidden md:inline-flex md:w-60 lgl:w-72 h-[.5px] bg-gray-700 ml-6"></span>
      </h2>
    </div>
  );
}
