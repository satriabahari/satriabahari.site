import { CodewarsData } from "@/common/types/codewars";
import React from "react";

type InfoProps = {
  data: CodewarsData;
};

export default function Info({ data }: InfoProps) {
  return (
    <div className="my-t flex flex-col justify-between font-sans text-sm text-neutral-600 dark:text-neutral-300 md:flex-row">
      <div>
        <p>Username: {data?.username}</p>
        <p>Clan: {data?.clan || "No Clan"}</p>
      </div>
      <div>
        <p>Member Since: Feb 2024</p>
        <p>Skills: {data?.skills?.map((skill) => skill).join(", ")}</p>
      </div>
    </div>
  );
}
