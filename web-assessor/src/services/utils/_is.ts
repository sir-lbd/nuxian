import {_getPrototypeOf, _toString} from './_object';

export function isNAN(num) {
  return Number.isNaN ? Number.isNaN(num) : num !== num;
}

export function isBlankObject(value) {
  return value !== null && typeof value === 'object' && !_getPrototypeOf(value);
}

export function isUndefined(value) {
  return typeof value === 'undefined';
}

export function isDefined(value) {
  return typeof value !== 'undefined' && value !== null;
}

export function isObject(value) {
  return value !== null && (typeof value === 'object' || _toString.call(value).includes('object'));
}

export function isBoolean(value) {
  return typeof value === 'boolean';
}

export function isString(value) {
  return typeof value === 'string';
}

export function isNumber(value) {
  return typeof value === 'number';
}

export function isDate(value) {
  return _toString.call(value) === '[object Date]';
}

export function isArray(arr) {
  return Array.isArray(arr) || arr instanceof Array;
}

export function isArrayLike(obj) {
  // `null`, `undefined` and `window` are not array-like
  if (obj == null || isWindow(obj)) return false;

  // Support: iOS 8.2 (not reproducible in simulator)
  // "length" in obj used to prevent JIT error (gh-11508)
  const length = 'length' in Object(obj) && obj.length;

  // NodeList objects (with `item` method) and
  // other objects with suitable length characteristics are array-like
  return isNumber(length) && (length >= 0 && (length - 1) in obj || typeof obj.item === 'function');
}

export function isFunction(value) {
  return typeof value === 'function';
}

export function isRegExp(value) {
  return _toString.call(value) === '[object RegExp]';
}

export function isError(value) {
  const tag = _toString.call(value);
  switch (tag) {
    case '[object Error]':
      return true;
    case '[object Exception]':
      return true;
    case '[object DOMException]':
      return true;
    default:
      return value instanceof Error;
  }
}

export function isWindow(obj) {
  return obj && obj.window === obj;
}

export function isFile(obj) {
  return _toString.call(obj) === '[object File]';
}

export function isFormData(obj) {
  return _toString.call(obj) === '[object FormData]';
}

export function isBlob(obj) {
  return _toString.call(obj) === '[object Blob]';
}

export function isPromiseLike(obj) {
  return obj && isFunction(obj.then);
}

export function isArrayBuffer(obj) {
  return _toString.call(obj) === '[object ArrayBuffer]';
}

export function isElement(node) {
  return node instanceof HTMLElement;
}
