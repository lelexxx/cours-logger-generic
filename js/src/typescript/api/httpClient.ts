import JsonSerializable from "../model/jsonSerializable";
import { HttpVerb } from "./httpverb";

export default class HttpClient{
    public async processJsonRequest<T extends JsonSerializable>(method: HttpVerb, url: string, body: T = null): Promise<object>{
        const param: Request = {
            method: method,
            headers: {
                'Content-Type': 'application/json',
            },
        };

        if(method !== HttpVerb.GET && body !== null){
            param.body = JSON.stringify(await body.toJson());
        }

        return fetch(url, param)
        .then((response) => {
            console.log(`Response from ${method}`, response);

            if(response.status !== 204)
                return response.json(); //Permet de récupérer le contenu de la réponse
            
            return response.blob();
         }).then((data) => {
            console.log(`Data from ${method}`, data);
             //Cette nouvelle Promise récupère le contenu de la Response au format JSON
             return data;
         });
    }
}

interface Request {
    method: string;
    headers: HeadersInit;
    body?: BodyInit;
}