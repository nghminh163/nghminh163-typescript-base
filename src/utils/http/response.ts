import { Response } from "express";

function Success(res: Response, data: any): void {
  res.status(200);
  res.send(data);
}

function NotFound(res: Response, data: any): void {
  res.status(200);
  res.send(data);
}

export default {
  Success,
  NotFound,
};
