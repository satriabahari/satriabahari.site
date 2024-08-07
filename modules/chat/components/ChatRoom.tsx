// "use client";

// import { useEffect, useState } from "react";
// import { useSession } from "next-auth/react";
// import { v4 as uuidv4 } from "uuid";
// import { getDatabase, onValue, ref, remove, set } from "firebase/database";

// import ChatAuth from "./ChatAuth";
// import ChatInput from "./ChatInput";
// import ChatList from "./ChatList";

// import { firebase } from "@/common/libs/firebase";
// import useNotif from "@/hooks/useNotif";
// import ChatItemSkeleton from "./ChatItemSkeleton";
// import { MessageProps } from "@/common/types/chat";

// export const ChatRoom = () => {
//   const [messages, setMessages] = useState<MessageProps[]>([]);
//   const [isReply, setIsReply] = useState({ isReply: false, name: "" });
//   const [isLoading, setIsLoading] = useState(true);

//   const { data: session } = useSession();
//   const notif = useNotif();

//   const database = getDatabase(firebase);
//   const databaseChat = process.env.NEXT_PUBLIC_FIREBASE_CHAT_DB;

//   useEffect(() => {
//     const messagesRef = ref(database, databaseChat);
//     onValue(messagesRef, (snapshot) => {
//       const messageData = snapshot.val();
//       if (messageData) {
//         const messagesArray = Object.values(messageData) as MessageProps[];
//         const sortedMessage = messagesArray.sort((a, b) => {
//           const dateA = new Date(a.created_at);
//           const dateB = new Date(b.created_at);
//           return dateA.getTime() - dateB.getTime();
//         });
//         setMessages(sortedMessage);
//         setIsLoading(false);
//       }
//     });
//   }, [database, databaseChat]);

//   const handleClickReply = (name: string) => {
//     if (!session?.user) return notif("Please sign in to reply");
//     setIsReply({ isReply: true, name });
//   };

//   const handleCancelReply = () => {
//     setIsReply({ isReply: false, name: "" });
//   };

//   const handleMessage = (message: string) => {
//     const messageId = uuidv4();
//     const messageRef = ref(database, `${databaseChat}/${messageId}`);
//     set(messageRef, {
//       id: messageId,
//       name: session?.user?.name,
//       email: session?.user?.email,
//       image: session?.user?.image,
//       message,
//       is_reply: isReply.isReply,
//       reply_to: isReply.name,
//       created_at: new Date().toISOString(),
//       is_show: true,
//     });
//     notif("Successfully to send message");
//     //   notif("Failed to send message");
//   };

//   const handleDeleteMessage = (id: string) => {
//     const messageRef = ref(database, `${databaseChat}/${id}`);

//     if (messageRef) {
//       remove(messageRef);
//       notif("Successfully to delete message");
//       //   notif("Failed to delete message");
//     }
//   };

//   return (
//     <>
//       {isLoading ? (
//         <ChatItemSkeleton />
//       ) : (
//         <ChatList
//           messages={messages}
//           onDeleteMessage={handleDeleteMessage}
//           onClickReply={handleClickReply}
//         />
//       )}

//       {session ? (
//         <ChatInput
//           onSendMessage={handleMessage}
//           onCancelReply={handleCancelReply}
//           replyName={isReply.name}
//         />
//       ) : (
//         <ChatAuth />
//       )}
//     </>
//   );
// };

"use client";

import { useEffect, useState } from "react";
import { useSession } from "next-auth/react";
import { v4 as uuidv4 } from "uuid";

import ChatAuth from "./ChatAuth";
import ChatInput from "./ChatInput";
import ChatList from "./ChatList";

import { MessageProps } from "@/common/types/chat";
import ChatItemSkeleton from "./ChatItemSkeleton";
import useSWR, { mutate } from "swr";
import { fetcher } from "@/services/fetcher";
import axios from "axios";
import { createClient } from "@/common/utils/client";
import useNotif from "@/hooks/useNotif";

export const ChatRoom = () => {
  const { isLoading } = useSWR("/api/chat", fetcher, {
    onSuccess: (data) => setMessages(data),
  });

  const [messages, setMessages] = useState<MessageProps[]>([]);
  const [isReply, setIsReply] = useState({ is_reply: false, name: "" });

  const { data: session } = useSession();

  const supabase = createClient();

  const notif = useNotif();

  const handleClickReply = (name: string) => {
    if (!session?.user) return notif("Please sign in to reply");
    setIsReply({ is_reply: true, name });
  };

  const handleCancelReply = () => {
    setIsReply({ is_reply: false, name: "" });
  };

  const handleSendMessage = async (message: string) => {
    const messageId = uuidv4();
    const newMessageData = {
      id: messageId,
      name: session?.user?.name,
      email: session?.user?.email,
      image: session?.user?.image,
      message,
      is_reply: isReply.is_reply,
      reply_to: isReply.name,
      is_show: true,
      created_at: new Date().toISOString(),
    };
    try {
      await axios.post("/api/chat", newMessageData);
      notif("Successfully to send message");
    } catch (error) {
      console.error("Error:", error);
      notif("Failed to send message");
    }
  };

  const handleDeleteMessage = async (id: string) => {
    try {
      await axios.delete(`/api/chat/${id}`);
      notif("Successfully to delete message");
    } catch (error) {
      notif("Failed to delete message");
    }
  };

  useEffect(() => {
    const channel = supabase
      .channel("realtime chat")
      .on(
        "postgres_changes",
        {
          event: "INSERT",
          schema: "public",
          table: "messages",
        },
        (payload) => {
          setMessages((prevMessages) => [
            ...prevMessages,
            payload.new as MessageProps,
          ]);
        },
      )
      .on(
        "postgres_changes",
        {
          event: "DELETE",
          schema: "public",
          table: "messages",
        },
        (payload) => {
          setMessages((prevMessages) =>
            prevMessages.filter((msg) => msg.id !== payload.old.id),
          );
        },
      )
      .subscribe();

    return () => {
      supabase.removeChannel(channel);
    };
  }, [supabase]);

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
          onSendMessage={handleSendMessage}
          onCancelReply={handleCancelReply}
          replyName={isReply.name}
        />
      ) : (
        <ChatAuth />
      )}
    </>
  );
};
