import { useCallback } from "react";

export const useCalculateTotalPageHandler = (limit: number) => {
  const calculateTotalPage = useCallback(
    (totalGiphies: number, totalImages: number) =>
      Math.ceil(Math.max(totalGiphies, totalImages) / limit),
    [limit]
  );

  return { calculateTotalPage };
};
