"use client";

import { useTranslations } from "next-intl";
import Link from "next/link";
import { useRouter } from 'next/navigation';
import { signOut } from 'next-auth/react';
import Image from "next/image";
import clsx from "clsx";

import { DevstockAcademy } from "@/icon/";

const Topbar = () => {
  const t = useTranslations("Topbar");
  const router = useRouter();

  const handleLogout = async () => {
    await signOut({ redirect: false });
    router.push('/landing');
  };

  return (
    <div className="box-border relative flex justify-center w-screen h-20 p-0 m-0">
      <div className="box-border flex items-center justify-between w-full h-20 gap-8 pl-10 pr-10 bg-gray">
        <Link href="/dashboard" passHref>
          <div className="box-border w-30 h-11">
            <DevstockAcademy />
          </div>
        </Link>
        <div className="box-border flex items-center h-10 gap-10 leading-6 text-white justify-center text-4 w-87.5">
          <div className="font-medium">
            <Link
              href="https://www.devstock.pl"
              target="_blank"
              rel="noopener noreferrer">
              Devstock.pl
            </Link>
          </div>
          <div className="z-10 w-px leading-6 bg-white h-7 text-4"></div>
          <Link href="#" passHref>
            <div
              className={clsx(
                "font-medium text-base overflow-hidden flex items-center justify-center rounded-full w-12 h-12 "
              )}>
              <Image
                src="/przemai.webp"
                alt="user foto"
                width="48"
                height="48"
                priority
              />
            </div>
          </Link>
          
            <div
             onClick={handleLogout}
              className={clsx(
                "flex justify-start items-center font-medium text-base rounded-lg w-fix whitespace-nowrap h-6 text-white bg-transparent cursor-pointer"
              )}>
              {t("logout")}
            </div>
          
        </div>
      </div>
    </div>
  );
};
export default Topbar;
