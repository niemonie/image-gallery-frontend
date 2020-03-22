import { httpService } from "./http-service";

export const createAjaxMethod = <Response, Body = unknown>(
  method: "GET" | "POST" | "PATCH" | "PUT" | "DELETE",
  url: string,
  body?: Body,
  headers?: Object
): Promise<Response> => {
  switch (method) {
    case "GET":
      return httpService.get<Response>(url, headers);
    case "POST":
      return httpService.post<Response>(url, body, headers);
    case "PATCH":
      return httpService.patch<Response>(url, body, headers);
    case "PUT":
      return httpService.put<Response>(url, body, headers);
    case "DELETE":
      return httpService.delete<Response>(url, headers);
    default:
      throw new Error(`Unsupported method: ${method}`);
  }
};
