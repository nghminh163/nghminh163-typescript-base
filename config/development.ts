import dotenvFlow from "dotenv-flow";

dotenvFlow.config();

module.exports = {
  port: process.env.PORT || 3000,
};
