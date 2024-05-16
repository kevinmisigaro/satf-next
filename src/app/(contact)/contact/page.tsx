"use client";

import SubPageLayout from "@/components/layouts/SubPageLayout";
import {
  FaFacebook,
  FaInstagram,
  FaSquareXTwitter,
  FaLinkedin,
} from "react-icons/fa6";

function Page() {
  return (
    <SubPageLayout
      headerTitle="Contact"
      bannerImage="/assets/banners/pexels-element-digital-1550337.jpg"
    >
      <div className="max-w-6xl mx-auto p-4">
        <div className="bg-satfDarkBlue text-white px-5 md:px-10 py-16">
          <h3 className="font-semibold text-3xl text-center">Social Media</h3>
          <div className="mt-10 flex flex-row justify-center text-4xl gap-x-10 gap-y-4">
            <FaFacebook />
            <FaInstagram />
            <FaSquareXTwitter />
            <FaLinkedin />
          </div>
        </div>
      </div>
    </SubPageLayout>
  );
}

export default Page;
