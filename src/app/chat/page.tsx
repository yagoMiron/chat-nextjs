"use client";
import ChatBox from "@/components/ChatBox";
import TextInput from "@/components/TextInput";
import Image from "next/image";
import { useContext, useEffect, useState } from "react";
import send from "../../../public/send.svg";
import { ChatMessage } from "@/types/Message";
import SelectInput from "@/components/SelectInput";
import { io } from "socket.io-client";
import { UserContext } from "@/context/UserContext";

const socket = io("http://localhost:4000");

export default function Home() {
  const { name, room } = useContext(UserContext);

  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [newRoom, setNewRoom] = useState(room);

  const filterMessages = () => {
    return messages.filter((value) => value.sala == newRoom);
  };

  const sendMessage = () => {
    if (!message.trim()) return;
    socket.emit("send_message", {
      autor: name,
      mensagem: message,
      sala: newRoom,
    });
    setMessage("");
  };

  useEffect(() => {
    // Carrega todas as mensagens do backend
    socket.emit("load_messages");
    socket.on("old_messages", (all) => {
      const oldMessages = all.map((obj: any) => {
        const message: ChatMessage = {
          autor: obj.autor || "NaN",
          mensagem: obj.mensagem || "",
          sala: obj.sala || "sala1",
        };
        return message;
      });
      setMessages(oldMessages);
    });

    // Recebe mensagens novas em tempo real
    socket.on("receive_message", (allMessages) => {
      setMessages(allMessages);
    });
  }, []);

  return (
    <div className="flex items-center justify-center bg-zinc-50 font-sans dark:bg-black h-screen box-border">
      <main className="flex min-h-screen w-full max-w-3xl flex-col items-center justify-center gap-4 px-16 bg-white dark:bg-black sm:items-start">
        <SelectInput
          value={newRoom}
          setter={setNewRoom}
          options={[
            ["sala1", "Sala 1"],
            ["sala2", "Sala 2"],
            ["sala3", "Sala 3"],
            ["sala4", "Sala 4"],
          ]}
        />
        <ChatBox messageList={filterMessages()} />
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
