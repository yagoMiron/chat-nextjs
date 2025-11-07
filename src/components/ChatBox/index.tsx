"use client";

import { ChatMessage } from "@/types/Message";
import ChatMessageRow from "../ChatMessageRow/indext";

type Props = {
  messageList: ChatMessage[];
  sala: string;
};

const ChatBox = ({ messageList, sala }: Props) => {
  return (
    <div className="rounded-4xl border border-slate-500 p-6 w-full">
      <div className="overflow-scroll flex-1 w-full h-[calc(100vh-300px)]">
        {messageList
          .filter((value) => value.room === sala)
          .map((value, index) => (
            <ChatMessageRow
              key={index}
              userName={value.author}
              message={value.content}
            />
          ))}
      </div>
    </div>
  );
};

export default ChatBox;
