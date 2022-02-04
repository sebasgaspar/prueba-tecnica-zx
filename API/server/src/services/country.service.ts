import { Request } from 'express';
import { CountryModel } from '../interfaces';
import { getArrayModel } from '../utils/country/functions';
import { searchCountry } from '../utils/GeoNames/country';
import { failureResponse, errorResponse } from '../utils/responses';


export class CountryService {

    // GET SUGGESTION 
    getSuggestion = async (req: Request) => {
        try {
            const { q } = req.query;
            var countries: CountryModel[] = []
            if (q) {
                let response = await searchCountry(q)
                if ('geonames' in response) {
                    countries = getArrayModel(response.geonames)
                    return { status: 200, data: countries }
                }
                else { return failureResponse({ message: 'Query not found', data: null }) }

            } else { return failureResponse({ message: 'q param is required', data: null }) }

        } catch (e) {
            console.log(e);
            return errorResponse({
                message: 'err',
            });
        }
    }

}