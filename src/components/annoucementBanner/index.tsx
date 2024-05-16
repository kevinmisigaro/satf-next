import AnnoucementItem from "./annoucementItem";

function AnnoucementBanner() {
  return (
    <div className="border border-y-1 border-gray-300 flex flex-row w-full items-center">
      <div className="max-w-fit bg-satfGreen px-5 py-2 rounded-l-lg text-white">
        Announcements
      </div>
      <div className="flex flex-row gap-x-5 px-5">
        <AnnoucementItem title="FURSA FURSA" link="/news/fursa" />
      </div>
    </div>
  );
}

export default AnnoucementBanner;
