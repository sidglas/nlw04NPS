"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
var express_1 = __importDefault(require("express"));
//import {config} from 'dotenv';
//import dotenv from "dotenv"
//import * as dotenv from "dotenv";
//require ('dotenv').config()
//dotenv.config();
require("./database");
var app = express_1.default();
console.log('Oprocesso roda em ', process.env.PORT);
var port = process.env.PORT || 3333;
app.get("/", function (request, response) {
    return response.json({ message: "Hello,World - NLW04" });
});
app.post("/", function (request, response) {
    return response.json({ message: "Dados salvos com sucesso - NLW04" });
});
app.listen(port, function () { return console.log("Server is running on port " + port); });
