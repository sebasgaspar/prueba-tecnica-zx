"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const country_routes_1 = __importDefault(require("./country.routes"));
const routerMain = express_1.default.Router();
routerMain.use('/', country_routes_1.default);
exports.default = routerMain;
