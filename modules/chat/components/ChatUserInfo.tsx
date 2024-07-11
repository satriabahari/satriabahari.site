import { signOut, useSession } from "next-auth/react";
import { useTranslations } from "next-intl";
import Image from "next/image";
import React from "react";
import { HiOutlineLogout as SignOutIcon } from "react-icons/hi";

export default function ChatUserInfo() {
  const { data: session } = useSession();

  const userName = session?.user?.name ?? null;
  const userEmail = session?.user?.email ?? null;

  const t = useTranslations("ChatRoomPage.sign_in");
  return session ? (
    <div className="flex flex-col items-center justify-between gap-4 text-sm md:flex-row">
      <div className="flex flex-wrap gap-1 text-neutral-500">
        <span>{t("signed_label")}</span>
        <span className="font-medium">{userName}</span>
        <span>({userEmail})</span>
      </div>
      <button
        onClick={() => signOut()}
        className="flex cursor-pointer items-center gap-1 rounded-md bg-red-600 px-3 py-1 font-medium text-red-50 transition duration-100 active:scale-90 dark:hover:bg-red-500"
      >
        <SignOutIcon size={16} />
        <span>{t("sign_out_label")}</span>
      </button>
    </div>
  ) : null;
}
