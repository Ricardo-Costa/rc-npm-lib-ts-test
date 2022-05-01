import { ServerOptions } from "./types/server-options";

export default class Server {

  private host: string
  private port: number

  constructor ({ host, port }: ServerOptions) {
    this.host = host;
    this.port = port;
  }

  async start(): Promise<void> {
    return new Promise((res, rej) => {
      console.log(`Server start at ${this.host}:${this.port}`);
      res();
    });
  }

}