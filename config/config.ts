import nodeConfig from "config";

interface Config {
  port: string;
  verifyToken: string;
}

const config: Config = {
  port: nodeConfig.get<string>("port"),
  verifyToken: nodeConfig.get<string>("verifyToken"),
};

export default config;
