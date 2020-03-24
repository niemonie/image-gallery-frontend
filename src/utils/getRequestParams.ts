import { stringifyUrlParams } from "./stringifyUrlParams";
import { QueryParams } from "../types/QueryParams";

export const getRequestParams = (defaultParams: QueryParams) => {
  if (window.location.search) {
    return window.location.search.substr(1);
  }

  return `${stringifyUrlParams(defaultParams)}`;
};
