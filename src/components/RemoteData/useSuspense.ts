import useSWR, { ConfigInterface } from "swr";
import { fetcherFn } from "swr/dist/types";

import { buildUrl } from "utils/buildUrl";
import { httpService } from "utils/ajax/http-service";

import { IQueryParams } from "types/IQueryParams";

export type responseInterface<Data> = {
  data: Data;
  error?: Error;
  revalidate: () => Promise<boolean>;
  isValidating: boolean;
};

export const useSuspense = <Data>(
  url: string,
  params?: IQueryParams,
  config?: ConfigInterface<Data>,
  fetcher: fetcherFn<Data> = (url) => httpService.get<Data>(url)
) => {
  return useSWR(buildUrl(url, params), fetcher, {
    ...config,
    suspense: true,
  }) as responseInterface<Data>;
};
