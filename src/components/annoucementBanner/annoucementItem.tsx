import Link from "next/link";

function AnnoucementItem({ title, link }: { title: string; link: string }) {
  return (
    <Link
      href={link}
      className="flex items-center justify-center cursor-pointer"
    >
      <span className="relative inline-flex items-center">
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-satfLightBlue opacity-75"></span>
        <span className="relative inline-flex rounded-full h-3 w-3 bg-satfLightBlue"></span>
        <span className="ml-2 text-satfLightBlue font-bold hover:underline">
          {title}
        </span>
      </span>
    </Link>
  );
}

export default AnnoucementItem;
