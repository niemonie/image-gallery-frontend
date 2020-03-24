import { useCallback } from "react";

import { useParams } from "components/Params";

export const usePageChangeHandler = () => {
  const { setParamValue } = useParams();

  const changePage = useCallback(
    (page: number) => {
      setParamValue(`${page}`, "page");
    },
    [setParamValue]
  );

  return { changePage };
};
