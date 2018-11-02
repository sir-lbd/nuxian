export const _hasOwnProperty = Object.prototype.hasOwnProperty;
export const _getPrototypeOf = Object.prototype.isPrototypeOf;
export const _toString = Object.prototype.toString;

/**
 * Object
 */
Object.defineProperty(Object.prototype, 'toText', {
  enumerable: false,
  configurable: false,
  writable: false,
  value: function () {
    return JSON.stringify(this);
  }
});

Object.defineProperty(Object, 'stringify', {
  enumerable: false,
  configurable: false,
  writable: false,
  value: function (obj) {
    switch (typeof obj) {
      case 'object':
        return obj = JSON.stringify(obj);
      case 'string':
        return obj;
      default:
        return obj ? obj.toString() : '';
    }
  }
});
