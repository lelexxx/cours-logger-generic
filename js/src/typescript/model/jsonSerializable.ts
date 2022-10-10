export default interface JsonSerializable {
    toJson(): Promise<object>;

    toJsonString(): Promise<string>;
}