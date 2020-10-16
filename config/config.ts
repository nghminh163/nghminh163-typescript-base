import nodeConfig from "config";

interface Config {
  port: string;
}

const config: Config = {
  port: nodeConfig.get<string>("port"),
};

export default config;
