

export class WebResult {
    message: string;
    result: number;
    data: any;
    constructor(message: string, result: number = 0, data: any = null){
        this.message = message;
        this.result = result;
        this.data = data;
    }
}