import React from "react";
import { BrowserRouter as Router } from "react-router-dom";

import { ChildrenProp } from "./types/ChildrenProp";

interface IProps extends ChildrenProp {}

const Providers = ({ children }: IProps) => {
  return <Router>{children}</Router>;
};

export default Providers;
