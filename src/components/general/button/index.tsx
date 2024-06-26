"use client";

import { useRouter } from "next/navigation";

const Button = ({ name, link }: { name: string; link: string }) => {
  const router = useRouter();
  return (
    <a
      onClick={() => router.push(link)}
      className={`btn bg-satfDarkBlue border-satfDarkBlue text-white px-10 hover:bg-satfDarkBlue rounded-3xl`}
    >
      {name}
    </a>
  );
};

export default Button;
