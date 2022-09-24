import { LoggerType } from "../enums/loggerType";
import ILogger from "../interfaces/iLogger";
import ConsoleLogger from "./consoleLogger";

export default class LoggerManager {
    public static getLogger(type: LoggerType): ILogger{ //on retourne une interface afin de toujours utiliser le loger de la même façon (peut importe son implémentation)
        switch(type){
            case LoggerType.Console:
                return new ConsoleLogger();
            default:
                throw new Error('Unknown logger');
        }
    }
}