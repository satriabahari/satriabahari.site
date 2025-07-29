"use client";

import TextType from "@/common/components/elements/TextType";

const AnimatedChat = () => {
  const bubbleLeft = ["Hi!", "Is this your site?", "Looks great!"];
  const bubbleRight = ["Hey!", "Yes, it is", "Thanks a lot!"];

  return (
    <div className="grid w-full grid-cols-2 gap-2 px-2 py-2">
      <div className="col-start-1 row-start-1 flex w-full justify-start">
        <div className="w-full rounded-2xl rounded-tl-none bg-neutral-200 px-4 py-3 dark:bg-neutral-800 dark:text-neutral-50">
          <TextType
            typingSpeed={50}
            deletingSpeed={35}
            pauseDuration={2000}
            text={bubbleLeft}
            className="text-sm"
          />
        </div>
      </div>

      <div className="col-start-2 row-start-1" />

      <div className="col-start-1 row-start-2" />

      <div className="col-start-2 row-start-2 flex w-full justify-end">
        <div className="w-full rounded-2xl rounded-tr-none bg-blue-500 px-4 py-3 ">
          <TextType
            typingSpeed={50}
            deletingSpeed={35}
            pauseDuration={2000}
            text={bubbleRight}
            className="text-sm"
          />
        </div>
      </div>
    </div>
  );
};

export default AnimatedChat;
