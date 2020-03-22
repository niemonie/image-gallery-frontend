import React from "react";
import { Icon as MdiIcon } from "@mdi/react";

interface IProps {
  path: string;
  size: string;
}

const Icon = ({ path, size }: IProps) => {
  return <MdiIcon path={path} size={size} />;
};

export { Icon };
