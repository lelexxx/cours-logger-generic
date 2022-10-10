import HttpClient from "./api/httpClient";
import { HttpVerb } from "./api/httpverb";
import { LoggerLevel } from "./logger/enums/loggerLevel";
import { LoggerType } from "./logger/enums/loggerType";
import ILogger from "./logger/interfaces/iLogger";
import LoggerManager from "./logger/loggerManager";
import Package from "./model/package";
import Timer from "./tools/timer";

const loggerType = LoggerType.Api;
const logger: ILogger = LoggerManager.getLogger(loggerType);

if(loggerType === LoggerType.Api) {
    const httpClient = new HttpClient();
    const baseUrl = 'https://reqres.in/api/users';
    httpClient.processJsonRequest(HttpVerb.GET, baseUrl)
            .then(data => {
                //console.log('data from GET', data);
            });

    let pkgUser = new Package<object>({ "name": "morpheus", "job": "leader"});
    httpClient.processJsonRequest(HttpVerb.POST, baseUrl, pkgUser)
            .then(data => {
                //console.log('data from POST', data);
            });
    
    pkgUser = new Package<object>({ "name": "neo", "job": "manager"});
    httpClient.processJsonRequest(HttpVerb.PUT, `${baseUrl}/2`, pkgUser) //utilisation 
            .then(data => {
                //console.log('data from PUT', data);
            });

    pkgUser = new Package<object>({ "job": "manager"});
    httpClient.processJsonRequest(HttpVerb.PATCH, `${baseUrl}/2`, pkgUser)
            .then(data => {
                //console.log('data from PATCH', data);
            });
    
    httpClient.processJsonRequest(HttpVerb.DELETE, `${baseUrl}/2`)
            .then(data => {
                //console.log('data from DELETE', data);
            });
} else if(loggerType === LoggerType.Console) {
    // #region Console

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

    // #endregion
}
