export interface CountryModel {
    name: string,
    latitude: string,
    longitude: string,
    score: number
}

export class ResponseInterface {

    ok?: boolean;
    status: number;
    message?: string;
    data?: any;

    constructor({ ok, status, message, data }) {
        this.ok = ok
        this.status = status
        this.message = message
        this.data = data
    }
}