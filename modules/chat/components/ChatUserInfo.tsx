import React from "react";
import { signOut, useSession } from "next-auth/react";
import { useTranslations } from "next-intl";
import { HiOutlineLogout as SignOutIcon } from "react-icons/hi";

const ChatUserInfo = () => {
  const t = useTranslations("ChatRoomPage.sign_in");

  const { data: session } = useSession();

  const userName = session?.user?.name ?? null;
  const userEmail = session?.user?.email ?? null;

  return session ? (
    <div className="flex flex-col items-center justify-between gap-4 text-sm md:flex-row">
      <div className="flex flex-wrap gap-1 text-neutral-500">
        <span>{t("signed_label")}</span>
        <span className="font-medium">{userName}</span>
        <span>({userEmail})</span>
      </div>
      <button
        onClick={() => signOut()}
        className="flex cursor-pointer items-center gap-1 rounded-md bg-red-600 px-3 py-1 font-medium text-red-50 transition duration-100 hover:bg-red-500 active:scale-90"
      >
        <SignOutIcon size={16} />
        <span>{t("sign_out_label")}</span>
      </button>
    </div>
  ) : null;
};

export default ChatUserInfo;
