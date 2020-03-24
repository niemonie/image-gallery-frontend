import React, { ReactNode } from "react";
import { ConfigInterface } from "swr";
import { fetcherFn } from "swr/dist/types";

import { responseInterface, useSuspense } from "./useSuspense";
import { InternalErrorPage } from "../Pages";

import { QueryParams } from "types/QueryParams";

type ChildrenFn<Data> = (data: responseInterface<Data>) => ReactNode;

export interface IRemoteDataSourceProps<Data> {
  url: string;
  children: ReactNode | ChildrenFn<Data>;
  params?: QueryParams;
  config?: ConfigInterface<Data, Error>;
  fetcher?: fetcherFn<Data>;
  errorFallback?: (error: Error) => ReactNode;
}

function RemoteDataSource<Data>({
  url,
  params,
  children,
  config,
  fetcher,
  errorFallback = () => <InternalErrorPage />,
}: IRemoteDataSourceProps<Data>) {
  const data = useSuspense<Data>(url, params, config, fetcher);

  // todo:
  if (data.data && data.error) {
    return errorFallback(data.error);
  }

  if (typeof children === "function") {
    return children(data);
  }

  return children;
}

export { RemoteDataSource };
