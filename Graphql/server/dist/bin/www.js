"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const app_1 = require("../app");
const http_1 = __importDefault(require("http"));
const port = process.env.PORT || 3000;
app_1.app.set('port', port);
// CREATE SERVER
var server = http_1.default.createServer(app_1.app);
server.listen(port);
server.on('listening', () => {
    console.log('Servidor corriendo en puerto', (process.env.PORT || 3000));
});
