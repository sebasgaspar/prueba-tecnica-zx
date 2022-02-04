/*
    /
*/
import { Router } from "express";
import { CountryController } from "../controllers/country.controller";

const routes = Router();
const countryController = new CountryController()


routes.get('/search', countryController.getSuggestion)



export default routes;