import {Injectable} from '@angular/core';
import {HttpServersManager} from './_servers';
import {HttpRequestOptioner, HttpRequestOptions} from './_request';
import {HTTP_BODY_METHODS} from './_defines';
import {HttpClient} from '@angular/common/http';
import {isBlankObject} from '../utils/_is';

@Injectable()
export class Http {
  protected static _manager = new HttpServersManager();
  protected static _requestOptioner = new HttpRequestOptioner();
  protected _self = Http;

  // global protocols manager
  get manager() {
    return this._self._manager;
  }

  get requestOptioner() {
    return this._self._requestOptioner;
  }

  // net status
  get status() {
    return window.navigator.onLine;
  }

  constructor(protected _http: HttpClient) {
  }

  call<T = any>(protocolName: string, data?: any, options: HttpRequestOptions = {}) {
    return new Promise<T>((resolve, reject) => {
      // check net status
      if (!this.status) return reject('The network is disconnected.');

      const protocol = this.manager.getProtcol(protocolName) || {
        method: options.method || 'get',
        _composedURL: protocolName,
      };

      // parse request type
      if (isBlankObject(data) && options.requestType === 'form') {
        data = jsonToFormData(data);
      }

      // injection ${} value
      if (protocol._composedURL.includes('$')) {
        protocol._composedURL = protocol._composedURL['el'](data);
      }

      const isBody = HTTP_BODY_METHODS['includes'](protocol.method);
      options[isBody ? 'body' : 'params'] = data;

      // call http interface
      const observer = this._http.request(protocol.method, protocol._composedURL, this.requestOptioner.$extend(options));
      if (options.returnObserver) {
        resolve(observer as any);
      } else {
        observer.subscribe(resolve, reject);
      }
    });
  }
}

function jsonToFormData(json) {
  const form = new FormData();
  Object.keys(json).forEach(key => typeof json[key] !== 'function' && form.append(key, json[key]));
  return form;
}

