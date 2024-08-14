import { ReactNode } from "react";

import { SocialMediaBar } from "@/features/landing/";
import { SignOutTopbar, Footer } from "@/features/signOutLayout/";

type SubLayoutProps = {
  children: ReactNode;
};

const SubLayout: React.FC<SubLayoutProps> = ({ children }) => {

  return (
        <div className="box-border flex flex-col items-center overflow-x-hidden max-w-screen">
          <SocialMediaBar />
          <SignOutTopbar />
          <div className="box-border flex flex-col flex-grow">{children}</div>
          <Footer />
        </div>
  );
};
export default SubLayout;
