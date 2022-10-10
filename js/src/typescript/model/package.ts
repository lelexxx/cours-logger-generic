import JsonSerializable from "./jsonSerializable";

export default class Package<T> implements JsonSerializable{ //classe wrapper, c'est à dire qu'elle englobe un objet (image du colis)
    private content: T;

    constructor(content: T){
        this.content = content;
    }

    public async toString(): Promise<string>{
        if(this.content === null) {
            return null;
        }

        return this.content.toString();
    }

    public async toJsonString(): Promise<string> {
        return JSON.stringify(this.toJson());
    }

    public async toJson(): Promise<object>{
        return JSON.parse(JSON.stringify(this.content));
    }
}