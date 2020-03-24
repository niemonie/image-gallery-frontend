import { QueryParams } from "types/QueryParams";
import { stringifyUrlParams } from "./stringifyUrlParams";

export const buildUrl = (path: string, params?: QueryParams) => {
  if (!params) {
    return path;
  }

  return `${path}?${stringifyUrlParams(params)}`;
};
