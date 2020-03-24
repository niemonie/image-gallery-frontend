import React, { ChangeEvent, FormEvent, useState } from "react";
import styled from "styled-components";

import { SearchButton } from "components/Filters/SearchButton";
import { useParams } from "components/Params";
import { ResetButton } from "./ResetButton";

interface IProps {
  placeholderMessage: string;
}

const SearchBox = ({ placeholderMessage }: IProps) => {
  const { deleteParam, setParamValue } = useParams();
  const [isInputFocused, setIsInputFocused] = useState(false);

  const [searchInputValue, setSearchInputValue] = useState("");

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setParamValue(searchInputValue, "q");
    setParamValue("1", "page");
  };

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSearchInputValue(event.target.value);

    if (event.target.value === "") {
      deleteParam("q");
    }
  };

  const handleReset = () => {
    setSearchInputValue("");
    deleteParam("q");
  };

  return (
    <StyledForm onSubmit={handleSubmit}>
      <StyledInput
        placeholder={placeholderMessage}
        type="text"
        value={searchInputValue}
        onFocus={() => {
          setIsInputFocused(true);
        }}
        onBlur={() => {
          setIsInputFocused(false);
        }}
        onChange={handleChange}
      />
      <ResetButton onClick={handleReset} isVisible={isInputFocused} />
      <SearchButton />
    </StyledForm>
  );
};

export const StyledInput = styled.input`
  width: 100%;
  font-size: 1.9rem;
  border: none;
  outline: none;
  background-color: ${(props) => props.theme.global.colors.markedBackground};
  color: ${(props) => props.theme.global.colors.fontDark};
`;

const StyledForm = styled.form`
  display: flex;
  width: 100%;

  :hover {
    #reset-button {
      display: inline-block;
    }
  }
`;

export { SearchBox };
