"use client";

import { useEffect, useState } from "react";
import { useSession } from "next-auth/react";
import { v4 as uuidv4 } from "uuid";
import { getDatabase, onValue, ref, remove, set } from "firebase/database";

import ChatAuth from "./ChatAuth";
import ChatInput from "./ChatInput";
import ChatList from "./ChatList";

import { firebase } from "@/common/libs/firebase";
import { MessageProps } from "@/common/types/chat";
import { useNotif } from "@/hooks/useNotif";
import ChatItemSkeleton from "./ChatItemSkeleton";
import useSWR, { mutate } from "swr";
import { fetcher } from "@/services/fetcher";
import axios from "axios";
import { createClient } from "@/common/utils/supabase/client";

export const ChatRoom = () => {
  const [messages, setMessages] = useState<MessageProps[]>([]);
  const [isReply, setIsReply] = useState({ isReply: false, name: "" });
  const [isLoading, setIsLoading] = useState(true);

  const { data: session } = useSession();
  const notif = useNotif();

  const database = getDatabase(firebase);
  const databaseChat = process.env.NEXT_PUBLIC_FIREBASE_CHAT_DB;

  const handleClickReply = (name: string) => {
    if (!session?.user) return notif("Please sign in to reply");
    setIsReply({ isReply: true, name });
  };

  const handleCancelReply = () => {
    setIsReply({ isReply: false, name: "" });
  };

  const handleMessage = (message: string) => {
    const messageId = uuidv4();
    const messageRef = ref(database, `${databaseChat}/${messageId}`);
    set(messageRef, {
      id: messageId,
      name: session?.user?.name,
      email: session?.user?.email,
      image: session?.user?.image,
      message,
      is_reply: isReply.isReply,
      reply_to: isReply.name,
      created_at: new Date().toISOString(),
      is_show: true,
    });

    // try {
    //   await axios.post("/api/chat", newMessageData);
    //   notif("Successfully to send message");
    // } catch (error) {
    //   console.error("Error:", error);
    //   notif("Failed to send message");
    // }
  };

  const handleDeleteMessage = (id: string) => {
    const messageRef = ref(database, `${databaseChat}/${id}`);

    if (messageRef) {
      remove(messageRef);
      // try {
      //   await axios.delete(`/api/chat/${id}`);
      //   notif("Successfully to delete message");
      // } catch (error) {
      //   notif("Failed to delete message");
      // }
    }
  };

  useEffect(() => {
    const messagesRef = ref(database, databaseChat);
    onValue(messagesRef, (snapshot) => {
      const messageData = snapshot.val();
      if (messageData) {
        const messagesArray = Object.values(messageData) as MessageProps[];
        const sortedMessage = messagesArray.sort((a, b) => {
          const dateA = new Date(a.created_at);
          const dateB = new Date(b.created_at);
          return dateA.getTime() - dateB.getTime();
        });
        setMessages(sortedMessage);
        setIsLoading(false);
      }
    });
  }, [database, databaseChat]);

  return (
    <>
      {isLoading ? (
        <ChatItemSkeleton />
      ) : (
        <ChatList
          messages={messages}
          onDeleteMessage={handleDeleteMessage}
          onClickReply={handleClickReply}
        />
      )}

      {session ? (
        <ChatInput
          onSendMessage={handleMessage}
          onCancelReply={handleCancelReply}
          replyName={isReply.name}
        />
      ) : (
        <ChatAuth />
      )}
    </>
  );
};
