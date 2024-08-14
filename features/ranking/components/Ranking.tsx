import { useTranslations } from "next-intl";

const Ranking = () => {
  const t = useTranslations("Ranking");
  return (
       <h1>{t("title")}</h1>
  );
};
export default Ranking;
