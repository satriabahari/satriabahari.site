import Link from "next/link";
import { MdVerified as VerifiedIcon } from "react-icons/md";
import clsx from "clsx";

import Tooltip from "../../elements/Tooltip";
import Image from "../../elements/Image";
import Status from "../../elements/Status";
import ThemeToggle from "../../elements/ThemeToggle";
import LocaleSwitcher from "./LocaleSwitcher";

interface ProfileHeaderProps {
  expandMenu: boolean;
  imageSize: number;
}

const ProfileHeader = ({ expandMenu, imageSize }: ProfileHeaderProps) => {
  return (
    <div
      className={clsx(
        "flex w-full flex-grow items-center gap-4 lg:flex-col lg:items-start lg:gap-0.5",
        expandMenu && "flex-col !items-start",
      )}
    >
      {/* Bermasalah (bug) */}
      <Image
        src={"/images/satria.jpg"}
        width={expandMenu ? 80 : imageSize * 0.9}
        height={expandMenu ? 80 : imageSize * 0.9}
        alt="Satria Bahari"
        className="border-2 border-neutral-400 dark:border-neutral-600 lg:hover:scale-105"
        rounded="rounded-full"
      />

      <div className="mt-1 flex items-center gap-2 lg:mt-4">
        <Link href="/" passHref>
          <h2 className="flex-grow text-lg font-medium lg:text-xl">
            Satria Bahari
          </h2>
        </Link>

        <Tooltip title="Verified">
          <VerifiedIcon size={18} className="text-blue-400" />
        </Tooltip>
      </div>

      <div className="hidden text-sm text-neutral-600 transition-all duration-300 hover:text-neutral-700 dark:text-neutral-500 dark:hover:text-neutral-400 lg:flex">
        @satriabahari
      </div>

      <div className="hidden w-full items-center justify-between lg:mt-2 lg:flex">
        <Status />
        <div className="flex gap-4">
          <LocaleSwitcher />
          <ThemeToggle />
        </div>
      </div>
    </div>
  );
};

export default ProfileHeader;
