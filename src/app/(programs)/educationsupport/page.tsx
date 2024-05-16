"use client"

import SubPageLayout from "@/components/layouts/SubPageLayout"

function Page() {
  return (
    <SubPageLayout headerTitle="Education Support" bannerImage="/assets/banners/teamofoffice.jpeg">
        <p>
        Currently the Trust works with 12 Local CSOs, 36 districts in 18 Region of Tanzania. Since its inception, SATF has reached more than 200,000 beneficiaries under education intervention in Tanzania
        </p>
        <div className="mt-5 grid grid-cols-1 md:grid-cols-2">
            <img src="/assets/overral/Graduate.jpeg" className="max-w-md" />
            <img src="/assets/overral/builders.jpeg" className="max-w-md" />
        </div>
    </SubPageLayout>
  )
}

export default Page