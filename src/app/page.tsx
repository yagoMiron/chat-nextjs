"use client";
import ChatBox from "@/components/ChatBox";
import TextInput from "@/components/TextInput";
import Image from "next/image";
import { useState } from "react";
import send from "../../public/send.svg";
import { ChatMessage } from "@/types/Message";
import SelectInput from "@/components/SelectInput";

export default function Home() {
  const name = "Yago";

  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [room, setRoom] = useState("sala1");

  const sendMessage = () => {
    setMessages([
      ...messages,
      {
        author: name,
        content: message,
        room: room,
      },
    ]);
    setMessage("");
  };
  return (
    <div className="flex items-center justify-center bg-zinc-50 font-sans dark:bg-black h-screen box-border">
      <main className="flex min-h-screen w-full max-w-3xl flex-col items-center justify-center gap-4 px-16 bg-white dark:bg-black sm:items-start">
        <SelectInput
          value={room}
          setter={setRoom}
          title="Sala"
          options={[
            ["sala1", "Sala 1"],
            ["sala2", "Sala 2"],
            ["sala3", "Sala 3"],
            ["sala4", "Sala 4"],
          ]}
        />
        <ChatBox messageList={messages} sala={room} />
        <div className="flex w-full items-center gap-2">
          <TextInput
            title="Mensagem"
            type="text"
            placeholder="Escreva sua mensagem"
            setter={setMessage}
            value={message}
          />
          <button
            className="bg-slate-400 w-13 h-12 rounded-full box-border border border-slate-300 p-1 hover:bg-slate-200 cursor-pointer"
            onClick={sendMessage}
          >
            <Image src={send} alt="enviar" />
          </button>
        </div>
      </main>
    </div>
  );
}
