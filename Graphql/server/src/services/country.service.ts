import { CountryModel } from '../interfaces';
import { getArrayModel } from '../utils/country/functions';
import { searchCountry } from '../utils/GeoNames/country';


export class CountryService {

    // GET SUGGESTION 
    getSuggestion = async (q: string) => {
        try {
            var countries: CountryModel[] = []
            if (q) {
                let response = await searchCountry(q)
                if ('geonames' in response) {
                    countries = getArrayModel(response.geonames)
                    return { status: 200, data: countries }
                }
                else {
                    return 'Failed to get querie response'
                }
            }

        } catch (e) {
            console.log(e);
            return e
        }
    }

}