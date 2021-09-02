import styled from "styled-components";
import { theme } from "../../StyledCommon";

const StyledSection = styled.section`
  width: 100%;
  margin-left: auto;
  margin-right: auto;
  padding: 20px 0;
  text-align: center;
  border-radius: 5px;
  color: ${() => theme.colors.primaryText};
  background-color: transparent;
`;

export default StyledSection;
