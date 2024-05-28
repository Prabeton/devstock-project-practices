"use client";
import LiteYouTubeEmbed from "react-lite-youtube-embed";
import "react-lite-youtube-embed/dist/LiteYouTubeEmbed.css";
import { useTranslations } from "next-intl";
import clsx from "clsx";

const ContentTop = () => {
  const t = useTranslations("ContentTop");
  const platformDescription1 = t("platformDescription1");
  const platformDescription2 = t("platformDescription2");
  const existsTexts = platformDescription1 || platformDescription2;

  return (
    <div className="box-border flex justify-center w-screen bg-white h-120">
      <div className="box-border flex items-center h-full gap-1.5 xl:justify-between lg:justify-around lg:w-230 xl:w-300 2xl:w-1366">
        <div
          className={clsx(
            "flex flex-col xl:w-130 xl:h-99 lg:w-112",
            { "justify-between": existsTexts },
            { "justify-center": !existsTexts },
            { "order-0": existsTexts },
            { "order-2": !existsTexts }
          )}>
          <div className="p-0 font-extrabold text-gray-900 xl:text-5xl lg:text-4xl leanding-16 h-30">
            {t("title")}
          </div>
          {platformDescription1 && (
            <div className="text-gray font-extralight leanding-4 xl:text-5 lg:text-4 h-22.5">
              {t("platformDescription1")}
            </div>
          )}
          {platformDescription2 && (
            <div className="text-gray font-extralight leanding-7.5 xl:text-5 lg:text-4 h-30">
              {t("platformDescription1")}
            </div>
          )}
        </div>
        <div className="box-border  bg-gray-900 flex items-center justify-center bg-center bg-cover shadow-xl md:w-120 lg:w-120 xl:w-160.75 xl:h-94">
          <div className="flex flex-col w-full h-9/10 justify-stretch">
            <LiteYouTubeEmbed
              id="Y-x0QrXO3Mk"
              title="Tytuł filmu z Devstock"
              poster="hqdefault"
              playerClass="lty-playbtn"
              wrapperClass="yt-lite"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
export default ContentTop;
