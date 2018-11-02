import {_hasOwnProperty} from './_object';
import {isArray, isArrayLike, isBlankObject, isFunction} from './_is';

export function forEach(obj, iterator: (item, index, obj) => any, context) {
  let key;
  let length;
  if (obj) {
    if (isFunction(obj)) {
      for (key in obj) {
        if (key !== 'prototype' && key !== 'length' && key !== 'name' && obj.hasOwnProperty(key)) {
          iterator.call(context, obj[key], key, obj);
        }
      }
    } else if (isArray(obj) || isArrayLike(obj)) {
      const isPrimitive = typeof obj !== 'object';
      for (key = 0, length = obj.length; key < length; key++) {
        if (isPrimitive || key in obj) {
          iterator.call(context, obj[key], key, obj);
        }
      }
    } else if (obj.forEach && obj.forEach !== forEach) {
      obj.forEach(iterator, context, obj);
    } else if (isBlankObject(obj)) {
      // createMap() fast path --- Safe to avoid hasOwnProperty check because prototype chain is empty
      for (key in obj) {
        iterator.call(context, obj[key], key, obj);
      }
    } else if (typeof obj.hasOwnProperty === 'function') {
      // Slow path for objects inheriting Object.prototype, hasOwnProperty check needed
      for (key in obj) {
        if (obj.hasOwnProperty(key)) {
          iterator.call(context, obj[key], key, obj);
        }
      }
    } else {
      // Slow path for objects which do not have a method `hasOwnProperty`
      for (key in obj) {
        if (_hasOwnProperty.call(obj, key)) {
          iterator.call(context, obj[key], key, obj);
        }
      }
    }
  }
  return obj;
}

const keys = [];
while (keys.length < 10) keys.push(keys.length);
while (keys.length < 91 - 65 + 10) keys.push(String.fromCharCode(keys.length - 10 + 65));

export function generateHashKey(length = 8, radix = 16) {
  const key = [];
  while (key.length < length) {
    const index = Math.floor(Math.random() * radix);
    key.push(keys[index]);
  }
  return key.join('');
}

export function toRGB(hex: string) {
  const HEXs = hex.replace('#', '').split('');
  const pair = HEXs.length / 3;
  const RGBs = [];
  let index = -1;
  HEXs.forEach((h, i) => {
    if (i % pair === 0) {
      index++;
    }
    if (!RGBs[index]) {
      RGBs[index] = '';
    }
    RGBs[index] += (pair === 1 ? h + h : h);
  });
  RGBs.forEach((h, i) => {
    RGBs[i] = parseInt(h, 16);
  });
  return RGBs;
}

Object.defineProperty(Object, 'forEach', {
  enumerable: false,
  configurable: false,
  writable: false,
  value: forEach
});


export function serializationTime(time = new Date()) {
  return [
    time.getFullYear(),
    time.getMonth() + 1,
    time.getDate(),
    time.getHours(),
    time.getMinutes(),
    time.getSeconds(),
  ].map(t => t < 10 ? '0' + t : t).join('');
}
