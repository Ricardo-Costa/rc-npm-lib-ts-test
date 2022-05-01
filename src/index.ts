import configs from "./configs";
import Server from "./infra/server";

export class RcLib {
  
  readonly server: Server;

  constructor() {
    this.server = new Server({
      host: String(configs.HOST),
      port: Number(configs.PORT)
    });
  }
};
