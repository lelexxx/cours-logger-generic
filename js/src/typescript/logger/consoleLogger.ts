import ILogger from "../interfaces/iLogger";

export default class ConsoleLogger implements ILogger{
    callAndTrace<TResult>(action: Promise<TResult>): TResult{
        let result: TResult = null;
        try{
            action.then(r => result = r);
            this.trace(LoggerLevel.Information, 'action call with success');
        }
        catch{
            this.trace(LoggerLevel.Error, 'action call with Error');
            return null;
        }

        if(result === null){
            this.trace(LoggerLevel.Warning, 'action has a nullable result');
        }

        return result;
    }

    trace<T>(level: LoggerLevel, message: T): void{
        switch(level){
            case LoggerLevel.Information :
                console.info(message);
                break;
            case LoggerLevel.Debug :
                console.debug(message);
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