"use client";

import SubPageLayout from "@/components/layouts/SubPageLayout";

function Page() {
  return (
    <SubPageLayout
      headerTitle="Special Support"
      bannerImage="/assets/banners/specialsupport.jpeg"
    >
      <div className="max-w-6xl mx-auto p-4">
        <h2 className="text-5xl font-bold mb-4">
          SATF provides donations to support Government efforts in the provision
          of social services such as:
        </h2>

        <ul className="list-disc pl-6 mb-4">
          <li>Donations of School desks and Beddings facilities</li>
          <li>
            Assistive devices for children with special needs such as Braille
            machines, voice recorders, hearing aids, wheelchairs, and
            rehabilitation services such as Physio, Occupational and
            Speech/Language therapies
          </li>
        </ul>

        <div className="mt-6 grid grid-cols-1 md:grid-cols-2">
          <img src="/assets/overral/CHATO-scaled.jpg" className="max-w-md" />
          <img
            src="/assets/overral/Special-Support-1-scaled.jpg"
            className="max-w-md"
          />
        </div>
      </div>
    </SubPageLayout>
  );
}

export default Page;
