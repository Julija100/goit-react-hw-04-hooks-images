import styled from "styled-components";
import { StyledBasicList } from "../../StyledCommon";

const StyledImageGallery = styled(StyledBasicList)`
  display: grid;
  max-width: calc(100vw - 48px);
  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
  grid-gap: 16px;
  margin-bottom: 0;
  margin-left: auto;
  margin-right: auto;
`;

export default StyledImageGallery;
