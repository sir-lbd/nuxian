import {HttpProtocolOptions, HttpProtocolsManager} from './_protocols';

export interface HttpServerOptions {
  name?: string;
  url?: {
    formal?: string;
    test?: string;
  };
  debug?: boolean;
  protocols?: HttpProtocolOptions[];
  _protocolsManager?: HttpProtocolsManager;
}

export class HttpServersManager {
  constructor(protected servers: HttpServerOptions[] = []) {
    this.preProcessing();
  }

  preProcessing() {
    const servers = this.servers;
    this.servers = [];
    servers.forEach(s => this.add(s));
  }

  add(server: HttpServerOptions) {
    if (!server.url) throw new Error('be sure to specify the server urls!');

    // remove URL redundancy
    server.url.formal && (server.url.formal = removeURLRedundancy(server.url.formal));
    server.url.test && (server.url.test = removeURLRedundancy(server.url.test));
    server._protocolsManager = new HttpProtocolsManager(server.protocols);
    this.servers.push(server);
  }

  reset(servers: HttpServerOptions[]) {
    this.servers = servers;
    this.preProcessing();
  }

  getProtocol(name: string) {
    for (const s of this.servers) {
      const p = s._protocolsManager.get(name);
      if (p) {
        const url = s.debug ? s.url.test : s.url.formal;
        // remove endpoint redundancy
        const endpoint = removeEndpointRedundancy(p.endpoint);
        p._composedURL = [url, endpoint].join('/');
        return p;
      }
    }
  }
}

function removeURLRedundancy(url: string) {
  url.endsWith('/') && (url = url.substring(0, url.length - 1));
  return url;
}

function removeEndpointRedundancy(url: string) {
  url.startsWith('/') && (url = url.substring(1, url.length));
  return url;
}
