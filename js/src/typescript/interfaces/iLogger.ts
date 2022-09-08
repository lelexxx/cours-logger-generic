export default interface ILogger{
    callAndTrace<TResult>(action: Promise<TResult>): TResult;

    trace<T>(level: LoggerLevel, message: T): void;
}