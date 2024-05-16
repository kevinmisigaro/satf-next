"use client";

import SubPageLayout from "@/components/layouts/SubPageLayout";

function Page() {
  return (
    <SubPageLayout
      headerTitle="Household Economic Empowerment"
      bannerImage="/assets/banners/pic33-Irene-MginaSongea-ok.jpg"
    >
      <div className="max-w-6xl mx-auto p-4">
        <p>
          The Trust capacitates MVC Care givers with the knowledge and skills on
          Income Generation Activities and facilitates them to establish income
          generation activities to reduce household economic vulnerability.
          <br />
          <br />
          Key interventions under household economic empowerment includes
          trainings on income generation activities, provision of seed capital
          and soft loans to established Saving and loaning groups
          <br />
          <br />
          Between 2009 and 2021, more than 1,000 MVC Households has been reached
          with household economic strengthening interventions
        </p>

        <div className="my-5 grid grid-cols-1 md:grid-cols-2">
          <img src="/assets/overral/goats.png" className="max-w-md" />
          <img
            src="/assets/overral/Established-Household-Garden-for-IGA-and-Family-Nutrition-scaled.jpg"
            className="max-w-md"
          />
        </div>
      </div>
    </SubPageLayout>
  );
}

export default Page;
