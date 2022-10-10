import { LoggerLevel } from "./enums/loggerLevel";
import BaseLogger from "./baseLogger";

export default class ConsoleLogger extends BaseLogger{
    public trace<T>(level: LoggerLevel, message: T): void{
        switch(level){
            case LoggerLevel.Information :
                console.log('Information', message);
                break;
            case LoggerLevel.Debug :
                console.log('Debug', message);
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