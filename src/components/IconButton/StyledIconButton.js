import styled from "styled-components";
import { theme, StyledBasicButton } from "../../StyledCommon";

export const StyledIconButton = styled(StyledBasicButton)`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 30px;
  padding: 5px 10px 5px 10px;
  background-color: ${() => theme.colors.lightBg};
  color: ${() => theme.colors.secondaryDarkText};

  & > svg {
    width: 20px;
    height: 20px;
  }

  &:hover,
  &:focus {
    color: ${() => theme.colors.primaryLightText};
    background-color: ${() => theme.colors.secondaryBg};
  }
`;
