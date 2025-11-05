"use client";
import TextInput from "@/components/TextInput";
import Image from "next/image";
import { useState } from "react";

export default function Home() {
  const [name, setName] = useState("");
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex min-h-screen w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start">
        <TextInput
          title="Nome"
          type="text"
          placeholder="Nome"
          setter={setName}
          value={name}
        />
      </main>
    </div>
  );
}
