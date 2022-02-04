"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getArrayModel = void 0;
function getArrayModel(dataArray) {
    var countries = [];
    dataArray.forEach(element => {
        let newCountry = {
            name: `${element.asciiName}, ${element.countryName}`,
            latitude: element.lat,
            longitude: element.lng,
            score: element.score
        };
        countries.push(newCountry);
    });
    countries.sort((a, b) => b.score - a.score);
    return countries;
}
exports.getArrayModel = getArrayModel;
