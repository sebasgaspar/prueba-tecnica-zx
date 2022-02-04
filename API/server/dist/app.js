"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.app = void 0;
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const swagger_ui_express_1 = __importDefault(require("swagger-ui-express"));
const yamljs_1 = __importDefault(require("yamljs"));
const routes_1 = __importDefault(require("./routes"));
const body_parser_1 = __importDefault(require("body-parser"));
require('dotenv').config();
// App de Express
const app = (0, express_1.default)();
exports.app = app;
const port = process.env.PORT || '3000';
app.set('port', port);
//Lectura y parseo del body
app.use(express_1.default.json());
app.use(body_parser_1.default.urlencoded({ extended: true }));
// CORS
app.use((0, cors_1.default)());
//Swagger config
const swaggerDocument = yamljs_1.default.load('./server/swagger/openapi.yaml');
app.use('/docs', swagger_ui_express_1.default.serve, swagger_ui_express_1.default.setup(swaggerDocument));
//Mis Rutas
app.use('/api', routes_1.default);
