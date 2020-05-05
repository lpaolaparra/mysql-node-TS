
//patron singleton

import mysql = require('mysql');

export default class MySQL {

    //atributos
    private static _instance: MySQL;
    cnn: mysql.Connection;
    conectado: boolean = false;

    constructor(){

        //la conexion solo se deberia de ejecutar una sola vez
        console.log('clase inicializada');

        this.cnn = mysql.createConnection({
            host: 'localhost',
            user: 'root',
            password: '',
            database: 'node_db',
            port:3308,
            
        });

        this.conectarDB();
    }

    //getter
    public static get instance() {

        return this._instance || ( this._instance = new this() );
    }

    static ejecutarQuery( query: string, callback: Function ){

        this.instance.cnn.query( query, (err, results: object[], fields) => {

            if( err ){

                console.log('Error en Query');
                console.log(err);
                return callback( err );
            }

            if(results.length === 0){
                callback('El registro solicitado no existe')
            }else{
                callback(null,results)
            }
            
        })
    }

    static scapeId( id: string){

        return this.instance.cnn.escape( id );
        
    }

    private conectarDB(){

        this.cnn.connect( (err:mysql.MysqlError) => {
            
            if( err ){
                console.log(err.message);
                return;
            }
            
            this.conectado = true;
            console.log('Base de datos conectada');
        });
    }

}