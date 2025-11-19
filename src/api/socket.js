import { PrismaClient } from "@prisma/client";
import { createServer } from "http";
import { Server } from "socket.io";

const prisma = new PrismaClient();
const httpServer = createServer();

const io = new Server(httpServer, {
  cors: {
    origin: "*",
  },
});

io.on("connection", (socket) => {
  console.log("Novo usuário conectado:", socket.id);
  // Enviar todas as mensagens antigas assim que o usuário entrar
  socket.on("load_messages", async () => {
    const allMessages = await prisma.message.findMany({
      orderBy: { createdAt: "asc" },
    });
    socket.emit("old_messages", allMessages);
  });
  // Receber e salvar nova mensagem
  socket.on("send_message", async (data) => {
    const { autor, mensagem, sala } = data;
    const newMessage = await prisma.message.create({
      data: { autor, mensagem, sala },
    });
    io.emit("receive_message", newMessage);
  });
  socket.on("disconnect", () => {
    console.log("Usuário desconectado:", socket.id);
  });
});

httpServer.listen(4000, () => {
  console.log("Servidor Socket.IO rodando na porta 4000");
});
