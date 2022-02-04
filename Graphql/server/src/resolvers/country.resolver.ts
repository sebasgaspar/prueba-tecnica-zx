import { CountryController } from "../controllers/country.controller";

const countryController = new CountryController()
export const countryResolve = {
    Query: {
        countrySuggestion: (root, { q }, context) => countryController.getSuggestion(q),
    },

};