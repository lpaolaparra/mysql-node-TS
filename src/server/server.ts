import express = require('express');
import path = require('path');

export default class Server {

    //definicion de variables
    public app: express.Application;
    public port: number;

    constructor(puerto: number){
        this.port = puerto;
        this.app = express();

    }

    static init(puerto: number){
        return new Server( puerto );
    }
    
    private publicFolder(){
        //defino que la carpeta public es publica
        const publicPath = path.resolve( __dirname,'../public');
        this.app.use( express.static(publicPath));
    }

    start(callback:Function){
        this.app.listen( this.port,callback());
        this.publicFolder();
    }
}