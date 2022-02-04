"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.app = void 0;
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const express_graphql_1 = require("express-graphql");
const country_schema_1 = __importDefault(require("./schema/country.schema"));
require('dotenv').config();
// App de Express
const app = (0, express_1.default)();
exports.app = app;
const port = process.env.PORT || '3000';
app.set('port', port);
// CORS
app.use((0, cors_1.default)());
//Mis Rutas
app.use('/graphql', (0, express_graphql_1.graphqlHTTP)({
    graphiql: true,
    schema: country_schema_1.default,
    context: {
        messageId: 'test'
    }
}));
