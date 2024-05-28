import Link from "next/link";
import { useTranslations } from "next-intl";

import { HeartYellow } from "@/icon/";

const Footer = () => {
  const t = useTranslations("Footer");

  return (
    <div className="box-border flex justify-center w-screen h-20 p-0 m-0">
      <div className="box-border flex items-center justify-between w-full h-20 gap-8 pl-10 pr-10 bg-gray">
        <div className="box-border flex items-center justify-between text-base text-white w-120 h-7">
          <div className="font-medium">
            <Link
              href="https://www.devstock.pl"
              target="_blank"
              rel="noopener noreferrer">
              Devstock.pl
            </Link>
          </div>
          <div className="w-px text-base bg-white h-7"></div>
          <Link href="###" passHref>
            <div className="flex items-center justify-center h-10 text-base font-medium text-white">
              {t("privacyPolicy")}
            </div>
          </Link>
          <div className="w-px text-base bg-white h-7"></div>
          <Link href="###" passHref>
            <div className="flex items-center justify-center h-10 text-base font-medium text-white">
              {t("contact")}
            </div>
          </Link>
        </div>
        <div className="flex h-3 text-base font-medium text-white ">
          <HeartYellow /> Devstock &copy; 2023
        </div>
      </div>
    </div>
  );
};
export default Footer;
