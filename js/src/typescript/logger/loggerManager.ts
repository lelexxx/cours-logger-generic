import { LoggerType } from "./enums/loggerType";
import ILogger from "./interfaces/iLogger";
import ApiLogger from "./apiLogger";
import ConsoleLogger from "./consoleLogger";

export default class LoggerManager {
    public static getLogger(type: LoggerType): ILogger{ //on retourne une interface afin de toujours utiliser le loger de la même façon (peut importe son implémentation)
        switch(type){
            case LoggerType.Console:
                return new ConsoleLogger();
                case LoggerType.Api:
                    return new ApiLogger();
            default:
                throw new Error('Unknown logger'); //Dans le cas d'un switch sur un ENUM, toujours renvoyer une erreur si il y a un cas non prévu
        }
    }
}