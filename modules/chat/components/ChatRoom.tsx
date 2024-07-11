"use client";

import React, { useEffect, useState } from "react";
import { signIn, signOut, useSession } from "next-auth/react";
import ChatAuth from "./ChatAuth";
import ChatInput from "./ChatInput";
import ChatList from "./ChatList";
import { getDatabase, onValue, ref, remove, set } from "firebase/database";
import { firebase } from "@/common/libs/firebase";
import { v4 as uuidv4 } from "uuid";
import { MessageProps } from "@/common/types/chat";

export const ChatRoom = () => {
  const { data: session } = useSession();

  const [messages, setMessages] = useState<MessageProps[]>([]);

  const database = getDatabase(firebase);
  const databaseChat = process.env.NEXT_PUBLIC_FIREBASE_CHAT_DB;

  const handleMessage = (message: string) => {
    const messageId = uuidv4();
    const messageRef = ref(database, `${databaseChat}/${messageId}`);
    set(messageRef, {
      id: messageId,
      name: session?.user?.name,
      email: session?.user?.email,
      image: session?.user?.image,
      message,
      created_at: new Date().toISOString(),
      is_show: true,
    });
  };

  const handleDeleteMessage = (id: string) => {
    const messageRef = ref(database, `${databaseChat}/${id}`);

    if (messageRef) {
      remove(messageRef);
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
      }
    });
  }, [database, databaseChat]);

  return (
    <>
      {/* {session && (
        <>
          Signed in as {session.user?.name} ({session.user?.email})<br />
          <button onClick={() => signOut()}>Sign out</button>
        </>
      )} */}
      <ChatList messages={messages} onDeleteMessage={handleDeleteMessage} />
      {session ? <ChatInput onSendMessage={handleMessage} /> : <ChatAuth />}
    </>
  );
};
