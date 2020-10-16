import express, { Express, Request, Response } from "express";
import bodyParser from "body-parser";
import { success } from "signale";
import ResTemplate from "@utils/http/response";
import routes from "@routes/routes";
import config from "@config";

const app: Express = express();
const { port } = config;

// Use json
app.use(bodyParser.json());
// Use application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

// Listen port
app.listen(port, () => {
  success(`App is running now on http://localhost:${port}`);
});

// Router
app.use("/", routes);

app.get("/ping", (_req: Request, res: Response) => {
  ResTemplate.Success(res, "Pong");
});
