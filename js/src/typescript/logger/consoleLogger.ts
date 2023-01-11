import BaseLogger from "./baseLogger";
import { LoggerLevel } from "./enums/loggerLevel";

export default class ConsoleLogger extends BaseLogger{
    public trace<T>(level: LoggerLevel, message: T): void{
        switch(level){
            case LoggerLevel.Information :
                console.log('Information', message);
                break;
            case LoggerLevel.Debug :
                console.debug('Debug', message);
                break;
            case LoggerLevel.Warning :
                console.log('Warning', message);
                break;
            case LoggerLevel.Error :
                console.error(message);//console.trace(message); + couleur rouge
                break;
            case LoggerLevel.Critical :
                console.error(message);//console.trace(message); + couleur rouge
                break;
        }
    }
}