"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.errorResponse = exports.failureResponse = void 0;
const interfaces_1 = require("../interfaces");
function failureResponse({ message, data }) {
    return new interfaces_1.ResponseInterface({
        ok: false,
        status: 400,
        message: message,
        data: data
    });
}
exports.failureResponse = failureResponse;
function errorResponse({ message }) {
    return new interfaces_1.ResponseInterface({
        ok: false,
        status: 500,
        message: message,
        data: null
    });
}
exports.errorResponse = errorResponse;
