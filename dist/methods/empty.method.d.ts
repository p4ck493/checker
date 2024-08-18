export declare function EmptyMethod<T extends object>(target: unknown): boolean;
export declare function StringEmptyMethod(target: unknown): boolean;
export declare function StringEmptyMethodExecute(target: string): boolean;
export declare function ArrayEmptyMethod<T extends object>(target: unknown): boolean;
export declare function ArrayEmptyMethodExecute<T>(target: T[]): boolean;
export declare function ObjectEmptyMethod<T extends object>(target: unknown): boolean;
export declare function ObjectEmptyMethodExecute(target: {}): boolean;
