"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";

import { FiArrowLeftCircle as BackButtonIcon } from "react-icons/fi";

type BackButtonProps = {
  url?: string;
};

export default function BackButton({ url }: BackButtonProps) {
  const router = useRouter();

  const handleOnClick = () => {
    if (url) {
      window.location.href = url;
    } else {
      router.back();
    }
  };

  const className =
    "flex gap-2 w-max hover:gap-3 items-center pb-5 transition-all duration-300 font-medium text-neutral-600 cursor-pointer";

  const BackButtonChildComponent = () => {
    return (
      <>
        <BackButtonIcon size={20} />
        <span>Back</span>
      </>
    );
  };

  return (
    <div className="w-fit">
      {url ? (
        <Link href={url}>
          <div className={className}>
            <BackButtonChildComponent />
          </div>
        </Link>
      ) : (
        <div className={className} onClick={handleOnClick}>
          <BackButtonChildComponent />
        </div>
      )}
    </div>
  );
}
