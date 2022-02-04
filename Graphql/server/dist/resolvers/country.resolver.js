"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.countryResolve = void 0;
const country_controller_1 = require("../controllers/country.controller");
const countryController = new country_controller_1.CountryController();
exports.countryResolve = {
    Query: {
        countrySuggestion: (root, { q }, context) => countryController.getSuggestion(q),
    },
};
