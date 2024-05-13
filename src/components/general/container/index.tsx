import { ReactNode } from "react";

const Container = ({ children }: { children: ReactNode }) => {
  return <div className="px-5 md:px-20 py-10">{children}</div>;
};

export default Container;
