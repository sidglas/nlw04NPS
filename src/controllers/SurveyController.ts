import { Request, Response } from "express"
import { CreateSurveyService } from "../services/CreateSurveyService";
import { ShowSurveyService } from "../services/ShowSurveyService";

class SurveyController {

  async create(request: Request, response: Response){

    const { title, description} = request.body;
    const createSurveyService = new CreateSurveyService()
    const survey = await createSurveyService.execute({ title, description })
    return response.status(201).json(survey)

  }

  async show(request: Request, response: Response) {
    const showSurveyService = new ShowSurveyService()
    const all = await showSurveyService.execute()
    return response.json(all)

  }
}

export { SurveyController }


