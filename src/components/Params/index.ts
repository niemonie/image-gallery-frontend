import { useCallback } from "react";
import useRouter from "use-react-router";

const useParams = () => {
  const { history } = useRouter();

  const getFirstValue = useCallback((paramName: string) => {
    const url = new URL(window.location.href);
    let params = new URLSearchParams(url.search);
    return params.get(paramName);
  }, []);

  const getAllValues = useCallback((paramName: string) => {
    const url = new URL(window.location.href);
    let params = new URLSearchParams(url.search);
    const allValues = params
      .getAll(paramName)
      .map((value) => value.split(","))
      .flat();

    return { params, allValues };
  }, []);

  const setParamValue = useCallback(
    (value: string, paramName: string) => {
      let { params, allValues } = getAllValues(paramName);

      if (params.has(paramName) && allValues.includes(value)) {
        return;
      }

      if (params.has(paramName) && !allValues.includes(value)) {
        params.set(paramName, value);
        history.push(`?${params.toString()}`);
        return;
      }

      params.append(paramName, value);
      history.push(`?${params.toString()}`);
    },
    [getAllValues, history]
  );

  const setDefaultParamsFromQueryParamsString = useCallback(
    (params: string) => {
      if (!window.location.search) {
        history.push(`?${params}`);
      }
    },
    [history]
  );
  const deleteParam = useCallback(
    (paramName: string) => {
      let { params } = getAllValues(paramName);

      params.delete(paramName);
      history.push(`?${params.toString()}`);
    },
    [getAllValues, history]
  );

  return {
    deleteParam,
    setParamValue,
    setDefaultParamsFromQueryParamsString,
    getFirstValue,
  };
};

export { useParams };
