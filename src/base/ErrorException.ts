export default class ErrorException {

    private message: string | object;
    private code: number;

    constructor(message: string | object, code: number){
        this.message = message;
        this.code = code;
    }
}