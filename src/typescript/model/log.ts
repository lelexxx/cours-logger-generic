import JsonSerializable from "./jsonSerializable";

export default class Log implements JsonSerializable{
    severity: string;
    message: string;

    constructor(severity: string, message: string){
        this.severity = severity;
        this.message = message;
    }

    async toJsonString(): Promise<string> {
        return await JSON.stringify(this);
    }
}