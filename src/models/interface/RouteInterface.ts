import { Application } from 'express';

export default interface RouteInterface {
    applyRoute(app: Application): void;
};