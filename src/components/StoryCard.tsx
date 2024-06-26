"use client";

import { useRouter } from "next/navigation";

function StoryCard({
  title,
  excerpt,
  link,
}: {
  title: string;
  excerpt: string;
  link: string;
}) {
  const router = useRouter();

  return (
    <div className="flex flex-col gap-y-6">
      <h4
        onClick={() => router.push(`/stories/posts/${link}`)}
        className="font-bold text-3xl cursor-pointer hover:text-[#065bac]"
      >
        {title}
      </h4>
      <p className="text-base text-justify">{excerpt}</p>
    </div>
  );
}

export default StoryCard;
