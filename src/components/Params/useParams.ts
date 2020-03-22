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

  const setParam = useCallback(
    (value: string, paramName: string) => {
      let { params, allValues } = getAllValues(paramName);

      if (params.has(paramName) && allValues.includes(value)) {
        return;
      }

      if (params.has(paramName) && !allValues.includes(value)) {
        allValues.push(value);
        const parsedParams = allValues.join(",");
        params.set(paramName, parsedParams);
        history.push(`?${params.toString()}`);
        return;
      }

      params.append(paramName, value);
      history.push(`?${params.toString()}`);
    },
    [getAllValues, history]
  );

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

  const hasParamValue = useCallback((value: string, paramName: string) => {
    const url = new URL(window.location.href);
    let params = new URLSearchParams(url.search);

    if (params.getAll(paramName)[0]) {
      return params.getAll(paramName)[0].toString().includes(value);
    }
    return false;
  }, []);

  const hasParam = useCallback(
    (paramName: string) => {
      let { params } = getAllValues(paramName);

      return params.has(paramName);
    },
    [getAllValues]
  );

  const deleteParam = useCallback(
    (paramName: string) => {
      let { params } = getAllValues(paramName);

      params.delete(paramName);
      history.push(`?${params.toString()}`);
    },
    [getAllValues, history]
  );
  const hasAnyParam = useCallback((paramNames: string[]) => {
    const url = new URL(window.location.href);
    let params = new URLSearchParams(url.search);
    const filteredParams = paramNames.map((paramName) => params.has(paramName));
    const hasParam = filteredParams.find((param) => param);

    if (hasParam === undefined) {
      return false;
    }
    return hasParam;
  }, []);

  const deleteSelectedParams = useCallback(
    (paramNames: string[]) => {
      const url = new URL(window.location.href);
      let params = new URLSearchParams(url.search);

      paramNames.map((paramName) => params.delete(paramName));

      history.push(`?${params.toString()}`);
    },
    [history]
  );

  return {
    setParam,
    setParamValue,
    setDefaultParamsFromQueryParamsString,
    hasParamValue,
    hasParam,
    hasAnyParam,
    getAllValues,
    getFirstValue,
    deleteParam,
    deleteSelectedParams,
  };
};

export { useParams };
