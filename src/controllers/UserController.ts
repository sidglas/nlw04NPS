import { Request, Response } from "express"
import { CreateUserService } from "../services/CreateUserService";

class UserController {

  async create(request: Request, response: Response){

    const { name, email} = request.body;
    const createUserService = new CreateUserService()
    const user = await createUserService.execute({ name, email })
    
    console.log('Status', response.statusCode)
    let { statusCode } = response
    return  statusCode === 200 
      ? response.status(201).json(user)
      : response.status(statusCode).json({
        error: "User already exists!"
      });

  }

}

export { UserController }