import { LoggerLevel } from "./enums/loggerLevel";
import { LoggerType } from "./enums/loggerType";
import ILogger from "./interfaces/iLogger";
import LoggerManager from "./logger/loggerManager";
import Package from "./model/package";
import Timer from "./tools/timer";

const logger: ILogger = LoggerManager.getLogger(LoggerType.Console);

//Utilisation d'un timer pour regrouper les logs d'un même bloc de code ensemble (à cause de l'async)
Timer.sleep(2000).then(() => {
    const pkgString = new Package<string>("Ceci est un test");
    logger.trace(LoggerLevel.Information, "Code n°1");
    logger.trace<object>(LoggerLevel.Warning, pkgString);
    logger.callAndTrace(pkgString.toString());
});

//Utilisation d'un timer pour regrouper les logs d'un même bloc de code ensemble (à cause de l'async)
Timer.sleep(2000).then(() => {
    logger.trace(LoggerLevel.Information, "Code n°2");
    const pkgObject = new Package<object>({id: 1, label: "Ceci est un objet"});
    logger.trace<object>(LoggerLevel.Information, pkgObject);
    logger.callAndTrace<string>(pkgObject.toString());
    logger.callAndTrace<object>(pkgObject.toJson())
});

//Utilisation d'un timer pour regrouper les logs d'un même bloc de code ensemble (à cause de l'async)
Timer.sleep(2000).then(() => {
    logger.trace(LoggerLevel.Information, "Code n°3");
    const pkgNull = new Package<null>(null);
    logger.trace<object>(LoggerLevel.Error, pkgNull);
    logger.callAndTrace<string>(pkgNull.toString());
});
