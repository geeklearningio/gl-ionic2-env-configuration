export declare class EnvConfiguration {
    private merrgedConfiguration;
    constructor();
    load(): Promise<boolean>;
    getConfig(): any;
}
