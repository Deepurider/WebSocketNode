import { WebSocket } from "ws";

const createWsConnection = (server: any) => {
  const webSocket = new WebSocket.Server({ server });
  return webSocket;
};

export { createWsConnection };
