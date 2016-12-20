export declare class EnvConfigurationProvider<T> {
    private mergedConfiguration;
    constructor();
    load(): Promise<boolean>;
    addConfig(obj: T): void;
    getConfig(): T;
}
