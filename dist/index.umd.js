!function(t,n){"object"==typeof exports&&"undefined"!=typeof module?n(exports):"function"==typeof define&&define.amd?define(["exports"],n):n((t||self).checker={})}(this,function(t){function n(t,n){return t instanceof Array&&("function"!=typeof n||!!t.length&&t.every(function(t){return t instanceof n}))}function e(t){return"bigint"==typeof t}function r(t,n){(null==n||n>t.length)&&(n=t.length);for(var e=0,r=Array(n);e<n;e++)r[e]=t[e];return r}var o;function i(t,e){try{var a,u,s=null!=(a=Object.keys(null!=t?t:{}))?a:[],d=null!=(u=Object.keys(null!=e?e:{}))?u:[];if(!n(s)||!n(d))return!1;if(s.length!==d.length)return!1;if(!s.length&&!d.length)return!0;for(var f,c=function(t){var n="undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(n)return(n=n.call(t)).next.bind(n);if(Array.isArray(t)||(n=function(t,n){if(t){if("string"==typeof t)return r(t,n);var e={}.toString.call(t).slice(8,-1);return"Object"===e&&t.constructor&&(e=t.constructor.name),"Map"===e||"Set"===e?Array.from(t):"Arguments"===e||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e)?r(t,n):void 0}}(t))){n&&(t=n);var e=0;return function(){return e>=t.length?{done:!0}:{done:!1,value:t[e++]}}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}(d);!(f=c()).done;){var l=f.value;if(typeof t[l]===o.object){if(!i(t[l],e[l]))return!1}else if(t[l]!==e[l])return!1}return!0}catch(t){return!1}}function a(t){return"string"==typeof t}!function(t){t.object="object"}(o||(o={}));var u={bigint:/^([-+])?(\d+)n/,word:/^[a-zA-Z]+$/,ipv6:/^((([0-9A-Fa-f]{1,4}:){7}([0-9A-Fa-f]{1,4}|:))|(([0-9A-Fa-f]{1,4}:){6}(:[0-9A-Fa-f]{1,4}|((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3})|:))|(([0-9A-Fa-f]{1,4}:){5}(((:[0-9A-Fa-f]{1,4}){1,2})|:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3})|:))|(([0-9A-Fa-f]{1,4}:){4}(((:[0-9A-Fa-f]{1,4}){1,3})|((:[0-9A-Fa-f]{1,4})?:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9A-Fa-f]{1,4}:){3}(((:[0-9A-Fa-f]{1,4}){1,4})|((:[0-9A-Fa-f]{1,4}){0,2}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9A-Fa-f]{1,4}:){2}(((:[0-9A-Fa-f]{1,4}){1,5})|((:[0-9A-Fa-f]{1,4}){0,3}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9A-Fa-f]{1,4}:){1}(((:[0-9A-Fa-f]{1,4}){1,6})|((:[0-9A-Fa-f]{1,4}){0,4}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(:(((:[0-9A-Fa-f]{1,4}){1,7})|((:[0-9A-Fa-f]{1,4}){0,5}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:)))(%.+)?$/,ipv4:/^((25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/,macAddress:/^(?:[0-9A-Fa-f]{2}[:-]){5}(?:[0-9A-Fa-f]{2})$/,pascalCase:/^[A-Z][a-z0-9]*([A-Z][a-z0-9]*)*$/,kebabCase:/^[a-z][a-z0-9]*(?:-[a-z0-9]+)*$/,camelCase:/^[a-z][a-zA-Z0-9]*([A-Z][a-zA-Z0-9]*)*$/,snakeCase:/^(?!^[0-9]+$)[a-z0-9]+(_[a-z0-9]+)*$/,lowerCase:/[a-z]/,upperCase:/[A-Z]/,safari:/^((?!chrome|android).)*safari/i,firefox:/firefox|fxios/i,android:/android/i,windows:/windows|^win/i,opera:/OPR|Opera/i,iphone:/(iPhone)/i,ipad:/(iPad)/i,ipod:/(iPod)/i,ie:/(Trident\/|MSIE\s)([\d.]+)/,edge:/edge|edg|edga\/(\d+)/i,mac:/mac/i,chrome:/Chrome|CriOS/i,googleInc:/Google Inc/i,phone:/phone/i,blackberry:/blackberry|bb10/i,androidPhone:/Android.*Mobile/i,space:/^\s*$/,anySpace:/\s/,iso:{date:/^\d{4}-\d{2}-\d{2}$/,time:/^\d{2}:\d{2}:\d{2}$/,dateTime:/^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}$/,dateTimeWithMs:/^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}.\d+$/,any:/^(\d{4}-\d{2}-\d{2}(?:T\d{2}:\d{2}:\d{2}(?:\.\d{1,3})?(?:Z|[\+\-]\d{2}:\d{2})?)?)|(\d{2}:\d{2}:\d{2}(?:\.\d{1,3})?(?:Z|[\+\-]\d{2}:\d{2})?)/}},s=/*#__PURE__*/function(){function t(){var t,n;this.isNode=!1,this.isBrowser=!1,this.globalContext={},this.packageName="thiis",this.useGlobalContext=!0,this.error={enabled:!0},this.definition={phone:768},this.state={vendor:"",navigator:this.globalContext.navigator,userAgent:"",platform:"",screen:{width:null!=(t=null==(n=this.globalContext.screen)?void 0:n.width)?t:0},toString:Object.prototype.toString},this.regexp=u}t.create=function(){var n,e=new t;return e.isNode="undefined"!=typeof process&&"node"===(null==(n=process)||null==(n=n.release)?void 0:n.name),e.isBrowser="undefined"!=typeof window&&void 0!==window.document,e.initGlobalContext().initVendor().initUserAgent().initPlatform(),e};var n=t.prototype;return n.initGlobalContext=function(){return"undefined"!=typeof globalThis?this.globalContext=globalThis:this.isNode?this.globalContext=global:this.isBrowser?this.globalContext=window:"undefined"!=typeof self&&(this.globalContext=self),this},n.initVendor=function(){var t;return null!=(t=this.globalContext.navigator)&&t.vendor&&(this.state.vendor=this.globalContext.navigator.vendor),this},n.initUserAgent=function(){var t;return null!=(t=this.globalContext.navigator)&&t.userAgent&&(this.state.userAgent=this.globalContext.navigator.userAgent),this},n.initPlatform=function(){var t,n,e;return null!=(t=this.globalContext.navigator)&&t.platform?this.state.platform=this.globalContext.navigator.platform:null!=(n=this.globalContext.navigator)&&null!=(n=n.userAgentData)&&n.platform?this.state.platform=this.globalContext.navigator.userAgentData.platform:this.isNode&&null!=(e=process)&&e.platform&&(this.state.platform=process.platform),this},t}().create();function d(t){return"object"==typeof t&&!n(t)&&null!==t}function f(t){return c(t)||g(t)||h(t)}function c(t){return a(t)&&l(t)}function l(t){return void 0===t.trim()[0]}function g(t){return n(t)&&p(t)}function p(t){return 0>=t.length}function h(t){return d(t)&&b(t)}function b(t){if("size"in t)return t.size<=0;for(var n in t)if(t.hasOwnProperty(n))return!1;return!0}function v(t){return!t}var y=1/0;function m(t){return y===t||-y===t}function A(t){return"number"==typeof t&&!isNaN(t)&&!m(t)}function w(t){return"symbol"==typeof t}function C(t){try{return"[object AsyncFunction]"===s.state.toString.call(t)}catch(t){return!1}}function _(t){try{return"[object Generator]"===s.state.toString.call(t)}catch(t){return!1}}function x(t){return!w(t)&&!f(t=""+t)&&(!!A(+t)||!!u.bigint.test(t)&&e(BigInt(t.slice(0,-1))))}function F(t){var n;return!A(t=+t)&&s.error.enabled&&(null==(n=console)||null==n.error||n.error("\n            Bad data in the method name, good examples: \n            is.len_10\n            is.len_gt_10\n            is.len_lt_10\n            is.len_gt_8_lt_10\n            is.len_gte_10\n            is.len_gte_8_lt_10\n            is.len_gte_8_lte_10\n            is.len_lte_10\n            is.len_gt_8_lte_10\n        ")),t}function D(t,n,e){return"gt"===t?n>e:"gte"===t?n>=e:"lt"===t?n<e:"lte"===t&&n<=e}function S(t){return void 0===t&&(t=s.state.platform),!!a(t)&&u.windows.test(t)}function j(t){return void 0===t&&(t=s.state.userAgent),!!a(t)&&u.ipod.test(t)}function z(t){return void 0===t&&(t=s.state.userAgent),!!a(t)&&u.ipad.test(t)}function I(t){return void 0===t&&(t=s.state.userAgent),!!a(t)&&!z(t)&&u.iphone.test(t)}function $(t){return void 0===t&&(t=s.state.userAgent),!!a(t)&&S(t)&&u.phone.test(t)}function k(t){return void 0===t&&(t=s.state.userAgent),!!a(t)&&u.blackberry.test(t)}function P(t){return void 0===t&&(t=s.state.userAgent),!!a(t)&&u.androidPhone.test(t)}function T(t){return!!a(t)&&u.iso.any.test(t)}var B={firefox:function(t){return void 0===t&&(t=s.state.userAgent),!!a(t)&&u.firefox.test(t)},opera:function(t){return void 0===t&&(t=s.state.userAgent),!!a(t)&&u.opera.test(t)},ie:function(t){return void 0===t&&(t=s.state.userAgent),!!a(t)&&u.ie.test(t)},edge:function(t){return void 0===t&&(t=s.state.userAgent),!!a(t)&&u.edge.test(t)},safari:function(t){return void 0===t&&(t=s.state.userAgent),!!a(t)&&u.safari.test(t)},browser:function(t){return void 0===t&&(t=s.state.navigator),d(t)&&!f(t)},chrome:function(t,n){return void 0===t&&(t=s.state.userAgent),void 0===n&&(n=s.state.vendor),!(!a(t)||!a(n))&&u.chrome.test(t)&&u.googleInc.test(n)},ios:function(t){return I(t)||z(t)||j(t)},android:function(t){return void 0===t&&(t=s.state.userAgent),!!a(t)&&u.android.test(t)},windows:S,mac:function(t){return void 0===t&&(t=s.state.platform),!!a(t)&&u.mac.test(t)},phone:function(t){return void 0===t&&(t=s.state.screen.width),!!A(t)&&t<=s.definition.phone},ipod:j,iphone:I,ipad:z,windowsPhone:$,blackberry:k,androidPhone:P,mobile:function(){return I()||j()||P()||k()||$()},boolean:function(t){return"boolean"==typeof t},false:function(t){return!1===t},falsy:v,true:function(t){return!0===t},truthy:function(t){return!v(t)},odd:function(t){var n=!1;return A(t)?n=1==(t%=2)||-1===t:e(t)&&(t%=BigInt(2),n=BigInt(1)===t||BigInt(-1)===t),n},positive:function(t){return A(t)&&0<t},zero:function(t){return A(t)&&0===t},int:function(t){return A(t)&&Math.floor(t)===t},infinity:m,number:A,numeric:x,string:a,onlySpace:function(t){return!!(a(t)&&t.length>0)&&u.space.test(t)},space:function(t){return!!(a(t)&&t.length>0)&&u.anySpace.test(t)},pascalCase:function(t){return!!a(t)&&u.pascalCase.test(t)},upperCase:function(t){return!!a(t)&&!u.lowerCase.test(t)},kebabCase:function(t){return!!a(t)&&u.kebabCase.test(t)},macAddress:function(t){return!!a(t)&&u.macAddress.test(t)},camelCase:function(t){return!!a(t)&&u.camelCase.test(t)},word:function(t){return!!a(t)&&u.word.test(t)},snakeCase:function(t){return!!a(t)&&u.snakeCase.test(t)},ipv4:function(t){return!!a(t)&&u.ipv4.test(t)},ipv6:function(t){return!!a(t)&&u.ipv6.test(t)},char:function(t){return a(t)&&1===t.length},lowerCase:function(t){return!!a(t)&&!u.upperCase.test(t)},today:function(t){if(!T(t))return!1;var n=new Date;return new Date(t).toDateString()===n.toDateString()},tomorrow:function(t){if(!T(t))return!1;var n=new Date;return n.setDate(n.getDate()+1),new Date(t).toDateString()===n.toDateString()},yesterday:function(t){if(!T(t))return!1;var n=new Date,e=new Date(t);return e.setDate(e.getDate()+1),e.toDateString()===n.toDateString()},isoFuture:function(t){return T(t)&&Date.parse(t)>Date.now()},isoPast:function(t){return T(t)&&Date.parse(t)<Date.now()},iso:T,len:function(t,n){var e,r=null!=(e=null==t?void 0:t.length)?e:0;if(x(n[0]))return r===F(n[0]);for(var o=0;o<n.length;o++){if(!D(n[o],r,F(n[o+1])))return!1;if(o+2===n.length)return!0;o++}return!1},array:n,asyncFunction:C,bigInt:e,compare:i,same:i,empty:f,even:function(t){var n=!1;return A(t)?n=t%2==0:e(t)&&(n=t%BigInt(2)===BigInt(0)),n},function:function(t){try{return"[object Function]"===s.state.toString.call(t)||C(t)||_(t)}catch(t){return t instanceof TypeError&&"Cannot create proxy with a non-object as target or handler"===t.message}},generatorFunction:_,instanceof:function(t,n){return"classRef"in(null!=this?this:{})&&(n=this.classRef),n instanceof Function&&t instanceof n},negative:function(t){return A(t)&&0>t},null:function(t){return null===t},object:d,strictObject:function(t){return"[object Object]"===s.state.toString.call(t)},primitive:function(t){return null===t||!("object"==typeof t||"function"==typeof t)},promise:function(t){return!!(d(t)&&"then"in t&&"catch"in t)&&"function"==typeof t.then&&"function"==typeof t.catch},symbol:w,undefined:function(t){return void 0===t},object_not_empty:function(t){return d(t)&&!b(t)},object_empty:function(t){return h(t)},string_not_empty:function(t){return a(t)&&!l(t)},string_empty:function(t){return c(t)},array_not_empty:function(t){return n(t)&&!p(t)},array_empty:function(t){return g(t)}};t.IsConfig=s,t.is=B});
//# sourceMappingURL=index.umd.js.map
