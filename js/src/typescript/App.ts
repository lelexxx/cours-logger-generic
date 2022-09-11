import { LoggerLevel } from "./enums/loggerLevel";
import { LoggerType } from "./enums/loggerType";
import ILogger from "./interfaces/iLogger";
import LoggerManager from "./logger/loggerManager";
import Package from "./model/package";

const logger: ILogger = LoggerManager.getLogger(LoggerType.Console);

const pkgString = new Package<string>("Ceci est un test")
logger.trace<object>(LoggerLevel.Information, pkgString);
logger.callAndTrace(pkgString.toString()).then((str) => {
    logger.trace<string>(LoggerLevel.Debug, str)
});

const pkgObject = new Package<object>({id: 1, label: "Ceci est un objet"})
logger.trace<object>(LoggerLevel.Warning, pkgObject);
logger.callAndTrace<string>(pkgObject.toString()).then((str) => {
    logger.trace<string>(LoggerLevel.Debug, str)
});
logger.callAndTrace<object>(pkgObject.toJson()).then((json) => {
    logger.trace<object>(LoggerLevel.Debug, json)
});

const pkgNull = new Package<null>(null)
logger.trace<object>(LoggerLevel.Error, pkgNull);
logger.callAndTrace<string>(pkgNull.toString()).then((json) => {
    logger.trace<string>(LoggerLevel.Debug, json)
});