import { Request, Response } from "express"
import { CreateSurveyService } from "../services/CreateSurveyService";

class SurveyController {

  async create(request: Request, response: Response){

    const { title, description} = request.body;
    const createSurveyService = new CreateSurveyService()
    const survey = await createSurveyService.execute({ title, description })
    return response.json(survey)

  }
}

export { SurveyController }