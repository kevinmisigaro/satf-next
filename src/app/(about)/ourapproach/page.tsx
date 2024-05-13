import Container from "@/components/general/container";

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
            <h3 className="mb-5 text-4xl font-bold">OUR APPROACH</h3>
          </div>
        </div>
      </div>

      <Container>
        <p>
          SATF works with local registered Non-Governmental Organizations
          (NGOs),Faith Based Organizations(FBOs),Community Based
          Organizations(CBOs) at the grassroot levels in collaboration with:
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 py-5">
          <ul className="list-disc ml-4 leading-loose">
            <li>Central Government,</li>
            <li>Local Government Authorities,</li>
            <li>Developing partners,</li>
            <li>Education institutions,</li>
            <li>Private sector</li>
          </ul>
        </div>
      </Container>
    </>
  );
}

export default Page;
