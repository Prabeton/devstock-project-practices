import { useTranslations } from "next-intl";

const Dashboard = () => {
  const t = useTranslations("Dashboard");
  
  return (
      <h1>{t("title")}</h1>
  );
};
export default Dashboard;
