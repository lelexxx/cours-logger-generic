import { LoggerType } from "../enums/loggerType";
import ILogger from "../interfaces/iLogger";
import ConsoleLogger from "./consoleLogger";

export default class LoggerManager {
    public static getLogger(type: LoggerType): ILogger{
        switch(type){
            case LoggerType.Console:
                return new ConsoleLogger();
            default:
                throw new Error('Unknown logger');
        }
    }
}