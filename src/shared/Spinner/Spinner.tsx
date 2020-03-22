import React from "react";

import { SpinnerLg } from "./SpinnerLg";
import { SpinnerMd } from "./SpinnerMd";
import { SpinnerSm } from "./SpinnerSm";

interface IProps {
  size?: "sm" | "md" | "lg";
}

const Spinner = ({ size = "md" }: IProps) => {
  switch (size) {
    case "sm":
      return <SpinnerSm />;
    case "md":
      return <SpinnerMd />;
    case "lg":
      return <SpinnerLg />;
    default:
      return <SpinnerMd />;
  }
};

export { Spinner };
