import axios from "axios";

export async function searchCountry(q: any) {
    return axios.get(`${process.env.URL_GEONAME}?q=${q}&country=US&country=CA&style=full&orderby=score&maxRows=20&username=${process.env.GEO_USERNAME}`)
        .then(response => {
            return response.data
        }).catch(err => {
            throw err;
        })
}