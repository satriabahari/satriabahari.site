import { useEffect, useState } from "react";
import { format, formatDistanceToNow, isToday } from "date-fns";

interface ChatTimeProps {
  datetime: string;
}

const ChatTime = ({ datetime }: ChatTimeProps) => {
  const [formattedTime, setFormattedTime] = useState(
    formatDistanceToNow(new Date(datetime), { addSuffix: true }),
  );

  useEffect(() => {
    const interval = setInterval(() => {
      setFormattedTime(
        formatDistanceToNow(new Date(datetime), { addSuffix: true }),
      );
    }, 60000);

    return () => clearInterval(interval);
  }, [datetime]);

  return (
    <div className="text-xs font-medium tracking-wide text-neutral-500">
      {isToday(new Date(datetime))
        ? formattedTime
        : format(new Date(datetime), "dd/MM/yyyy, HH:mm")}
    </div>
  );
};

export default ChatTime;
