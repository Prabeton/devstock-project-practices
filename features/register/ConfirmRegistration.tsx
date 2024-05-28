import { useTranslations } from "next-intl";

import { Button } from "@/reusecomponents/";

const ConfirmRegistration = () => {
  const t = useTranslations("ConfirmRegistration");

  return (
    <div className="relative flex items-center justify-center">
      <div className="flex flex-col items-center justify-evenly gap-2 p-0.5 w-175 h-69.5 rounded-lg bg-gray">
        <div className="text-2xl text-white font-extralight">
          {t("confirmRegister")}
        </div>
        <div className="text-sm font-medium text-white">{t("sentLink")}</div>
        <div className="text-sm font-medium text-white">{t("mailIs")}</div>
        <Button className="h-10 font-medium text-white w-75" variant="primary">
          {t("resubmit")}
        </Button>
      </div>
    </div>
  );
};
export default ConfirmRegistration;
