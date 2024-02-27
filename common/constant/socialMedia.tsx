import {
  BsGithub as GithubIcon,
  BsInstagram as InstagramIcon,
  BsLinkedin as LinkedinIcon,
  BsTiktok as TiktokIcon,
} from "react-icons/bs";
import { SiGmail } from "react-icons/si";

import { SocialMediaProps } from "../types/socialMedia";

const iconSize = 20;

export const SOCIAL_MEDIA: SocialMediaProps[] = [
  {
    title: "Gmail",
    href: "mailto:satriaabaharii@gmail.com",
    icon: <SiGmail size={iconSize} className="text-neutral-50" />,
    backgroundColor: "bg-gradient-to-b from-red-500 to-red-800",
    isShow: true,
  },
  {
    title: "Instagram",
    href: "https://www.instagram.com/satriabaharii_/",
    icon: <InstagramIcon size={iconSize} className="text-neutral-50" />,
    backgroundColor:
      "bg-gradient-to-b from-purple-700 via-pink-500 to-orange-500",
    isShow: true,
  },
  {
    title: "Linkedin",
    href: "https://www.linkedin.com/in/satria-bahari/",
    icon: <LinkedinIcon size={iconSize} className="text-neutral-50" />,
    backgroundColor: "bg-gradient-to-b from-sky-700 to-sky-950",
    isShow: true,
  },
  {
    title: "Tiktok",
    href: "https://www.tiktok.com/@satriaabaharii/",
    icon: <TiktokIcon size={iconSize} className="text-neutral-50" />,
    backgroundColor: "bg-gradient-to-b from-neutral-700 to-neutral-900",
    isShow: true,
  },
  {
    title: "Github",
    href: "https://github.com/satriabahari",
    icon: <GithubIcon size={iconSize} className="text-neutral-900" />,
    backgroundColor: "bg-gradient-to-b from-neutral-200 to-neutral-500",
    textColor: "text-neutral-900",
    isShow: true,
  },
];
