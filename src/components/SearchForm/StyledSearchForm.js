import { theme } from "../../StyledCommon";
import styled from "styled-components";

export const StyledSearchForm = styled.form`
  display: flex;
  align-items: center;
  width: 100%;
  max-width: 600px;
  background-color: ${() => theme.colors.lightBg};
  border-radius: 3px;
  overflow: hidden;
`;

export const StyledSearchFormInput = styled.input`
  display: inline-block;
  width: 100%;
  height: 30px;
  font: inherit;
  font-size: 20px;
  border: none;
  border-top-left-radius: 5px;
  border-bottom-left-radius: 5px;
  outline: none;
  padding-left: 10px;
  padding-right: 10px;
  color: ${() => theme.colors.primaryDarkText};

  &::placeholder {
    font-family: inherit;
    font-size: 18px;
    color: ${() => theme.colors.secondaryBg};
  }
`;
