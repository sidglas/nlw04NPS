import { response } from "express";
import { UsersRepository } from "../repositories/UsersRepository"
import  { getCustomRepository } from "typeorm"

interface IUserRequest {
  name: string;
  email: string;
}

class CreateUserService  {

  async execute({name, email} : IUserRequest) {

    if (!email) {
      throw new Error("Invalid Email")
    }

    //const usersRepository = new UsersRepositories(); substituído pois usamos repos customizados
    const usersRepository = getCustomRepository(UsersRepository);

    const userAlreadyExists =  await usersRepository.findOne({
      email
    });

    if ( userAlreadyExists ) {

      return response.status(400)
      //throw new Error("User already exists")
    }


    const user = usersRepository.create({
      name,
      email,
    })

    console.log('ESTOU AQUI NA CREATEUSERSERVICE 02')
    await usersRepository.save(user);
    return user;
  }
}

export { CreateUserService }