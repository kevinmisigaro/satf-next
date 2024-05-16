"use client";

import SubPageLayout from "@/components/layouts/SubPageLayout";

function Page() {
  return (
    <SubPageLayout
      headerTitle="Child Protection and Advocacy"
      bannerImage="/assets/overral/Participant-participating-in-a-discussion-during-Focal-Teachers-Training-on-Child-Protection-in-Ruvuma-scaled.jpg"
    >
      <div className="max-w-6xl mx-auto p-4">
        <div className="grid grid-cols-1 md:grid-cols-2 mb-10">
          <img
            src="/assets/overral/Participant-participating-in-a-discussion-during-Focal-Teachers-Training-on-Child-Protection-in-Ruvuma-scaled.jpg"
            className="max-w-md"
          />
          <p>
            Protecting children for violence, exploitation and abuse is an
            integral component of protecting their rights to survival, growth
            and development. SATF is committed to advocate and support the
            creation of protective environment for children. Under this
            category, areas of focus include:
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 mb-5 items-center gap-x-10">
          <div>
            <h2 className="text-2xl font-bold mb-4">
              Child Protection Programs
            </h2>
            <ul className="list-disc pl-6 mb-4">
              <li>
                Programs that provide legal support to MVC, especially
                child-headed households.
              </li>
              <li>Programs that advocate for children&apos;s rights.</li>
              <li>
                Initiatives that advocate against harmful customs and traditions
                that affect a girl child.
              </li>
              <li>
                Programs that offer psychosocial support and counseling to
                abused children.
              </li>
              <li>
                Community-based approaches to protecting children, supporting,
                and strengthening families.
              </li>
            </ul>
            <p className="mb-4">
              This program aims to advocate for children&apos;s rights at all
              levels, from grassroots to national level. SATF has worked with
              TAWIFI in Handeni district, Tanga region, and Huruma Women Group
              (HWG) in Dodoma Municipality in Dodoma region on child protection
              through trainings. Currently, the trust is implementing a
              Tuwalinde Child Protection project in Ruvuma through GSM under the
              financial support from PEPFAR/AFHR. However, the Trust has
              integrated child protection interventions under all core support
              interventions.
            </p>
          </div>
          <img src="/assets/overral/white-bike.jpeg" className="max-w-md" />
        </div>
      </div>
    </SubPageLayout>
  );
}

export default Page;
