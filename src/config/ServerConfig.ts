import RouteInterface from "../models/interface/RouteInterface";
import express, { Application } from 'express';
import bodyParser = require("body-parser");

import morgan from 'morgan';

export default class ServerConfig {

    private app: Application;
    private port: number;

    constructor(port: number = 3000){
        this.app = express();
        this.port = port;
    }

    private initRoutes(routes: RouteInterface[]): void {
        routes.forEach(route => route.applyRoute(this.app))
    }

    private prepareServer(routes: RouteInterface[]): void {
        this.app.use(bodyParser.json());
        this.app.use(bodyParser.urlencoded({
            extended: false,
        }));
        this.app.use(morgan('combined'));

        this.initRoutes(routes);
    }

    public initServer(routes: RouteInterface[]): void {
        this.prepareServer(routes);

        this.app.listen(this.port, () => {
            console.log(`Server listeninig on port ${this.port}`);            
        });
    }

};