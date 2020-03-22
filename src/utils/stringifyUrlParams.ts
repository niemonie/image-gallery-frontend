export const stringifyUrlParams = (obj: {}) => {
  return new URLSearchParams(obj).toString();
};
