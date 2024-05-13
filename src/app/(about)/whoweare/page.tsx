import Container from "@/components/general/container";
import React from "react";

function Page() {
  return (
    <>
      <div
        className="hero h-[60vh]"
        style={{
          backgroundImage: "url(/assets/banners/KIOTA-Building1-scaled.jpg)",
        }}
      >
        <div className="hero-overlay bg-opacity-50 bg-black"></div>
        <div className="hero-content text-center text-white">
          <div className="max-w-2xl">
            <h3 className="mb-5 text-4xl font-bold">WHO WE ARE</h3>
          </div>
        </div>
      </div>

      <Container>
        <div className="flex flex-col gap-y-4">
          <div className="collapse collapse-plus bg-satfLightBlue">
            <input type="radio" name="my-accordion-3" defaultChecked />
            <div className="collapse-title text-xl font-medium">
              Our Mission
            </div>
            <div className="collapse-content">
              <p className="text-white">
                To support MVC to attain their full potentials through provision
                of basic services
              </p>
            </div>
          </div>
          <div className="collapse collapse-plus bg-satfLightBlue">
            <input type="radio" name="my-accordion-3" />
            <div className="collapse-title text-xl font-medium">Our Vision</div>
            <div className="collapse-content">
              <p className="text-white">
                Productive members of the society emerging from Transformed MVC
              </p>
            </div>
          </div>
          <div className="collapse collapse-plus bg-satfLightBlue">
            <input type="radio" name="my-accordion-3" />
            <div className="collapse-title text-xl font-medium">Our Values</div>
            <div className="collapse-content">
              <p className="text-white">
                The Overall Operations Guiding Principle is to be{" "}
                <span className="font-semibold underline">PRUDENT</span>
              </p>
              <ul className="list-disc list-inside ml-4 text-white">
                <li>Passion for support of needy children</li>
                <li>Respect roles and those of others</li>
                <li>Unity of Purpose on what is done</li>
                <li>Dedication in expected delivery</li>
                <li>Excellence in whatever is done</li>
                <li>Teamwork to improving performance.</li>
              </ul>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
}

export default Page;
