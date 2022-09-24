import { LoggerLevel } from "../enums/loggerLevel";
import ILogger from "../interfaces/iLogger";

export default class ConsoleLogger implements ILogger{
    public async callAndTrace<TResult>(action: Promise<TResult>): Promise<TResult>{
        try{
            return await action.then(r => {
                this.trace(LoggerLevel.Information, 'action call with success');

                if(r === null){
                    this.trace(LoggerLevel.Warning, 'action has a nullable result');
                }

                this.trace<TResult>(LoggerLevel.Debug, r);

                return r;
            });
        }
        catch(e){
            this.trace(LoggerLevel.Error, e);
            return null;
        }
    }

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