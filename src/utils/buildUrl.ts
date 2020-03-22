import { IQueryParams } from "types/IQueryParams";
import { stringifyUrlParams } from "./stringifyUrlParams";

export const buildUrl = (path: string, params?: IQueryParams) => {
  if (!params) {
    return path;
  }

  return `${path}?${stringifyUrlParams(params)}`;
};
