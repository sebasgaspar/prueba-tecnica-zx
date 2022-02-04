import { Response, Request } from 'express';
import { ResponseInterface } from '../interfaces';
import { CountryService } from '../services/country.service';

export class CountryController {

    countryService = new CountryService()

    // GET SUGGESTION 
    getSuggestion = async (q: string) => {
        const result = await this.countryService.getSuggestion(q);
         return result.data
    }
}
