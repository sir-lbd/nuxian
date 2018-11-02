/**
 * String
 */
Object.defineProperty(String.prototype, 'toJson', {
  enumerable: false,
  configurable: false,
  writable: false,
  value: function () {
    return JSON.parse(this.toString());
  }
});

Object.defineProperty(String.prototype, 'toInt', {
  enumerable: false,
  configurable: false,
  writable: false,
  value: function (radix = 10) {
    return parseInt(this.toString(), radix);
  }
});

Object.defineProperty(String.prototype, 'toFloat', {
  enumerable: false,
  configurable: false,
  writable: false,
  value: function () {
    return parseFloat(this.toString());
  }
});

Object.defineProperty(String.prototype, 'mosaics', {
  enumerable: false,
  configurable: false,
  writable: false,
  value: function (start?: number, end?: number) {
    const text = this.toString();
    start = start || 1;
    end = end || 0;
    if ((end >= 0 && end < start) || end > text.length) end = text.length;
    if (end < 0) end = text.length + end;

    const pair = [];
    pair[0] = text.substring(0, start);
    pair[2] = text.substring(end, text.length);
    pair[1] = text.length - pair.join('').length;
    pair[1] = new Array(pair[1]).fill('*').join('');

    return pair.join('');
  },
});

Object.defineProperty(String.prototype, 'replaceAll', {
  enumerable: false,
  configurable: false,
  writable: false,
  value: function (target: string, value: string) {
    const reg = new RegExp(target, 'g');
    return this.toString().replace(reg, Object['stringify'](value));
  }
});

Object.defineProperty(String.prototype, 'el', {
  enumerable: false,
  configurable: false,
  writable: false,
  value: function (data: any) {
    let text = this.toString();
    Object.keys(data).forEach(key => {
      text = text.replaceAll('\\${' + key + '}', data[key]);
    });
    return text;
  }
});

function fill_0(num: number) {
  return num < 10 ? '0' + num : num.toString();
}

export function dateToString(date: Date) {
  return [
    [date.getFullYear(), fill_0(date.getMonth() + 1), fill_0(date.getDate())].join('-'),
    [fill_0(date.getHours()), fill_0(date.getMinutes()), fill_0(date.getSeconds())].join(':'),
  ].join('T');
}
