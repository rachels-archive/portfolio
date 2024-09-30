import ArchiveCard from "./ArchiveCard";

export default function Archive() {
  return (
    <div className="max-w-containerSmall mx-auto py-10 lgl:py-32 px-4">
      <div className="w-full flex flex-col items-center">
        <h2 className="text-2xl font-semibold font-titleFont">Other Notable Projects</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 mt-10 lgl:px-10">
        <ArchiveCard />
      </div>
    </div>
  );
}
