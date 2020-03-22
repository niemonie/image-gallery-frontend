import { Options } from "./Options";
import { UrlService } from "./UrlService";
import { AjaxError } from "./AjaxError";

export class HttpService {
  private static defaultOptions: Options = {
    responseType: "json",
  };
  private urlService = new UrlService();

  constructor(private readonly options: Options) {
    this.options = { ...HttpService.defaultOptions, ...this.options };
  }

  public get<R = unknown>(url: string, options?: Options): Promise<R> {
    return this.buildHttpMethod<R>(url, options, (opt) => ({
      method: "get",
      headers: opt.headers,
      signal: opt.signal,
    }));
  }

  public delete<R = unknown>(url: string, options?: Options): Promise<R> {
    return this.buildHttpMethod<R>(url, options, (opt) => ({
      headers: opt.headers,
      method: "delete",
      signal: opt.signal,
    }));
  }

  public post<R = unknown, B = unknown>(
    url: string,
    body: B,
    options?: Options
  ) {
    return this.buildHttpMethod<R>(url, options, (opt) => ({
      headers: opt.headers,
      method: "post",
      body: JSON.stringify(body),
      signal: opt.signal,
    }));
  }

  public put<R = unknown, B = unknown>(
    url: string,
    body: B,
    options?: Options
  ) {
    return this.buildHttpMethod<R>(url, options, (opt) => ({
      headers: opt.headers,
      method: "put",
      body: JSON.stringify(body),
      signal: opt.signal,
    }));
  }

  public patch<R = unknown, B = unknown>(
    url: string,
    body: B,
    options?: Options
  ) {
    return this.buildHttpMethod<R>(url, options, (opt) => ({
      headers: opt.headers,
      method: "patch",
      body: JSON.stringify(body),
      signal: opt.signal,
    }));
  }

  private buildHttpMethod<R>(
    url: string,
    options: Options = {},
    mapOptionsToFetchOpt: (options: Options) => RequestInit
  ): Promise<R> {
    const allOptions = { ...this.options, ...options };
    // secure correct endpoint
    let endpoint: string = this.urlService.parse(allOptions.host, url);

    return fetch(endpoint, mapOptionsToFetchOpt(allOptions)).then(
      (response) => {
        const mappedResponse = response[allOptions.responseType || "json"]();

        if (!response.ok) {
          // eslint-disable-next-line no-throw-literal
          throw {
            status: response.status,
            message: response.statusText,
            name: "Ajax Error",
            response: mappedResponse,
          } as AjaxError;
        }

        return mappedResponse;
      }
    );
  }
}
