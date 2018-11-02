export type HttpMethod = 'get' | 'head' | 'post' | 'put' | 'delete' | 'connect' | 'options' | 'trace' | 'patch';
export type HttpResponseType = 'arraybuffer' | 'blob' | 'json' | 'text';
// at present, it only supports conversion of json into FormData.
export type HttpRequestType = 'form';

export const HTTP_BODY_METHODS = ['delete', 'post', 'put', 'patch'];
export const HTTP_PARAMS_METHODS = ['connect', 'get', 'head', 'options', 'trace'];
