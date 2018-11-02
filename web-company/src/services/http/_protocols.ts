import {HttpMethod} from './_defines';

export interface HttpProtocolOptions {
  name?: string;
  method?: HttpMethod;
  endpoint?: string;
  _composedURL?: string;
}

export class HttpProtocolsManager {
  constructor(protected protocols: HttpProtocolOptions[] = []) {
  }

  get(name: string) {
    return this.protocols.filter(p => p.name === name)[0];
  }
}
