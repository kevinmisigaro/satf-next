import Container from "@/components/general/container";
import { ReactNode } from "react";

const SubPageLayout = ({
  children,
  headerTitle,
  bannerImage,
}: {
  children: ReactNode;
  headerTitle: string;
  bannerImage: string;
}) => {
  return (
    <>
      <div
        className="hero h-[60vh]"
        style={{
          backgroundImage: `url(${bannerImage})`,
        }}
      >
        <div className="hero-overlay bg-opacity-50 bg-black"></div>
        <div className="hero-content text-center text-white">
          <div className="max-w-2xl">
            <h3 className="mb-5 text-6xl font-bold">{headerTitle}</h3>
          </div>
        </div>
      </div>

      <Container>{children}</Container>
    </>
  );
};

export default SubPageLayout;
