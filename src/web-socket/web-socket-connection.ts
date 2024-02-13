import { Request } from "express";
import { Server, WebSocket } from "ws";

const onConnection = (ws: WebSocket, req: Request, wss: Server) => {
  ws.on("close", () => onClose(ws, wss));
  ws.on("message", (message: string) => onMessage(message, ws, wss));
  console.log("Total Clients: ", wss.clients.size);
};

const onClose = (ws: WebSocket, wss: Server) => {
  console.log("Client Close");
};

const onMessage = (message: string, ws: WebSocket, wss: Server) => {
  wss.clients.forEach((client) => {
    client.send(message.toString());
  });
};

export { onConnection };
