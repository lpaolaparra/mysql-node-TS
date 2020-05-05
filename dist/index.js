"use strict";
/**
 * Typescrupt es un superset que le
 * añadi funciones a JS
 *
 * vamos a escribir codigo es JS y lo que haremos es
 * traducirlo en JS (Angular hace esto!)
 *
 * Para convertirlo debemos decirle a TS que
 * reglas secguir para pasarlo a JS
 * con tsc --init
 */
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const server_1 = __importDefault(require("./server/server"));
const router_1 = __importDefault(require("./router/router"));
const server = server_1.default.init(3000);
server.app.use(router_1.default);
//nueva instancia de my base de datos
//const mysql = new MySQL();
//MySQL.instance;
server.start(() => {
    console.log('Servidor corriendo en el puerto 3000');
});
