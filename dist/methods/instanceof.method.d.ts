/**
 *
 * @method instanceof
 * @param target object
 * @param classRef link to model
 */
export declare function InstanceofMethod<T>(target: unknown, classRef?: new (...args: any) => T): target is T;
