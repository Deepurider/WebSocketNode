import dotenv from "dotenv";
import express from "express";
import { Request } from "express";
import http from "http";
import { createWsConnection } from "./web-socket/web-socket";
import { onConnection } from "./web-socket/web-socket-connection";
import { WebSocket } from "ws";

dotenv.config();
const server = http.createServer(express);
const conn = createWsConnection(server);
console.clear();
conn.on("connection", (ws: WebSocket, req: Request) =>
  onConnection(ws, req, conn)
);

server.listen(3000, () => {
  console.log("Server is listening on localhost:3000");
});
