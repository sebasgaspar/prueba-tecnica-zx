import { ResponseInterface } from "../interfaces";

export function failureResponse({ message, data }) {

    return new ResponseInterface({
        ok: false,
        status: 400,
        message: message,
        data: data
    })
}

export function errorResponse({ message }) {

    return new ResponseInterface({
        ok: false,
        status: 500,
        message: message,
        data: null
    })
}