import React, { ReactNode, Suspense } from "react";

import { IRemoteDataSourceProps, RemoteDataSource } from "./RemoteDataSource";
import { SpinnerMd } from "shared/Spinner/SpinnerMd";

export interface IRemoteDataSuspenseProps<Data>
  extends IRemoteDataSourceProps<Data> {
  fallback?: ReactNode;
}

function RemoteDataSuspense<Data>({
  fallback = <SpinnerMd data-testid="remote-data-suspense-fallback" />,
  ...restProps
}: IRemoteDataSuspenseProps<Data>) {
  return (
    <Suspense fallback={fallback}>
      <RemoteDataSource {...restProps} />
    </Suspense>
  );
}

export { RemoteDataSuspense };
