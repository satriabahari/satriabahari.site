"use client";

import { useState } from "react";
import { RiChatSmile2Line as ChatIcon } from "react-icons/ri";
import { RiChatSmile3Line as ChatIconHover } from "react-icons/ri";
import useChatStore from "@/common/stores/chat";
import ChatWidget from "./ChatWidget";
import useIsMobile from "@/hooks/useIsMobile";
import { useRouter } from "next/navigation";

const ChatButton = () => {
  const { isOpen, toggleChat } = useChatStore();
  const [isHover, setIsHover] = useState(false);

  const router = useRouter();

  const isMobile = useIsMobile();

  const handleClick = () => {
    isMobile ? router.push("/chat") : toggleChat();
  };

  return (
    <div className="">
      <div
        className="fixed bottom-6 right-6 rounded-full border-2 border-neutral-300 bg-gradient-to-br from-neutral-300 to-neutral-100 p-3 text-neutral-700 drop-shadow-xl transition duration-300 hover:scale-105 hover:to-neutral-50 active:scale-95 dark:border-neutral-600 dark:from-neutral-700 dark:to-neutral-800 dark:text-neutral-100 hover:dark:to-neutral-900"
        onMouseEnter={() => setIsHover(true)}
        onMouseLeave={() => setIsHover(false)}
        onClick={handleClick}
      >
        {isHover ? <ChatIconHover size={23} /> : <ChatIcon size={23} />}
      </div>
      {!isMobile && isOpen && <ChatWidget />}
    </div>
  );
};

export default ChatButton;
