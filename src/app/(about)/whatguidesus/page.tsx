"use client"

import GuideCard from "@/components/guideCards";
import SubPageLayout from "@/components/layouts/SubPageLayout";

function Page() {
  return (
    <SubPageLayout
      headerTitle="What Guides Us"
      bannerImage="/assets/banners/direction.jpeg"
    >
      <div className="max-w-6xl mx-auto p-4">
        <p>
          The Trust activities are aligned with the International and local
          policies and guidelines such as:
        </p>

        <div className="my-5 grid grid-cols-1 md:grid-cols-2">
          <GuideCard
            image="/assets/guides/SDG.png"
            title="Sustainable Development Goals"
          />
          <GuideCard
            image="/assets/guides/tanzaniadevelopmentvision-300x300.jpeg"
            title="Tanzania Development Vision 2025"
          />
        </div>

        <p>Also guided by the following national guidelines:</p>

        <div className="my-5 grid grid-cols-3 md:grid-cols-2 gap-y-6">
          <GuideCard
            image="/assets/guides/NCP.png"
            title="National Coasted Plan of Action for Most Vulnerable Children (NCPAI & II)"
          />
          <GuideCard
            image="/assets/guides/NGI.png"
            title="National Guidelines for Improving Quality of Care, Support, and Protection for Most Vulnerable Children in Tanzania (2009)"
          />
          <GuideCard
            image="/assets/guides/NPA.png"
            title="National Plan of Action to end Violence against Women and Children in Tanzania (2018/2022)"
          />
          <GuideCard
            image="/assets/guides/NAA.png"
            title="National Accelerated Action and Investment Agenda for Adolescent Health and Wellbeing 2021/22 – 2024/25"
          />
          <GuideCard
            image="/assets/guides/TMN.png"
            title="Tanzania National Multi-Sectoral HIV and AIDS Strategic Framework (NMSF IV)"
          />
        </div>
      </div>
    </SubPageLayout>
  );
}

export default Page;
