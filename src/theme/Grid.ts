import styled from "styled-components";

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  grid-template-rows: auto;

  grid-gap: ${(props) => props.theme.global.padding.box};
`;

export { Grid };
