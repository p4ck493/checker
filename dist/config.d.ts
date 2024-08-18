export default class Config {
    isNode: boolean;
    isBrowser: boolean;
    globalContext: any;
    packageName: string;
    useGlobalContext: boolean;
    error: {
        enabled: boolean;
    };
    definition: {
        phone: number;
    };
    state: {
        vendor: string;
        navigator: any;
        userAgent: string;
        platform: string;
        screen: {
            width: any;
        };
        toString: () => string;
    };
    regexp: {
        bigint: RegExp;
        word: RegExp;
        ipv6: RegExp;
        ipv4: RegExp;
        macAddress: RegExp;
        pascalCase: RegExp;
        kebabCase: RegExp;
        camelCase: RegExp;
        snakeCase: RegExp;
        lowerCase: RegExp;
        upperCase: RegExp;
        safari: RegExp;
        firefox: RegExp;
        android: RegExp;
        windows: RegExp;
        opera: RegExp;
        iphone: RegExp;
        ipad: RegExp;
        ipod: RegExp;
        ie: RegExp;
        edge: RegExp;
        mac: RegExp;
        chrome: RegExp;
        googleInc: RegExp;
        phone: RegExp;
        blackberry: RegExp;
        androidPhone: RegExp;
        space: RegExp;
        anySpace: RegExp;
        iso: {
            date: RegExp;
            time: RegExp;
            dateTime: RegExp;
            dateTimeWithMs: RegExp;
            any: RegExp;
        };
    };
    static create(): Config;
    initGlobalContext(): this;
    initVendor(): this;
    initUserAgent(): this;
    initPlatform(): this;
}
export declare const isConfig: Config;
