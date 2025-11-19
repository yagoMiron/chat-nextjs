"use client";
import { createContext, ReactNode, useEffect, useState } from "react";

type UserType = {
  name: string;
  room: string;
  setName: (newState: string) => void;
  setRoom: (newState: string) => void;
};

const initialValue: UserType = {
  name: "",
  room: "",
  setName: () => {},
  setRoom: () => {},
};

export const UserContext = createContext(initialValue);

type UserContextProps = {
  children: ReactNode;
};

export const UserContextProvider = ({ children }: UserContextProps) => {
  const [name, setName] = useState("");
  const [room, setRoom] = useState("");

  // Carrega valores do localStorage quando o componente monta
  useEffect(() => {
    const storedName = localStorage.getItem("name");
    const storedRoom = localStorage.getItem("room");

    if (storedName) setName(storedName);
    if (storedRoom) setRoom(storedRoom);
  }, []);

  // Salva valores sempre que mudam
  useEffect(() => {
    if (name) localStorage.setItem("name", name);
    if (room) localStorage.setItem("room", room);
  }, [name, room]);

  return (
    <UserContext.Provider value={{ name, room, setName, setRoom }}>
      {children}
    </UserContext.Provider>
  );
};
