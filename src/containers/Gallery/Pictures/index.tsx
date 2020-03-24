import React from "react";
import Masonry from "react-masonry-component";
import styled from "styled-components";

import { Image } from "../types/Image";

interface IProps {
  pictures: Image[];
}

const Pictures = ({ pictures }: IProps) => {
  const childElements = pictures.map((image, index) => {
    return (
      <div key={index}>
        <img src={image.url} alt={image.title} />
      </div>
    );
  });

  return <StyledMasonry>{childElements}</StyledMasonry>;
};

const StyledMasonry = styled(Masonry)`
  padding: 2rem;
`;

export { Pictures };
