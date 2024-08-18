import { ArrayMethod } from './array.method';
import { BigIntMethod } from './number/bigInt.method';
import { BooleanMethod } from './boolean/boolean.method';
import { SameMethod } from './same.method';
import { EmptyMethod } from './empty.method';
import { FalseMethod } from './boolean/false.method';
import { FalsyMethod } from './boolean/falsy.method';
import { InstanceofMethod } from './instanceof.method';
import { NullMethod } from './null.method';
import { NumberMethod } from './number/number.method';
import { ObjectMethod, StrictObjectMethod } from './object.method';
import { StringMethod } from './string/string.method';
import { SymbolMethod } from './symbol.method';
import { TrueMethod } from './boolean/true.method';
import { TruthyMethod } from './boolean/truthy.method';
import { UndefinedMethod } from './undefined.method';
import { ZeroMethod } from './number/zero.method';
import { PrimitiveMethod } from './primitive.method';
import { PromiseMethod } from './promise.method';
import { AsyncFunctionMethod, FunctionMethod, GeneratorFunctionMethod } from './function.method';
import { PositiveMethod } from './number/positive.method';
import { NegativeMethod } from './number/negative.method';
import { InfinityMethod } from './number/infinity.method';
import { Ipv6Method } from './string/ipv6.method';
import { Ipv4Method } from './string/ipv4.method';
import { MacAddressMethod } from './string/mac-address.method';
import { WordMethod } from './string/word.method';
import { OddMethod } from './number/odd.method';
import { EvenMethod } from './number/even.method';
import { LenMethod } from './len.method';
import { NumericMethod } from './number/numeric.method';
import { IntMethod } from './number/int.method';
import { CharMethod } from './string/char.method';
import { PascalCaseMethod } from './string/register/pascal-case.method';
import { KebabCaseMethod } from './string/register/kebab-case.method';
import { CamelCaseMethod } from './string/register/camel-case.method';
import { SnakeCaseMethod } from './string/register/snake-case.method';
import { UpperCaseMethod } from './string/register/upper-case.method';
import { LowerCaseMethod } from './string/register/lower-case.method';
import { SafariMethod } from './browser/safari.method';
import { FirefoxMethod } from './browser/firefox.method';
import { AndroidMethod } from './system/android.method';
import { PhoneMethod } from './hardware/phone.method';
import { WindowsMethod } from './system/windows.method';
import { OperaMethod } from './browser/opera.method';
import { IpodMethod } from './hardware/ipod.method';
import { IphoneMethod } from './hardware/iphone.method';
import { IpadMethod } from './hardware/ipad.method';
import { IosMethod } from './system/ios.method';
import { IeMethod } from './browser/ie.method';
import { EdgeMethod } from './browser/edge.method';
import { BrowserMethod } from './browser/browser.method';
import { MacMethod } from './system/mac.method';
import { ChromeMethod } from './browser/chrome.method';
import { WindowsPhoneMethod } from './hardware/windows-phone.method';
import { BlackberryMethod } from './hardware/blackberry.method';
import { AndroidPhoneMethod } from './hardware/android-phone.method';
import { MobileMethod } from './hardware/mobile.method';
import { OnlySpaceMethod, SpaceMethod } from './string/space.method';
import { TodayMethod } from './string/date/today.method';
import { IsoFutureMethod } from './string/date/iso/iso-future.method';
import { IsoPastMethod } from './string/date/iso/iso-past.method';
import { IsoMethod } from './string/date/iso/iso.method';
import { TomorrowMethod } from './string/date/tomorrow.method';
import { YesterdayMethod } from './string/date/yesterday.method';
export declare const is: {
    firefox: typeof FirefoxMethod;
    opera: typeof OperaMethod;
    ie: typeof IeMethod;
    edge: typeof EdgeMethod;
    safari: typeof SafariMethod;
    browser: typeof BrowserMethod;
    chrome: typeof ChromeMethod;
    ios: typeof IosMethod;
    android: typeof AndroidMethod;
    windows: typeof WindowsMethod;
    mac: typeof MacMethod;
    phone: typeof PhoneMethod;
    ipod: typeof IpodMethod;
    iphone: typeof IphoneMethod;
    ipad: typeof IpadMethod;
    windowsPhone: typeof WindowsPhoneMethod;
    blackberry: typeof BlackberryMethod;
    androidPhone: typeof AndroidPhoneMethod;
    mobile: typeof MobileMethod;
    boolean: typeof BooleanMethod;
    false: typeof FalseMethod;
    falsy: typeof FalsyMethod;
    true: typeof TrueMethod;
    truthy: typeof TruthyMethod;
    odd: typeof OddMethod;
    positive: typeof PositiveMethod;
    zero: typeof ZeroMethod;
    int: typeof IntMethod;
    infinity: typeof InfinityMethod;
    number: typeof NumberMethod;
    numeric: typeof NumericMethod;
    string: typeof StringMethod;
    onlySpace: typeof OnlySpaceMethod;
    space: typeof SpaceMethod;
    pascalCase: typeof PascalCaseMethod;
    upperCase: typeof UpperCaseMethod;
    kebabCase: typeof KebabCaseMethod;
    macAddress: typeof MacAddressMethod;
    camelCase: typeof CamelCaseMethod;
    word: typeof WordMethod;
    snakeCase: typeof SnakeCaseMethod;
    ipv4: typeof Ipv4Method;
    ipv6: typeof Ipv6Method;
    char: typeof CharMethod;
    lowerCase: typeof LowerCaseMethod;
    today: typeof TodayMethod;
    tomorrow: typeof TomorrowMethod;
    yesterday: typeof YesterdayMethod;
    isoFuture: typeof IsoFutureMethod;
    isoPast: typeof IsoPastMethod;
    iso: typeof IsoMethod;
    len: typeof LenMethod;
    array: typeof ArrayMethod;
    asyncFunction: typeof AsyncFunctionMethod;
    bigInt: typeof BigIntMethod;
    compare: typeof SameMethod;
    same: typeof SameMethod;
    empty: typeof EmptyMethod;
    even: typeof EvenMethod;
    function: typeof FunctionMethod;
    generatorFunction: typeof GeneratorFunctionMethod;
    instanceof: typeof InstanceofMethod;
    negative: typeof NegativeMethod;
    null: typeof NullMethod;
    object: typeof ObjectMethod;
    strictObject: typeof StrictObjectMethod;
    primitive: typeof PrimitiveMethod;
    promise: typeof PromiseMethod;
    symbol: typeof SymbolMethod;
    undefined: typeof UndefinedMethod;
    object_not_empty<T>(target: unknown): target is T;
    object_empty<T>(target: unknown): target is T;
    string_not_empty<T>(target: unknown): target is T;
    string_empty<T>(target: unknown): target is T;
    array_not_empty<T>(target: unknown): target is T;
    array_empty<T>(target: unknown): target is T;
};
