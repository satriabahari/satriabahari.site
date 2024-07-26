import clsx from "clsx";
import { signIn } from "next-auth/react";
import { useTranslations } from "next-intl";
import { BsGithub as GithubIcon } from "react-icons/bs";
import { FcGoogle as GoogleIcon } from "react-icons/fc";

import Button from "@/common/components/elements/Button";

const Providers = [
  {
    id: "google",
    icon: <GoogleIcon size={18} />,
    bgColor: "!bg-white",
    textColor: "text-black",
  },
  {
    id: "github",
    icon: <GithubIcon size={18} />,
    bgColor: "!bg-black",
    textColor: "text-white",
  },
];

const ChatAuth = ({ isWidget = false }) => {
  const t = useTranslations("ChatRoomPage.sign_in");
  return (
    <div className="flex flex-col border-t border-neutral-300 py-1 dark:border-neutral-900">
      <div className="mb-1 space-y-5 px-4 py-3 text-center text-neutral-700 dark:text-neutral-400">
        <p className="text-sm">{t("title")}</p>
        <div
          className={clsx(
            "flex flex-col items-center justify-center gap-4 lg:flex-row lg:gap-5",
            isWidget && "!flex-col !gap-4",
          )}
        >
          {Providers.map((provider) => (
            <Button
              key={provider.id}
              onClick={() => signIn(provider.id)}
              className={`flex w-full items-center justify-center border ${provider.bgColor} py-2.5 shadow-sm transition duration-300 hover:scale-105 active:scale-100 lg:w-fit ${isWidget && "!w-full"}`}
            >
              {provider.icon}
              <span className={provider.textColor}>
                {t("label")} {provider.id}
              </span>
            </Button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ChatAuth;
