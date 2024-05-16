"use client";

import SubPageLayout from "@/components/layouts/SubPageLayout";
import Table from "@/components/table";
import {
  criteriaForAccessingGrants,
  howToApplyForFunds,
  interventionSupported,
  whatSATFDoesntFund,
} from "@/utils/collections";

function Page() {
  return (
    <SubPageLayout
      bannerImage="/assets/banners/shake-hands.jpeg"
      headerTitle="Partner With Us"
    >
      <div className="max-w-6xl mx-auto p-4">
        <h2 className="text-2xl font-bold mb-4">Grants</h2>
        <p className="mb-4">
          SATF is working with grassroots organizations through the provision of
          grants managed by the program department. The grants are for
          grassroots civil society organizations working on areas of impact
          mitigation for HIV and AIDS and Poverty.
        </p>
        <h3 className="text-xl font-semibold mb-4">
          Criteria for accessing grants from SATF
        </h3>

        <Table list={criteriaForAccessingGrants} />

        <h3 className="text-xl font-semibold mb-4">
          Intervention supported by SATF
        </h3>

        <Table list={interventionSupported} />

        <h3 className="text-xl font-semibold mb-4">
        What SATF does not fund:
        </h3>
        <p>
        Any project/program whose direct or indirect beneficiaries are not Most Vulnerable Children
        </p>

        <Table list={whatSATFDoesntFund} />

        <h3 className="text-xl font-semibold mb-4">
        How to apply for funds:
        </h3>
        <Table list={howToApplyForFunds} />
      </div>
    </SubPageLayout>
  );
}

export default Page;
