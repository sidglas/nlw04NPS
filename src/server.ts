import "reflect-metadata"
import express, { Request, Response, NextFunction} from "express";
import "express-async-errors"


import { router } from "./routes";
import "./database"

const app = express();
app.use(express.json())
app.use(router)

const port = process.env.PORT || 3333


/*
app.get("/", (request, response) => {
  return response.json({message: "Hello,World - NLW04"})
})

app.post("/", (request, response ) => {
  return response.json({message: "Dados salvos com sucesso - NLW04"})
})
*/
//middleware de tratativa de erro
app.use((err: Error, request: Request, response: Response, next: NextFunction) => {
  if (err instanceof Error) {
    return response.status(400).json({
      error: err.message
    })
  }
  return response.status(500).json({
    status: "error", 
    message: "Internal Server Error"
  })
})


app.listen(port, () => console.log(`Server is running on port ${port}`))
