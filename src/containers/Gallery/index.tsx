import React, { useEffect } from "react";

import { DEFAULT_PARAMS } from "utils";
import { getRequestParams } from "utils";

import { RemoteData } from "components/RemoteData";
import { useParams } from "components/Params";

import { GallerySection } from "./GallerySection";
import { GallerySearchBox } from "./GallerySearchBox";

import { GalleryCollection } from "./types/GalleryCollection";

const Gallery = () => {
  const { setDefaultParamsFromQueryParamsString } = useParams();

  const params = getRequestParams(DEFAULT_PARAMS);

  useEffect(() => {
    setDefaultParamsFromQueryParamsString(params);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [params]);
  return (
    <>
      <GallerySearchBox />
      <RemoteData<GalleryCollection> url={`/images?${params}`}>
        {({ data }) => {
          return <GallerySection data={data} />;
        }}
      </RemoteData>
    </>
  );
};

export { Gallery };
