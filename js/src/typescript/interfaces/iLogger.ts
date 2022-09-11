import { LoggerLevel } from "../enums/loggerLevel";

export default interface ILogger{
    callAndTrace<TResult>(action: Promise<TResult>): Promise<TResult>;

    trace<T>(level: LoggerLevel, message: T): void;
}