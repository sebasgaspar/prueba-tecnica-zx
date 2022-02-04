"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CountryService = void 0;
const functions_1 = require("../utils/country/functions");
const country_1 = require("../utils/GeoNames/country");
const responses_1 = require("../utils/responses");
class CountryService {
    constructor() {
        // GET SUGGESTION 
        this.getSuggestion = (req) => __awaiter(this, void 0, void 0, function* () {
            try {
                const { q } = req.query;
                var countries = [];
                if (q) {
                    let response = yield (0, country_1.searchCountry)(q);
                    if ('geonames' in response) {
                        countries = (0, functions_1.getArrayModel)(response.geonames);
                        return { status: 200, data: countries };
                    }
                    else {
                        return (0, responses_1.failureResponse)({ message: 'Query not found', data: null });
                    }
                }
                else {
                    return (0, responses_1.failureResponse)({ message: 'q param is required', data: null });
                }
            }
            catch (e) {
                console.log(e);
                return (0, responses_1.errorResponse)({
                    message: 'err',
                });
            }
        });
    }
}
exports.CountryService = CountryService;
