import { SurveysRepository } from "../repositories/SurveysRepository"
import  { getCustomRepository } from "typeorm"
//import { hash } from "bcryptjs"


interface ISurveyRequest {
  title: string;
  description: string;
}

class CreateSurveyService  {

  async execute({title, description} : ISurveyRequest) {

    if (!title) {
      throw new Error("Invalid Name")
    }

    //const surveysRepository = new UsersRepositories(); substituído pois usamos repos customizados
    const surveysRepository = getCustomRepository(SurveysRepository);

    const surveyAlreadyExists =  await surveysRepository.findOne({
      title
    });

    if ( surveyAlreadyExists ) {
      throw new Error("Survey already exists")
    }

//    const passwordHash = await hash(password, 8)

    const survey = surveysRepository.create({
      title,
      description,
    })
//    admin,
//    password: passwordHash,


    console.log('ESTOU AQUI NA CREATESURVEYSERVICE 02')
    await surveysRepository.save(survey);
    return survey;
  }
}

export { CreateSurveyService }