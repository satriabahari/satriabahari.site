import {} from "@/common/libs/firebase";
import { ChatInputProps } from "@/common/types/chat";
import { addDoc, collection } from "@firebase/firestore";
import clsx from "clsx";
import { ChangeEvent, FormEvent, useRef, useState } from "react";
import { FiSend as SendIcon } from "react-icons/fi";
import ChatUserInfo from "./ChatUserInfo";
import { useTranslations } from "next-intl";

export default function ChatInput({ onSendMessage }: ChatInputProps) {
  const [message, setMessage] = useState("");
  const [isSending, setIsSending] = useState(false);

  const inputRef = useRef<HTMLInputElement | null>(null);

  const t = useTranslations("ChatRoomPage");

  const handleSendMessage = (e: FormEvent) => {
    e.preventDefault();

    if (isSending) return;

    setIsSending(true);

    try {
      onSendMessage(message);
      setMessage("");
    } catch (error) {
      console.log(error);
    } finally {
      setIsSending(false);
      setTimeout(() => {
        inputRef.current?.focus();
      }, 0);
    }
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setMessage(e.target.value);
  };

  return (
    <>
      <form className="flex items-center gap-x-1 border-t border-neutral-300 py-4 dark:border-neutral-700">
        <input
          type="text"
          value={message}
          onChange={handleChange}
          placeholder={t("placeholder")}
          disabled={isSending}
          ref={inputRef}
          autoFocus
          className="flex-grow rounded-md border p-2 focus:outline-none dark:border-neutral-600"
        />
        <button
          type="submit"
          onClick={handleSendMessage}
          className={clsx(
            "ml-2 rounded-md bg-sky-600 p-3 text-white transition duration-100 hover:bg-sky-500 active:scale-90",
            !message.trim() &&
              "cursor-not-allowed !bg-neutral-600 active:scale-100",
          )}
          disabled={isSending || !message.trim()}
        >
          <SendIcon size={18} />
        </button>
      </form>
      <ChatUserInfo />
    </>
  );
}
