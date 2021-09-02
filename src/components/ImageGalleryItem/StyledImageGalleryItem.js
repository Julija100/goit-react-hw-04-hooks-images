import styled from "styled-components";
import { theme } from "../../StyledCommon";

export const StyledImageGalleryItem = styled.li`
  border-radius: 5px;
  overflow: hidden;
  box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.2),
    0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 2px 1px -1px rgba(0, 0, 0, 0.12);

  @media screen and ${() => theme.media.phone} {
    width: 280px;
  }
`;

export const StyledImageGalleryItemImage = styled.img`
  height: 260px;
  object-fit: cover;
  transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);

  @media screen and ${() => theme.media.phone} {
    width: 100%;
  }

  &:hover,
  &:focus {
    transform: scale(1.03);
    cursor: zoom-in;
  }
`;
