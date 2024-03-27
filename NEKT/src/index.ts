import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";
const db = require('../db/db.js');

dotenv.config();

const app: Express = express();
const port = process.env.PORT || 3000;

app.get("/", (req: Request, res: Response) => {
  res.send("Express + TypeScript Server");
});

app.get("/users", (req: Request, res: Response) => {
  try {
    const users = db.getUsers();
    res.send(users);
  } catch (error) {
    res.status(500).send(error);
  }
});
app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`);
});