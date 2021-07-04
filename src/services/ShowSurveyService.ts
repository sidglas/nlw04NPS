/*
import { SurveysRepository } from "../repositories/SurveysRepository"
import  { getCustomRepository } from "typeorm"
import { classToPlain } from "class-transformer"
//import { hash } from "bcryptjs"




class ShowSurveyService  {

  async execute() {
    console.log('estarei aqui ?????????????????????000')
    const surveysRepository = getCustomRepository(SurveysRepository);
    const all = await surveysRepository.find();
    console.log('estarei aqui ?????????????????????001')
    return classToPlain(all);
  }
}

export { ShowSurveyService }

*/
import { getCustomRepository } from "typeorm"
import { classToPlain } from "class-transformer"
import { SurveysRepository } from "../repositories/SurveysRepository"

class ShowSurveyService {
  async execute() {
    const surveysRepositories = getCustomRepository(SurveysRepository)

    const allSurveys  = await surveysRepositories.find()
      
    return classToPlain(allSurveys)
  }
}

export { ShowSurveyService }