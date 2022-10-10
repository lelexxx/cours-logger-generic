import { LoggerLevel } from "./enums/loggerLevel";
import BaseLogger from "./baseLogger";

export default class ApiLogger extends BaseLogger{
    trace<T>(level: LoggerLevel, message: T): void {
        throw new Error("Method not implemented.");
    }

}