import { CountryModel } from "../../interfaces";

export function getArrayModel(dataArray) {
    var countries: CountryModel[] = [];
    dataArray.forEach(element => {
        let newCountry: CountryModel = {
            name: `${element.asciiName}, ${element.countryName}`,
            latitude: element.lat,
            longitude: element.lng,
            score: element.score
        }
        countries.push(newCountry)
    });
    countries.sort((a, b) => b.score - a.score)
    return countries
}