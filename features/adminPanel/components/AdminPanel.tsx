import { useTranslations } from "next-intl";

const AdminPanel = () => {
  const t = useTranslations("AdminPanel");
  return (
       <h1>{t("title")}</h1>
  );
};
export default AdminPanel;
