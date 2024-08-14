"use client"

import { ReactNode } from "react";
import { useAuth } from '@/hooks/useAuth';

import { SocialMediaBar } from "@/features/landing/";
import { Topbar, Sidebar } from "@/features/singInLayout/";

type SubLayoutProps = {
  children: ReactNode;
};

const SubLayout: React.FC<SubLayoutProps> = ({ children }) => {
  const { session, status } = useAuth();

  if (status === 'loading') {
    return <div>Loading...</div>; 
  }

  if (!session) {
    return null; 
  }

  return (
        <div className="box-border flex flex-col items-center overflow-x-hidden max-w-screen">
          <SocialMediaBar />
          <Topbar />
          <Sidebar />
          <div className="box-border relative flex flex-col items-center justify-center flex-grow w-screen h-screen text-intense-gray bg-ultra-gray">
            {children}
          </div>
        </div>
  );
};
export default SubLayout;
