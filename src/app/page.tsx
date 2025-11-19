"use client";
import TextInput from "@/components/TextInput";
import { useContext, useEffect, useState } from "react";
import styles from "./styles.module.css";
import SelectInput from "@/components/SelectInput";
import Link from "next/link";
import { UserContext } from "@/context/UserContext";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();

  const { setName, setRoom } = useContext(UserContext);
  const [name, setNewName] = useState("");
  const [room, setNewRoom] = useState("sala1");

  const goToChat = () => {
    setName(name);
    setRoom(room);
    router.push("/chat");
  };

  return (
    <div className={styles.page}>
      <main className={styles.container}>
        <TextInput
          type="text"
          title="Nome"
          value={name}
          setter={setNewName}
          placeholder="Digite seu nome"
        />
        <SelectInput
          title="Sala"
          value={room}
          setter={setNewRoom}
          options={[
            ["sala1", "Sala 1"],
            ["sala2", "Sala 2"],
            ["sala3", "Sala 3"],
            ["sala4", "Sala 4"],
          ]}
        />
        <hr className={styles.separator} />
        <button onClick={goToChat} className={styles.button}>
          Chat {"->"}
        </button>
      </main>
    </div>
  );
}
