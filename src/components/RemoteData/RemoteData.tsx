import React from "react";
import ErrorBoundary from "react-error-boundary";

import {
  IRemoteDataSuspenseProps,
  RemoteDataSuspense,
} from "./RemoteDataSuspense";
import { InternalErrorPage } from "../Pages";

export interface IRemoteDataProps<Data>
  extends IRemoteDataSuspenseProps<Data> {}

function RemoteData<Data>({
  errorFallback = () => <InternalErrorPage />,
  ...restProps
}: IRemoteDataProps<Data>) {
  return (
    <ErrorBoundary
      FallbackComponent={({ error }) => {
        /* eslint-disable-next-line */
        return errorFallback(error!) as any;
      }}
    >
      <RemoteDataSuspense {...restProps} />
    </ErrorBoundary>
  );
}

export { RemoteData };
