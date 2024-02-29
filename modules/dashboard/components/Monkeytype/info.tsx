import { MonkeytypeData } from "@/common/types/monkeytype";
import React from "react";

type InfoProps = {
  data: MonkeytypeData;
};

export default function Info({ data }: InfoProps) {
  return (
    <div className="my-t flex flex-col justify-between font-sans text-sm text-neutral-600 dark:text-neutral-300 md:flex-row">
      <div>
        <p>Username: {data?.name}</p>
        <p>Uid: {data.uid}</p>
      </div>
      <div>
        <p>Added At: {data?.addedAt}</p>
        {/* <p>Skills: {data?.skills?.map((skill) => skill).join(", ")}</p> */}
        <p>Time typing: {data?.typingStats.timeTyping}</p>
      </div>
    </div>
  );
}
