import React from "react";
import { BrowserRouter as Router } from "react-router-dom";

import { IChildrenProp } from "./types/IChildrenProp";

interface IProps extends IChildrenProp {}

const Providers = ({ children }: IProps) => {
  return <Router>{children}</Router>;
};

export default Providers;
