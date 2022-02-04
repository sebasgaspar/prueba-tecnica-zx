import { Response, Request } from 'express';
import { ResponseInterface } from '../interfaces';
import { CountryService } from '../services/country.service';

export class CountryController {

    countryService = new CountryService()

    // GET SUGGESTION 
    getSuggestion = async (req: Request, res: Response) => {
        const result: ResponseInterface = await this.countryService.getSuggestion(req);
        if (result.status === 200) return res.status(result.status).send({ "search": result.data })
        return res.status(result.status).send(result)
    }
}
