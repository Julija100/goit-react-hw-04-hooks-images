import styled from "styled-components";
import { theme, StyledBasicButton } from "../../StyledCommon";

export const StyledButton = styled(StyledBasicButton)`
  display: inline-block;
  min-width: 180px;
  margin-top: 20px;
  padding: 8px 16px;
  font-size: 18px;
  font-style: normal;
  font-weight: ${() => theme.fontWeight.medium};
  text-align: center;
  border-radius: 5px;
  color: ${() => theme.colors.secondaryLightText};
  background-color: ${() => theme.colors.primaryBg};
  background-image: ${() => theme.colors.primaryBgGradient};
  box-shadow: 0px 3px 1px -2px rgba(0, 0, 0, 0.2),
    0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12);
  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover,
  &:focus {
    background-image: none;
    color: ${() => theme.colors.primaryLightText};
    background-color: ${() => theme.colors.secondaryBg};
  }
`;

export const StyledSearchFormButtonLabel = styled.span`
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  clip-path: inset(50%);
  border: 0;
`;
