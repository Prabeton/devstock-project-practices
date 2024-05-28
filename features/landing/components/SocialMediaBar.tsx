import Link from "next/link";

import {
  FacebookDark,
  GitHubIcon,
  InstagramBlack,
  YouTubeBlack,
  TicTocBlack,
  LinkedIn,
} from "@/icon/";

const SocialMediaBar = () => {
  const socialLinks = [
    {
      href: "https://www.facebook.com/groups/3792300160870421",
      icon: FacebookDark,
      label: "Facebook",
    },
    {
      href: "https://www.instagram.com/devstock.pl/",
      icon: InstagramBlack,
      label: "Instagram",
    },
    {
      href: "https://www.linkedin.com/company/devstockspzoo/about/",
      icon: LinkedIn,
      label: "LinkedIn",
    },
    {
      href: "https://www.youtube.com/@devstock",
      icon: YouTubeBlack,
      label: "YouTube",
    },
    {
      href: "https://github.com/Devstock-Academy",
      icon: GitHubIcon,
      label: "GitHub",
    },
    {
      href: "https://www.tiktok.com/@devstockacademy",
      icon: TicTocBlack,
      label: "TikTok",
    },
  ];

  return (
    <div className="box-border flex justify-center w-screen h-10 p-0 m-0 bg-black">
      <div className="box-border flex items-center justify-end w-full h-10 pr-8">
        <div className="box-border flex justify-around h-5 w-72">
          {socialLinks.map(({ href, icon: Icon, label }) => (
            <Link
              key={href}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}>
              <Icon />
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};
export default SocialMediaBar;
