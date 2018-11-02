/**
 * Number
 */
Object.defineProperty(Number.prototype, 'toHex', {
  enumerable: false,
  configurable: false,
  writable: false,
  value: function (hex = 10) {
    return this['toString'](hex);
  }
});
