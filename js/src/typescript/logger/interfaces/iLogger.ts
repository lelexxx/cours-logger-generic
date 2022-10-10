import JsonSerializable from "../../model/jsonSerializable";
import { LoggerLevel } from "../enums/loggerLevel";

export default interface ILogger{
    /** Execute une action (sous forme de Promise) tout en effectuant des logs 
     * 
     * @param action Promise a exécuter
     * @return Promise contenant le résultat de l'action passé en paramètre
     */
    callAndTrace<TResult>(action: Promise<TResult>): Promise<TResult>;

    /** Permet d'effectuer un log d'un message
     * 
     * @param level Niveau du log attendu
     * @param message Message (sous forme d'objet) qui doit être log
     */
    trace<T>(level: LoggerLevel, message: T): void;

    /** Permet d'effectuer un log d'un message
     * 
     * @param level Niveau du log attendu
     * @param message Message (sous forme d'objet) qui doit être log
     */
    traceJson<T extends JsonSerializable>(level: LoggerLevel, message: T): void; //dans le cas de la généricité il est possible de préciser un héritage attendu
}