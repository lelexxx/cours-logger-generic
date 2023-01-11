export default interface JsonSerializable {
    toJsonString(): Promise<string>;
}