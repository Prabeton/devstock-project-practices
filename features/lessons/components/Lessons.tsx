import { useTranslations } from "next-intl";

const Lessons = () => {
  const t = useTranslations("Lessons");
  return (
      <h1>{t("title")}</h1>
  );
};
export default Lessons;
