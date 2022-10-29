import { LoggerLevel } from "./enums/loggerLevel";
import BaseLogger from "./baseLogger";
import HttpClient from "../api/httpClient";
import { HttpVerb } from "../api/httpverb";
import Log from "../model/log"

export default class ApiLogger extends BaseLogger{
    private httpClient = new HttpClient();

    trace<T>(level: LoggerLevel, message: T): void {
        const baseUrl = 'https://reqres.in/api/users';
        const log = new Log(level.toString(), message.toString());

        this.httpClient.processJsonRequest(HttpVerb.POST, baseUrl, log);
    }
}