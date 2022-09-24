export enum LoggerLevel
{
    Information, 
    Debug, //pas présent en production
    Warning, //indique un comportement anormal de l'application mais non bloquant
    Error,
    Critical //nécessite une intervention immédiate ou une gestion différente d'une erreur
}