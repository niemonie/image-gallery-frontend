import React from "react";
import styled from "styled-components";

import { Grid } from "theme";

import { IChildrenProp } from "types/IChildrenProp";

interface IProps extends IChildrenProp {}

const Layout = ({ children }: IProps) => {
  return (
    <Grid>
      <Container>{children}</Container>
    </Grid>
  );
};

const Container = styled.div`
  grid-column: 1/13;
  padding: ${(props) => props.theme.global.padding.container};
`;

export { Layout };
