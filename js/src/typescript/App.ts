import { LoggerLevel } from "./enums/loggerLevel";
import { LoggerType } from "./enums/loggerType";
import ILogger from "./interfaces/iLogger";
import LoggerManager from "./logger/loggerManager";

async function add(x: number, y: number): Promise<number>{
    return x + y;
}

async function getNull(): Promise<null>{
    return null;
}

const logger: ILogger = LoggerManager.getLogger(LoggerType.Console);

logger.callAndTrace<number>(add(1, 2)).then((sum) => {
    logger.trace<number>(LoggerLevel.Debug, sum)
});

logger.callAndTrace<null>(getNull()).then((resultNull) => {
    logger.trace<null>(LoggerLevel.Error, resultNull);
});

logger.trace<object>(LoggerLevel.Debug, { id: 1, label: 'test'});