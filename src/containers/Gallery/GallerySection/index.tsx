import React from "react";

import {
  Pagination,
  useCalculateTotalPageHandler,
  usePageChangeHandler,
} from "shared/Pagination";

import { useParams } from "components/Params";
import { Pictures } from "../Pictures";

import { GalleryCollection } from "../types/GalleryCollection";

interface IProps {
  data: GalleryCollection;
}

const GallerySection = ({ data }: IProps) => {
  const { getFirstValue } = useParams();

  const { changePage } = usePageChangeHandler();
  const { calculateTotalPage } = useCalculateTotalPageHandler(
    Number(getFirstValue("limit"))
  );
  return (
    <>
      <Pictures pictures={data.giphyCollection.images} />
      <Pictures pictures={data.imageCollection.images} />

      <Pagination
        activePage={Number(getFirstValue("page"))}
        totalPages={calculateTotalPage(
          data.giphyCollection.meta.total,
          data.imageCollection.meta.total
        )}
        onPageChange={changePage}
      />
    </>
  );
};

export { GallerySection };
