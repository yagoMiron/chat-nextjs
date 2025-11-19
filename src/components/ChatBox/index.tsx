"use client";

import { ChatMessage } from "@/types/Message";
import ChatMessageRow from "../ChatMessageRow/indext";

type Props = {
  messageList: ChatMessage[];
};

const ChatBox = ({ messageList }: Props) => {
  return (
    <div className="rounded-4xl border border-slate-500 p-6 w-full">
      <div className="overflow-scroll flex-1 w-full h-[calc(100vh-300px)]">
        {messageList.map((value, index) => (
          <ChatMessageRow
            key={index}
            userName={value.autor}
            message={value.mensagem}
          />
        ))}
      </div>
    </div>
  );
};

export default ChatBox;
