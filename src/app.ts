import "reflect-metadata";
import express from "express";
import  createConnection  from "./database";
//import "express-async-errors";

import { router } from "./routes";

createConnection();

const app = express();
app.use(express.json());
app.use(router);

export { app };