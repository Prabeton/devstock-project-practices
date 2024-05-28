import Link from "next/link";
import { useTranslations } from "next-intl";

import { ChevronRight } from "@/icon/";
import { Button } from "@/reusecomponents/";

const ContentBottom = () => {
  const t = useTranslations("ContentBottom");

  return (
    <div className="box-border flex items-center justify-center w-screen bg-white h-89.5 ">
      <div className="box-border flex flex-col items-center border-2 rounded-lg shadow-md justify-evenly w-197.5 h-49.5">
        <div className="text-gray-900 font-extralight text-8 leanding-10 w-181.5">
          {t("title")}
        </div>
        <div className="text-gray-500 w-181.5 font-extralight text-4.5 leanding-6.75">
          {t("text")}
        </div>
        <div className="w-181.5">
          <Link
            href="https://www.devstock.pl"
            target="_blank"
            rel="noopener noreferrer">
            <Button
              type="button"
              variant="tertiary"
              className="flex items-center h-6 gap-1 text-light-blue w-26.27">
              {t("meetUs")} <ChevronRight />
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};
export default ContentBottom;
