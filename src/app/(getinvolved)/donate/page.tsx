import DonateCard from "@/components/donateCard";
import SubPageLayout from "@/components/layouts/SubPageLayout";
import React from "react";

function Page() {
  return (
    <SubPageLayout
      headerTitle="Donate"
      bannerImage="/assets/overral/pexels-kindel-media-7298844.jpg"
    >
      <div className="max-w-6xl mx-auto p-4">
        <div className="grid grid-cols-1 gap-y-5 gap-x-5 md:grid-cols-3">
          <DonateCard
            cols="#fa575d"
            content="For just TZS 200,000( USD 88) you can support one child to access secondary school education for day secondary schools by paying school fees and provide scholastic materials"
          />
          <DonateCard
            cols="#3ac799"
            content="For just TZS54,000(25USD) annually you can support a girl to remain in school by providing sanitary pads for menstrual hygiene"
          />
          <DonateCard
            cols="#369ff4"
            content="For just TZS 50,400(USD 22) you can save a child's life by providing health services to the disadvantaged child in Tanzania per year"
          />
          <DonateCard
            cols="#9064bf"
            content="For just TZS 250,000 (USD 110) you can provide a family startup capital to start their own income generating activities which will support the family and MVC sustainably"
          />
          <DonateCard
            cols="#57c7fa"
            content="For just TZS 650,000 (USD 280) you can transform a child to become a productive member of the society, by providing vocational training for entrepreneurship skills training and start up tool to start their own income generating activities"
          />
        </div>
      </div>
    </SubPageLayout>
  );
}

export default Page;
