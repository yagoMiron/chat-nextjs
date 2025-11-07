"use client";
import TextInput from "@/components/TextInput";
import { useState } from "react";
import styles from "./styles.module.css";
import SelectInput from "@/components/SelectInput";
import Link from "next/link";

export default function Home() {
  const [name, setName] = useState("");

  const [room, setRoom] = useState("sala1");

  return (
    <div className={styles.page}>
      <main className={styles.container}>
        <TextInput
          type="text"
          title="Nome"
          value={name}
          setter={setName}
          placeholder="Digite seu nome"
        />
        <SelectInput
          title="Sala"
          value={room}
          setter={setRoom}
          options={[
            ["sala1", "Sala 1"],
            ["sala2", "Sala 2"],
            ["sala3", "Sala 3"],
            ["sala4", "Sala 4"],
          ]}
        />
        <hr className={styles.separator} />
        <Link href="/chat" className={styles.button}>
          Chat {"->"}
        </Link>
      </main>
    </div>
  );
}
