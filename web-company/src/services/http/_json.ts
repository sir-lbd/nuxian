export class HttpJSON {
  [key: string]: string[] | any;

  constructor(obj?: { [key: string]: string[] }) {
    obj && this.$keys(obj).forEach(key => this.$set(key, obj[key].join(';')));
  }

  $keys?(obj: Object = this) {
    return Object.keys(obj).filter(key => typeof this[key] !== 'function');
  }

  $set?(key: string, ...values: string[]) {
    const newValues = [];
    values.forEach(val => val.split(';').forEach(item => newValues.push(item)));
    this[key] = newValues;
  }

  $get?(key: string) {
    return this[key];
  }

  $remove?(key: string) {
    delete this[key];
  }

  $clear?() {
    this.$keys().forEach(key => {
      delete this[key];
    });
  }

  $append?(key: string, ...values: string[]) {
    const newValues = [];
    values.forEach(val => val.split(';').forEach(item => newValues.push(item)));
    const oldValues = this.$get(key);
    if (oldValues) {
      // merge values
      this.$set(key, ...(oldValues.concat(...newValues.filter(val => !oldValues.includes(val)))));
    } else {
      this.$set(key, ...newValues);
    }
  }

  $extend?(json: { [key: string]: any } | HttpJSON, isMergeToSelf = false) {
    const replica = isMergeToSelf ? this : this.$copy();
    this.$keys(json).forEach(key => replica[key] = json[key]);
    return replica;
  }

  $copy?() {
    const replica = new HttpJSON();
    this.$keys().forEach(key => replica.$set(key, this[key].join(';')));
    return replica;
  }
}
