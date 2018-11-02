import {HttpMethod, HttpRequestType, HttpResponseType} from './_defines';
import {HttpJSON} from './_json';
import {isUndefined} from '../utils/_is';

export interface HttpRequestOptions {
  body?: any;
  method?: HttpMethod;
  headers?: HttpJSON;
  params?: HttpJSON;
  reportProgress?: boolean;
  responseType?: HttpResponseType;
  requestType?: HttpRequestType;
  withCredentials?: boolean;
  returnObserver?: boolean;
}

export class HttpRequestOptioner implements HttpRequestOptions {
  body?: any = undefined;
  method: HttpMethod = 'get';
  headers?: HttpJSON = undefined;
  params?: HttpJSON = undefined;
  reportProgress?: boolean = undefined;
  responseType: HttpResponseType = 'json';
  requestType?: HttpRequestType = undefined;
  withCredentials = true;

  constructor(options?: HttpRequestOptions) {
    options && this.$keys(options).forEach(key => {
      if (key.includes('headers') || key.includes('params')) {
        this[key] = options[key] instanceof HttpJSON ? options[key] : new HttpJSON(options[key]);
      } else {
        this[key] = options[key];
      }
    });
  }

  $keys(obj: Object) {
    return Object.keys(obj).filter(key => typeof obj[key] !== 'function');
  }

  $extend(request: HttpRequestOptions, isMergeToSelf = false) {
    const replica = isMergeToSelf ? this : this.$copy();
    this.$keys(replica).forEach(key => {
      if (this[key] instanceof HttpJSON) {
        replica[key] = replica[key].$extend(request[key]);
      } else {
        isUndefined(request[key]) || (replica[key] = request[key]);
      }
    });
    return replica;
  }

  $copy() {
    const replica = new HttpRequestOptioner();
    this.$keys(this).forEach(key => {
      if (this[key] instanceof HttpJSON) {
        replica[key] = this[key].$copy();
      } else {
        replica[key] = this[key];
      }
    });
    return replica;
  }
}
