import { MessageProps } from "@/common/types/chat";
import { formatDistanceToNow } from "date-fns";
import Image from "next/image";
import ChatTime from "./ChatTime";
import { MdAdminPanelSettings as AdminIcon } from "react-icons/md";
import { FiTrash2 as DeleteIcon } from "react-icons/fi";
import { useSession } from "next-auth/react";

interface ChatItemProps extends MessageProps {
  onDelete: (id: string) => void;
}
export default function ChatItem({
  id,
  name,
  email,
  image,
  message,
  created_at,
  onDelete,
}: ChatItemProps) {
  const { data: session } = useSession();
  const authorEmail = process.env.NEXT_PUBLIC_AUTHOR_EMAIL;
  return (
    <div className="flex items-center gap-3">
      {image && (
        <Image
          src={image}
          width={40}
          height={40}
          alt={name}
          className="mt-1 rounded-full border dark:border-neutral-800"
        />
      )}

      <div className="space-y-1">
        <div className="flex items-center gap-x-2">
          <div className="text-sm dark:text-neutral-200">{name}</div>
          {email === authorEmail && (
            <div className="flex items-center gap-[2px] rounded-full bg-gradient-to-b from-orange-500 to-orange-700 px-1.5 py-0.5 text-orange-50 ">
              <AdminIcon size={13} />
              <span className="text-[10px]">Author</span>
            </div>
          )}
          <div className="hidden md:flex">
            {/* <ChatTime datetime={created_at} /> */}
            {created_at}
          </div>
        </div>
        <div className="group relative ml-1.5 flex w-fit items-center gap-3">
          <div className="absolute -left-1 top-1/2 h-3 w-3 bg-neutral-200 group-hover:bg-neutral-300 -translate-y-1/2 rotate-45 dark:bg-neutral-800 dark:group-hover:bg-neutral-600" />
          <div className="rounded-xl px-4 py-2 dark:bg-neutral-800 bg-neutral-200 group-hover:bg-neutral-300 dark:text-neutral-50 dark:group-hover:bg-neutral-600">
            {message}
          </div>
          {session?.user?.email === authorEmail && (
            <button
              onClick={() => onDelete(id)}
              className="hidden rounded-md bg-red-500 p-2 text-red-50 group-hover:flex"
            >
              <DeleteIcon size={17} />
            </button>
          )}
        </div>
        <div className="flex md:hidden">
            {created_at}
            {/* <ChatTime datetime={created_at} /> */}
        </div>
      </div>
    </div>
  );
}
