import { LoggerLevel } from "../enums/loggerLevel";
import ILogger from "../interfaces/iLogger";

export default class ConsoleLogger implements ILogger{
    async callAndTrace<TResult>(action: Promise<TResult>): Promise<TResult>{
        try{
            return await action.then(r => {
                this.trace(LoggerLevel.Information, 'action call with success');

                if(r === null){
                    this.trace(LoggerLevel.Warning, 'action has a nullable result');
                }

                return r;
            });
        }
        catch{
            this.trace(LoggerLevel.Error, 'action call with Error');
            return null;
        }
    }

    trace<T>(level: LoggerLevel, message: T): void{
        switch(level){
            case LoggerLevel.Information :
                console.info(message);
                break;
            case LoggerLevel.Debug :
                console.log(message);
                break;
            case LoggerLevel.Warning :
                console.warn(message);
                break;
            case LoggerLevel.Error :
                console.error(message);
                break;
            case LoggerLevel.Critical :
                console.error(message);
                break;
        }
    }
}