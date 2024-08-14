import { useTranslations } from "next-intl";

const Task = () => {
  const t = useTranslations("Task");
  return (
       <h1>{t("title")}</h1>
  );
};
export default Task;