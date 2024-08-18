export declare function FunctionMethod<T extends typeof Function>(target: unknown): target is T;
export declare function AsyncFunctionMethod(target: unknown): target is '[object AsyncFunction]';
export declare function GeneratorFunctionMethod(target: unknown): target is '[object Generator]';
