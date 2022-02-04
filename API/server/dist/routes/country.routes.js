"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/*
    /
*/
const express_1 = require("express");
const country_controller_1 = require("../controllers/country.controller");
const routes = (0, express_1.Router)();
const countryController = new country_controller_1.CountryController();
routes.get('/search', countryController.getSuggestion);
exports.default = routes;
