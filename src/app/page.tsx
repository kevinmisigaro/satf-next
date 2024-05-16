"use client";

import AnnoucementBanner from "@/components/annoucementBanner";
import Button from "@/components/general/button";
import Container from "@/components/general/container";
import Header from "@/components/general/header";

export default function Home() {
  return (
    <>
      <div
        className="hero h-[80vh]"
        style={{ backgroundImage: "url(/assets/banners/PIC-NO.3.jpg)" }}
      >
        <div className="hero-overlay bg-opacity-50 bg-black"></div>
        <div className="hero-content text-center text-white">
          <div className="max-w-2xl">
            <h3 className="mb-5 text-4xl font-bold">
              We Support Most Vulnerable Children
              <br />
              to achieve their dreams
            </h3>
          </div>
        </div>
      </div>
      <Container>
        <AnnoucementBanner />

        <div className="my-10">
          <Header text="About Us" />

          <p className="my-5">
            Social Action Trust Fund (SATF) has experience of more than 20 years
            in providing care and support services to most vulnerable children
            and address the impact resulted by HIV/ AIDS and poverty in
            Tanzania. The Trust was capitalized by the United States Agency for
            Development (USAID) and was registered under the Trustee&apos;s
            Incorporation Ordinance (Cap 375) of 1956. The Trust operates in 16
            regions and 32 districts of Tanzania Mainland.
          </p>

          <Button link="/whoweare" name="LEARN MORE" />

          <div className="grid grid-cols-1 md:grid-cols-2 mt-10">
            <div>
              <img
                src="/assets/overral/Pic-No-1-scaled-1536x1025.jpg"
                className="max-w-md"
              />
            </div>
            <div>
              <img
                src="/assets/overral/Pic-No-2-scaled-1536x1536.jpg"
                className="max-w-md"
              />
            </div>
          </div>
        </div>

        <div className="py-10">
          <div className="grid grid-cols-1 md:grid-cols-2">
            <div>
              <Header text="Our Strategy" />
              <p className="mt-10">
                The Trust has identified an ambitious business strategy and
                growth plan with the aim of increasing income and support the
                MVC to become the productive members of the society.
              </p>
              <img
                src="/assets/overral/9-scaled-1536x1152.jpg"
                className="max-w-md mt-10"
              />
            </div>
            <div>
              <img
                src="/assets/overral/strategies-images22.png"
                className="max-w-lg"
              />
            </div>
          </div>
        </div>
      </Container>
      <div
        className="hero h-[80vh]"
        style={{
          backgroundImage:
            "url(/assets/overral/pexels-kindel-media-7298844.jpg)",
        }}
      >
        <div className="hero-overlay bg-opacity-50 bg-black"></div>
        <div className="hero-content text-center text-white">
          <div className="max-w-2xl">
            <h3 className="mb-5 text-5xl font-bold">Our Success Stories</h3>
            <Button name="LEARN MORE" link="/" />
          </div>
        </div>
      </div>
      <Container>
        <Header text="Our Partners" />
        <div className="grid grid-cols-1 md:grid-cols-3 my-10 justify-items-center items-center">
          <img src="/assets/partners/tzimage.png" className="w-52" />
          <img src="/assets/partners/usaid2.png" className="w-52" />
          <img src="/assets/partners/pepfair.png" className="w-52" />
          <img src="/assets/partners/tacaids.png" className="w-40" />
          <img src="/assets/partners/globalfund2.png" className="w-52" />
          <img src="/assets/partners/foundation.png" className="w-52" />
        </div>
      </Container>
    </>
  );
}
