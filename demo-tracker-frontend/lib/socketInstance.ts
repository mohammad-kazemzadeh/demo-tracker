import { io, Socket } from "socket.io-client";
import EnvVariables from "../services/urls";

export class SocketInstance {
  private static instance: SocketInstance | null = null;
  private socket: Socket | null = null;

  private constructor() {}

  public static getInstance(): SocketInstance {
    if (!SocketInstance.instance) {
      SocketInstance.instance = new SocketInstance();
    }
    return SocketInstance.instance;
  }

  public getSocket(): Socket {
    if (!this.socket || !this.socket.connected) {
      this.socket = io(EnvVariables.apiURl);
      this.setupEventListeners();
    }
    return this.socket;
  }

  private setupEventListeners() {
    this.socket?.on("connect", () => {
      console.log("Socket connected");
    });

    this.socket?.on("disconnect", () => {
      console.log("Socket disconnected");
    });

    this.socket?.on("error", (error: any) => {
      console.error("Socket error:", error);
    });
  }
}
