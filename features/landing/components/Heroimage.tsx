import { useTranslations } from "next-intl";

import { ArrowRight, DevstockLogotyp } from "@/icon/";
import { Button } from "@/reusecomponents/";

const Heroimage = () => {
  const t = useTranslations("Heroimage");

  return (
    <div className="box-border relative flex justify-center w-screen bg-center bg-cover bg-image-laptop h-120">
      <div className="box-border absolute inset-0 flex items-center justify-center bg-dark-gray">
        <div className="box-border flex flex-col items-center justify-between w-11/12 p-0 h-77.5">
          <h1 className="flex items-center justify-center h-16 text-6xl font-extrabold text-white w-190">
            Codebusters _/&gt;
          </h1>
          <div className="text-2xl text-white font-extralight">by</div>
          <div className="flex items-center justify-center h-12 gap-3 text-2xl font-extrabold text-white w-52">
            <DevstockLogotyp />
            Devstock
          </div>
          <div className="flex flex-col items-center justify-center text-2xl w-190 h-18">
            <div className="text-2xl text-white font-extralight">
              {t("textPart1")}
            </div>
            <div className="text-2xl text-white font-extralight">
              {t("textPart2")}
            </div>
          </div>
          <div className="flex gap-8 w-112">
            <Button
              type="button"
              variant="secondary"
              className="flex items-center justify-center h-12 gap-3 text-white border-white w-50">
              {t("startLearning")} <ArrowRight />
            </Button>
            <Button
              type="button"
              variant="tertiary"
              className="h-12 text-white border border-white w-50">
              {t("exploreAcademy")}
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Heroimage;
