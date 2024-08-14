import { useTranslations } from "next-intl";

const Settings = () => {
  const t = useTranslations("Settings");
  return (
       <h1>{t("title")}</h1>
  );
};
export default Settings;
