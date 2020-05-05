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

 import Server from './server/server';
 import router from './router/router';
 import MySQL from './mysql/mysql';

const server = Server.init( 3000 );
server.app.use(router);

//nueva instancia de my base de datos
//const mysql = new MySQL();
//MySQL.instance;

server.start( () => {
    console.log('Servidor corriendo en el puerto 3000');
})