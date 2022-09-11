export default class Package<T>{
    private content: T;

    constructor(content: T){
        this.content = content;
    }

    public async toString(): Promise<string>{
        if(this.content === null)
            return null;

        return this.content.toString();
    }

    public async toJson(): Promise<object>{
        return JSON.parse(this.content.toString());
    }
}